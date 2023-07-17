import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  data: [],
};

const movieSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    fetchData(state, action) {
      state.data.push(...action.payload)
    },
    
  },
});
export const movieAction = movieSlice.actions;
export default movieSlice.reducer;