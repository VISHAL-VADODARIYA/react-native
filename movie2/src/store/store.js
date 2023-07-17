import movieSlice from "./movieSlice";
import userSlice from "./userSlice";

const { configureStore } = require("@reduxjs/toolkit");


const store = configureStore({
    reducer:{
        user:userSlice,
        movie:movieSlice
    }
})

export default store;