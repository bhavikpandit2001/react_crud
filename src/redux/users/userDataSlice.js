import { createSlice } from "@reduxjs/toolkit";

const userDataSlice = createSlice({
    name: "userdata",
    initialState: {
        cartlist: [],
        todolist: [],
        postlist: []
    },
    reducers:{
        setUserCart: (state,{payload})=>{
            state.cartlist = payload;
        },
        setUserTodos: (state,{payload})=>{
            state.todolist = payload;
        },
        setUserPosts: (state,{payload})=>{
            state.postlist = payload;
        },
    } 
})

export const { setUserCart, setUserPosts, setUserTodos} = userDataSlice.actions;
export default userDataSlice.reducer;