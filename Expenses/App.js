import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AuthStack from './src/navigation/AuthStack';
import AppStack from './src/navigation/AppStack';

const App = () => {
  return (
    <>
      {/* <AuthStack /> */}
      <AppStack />
    </>
  );
};

export default App;

const styles = StyleSheet.create({});
