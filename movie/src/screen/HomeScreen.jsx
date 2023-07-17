import {View, Text, Button} from 'react-native';
import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MovieTab from './MovieTab';
import ProfileTab from './ProfileTab';
import {createStackNavigator} from '@react-navigation/stack';
import SubMovieScreen from './SubMovieScreen';
import Icon from 'react-native-vector-icons/dist/Entypo';
import {createDrawerNavigator} from '@react-navigation/drawer';
import AboutScreen from './AboutScreen';
import CustomDrawer from '../components/CustomDrawer';

const Movie = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{headerShown: false}}
        name="Movie"
        component={MovieTab}
      />
      <Stack.Screen
        name="MovieSub"
        options={{headerShown: false, backgroundColor: '#B3C6D6'}}
        component={SubMovieScreen}
      />
    </Stack.Navigator>
  );
};

const HomeScreen = () => {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{headerShown: false}}>
      <Drawer.Screen
        options={{
          drawerIcon: ({color}) => <Icon name="home" size={24} color={color} />,
        }}
        name="Main"
        component={MainScreen}
      />
      <Drawer.Screen
        options={{
          drawerIcon: ({color}) => (
            <Icon name="info-with-circle" size={24} color={color} />
          ),
        }}
        name="About"
        component={AboutScreen}
      />
    </Drawer.Navigator>
  );
};
const MainScreen = () => {
  const Tab = createBottomTabNavigator();
  const color = '#E8EFF7';
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#215F8E',
        },
        tabBarActiveTintColor: '#FFBF13',
        tabBarInactiveTintColor: '#E8EFF7',
      }}>
      <Tab.Screen
        options={{
          tabBarLabel: 'Home',
          tabBarShowLabel: false,
          tabBarIcon: ({color}) => <Icon name="list" size={24} color={color} />,
        }}
        name="Movie List"
        component={Movie}
      />
      <Tab.Screen
        options={{
          tabBarLabel: 'Profile',
          tabBarShowLabel: false,
          tabBarIcon: ({color}) => <Icon name="user" size={24} color={color} />,
        }}
        name="Profile"
        component={ProfileTab}
      />
    </Tab.Navigator>
  );
};

export default HomeScreen;
