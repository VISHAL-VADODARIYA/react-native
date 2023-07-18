import userSlice from "./userSlice";
import dataSlice from "./dataSlice";

const { configureStore } = require("@reduxjs/toolkit");


const store = configureStore({
    reducer:{
        user:userSlice,
        data:dataSlice,
        
    }
})

export default store;