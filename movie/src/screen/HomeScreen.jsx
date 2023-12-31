import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MovieTab from './MovieTab';
import ProfileTab from './ProfileTab';
import Icon from 'react-native-vector-icons/dist/Entypo';
import FaIcon from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import FaIconm from 'react-native-vector-icons/dist/MaterialIcons';
import {createDrawerNavigator} from '@react-navigation/drawer';
import AboutScreen from './AboutScreen';
import CustomDrawer from '../components/CustomDrawer';
import TvTab from './TvTab';
import SearchScreen from './ForYou';
import {useColorScheme} from 'react-native';
import PersonsTab from './PersonsTab';
import SearchTab from './SearchTab';

const HomeScreen = () => {
  const Drawer = createDrawerNavigator();
  const theme = useColorScheme();
  const isDarkTheme = theme === 'dark';

  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{
        drawerType: 'slide',
        headerShown: false,
        drawerStyle: isDarkTheme
          ? {backgroundColor: '#333'}
          : {backgroundColor: '#fff'},
        drawerActiveBackgroundColor: isDarkTheme ? '#fff' : '#215E8F',
        drawerActiveTintColor: isDarkTheme ? '#215E8F' : '#fff',
        drawerInactiveTintColor: isDarkTheme ? '#fff' : '#333',
        drawerLabelStyle: {marginLeft: -25},
      }}>
      <Drawer.Screen
        options={{
          title: 'Movie',
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
          title: 'About',
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
  const theme = useColorScheme();
  const isDarkTheme = theme === 'dark';

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: isDarkTheme
          ? {backgroundColor: '#333'}
          : {backgroundColor: '#215E8F'},
        tabBarActiveTintColor: '#FFBF13',
        tabBarInactiveTintColor: '#E8EFF7',
      }}>
      <Tab.Screen
        options={{
          tabBarLabel: 'Movie',
          tabBarLabelPosition: 'beside-icon',
          tabBarShowLabel: false,
          tabBarIcon: ({color}) => (
            <FaIcon name="movie" size={25} color={color} />
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
          tabBarLabelPosition: 'beside-icon',
          tabBarShowLabel: false,
          tabBarIcon: ({color}) => (
            <FaIconm name="live-tv" size={25} color={color} />
          ),
        }}
        name="TV"
        component={TvTab}
      />
      <Tab.Screen
        options={{
          tabBarLabel: 'TV',
          tabBarLabelPosition: 'beside-icon',
          tabBarShowLabel: false,
          tabBarIcon: ({color}) => (
            <FaIconm name="search" size={25} color={color} />
          ),
        }}
        name="Search"
        component={SearchTab}
      />
      {/* <Tab.Screen
        options={{
          tabBarLabel: 'Actor',
          tabBarLabelPosition: 'beside-icon',
          tabBarShowLabel: false,
          tabBarIcon: ({color}) => (
            <FaIconm name="person" size={25} color={color} />
          ),
        }}
        name="Person"
        component={PersonsTab}
      /> */}
    </Tab.Navigator>
  );
};

export default HomeScreen;
