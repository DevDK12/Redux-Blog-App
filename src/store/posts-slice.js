import {createSlice,  createAsyncThunk, createSelector, createEntityAdapter} from '@reduxjs/toolkit';

import client from '../api/client';




// {
//     "id": String,
//     "title": String,,
//     "content": String,,
//     "author": String,
//     "date": String,
//     "reactions": {
//         "like": Number,
//         "love": Number,
//         "smile": Number,
//         "idea" :  Number,
//         "think": Number,
//     }
// }




const postsAdapter = createEntityAdapter({
    sortComparer : (a, b) => new Date(b.date) - new Date(a.date),
})








const initialState = postsAdapter.getInitialState({
    status: 'idle',  //_ idle, pending, succeeded, failed
    error: null
})



export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {

    const response = await client.get('http://localhost:3000/posts');

    return response.data

});





export const addNewPost = createAsyncThunk('posts/addNewPost', async (post) => {

    //_ It receives 'id' && 'date' already in post object
    //* Usually server generates id && date and returns it in response

    const response = await client.post('http://localhost:3000/posts', post);

    return response.data;
})




const postSlice = createSlice({

    name: 'posts',
    initialState,
    reducers: { 
        updatePost(state, action) {
            const {id , title, content} = action.payload;
            // const post = state.items.find(post => post.id === id);
            const post = state.entities[id];
            if(post){
                post.title = title;
                post.content = content;
            }
        },
        addReactions(state, action) {
            const {reaction, id} = action.payload;
            // const post = state.items.find(post => post.id === id);
            const post = state.entities[id];
            if(post){
                post.reactions[reaction]++;
            }
        }
    },

    extraReducers: builder => builder
        .addCase(fetchPosts.pending, (state) => {
            state.status = 'pending';
        })
        .addCase(fetchPosts.fulfilled, (state, action) => {
            state.status = 'succeeded';

            // state.items = action.payload;
            postsAdapter.upsertMany(state, action.payload);
        })
        .addCase(fetchPosts.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
        })

        .addCase(addNewPost.fulfilled, postsAdapter.addOne)

    }
);





export const { updatePost , addReactions}  = postSlice.actions;


export default postSlice.reducer;


// export const selectAllPosts = state => state.posts.items;
// export const selectPostById = (state, postId) => state.posts.items.find(post => post.id === postId)
export const {
    selectAll: selectAllPosts,
    selectById: selectPostById,
    selectIds: selectPostIds
} = postsAdapter.getSelectors(state => state.posts);

export const selectPostsStatus = (state) => state.posts.status;
export const selectPostsError = (state) => state.posts.error;


export const selectPostsByUser = createSelector(
    [selectAllPosts, (state, userId) => userId],
    (posts, userId) => posts.filter(post => post.author === userId)
)