import React, {useState} from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ProductTab from './src/screen/ProductsTab';
import Favorite from './src/screen/Favorite';
import {NavigationContainer} from '@react-navigation/native';

import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import ProductDetailScreen from './src/screen/ProductDetailScreen';

const Tab = createBottomTabNavigator();

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { Provider } from 'react-redux';
import store from './src/redux/store';


const Stack = createNativeStackNavigator();



const MyStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#e91e63',
        headerTintColor: '#e91e63',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerTitleAlign: 'center',
      }}>
      <Stack.Screen name="ProductTab" component={ProductTab} />
      <Stack.Screen
        name="ProductDetailScreen"
        component={ProductDetailScreen} 
      />
    </Stack.Navigator>
  );
};

function App() {


  const setData = async temp => {
    try {
      const jsonValue = JSON.stringify(temp);
      await AsyncStorage.setItem('local-data', jsonValue);
    } catch (e) {
      console.log(e)
    }
  };

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('local-data');
      if (value !== null) {
        const localdata = JSON.parse(value)
        favorite = localdata 
        
        
      }
    } catch (error) {
      // Error retrieving data
    }
  };
  return (
    <Provider store={store}>
      <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: '#e91e63',
          headerTintColor: '#e91e63',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerTitleAlign: 'center',
        }}>
        <Tab.Screen
          name="Home"
          component={MyStack}
          options={{
            headerShown: false,
            tabBarShowLabel:false,
            tabBarIcon: ({color, size}) => (
              <MaterialIcon name="home" color={color} size={size} />
            ),
          }}

          // component={MyStack}
        />
        <Tab.Screen
          name="FavoriteTab"
          
          component={Favorite}
          options={{
            tabBarShowLabel:false,
            tabBarIcon: ({color, size}) => (
              <MaterialIcon name="favorite" color={color} size={size} />
            ),
          }}
          // component={Favorite}
        />
      </Tab.Navigator>
    </NavigationContainer>
    </Provider>
  );
}

export default App;
