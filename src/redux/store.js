import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth/authSlice";
import cartSlice from "./cart/cartSlice";
import postSlice from "./posts/postSlice";
import productSlice from "./products/productSlice";
import quoteSlice from "./quotes/quoteSlice";
import todoSlice from "./todos/todoSlice";
import userDataSlice from "./users/userDataSlice";

import userSlice from "./users/userSlice";

const rootReducers = combineReducers({
    auth: authSlice,
    products: productSlice,
    users: userSlice,
    posts: postSlice,
    todos: todoSlice,
    quotes: quoteSlice,
    cart: cartSlice,
    userdata: userDataSlice
})



const store = configureStore({
    reducer: rootReducers,
    devTools: true,
});
export default store