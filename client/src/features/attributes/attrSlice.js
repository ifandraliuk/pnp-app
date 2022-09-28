import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import attrService from './attrService'


// TO DELETE
const initialState = {
    attributes: {},
    isError: false, 
    isSuccess: false,
    isLoading: false,
    message: ''
}

// Create attributes info
export const createAttributes = createAsyncThunk('attributes/create', async(attributesData, thunkAPI)=> {
    try {
        const token = thunkAPI.getState().auth.user.token
        console.log(token, attributesData)
        return await attrService.createAttributes(attributesData, token)
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


// Get general info for a user
export const getAttributes = createAsyncThunk('attributes/get', async(_, thunkAPI)=> {
    try {
        const token = thunkAPI.getState().auth.user.token
        return await attrService.getAttributes(token)
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


export const attrSlice = createSlice({
    name: 'attribute',
    initialState,
    reducers: {
        reset: (state) => initialState
    },
    extraReducers: (builder) => {
        builder
        .addCase(createAttributes.pending, (state)=>{
            state.isLoading = true
        })
        .addCase(createAttributes.fulfilled, (state, action)=> {
            state.isLoading = false
            state.isSuccess = true
            state.attributes = action.payload
            //state.attributes.push(action.payload)
        })
        .addCase(createAttributes.rejected, (state, action)=> {
            state.isLoading = false
            state.isError = true
            state.message = action.payload
        })
        .addCase(getAttributes.pending, (state)=>{
            state.isLoading = true
        })
        .addCase(getAttributes.fulfilled, (state, action)=> {
            state.isLoading = false
            state.isSuccess = true
            state.attributes = action.payload
        })
        .addCase(getAttributes.rejected, (state, action)=> {
            state.isLoading = false
            state.isError = true
            state.message= action.payload
        })
    }
})

export const {reset} = attrSlice.actions
export default attrSlice.reducer