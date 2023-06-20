import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../screens/Login';
import Main from '../screens/Main';
import Register from '../screens/Register';
const Stack = createNativeStackNavigator();


export default function AuthStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Main" component={Main} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
  );
}