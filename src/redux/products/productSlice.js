import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name: "products",
    initialState: {
        list: []
    },
    reducers:{
        setProducts: (state,{payload})=>{
            state.list = payload;
        }
    } 
})

export const {setProducts} = productSlice.actions;
export default productSlice.reducer;