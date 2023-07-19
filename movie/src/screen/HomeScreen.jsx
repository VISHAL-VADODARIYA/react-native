import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MovieTab from './MovieTab';
import ProfileTab from './ProfileTab';
import Icon from 'react-native-vector-icons/dist/Entypo';
import FaIcon from 'react-native-vector-icons/dist/FontAwesome5';
import {createDrawerNavigator} from '@react-navigation/drawer';
import AboutScreen from './AboutScreen';
import CustomDrawer from '../components/CustomDrawer';
import TvTab from './TvTab';
import SearchScreen from './ForYou';

const HomeScreen = () => {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{
        drawerType: 'slide',
        headerShown: false,
        drawerActiveBackgroundColor: '#215F8E',
        drawerActiveTintColor: '#fff',
        drawerLabelStyle: {marginLeft: -25},
      }}>
      <Drawer.Screen
        options={{
          drawerIcon: ({color}) => <Icon name="home" size={24} color={color} />,
        }}
        name="Main"
        component={MainScreen}
      />
      {/* <Drawer.Screen
        options={{
          drawerIcon: ({color}) => (
            <Icon name="user" size={24} color={color} />
          ),
        }}
        name="Profile"
        component={ProfileTab}
      /> */}
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
          tabBarLabel: 'Movie',
          tabBarShowLabel: false,
          tabBarIcon: ({color}) => (
            <FaIcon name="film" size={24} color={color} />
          ),
        }}
        name="Movie"
        component={MovieTab}
      />
      {/* <Tab.Screen
        options={{
          tabBarLabel: 'Search',
          tabBarShowLabel: false,
          tabBarIcon: ({color}) => (
            <FaIcon name="search" size={24} color={color} />
          ),
        }}
        name="For You"
        component={SearchScreen}
      /> */}
      <Tab.Screen
        options={{
          tabBarLabel: 'TV',
          tabBarShowLabel: false,
          tabBarIcon: ({color}) => <FaIcon name="tv" size={21} color={color} />,
        }}
        name="TV"
        component={TvTab}
      />
    </Tab.Navigator>
  );
};

export default HomeScreen;
