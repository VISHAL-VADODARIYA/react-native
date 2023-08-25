import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import AddToDo from './AddToDo';
import CompletedTask from './CompletedTask';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const Main = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{headerShown: false}}
          name="Home"
          component={BottomTab}
        />
        <Stack.Screen name="Task" component={CompletedTask} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

function BottomTab() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="AddTask" component={AddToDo} />
      <Tab.Screen name="CompletedTask" component={CompletedTask} />
    </Tab.Navigator>
  );
}

export default Main;

const styles = StyleSheet.create({});
