import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  movie: [],
  tv:[]
};

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    fetchMovieData(state, action) {
      state.movie.push(...action.payload)
    },
    fetchTvData(state, action) {
      state.tv.push(...action.payload)
    }
    
  },
});
export const dataAction = dataSlice.actions;
export default dataSlice.reducer;