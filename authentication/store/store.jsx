const { configureStore } = require("@reduxjs/toolkit");
const { default: userSlice } = require("./userSlice");


const store = configureStore({
    reducer:{
        user:userSlice
    }
})

export default store;