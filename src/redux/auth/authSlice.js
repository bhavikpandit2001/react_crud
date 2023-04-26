import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "auth",
    initialState: {
        isLoggedIn: false,
        auth: {}
    },
    reducers:{
        login: (state,action) => {
            state.auth = action.payload;
            state.isLoggedIn = true;
        },
        logout: (state) =>{
            state.auth = null;
            state.isLoggedIn = false;
        }
    } 
})

export const {login, logout} = authSlice.actions;
export default authSlice.reducer;