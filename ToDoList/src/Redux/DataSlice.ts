import {createSlice} from '@reduxjs/toolkit';

enum Priority {
  'high',
  'medium',
  'low',
}
export interface Data {
  id: string;
  title: string;
  description: string;
  date: Date;
  tags: string[];
  priority: Priority;
  isCompleted: boolean;
  userid: string;
}

interface UpdateData {
  title?: string;
  description?: string;
  date?: Date;
  tags?: string[];
  priority?: Priority;
  isCompleted?: boolean;
}

const initialState: {data:Data[]} = {
    data:[]
};
const DataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    Add(state,action){
        state.data.push(...action.payload);
    },
    delete(state, action){

    }
  },
});

export const DataAction = DataSlice.actions;
export default DataSlice.reducer