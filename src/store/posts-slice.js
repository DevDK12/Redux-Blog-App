import {createSlice,  createAsyncThunk} from '@reduxjs/toolkit';

import client from '../api/client';




const initialState = {
    items: [],
    status: 'idle',  //_ idle, pending, succeeded, failed
    error: null
}



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
        // addPost : {
        //     reducer(state, action) {
        //         state.items.push(action.payload);
        //     },
        //     prepare({title, content, author}) {
        //         return {
        //             payload: {
        //                 id: nanoid(),
        //                 date: new Date().toISOString(),
        //                 title,
        //                 content,
        //                 author,
        //             }
        //         }
        //     }
        // },
        updatePost(state, action) {
            const {id , title, content} = action.payload;
            const post = state.items.find(post => post.id === id);
            if(post){
                post.title = title;
                post.content = content;
            }
        },
        addReactions(state, action) {
            const {reaction, id} = action.payload;
            const post = state.items.find(post => post.id === id);
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
            state.items = action.payload;
        })
        .addCase(fetchPosts.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
        })
        .addCase(addNewPost.fulfilled, (state, action) => {
            state.items.push(action.payload);
        })

    }
);





// export const {addPost, updatePost , addReactions}  = postSlice.actions;
export const { updatePost , addReactions}  = postSlice.actions;


export default postSlice.reducer;


export const selectAllPosts = state => state.posts.items;

export const selectPostById = (state, postId) => state.posts.items.find(post => post.id === postId)

export const selectPostsStatus = (state) => state.posts.status;

export const selectPostsError = (state) => state.posts.error;

