import {configureStore} from '@reduxjs/toolkit'

const store = configureStore({
    reducer:{
        // auth:authReducer,
        // post:postReducer,
        // comment:commentReducer
    }
})

export default store;