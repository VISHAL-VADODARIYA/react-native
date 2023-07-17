const {createSlice} = require('@reduxjs/toolkit');

const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: [
      {
        id: 'hjsaidhuvid',
        name: 'vishal vadodariya',
        email: 'vishal@gmail.com',
        password: 'vishal',
      },
      {
        id: 'adsgnsfgnfhn',
        name: 'a',
        email: 'a',
        password: 'a',
      },
    ],
    activeUser: {},
    flag: false,
  },
  reducers: {
    register(state, action) {
      state.user.push(action.payload);
    },
    login(state, action) {
      state.activeUser = action.payload;
      state.flag = true;
    },
    logout(state, action) {
      state.activeUser = [];
      state.flag = false;
    },
  },
});
export const userAction = userSlice.actions;
export default userSlice.reducer;
