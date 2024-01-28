import {createSlice, nanoid} from '@reduxjs/toolkit';


const initialState = [
    {
        "id": "1",
        "title": "redux toolkit",
        "content": "Delving into the intricacies of Redux Toolkit, we find ourselves immersed in a world of streamlined state management, where the complexities of Redux are distilled into a set of user-friendly functions. This powerful library not only simplifies the process of writing Redux logic, but also promotes clean, maintainable code, and robust application architecture. By leveraging Redux Toolkit, we can efficiently handle the state of our application, leading to an enhanced development experience and a more reliable, performant end product.",
        "author": "1",
        "reactions": [
            {"like": 1,},
            {"love": 0,},
            {"smile": 0,},
            {"idea" : 0,},
            {"think": 4},
        ]
    },
    {
        "id": "2",
        "title": "react hooks",
        "content": "React Hooks revolutionized the way we write React components. With hooks like useState, useEffect, and useContext, we can now manage state, perform side effects, and access context in a more concise and intuitive way. Hooks allow us to write functional components that are easier to read, test, and maintain. By embracing the power of hooks, we can build scalable and reusable UI components in React.",
        "author": "1",
        "reactions": [
            {"like": 2,},
            {"love": 1,},
            {"smile": 0,},
            {"idea" : 0,},
            {"think": 3},
        ]
    },
    {
        "id": "3",
        "title": "async/await",
        "content": "Async/await is a powerful feature in JavaScript that allows us to write asynchronous code in a more synchronous manner. By using the async keyword, we can define functions that return Promises, and the await keyword allows us to pause the execution of a function until a Promise is resolved or rejected. This makes asynchronous code easier to read and write, especially when dealing with multiple asynchronous operations. With async/await, we can handle asynchronous tasks with less callback nesting and more readable code.",
        "author": "3",
        "reactions": [
            {"like": 0,},
            {"love": 0,},
            {"smile": 1,},
            {"idea" : 1,},
            {"think": 2},
        ]
    }

]










const postSlice = createSlice({

    name: 'posts',
    initialState,
    reducers: { 
        addPost : {
            reducer(state, action) {
                state.push(action.payload);
            },
            prepare({title, content, author}) {
                return {
                    payload: {
                        id: nanoid(),
                        title,
                        content,
                        author,
                    }
                }
            }
        },
        updatePost(state, action) {
            const {id , title, content} = action.payload;
            const post = state.find(post => post.id === id);
            if(post){
                post.title = title;
                post.content = content;
            }
        }
    }
});





export const {addPost, updatePost}  = postSlice.actions;


export default postSlice.reducer;
