import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  islogin: false,
  activeUser:{},
  userlist: [
    {
      email: 'vishal@gmail.com',
      password: 'vishal123',
    },
    {
      email: 'meet@gmail.com',
      password: 'meet123',
    },
  ],
};
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login(state, action) {
      state.activeUser = action.payload;
    },
  },
});

export const {login} = userSlice.actions;
export default userSlice.reducer;
