import { createSlice } from "@reduxjs/toolkit";

const quoteSlice = createSlice({
    name: "quotes",
    initialState: {
        list: []
    },
    reducers:{
        setQuotes: (state,{payload})=>{
            state.list = payload;
        }
        
    } 
})

export const {setQuotes} = quoteSlice.actions;
export default quoteSlice.reducer;