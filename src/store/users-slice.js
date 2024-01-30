import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'


import client from '../api/client';





export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
    const response = await client.get('http://localhost:3000/users');

    return response.data;

})


const initialState = []


const usersSlice = createSlice({
    name: 'users',
    initialState, 
    reducers: {

    },
    extraReducers: builder => builder.
        addCase(fetchUsers.fulfilled, (state, action) => {
            return action.payload;
        })
})




export const selectAllUsers = state => state.users;

export const selectUserById = (state, id) => state.users.find(user => user.id === id);

export default usersSlice.reducer