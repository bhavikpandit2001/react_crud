import { createSlice } from "@reduxjs/toolkit";

const postSlice = createSlice({
    name: "posts",
    initialState: {
        list: []
    },
    reducers:{
        setPosts: (state,{payload})=>{
            state.list = payload;
        }
    } 
})

export const {setPosts} = postSlice.actions;
export default postSlice.reducer;