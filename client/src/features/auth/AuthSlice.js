import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import authService from './authService'
// Get user from localStorage
const user = JSON.parse(localStorage.getItem('user'))
const initialState = {
    user: user ? user : null,
    isError: false, 
    isSuccess: false,
    isLoading: false,
    msg: ''
}

// Register User
export const register = createAsyncThunk('auth/register', async(user, thunkAPI)=>{
    try{
        return await authService.register(user)
    }catch(error){
        const msg = 
        (error.response && 
            error.response.data && 
            error.response.data.message) || 
            error.message || 
            error.toString()
        return thunkAPI.rejectWithValue(msg)
    }
})

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        // after login return states to default values
        reset: (state) => {
            state.isLoading = false        
            state.isError = false
            state.isSuccess = false
            state.msg = ''

        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(register.pending, (state)=>{
            state.isLoading = true
        })
        .addCase(register.fulfilled, (state, action)=>{
            state.isLoading = false
            state.isSuccess = true
            state.user = action.payload
        })
        .addCase(register.rejected, (state, action)=>{
            state.isLoading = false
            state.isError = true
            state.msg = action.payload
            state.user = null
        })
    }
})

export const {reset} = authSlice.actions
export default authSlice.reducer