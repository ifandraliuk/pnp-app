import {configureStore} from '@reduxjs/toolkit';
import authReducer from '../features/auth/AuthSlice';
import playerReducer from '../features/player/playerSlice'
export const store = configureStore({
    reducer: {
        auth: authReducer,
        player: playerReducer,

    },
})