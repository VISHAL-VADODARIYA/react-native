import React, { useEffect, useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './src/components/HomeScreen';
import Favourite from './src/components/Favourite';
import {NavigationContainer} from '@react-navigation/native';
import { SafeAreaView, View } from 'react-native';
const Tab = createBottomTabNavigator();

function App() {


  return (
    <View  style = {{flex : 1}}>
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" options={{
          tabBarLabel: 'Home',
          
        }} component={Home} />
        <Tab.Screen name="Favourite" component={Favourite} />
      </Tab.Navigator>
    </NavigationContainer>
    </View>

  );
}

export default App;
