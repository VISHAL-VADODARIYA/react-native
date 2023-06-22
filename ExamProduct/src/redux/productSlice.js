import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  data: [],
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    fetchData(state, action) {
      state.data = action.payload;
    },
  },
});
export const {fetchData} = productSlice.actions;
export default productSlice.reducer;

export function getProduct() {
  return async function getProductsThunk(dispatch, getState) {
    const url = 'https://dummyjson.com/products';
    let result = await fetch(url)
      .then(async res => {
        if (res.status === 200) {
          result = await res.json();
        } else {
          console.log('error while data fetching');
        }
      })
      .catch(err => {
        console.log('Err :: ' + err);
      });
    dispatch(fetchData(result));
  };
}
