import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import generalService from './generalService'

// TO DELETE

const initialState = {
    general: {},
    isError: false, 
    isSuccess: false,
    isLoading: false,
    message: ''
}

//Create general info
export const createGeneral = createAsyncThunk('/general/create', async(generalData, thunkAPI)=> {
    try {
        const token = thunkAPI.getState().auth.user.token
        return await generalService.createGeneral(generalData, token)
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


// Get general info for a user
export const getGeneral = createAsyncThunk('/general/get', async(_, thunkAPI)=> {
    try {
        const token = thunkAPI.getState().auth.user.token
        return await generalService.getGeneral(token)
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
export const generalSlice = createSlice({
    name: 'general',
    initialState,
    reducers: {
        reset: (state) => initialState
    },
    extraReducers: (builder) => {
        builder
        .addCase(createGeneral.pending, (state)=>{
            state.isLoading = true
        })
        .addCase(createGeneral.fulfilled, (state, action)=> {
            state.isLoading = false
            state.isSuccess = true
            state.general = action.payload
        })
        .addCase(createGeneral.rejected, (state, action)=> {
            state.isLoading = false
            state.isError = true
            state.message = action.payload
        })
        .addCase(getGeneral.pending, (state)=>{
            state.isLoading = true
        })
        .addCase(getGeneral.fulfilled, (state, action)=> {
            state.isLoading = false
            state.isSuccess = true
            state.general = action.payload
        })
        .addCase(getGeneral.rejected, (state, action)=> {
            state.isLoading = false
            state.isError = true
            state.message= action.payload
        })
    }
})

export const {reset} = generalSlice.actions
export default generalSlice.reducer