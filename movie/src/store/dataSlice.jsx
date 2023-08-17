import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  movie: [],
  tv:[],
  person:[],
};

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    fetchMovieData(state, action) {
      state.movie.push(...action.payload)
      state.movie.reverse()
    },
    fetchTvData(state, action) {
      state.tv.push(...action.payload)
      state.tv.reverse()
    },
    fetchPersonData(state, action) {
      state.person.push(...action.payload)
      state.person.reverse()
    }
    
  },
});
export const dataAction = dataSlice.actions;
export default dataSlice.reducer;