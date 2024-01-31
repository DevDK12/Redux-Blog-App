import {createSlice, createAsyncThunk, createEntityAdapter} from '@reduxjs/toolkit'


import client from '../api/client';





export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
    const response = await client.get('http://localhost:3000/users');

    return response.data;

})



const usersAdapter = createEntityAdapter()

const initialState = usersAdapter.getInitialState();


const usersSlice = createSlice({
    name: 'users',
    initialState, 
    reducers: {

    },
    extraReducers: builder => builder.
        // addCase(fetchUsers.fulfilled, (state, action) => {
        //     return action.payload;
        // })
        addCase(fetchUsers.fulfilled, usersAdapter.setAll)
})




// export const selectAllUsers = state => state.users;
// export const selectUserById = (state, id) => state.users.find(user => user.id === id);


export const {
    selectAll : selectAllUsers,
    selectById : selectUserById,
} = usersAdapter.getSelectors(state => state.users);


export default usersSlice.reducer