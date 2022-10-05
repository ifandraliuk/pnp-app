import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import talentService from './talentService'

const initialState = {
    talent: [],
    isError: false, 
    isSuccess: false,
    isLoading: false,
    message: ''    
}


// Get talents 
export const getTalent = createAsyncThunk('talents/getAll', async(_, thunkAPI)=>{
    try {
        return await talentService.getTalent()
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


export const talentSlice = createSlice({
    name: 'talent',
    initialState,
    reducers: {
        reset: (state) => initialState
    },
    extraReducers: (builder) => {
        builder
        .addCase(getTalent.pending, (state)=>{
            state.isLoading = true
        })
        .addCase(getTalent.fulfilled, (state, action)=> {
            state.isLoading = false
            state.isSuccess = true
            state.talent = action.payload
        })
        .addCase(getTalent.rejected, (state, action)=> {
            state.isLoading = false
            state.isError = true
            state.message= action.payload
        })
    }
})

export const {reset} = talentSlice.actions
export default talentSlice.reducer