/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';


function App(){
  // const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaView style={styles}>
      <Text style={styles.text}>Expense</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems:'center',
  },
  text:{
    fontSize:20,
    color: '#384983',
  }
});

export default App;
