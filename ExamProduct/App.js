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
  const [temp, setTemp] = useState([]);

  const storeData = async temp => {
    try {
      const jsonValue = JSON.stringify(temp);
      await AsyncStorage.setItem('my-key', jsonValue);
    } catch (e) {
      // saving error
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
          name="ProductTab"
          component={() => <MyStack setTemp={setTemp} />}
          options={{
            headerShown: false,
            tabBarIcon: ({color, size}) => (
              <MaterialIcon name="home" color={color} size={size} />
            ),
          }}

          // component={MyStack}
        />
        <Tab.Screen
          name="FavoriteTab"
          
          component={() => <Favorite temp={temp} setTemp={setTemp} />}
          options={{
            
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
