import {configureStore } from '@reduxjs/toolkit';


import postReducer from './posts-slice.js';
import usersReducer from './users-slice.js'



const store = configureStore({

    reducer : {
        posts : postReducer,
        users : usersReducer
    }
});







export default store;