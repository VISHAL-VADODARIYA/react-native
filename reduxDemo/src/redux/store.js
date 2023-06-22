import { configureStore } from "@reduxjs/toolkit";
import FavRE from './favorite'

export default configureStore({
    reducer:{Fav:FavRE}
})

