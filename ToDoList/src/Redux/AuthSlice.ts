import {PayloadAction, createSlice} from '@reduxjs/toolkit';

interface Auth {
  isAuthenticated: boolean;
  activeUser: string;
}
const initialState: Auth = {
  isAuthenticated: false,
  activeUser: '',
};
const AuthSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state, action: PayloadAction<string>) {
      state.isAuthenticated = true;
      state.activeUser = action.payload;
    },
    logout(state) {
      state.isAuthenticated = false;
      state.activeUser = '';
    },
  },
});

export const authAction = AuthSlice.actions;
export default AuthSlice.reducer