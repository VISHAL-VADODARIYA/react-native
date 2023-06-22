import {createSlice} from '@reduxjs/toolkit';

export const favoriteSlice = createSlice({
  name: 'favorite',
  initialState: {
    count: 0,
  },
  reducers: {
    increment: state => {
      state.count += 1;
      console.log('hal ')
    },
    decrement: state => {
      state.count -= 1;
    },
    incrementByAmount: (state, action) => {
      state.count += action.payload;
    },
  },
});

export const FavActions = favoriteSlice.actions

export default favoriteSlice.reducer
