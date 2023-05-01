import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: "todos",
    initialState: {
        list: []
    },
    reducers:{
        setTodos: (state,{payload})=>{
            state.list = payload;
        }
        
    } 
})

export const {setTodos} = todoSlice.actions;
export default todoSlice.reducer;