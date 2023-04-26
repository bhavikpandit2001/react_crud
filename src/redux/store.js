import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth/authSlice";
import postSlice from "./posts/postSlice";
import productSlice from "./products/productSlice";
import userSlice from "./users/userSlice";

const rootReducers = combineReducers({
    auth: authSlice,
    products: productSlice,
    users: userSlice,
    posts: postSlice
})



const store = configureStore({
    reducer: rootReducers,
    devTools: true,
});
export default store