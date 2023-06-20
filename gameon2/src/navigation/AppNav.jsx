import {NavigationContainer} from '@react-navigation/native';
import AuthStack from './AuthStack';
import AppStack from './AppStack';
import React, {useContext} from 'react';
import {AuthContxt} from '../context/AuthContext';
import {ActivityIndicator, View} from 'react-native';

export default function AppNav() {
  const {isLoading, userToken} = useContext(AuthContxt);

  if (isLoading) {
    return(<View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
      <ActivityIndicator size={'large'}></ActivityIndicator>
    </View>);
  }

  return (
    <NavigationContainer>
      {userToken !== null ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
}
