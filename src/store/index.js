import {configureStore } from '@reduxjs/toolkit';


import postReducer from './posts-slice.js';

const store = configureStore({

    reducer : {
        posts : postReducer,
    }
});







export default store;