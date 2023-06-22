import React from "react";
import { Pressable, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import {FavActions} from "../redux/favorite";

export default First = () =>{
    const count = useSelector(state => state.Fav.count)
    const dispatch = useDispatch()
    const addhandler = ()=> {
        dispatch(FavActions.increment())
    }
    const remhandler = ( )=> {
        dispatch(FavActions.decrement())
    }
    return <View>
        <Pressable onPress={addhandler}><Text>+</Text></Pressable>
        <Text>
            {count}
        </Text>
        <Pressable onPress={remhandler}><Text>-</Text></Pressable>
    </View>
}