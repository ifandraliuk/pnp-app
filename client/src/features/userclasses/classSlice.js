import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import classService from './classService'
// TO DELETE
const initialState = {
    userclasses: [],
    isError: false, 
    isSuccess: false,
    isLoading: false,
    message: ''    
}


// Get Class for logged in user
export const getClass = createAsyncThunk('classes/get', async(_, thunkAPI)=>{
    try {
        return await classService.getClass()
    } catch (error) {
        const msg = 
        (error.response && 
            error.response.data && 
            error.response.data.message) || 
            error.message || 
            error.toString()
            console.log((error.message))
        return thunkAPI.rejectWithValue(msg)        
    }
})


// Posting a class to user
export const addClass = createAsyncThunk('classes/create', async(classData, thunkAPI)=>{
    try {
        const token = thunkAPI.getState().auth.user.token
        return await classService.addClass(classData, token)        
    } catch (error) {
        const msg = 
        (error.response && 
            error.response.data && 
            error.response.data.message) || 
            error.message || 
            error.toString()
        return thunkAPI.rejectWithValue(msg)        
    }
})

export const classSlice = createSlice({
    name: 'userclass',
    initialState,
    reducers: {
        reset: (state) => initialState
    },
    extraReducers: (builder) => {
        builder
        .addCase(getClass.pending, (state)=>{
            state.isLoading = true
        })
        .addCase(getClass.fulfilled, (state, action)=> {
            state.isLoading = false
            state.isSuccess = true
            state.userclasses = action.payload
        })
        .addCase(getClass.rejected, (state, action)=> {
            state.isLoading = false
            state.isError = true
            state.message= action.payload
        })
    }
})

export const {reset} = classSlice.actions
export default classSlice.reducer