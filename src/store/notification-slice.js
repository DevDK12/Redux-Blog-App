import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import client from '../api/client'





const initialState = [
    {
        id: '1',
        user: '1',
        message: 'is glad we are friends',
        date: 'Tue Jan 30 2024 04:38:54 GMT+0530 (India Standard Time)',
        read: false,
    },
    {
        id: '2',
        user: '2',
        message: 'says hi!',
        date: 'Tue Jan 30 2024 06:39:52 GMT+0530 (India Standard Time)',
        read: false,
    },
    {
        id: '3',
        user: '1',
        message: 'Invited you to a group',
        date: 'Tue Jan 30 2024 08:06:50 GMT+0530 (India Standard Time)',
        read: false,
    },
    {
        id: '4',
        user: '3',
        message: 'wants to be friends',
        date: 'Mon Jan 29 2024 17:29:55 GMT+0530 (India Standard Time)',
        read: false,
    },
    {
        id: '5',
        user: '2',
        message: 'Says hi',
        date: 'Tue Jan 30 2024 11:37:16 GMT+0530 (India Standard Time)',
        read: false,
    },
    {
        id: '6',
        user: '8',
        message: 'like your comment',
        date: 'Mon Jan 29 2024 22:59:08 GMT+0530 (India Standard Time)',
        read: false,
    },
]










export const fetchNotifications = createAsyncThunk('notifications/fetchNotifications', async ()=>{

    const res = await client.get('http://localhost:3000/notifications');

    return res.data;
})








const notificationSlice = createSlice({
    name: 'notification',
    initialState,
    reducers : {
        readAllNotifications: (state) => {
            state.forEach(noti => noti.read = true);
        }
    },
    extraReducers(builder){
        builder.addCase(fetchNotifications.fulfilled, (state, action) => {
            state.push(...action.payload)

            state.forEach(noti => noti.isNew = !noti.read);

            state.sort((a, b) => new Date(b.date) - new Date(a.date))
        })
    },

})

//_ If we haven't read prev notifications then they are also new 





export const {readAllNotifications} = notificationSlice.actions;

export const selectAllNotifications = state => state.notifications;

export default notificationSlice.reducer;