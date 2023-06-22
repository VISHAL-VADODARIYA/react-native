import { createSlice } from "@reduxjs/toolkit";

const initialState =[]

const favoriteSlice = createSlice({
    name:'favorite',
    initialState,
    reducers:{
        addToFav(state,action){
            state.push(action.payload)
            console.log("added "+ state)
        },
        removeToFav(state,action){
            return state.filter(item => item.id !== action.payload)
        }
    }
})
export const {addToFav,removeToFav} = favoriteSlice.actions;
export default favoriteSlice.reducer