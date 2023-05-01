import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        list: []
    },
    reducers:{
        setCart: (state,{payload})=>{
            state.list.push(payload)
        },
        deleteCart: (state, {payload}) =>{
            state.list.pop(payload)
        }
    } 
})

export const{setCart, deleteCart} = cartSlice.actions;
export default cartSlice.reducer;