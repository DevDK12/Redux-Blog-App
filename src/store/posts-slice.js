import {createSlice} from '@reduxjs/toolkit';


const initialState = [
    {
        "id": "1",
        "title": "redux toolkit",
        "content": "Hello from react redux toolkit",
        "author": "dev",
        "reactions": [
                {"like": 1,},
                {"love": 0,},
                {"smile": 0,},
                {"idea" : 0,},
                {"think": 4},
        ]
    },

]










const postSlice = createSlice({

    name: 'posts',
    initialState,
    reducers: { 
        addPost(state, action) {
            state.push(action.payload);
        },
    }
});





export const {addPost}  = postSlice.actions;


export default postSlice.reducer;
