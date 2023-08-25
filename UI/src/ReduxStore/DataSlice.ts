import {PayloadAction} from '@reduxjs/toolkit';

const {createSlice} = require('@reduxjs/toolkit');

export interface Data {
  id: string;
  title: string;
  discription: string;
  isCompleted: boolean;
}
interface UpdateData {
  title?: string;
  discription?: string;
  isCompleted?: boolean;
}

interface AllData {
  data: Data[];
}

const initialState: AllData = {
  data: [],
};

const DataSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    add(state: AllData, action: PayloadAction<Data>) {
      const existing = state.data.find(
        (item: Data) => item.id === action.payload.id,
      );
      if (existing) {
        state.data = state.data.map(item => {
          if (item.id === action.payload.id) {
            console.warn(action.payload, item, 'called');
            return {
              ...item,
              ...action.payload,
            };
          } else {
            return item;
          }
        });
      } else {
        state.data.push(action.payload);
      }
    },
    delete(state: AllData, action: PayloadAction<string>) {
      const newItems = state.data.filter(item => item.id !== action.payload);
      state.data = newItems;
    },
    update(
      state: AllData,
      action: PayloadAction<{data: UpdateData; id: string}>,
    ) {},
  },
});
export const dataAction = DataSlice.actions;
export default DataSlice.reducer;
