import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    users: [],
}

export const navSlice = createSlice({
    name: 'nav',
    initialState,
    reducers: {
        setUsers: (state, action) => {state.users = action.payload},
        addUser: (state, action) => {state.users = [action.payload, ...state.users]},
    }
})

export const {setUsers, addUser} = navSlice.actions

export const selectUsers = (state) => state.navUsers.users;

export default navSlice.reducer