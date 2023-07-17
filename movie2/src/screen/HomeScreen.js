import {View, Text} from 'react-native';
import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MovieTab from './MovieTab';
import ProfileTab from './ProfileTab';
import {createStackNavigator} from '@react-navigation/stack';
import SubMovieScreen from './SubMovieScreen';
import Icon from 'react-native-vector-icons/dist/Entypo';

const Movie = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Movie" component={MovieTab} />
      <Stack.Screen name="MovieSub" component={SubMovieScreen} />
    </Stack.Navigator>
  );
};

const HomeScreen = () => {
  const Tab = createBottomTabNavigator();


  return (
    <Tab.Navigator>
      <Tab.Screen
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: () => <Icon name="list" size={24} color="#900" />,
        }}
        name="Movie List"
        component={Movie}
      />
      <Tab.Screen
        options={{
          tabBarLabel: 'Profile',
          activeTintColor:'#690009',
          tabBarIcon: () => <Icon name="user" size={24} color="#900" />,
          
        }}
        name="Profile"
        component={ProfileTab}
      />
    </Tab.Navigator>
  );
};

export default HomeScreen;
