import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Messages from '../screens/Messages';
import Profile from '../screens/Profile';
import Moments from '../screens/Moments';
import Settings from '../screens/Settings';
import CustomDrawer from '../component/CustomDrawer';
import Ionicons from 'react-native-vector-icons/Ionicons';
import TabNavigator from './TabNavigator';

const Drawer = createDrawerNavigator();

export default function AuthStack() {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props}></CustomDrawer>}
      screenOptions={{
        headerShown: false,
        drawerLabelStyle: {
          marginLeft: -25,
          fontFamily: 'Roboto-Medium',
          fontSize: 15,
        },
        drawerActiveBackgroundColor: '#aa18ea',
        drawerActiveTintColor:'#fff',
        drawerInactiveTintColor:'#333'
      }}>
      <Drawer.Screen
        name="Home"
        component={TabNavigator}
        options={{
          drawerIcon: ({color}) => (
            <Ionicons name="home-outline" size={22} color={color}></Ionicons>
          ),
        }}
      />
      <Drawer.Screen
        name="Profile"
        component={Profile}
        options={{
          drawerIcon: ({color}) => (
            <Ionicons name="person-outline" size={22} color={color}></Ionicons>
          ),
        }}
      />
      <Drawer.Screen
        name="Messages"
        component={Messages}
        options={{
          drawerIcon: ({color}) => (
            <Ionicons
              name="chatbox-ellipses-outline"
              size={22}
              color={color}></Ionicons>
          ),
        }}
      />
      <Drawer.Screen
        name="Moments"
        component={Moments}
        options={{
          drawerIcon: ({color}) => (
            <Ionicons name="timer-outline" size={22} color={color}></Ionicons>
          ),
        }}
      />
      <Drawer.Screen
        name="Settings"
        component={Settings}
        options={{
          drawerIcon: ({color}) => (
            <Ionicons
              name="settings-outline"
              size={22}
              color={color}></Ionicons>
          ),
        }}
      />
    </Drawer.Navigator>
  );
}
