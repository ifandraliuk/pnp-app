import {configureStore} from '@reduxjs/toolkit';
import authReducer from '../features/auth/AuthSlice';
import generalReducer from '../features/general/GeneralSlice';
export const store = configureStore({
    reducer: {
        auth: authReducer,
        general: generalReducer
    },
})