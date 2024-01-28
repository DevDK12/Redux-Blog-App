import {createSlice} from '@reduxjs/toolkit'




const initialState = [
    { id: '1', name: 'Dev Kumar' },
    { id: '2', name: 'Dhruv Chaurasia' },
    { id: '3', name: 'Kunal Gola' },
]


const usersSlice = createSlice({
    name: 'users',
    initialState, 
    reducers: {

    }
})





export default usersSlice.reducer