import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screen/HomeScreen';
import SubDetail from '../components/SubDetail';
import SeasonsScreen from '../components/SeasonsScreen';
import ProfileTab from '../screen/ProfileTab';
import Episode from '../components/Episode';
import PersonSubList from '../components/PersonSubList';
import PersonSubListDetail from '../components/PersonSubListDetail';
import NoInternet from '../screen/NoInternet';

const Stack = createStackNavigator();

const AppStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="SubScreen" component={SubDetail} />
        <Stack.Screen name="SeasonsScreen" component={SeasonsScreen} />
        <Stack.Screen name="SubListPerson" component={PersonSubList} />
        <Stack.Screen name="SubListPersonDetail" component={PersonSubListDetail} />
        <Stack.Screen name="Profile" component={ProfileTab} />
        <Stack.Screen name="Episode" component={Episode} />
        <Stack.Screen name="NoInternet" component={NoInternet} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppStack;
