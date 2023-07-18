
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screen/HomeScreen';
import SubDetail from '../components/SubDetail';


const Stack = createStackNavigator();

const AppStack = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="SubScreen" component={SubDetail} />
        </Stack.Navigator>
      </NavigationContainer>
      
  )
}

export default AppStack