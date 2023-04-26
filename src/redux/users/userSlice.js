import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "users",
    initialState: {
        list: []
    },
    reducers:{
        setUsers: (state,{payload})=>{
         
            state.list = payload;
          
        }
    } 
})

export const {setUsers} = userSlice.actions;
export default userSlice.reducer;