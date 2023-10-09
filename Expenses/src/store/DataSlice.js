const {createSlice} = require('@reduxjs/toolkit');

const initialState = {
  data: [],
  amount: 0,
};

const DataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    Add(state, action) {
      state.data.push(...action.payload);
      amount += action.payload.amount;
    },
    Remove(state, action) {
      amount -= action.payload.amount;
      state.data = state.data.filter(id !== action.payload.id);
    },
  },
});

const DataAction = DataSlice.actions;
export default DataSlice.reducer;
