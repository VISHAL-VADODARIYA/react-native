import AsyncStorage from '@react-native-async-storage/async-storage';

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
      AsyncStorage.setItem('register',JSON.stringify(state.user))
    },
    login(state, action) {
      state.activeUser = action.payload;
      AsyncStorage.setItem('login',JSON.stringify(state.activeUser))
      state.flag = true;
    },
    logout(state, action) {
      state.activeUser = [];
      AsyncStorage.removeItem('login')
      state.flag = false;
    },
    setUsers(state,action){
      state.user = action.payload
    },
    setActiveUser(state,action){
      state.activeUser = action.payload
      state.flag = true;
    }
  },
});
export const userAction = userSlice.actions;
export default userSlice.reducer;
