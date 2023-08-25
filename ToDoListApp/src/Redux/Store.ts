import {configureStore} from '@reduxjs/toolkit';
import DataSlice from './DataSlice';
import UserSlice from './UserSlice';
import AuthSlice from './AuthSlice';

const Store = configureStore({
  reducer: {
    data: DataSlice,
    user: UserSlice,
    Auth: AuthSlice,
  },
});
export type RootState = ReturnType<typeof Store.getState>;
export default Store;
