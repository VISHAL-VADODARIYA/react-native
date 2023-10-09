import UserSlice from './UserSlice';


const {configureStore} = require('@reduxjs/toolkit');

const store = configureStore({
  reducer: {
    user: UserSlice,
    data:Da
  },
});

export default store;
