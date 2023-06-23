import { configureStore } from "@reduxjs/toolkit";
import favoriteSlice from "./favoriteSlice";
import productSlice from "./productSlice";

const store = configureStore({
    reducer:{
        favorite : favoriteSlice,
        product : productSlice
    }
})
export default store; 