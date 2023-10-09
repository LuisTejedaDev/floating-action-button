import {applyMiddleware, configureStore} from '@reduxjs/toolkit';
import {userSlice} from './slices';
import thunk from 'redux-thunk'

export const store = configureStore({
    reducer: {
        navUsers: userSlice,
    }
}, applyMiddleware(thunk))