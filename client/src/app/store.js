import {configureStore} from '@reduxjs/toolkit';
import authReducer from '../features/auth/AuthSlice';
import generalReducer from '../features/general/GeneralSlice';
import attrReducer from '../features/attributes/attrSlice'

export const store = configureStore({
    reducer: {
        auth: authReducer,
        general: generalReducer,
        attributes: attrReducer,
    },
})