import {configureStore } from '@reduxjs/toolkit';


import postReducer from './posts-slice.js';
import usersReducer from './users-slice.js'
import notificationReducer from './notification-slice.js';



const store = configureStore({

    reducer : {
        posts : postReducer,
        users : usersReducer,
        notifications: notificationReducer
    }
});







export default store;