import {configureStore} from '@reduxjs/toolkit'
import authSlice from './authSlice';

const store = configureStore({
    reducer:{
        auth : authSlice,
        // auth:authReducer,
        // post:postReducer,
        // comment:commentReducer
    }
})

export default store;