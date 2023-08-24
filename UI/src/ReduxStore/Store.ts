import DataSlice from './DataSlice';

const {configureStore} = require('@reduxjs/toolkit');

const store = configureStore({
  reducer: {data: DataSlice},
});
export type RootState=ReturnType<typeof store.getState>
export default store;
