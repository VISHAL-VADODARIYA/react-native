import {PayloadAction, createSlice} from '@reduxjs/toolkit';
export interface User {
  userid: string;
  username: string;
  email: string;
  password: string;
}

const initialState: {user: User[]} = {
  user: [],
};
const UserSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    register(state, action: PayloadAction<User>) {
      state.user.push(action.payload);
    },
  },
});
export const userAction = UserSlice.actions;
export default UserSlice.reducer;
