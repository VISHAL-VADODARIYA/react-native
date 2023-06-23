import AsyncStorage from "@react-native-async-storage/async-storage";
import { createSlice } from "@reduxjs/toolkit";

const initialState =[]

const favoriteSlice = createSlice({
    name:'favorite',
    initialState,
    reducers:{
        addToFav(state,action){
            state.push(action.payload)
            console.log("added "+ state)
            AsyncStorage.setItem('fav',JSON.stringify(state))
        },
        removeToFav(state,action){
            state = state.filter(item => item.id !== action.payload)
            AsyncStorage.setItem('fav',JSON.stringify(state))
        },
        setFavorite(state,action){
            state = action.payload
            
            
        }
    }
})
export const {addToFav,removeToFav,setFavorite} = favoriteSlice.actions;
export default favoriteSlice.reducer