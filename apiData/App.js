import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './src/components/HomeScreen';
import Favourite from './src/components/Favourite';
import {NavigationContainer} from '@react-navigation/native';
import {View} from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import 'react-native-gesture-handler';

const Tab = createBottomTabNavigator();

function App() {
  return (
    <View style={{flex: 1}}>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen
            name="Home"
            options={{
              tabBarIcon: ({color, size}) => (
                <MaterialIcon name="home" color={color} size={size} />
              ),headerShown:false
            }}
            component={Home}
          />
          <Tab.Screen
            name="Favorite"
            options={{
              tabBarIcon: ({color, size}) => (
                <MaterialIcon name="favorite" color={color} size={size} />
              ),
              
            }}
            component={Favourite}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </View>
  );
}

export default App;
