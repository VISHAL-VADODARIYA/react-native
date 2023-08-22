import React from 'react';
import {useColorScheme} from 'react-native';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // You can replace 'FontAwesome' with your preferred icon library

const NoInternet = () => {
  const theme = useColorScheme();
  const isDarkTheme = theme === 'dark';
  return (
    <SafeAreaView
      style={[
        styles.container,
        {backgroundColor: isDarkTheme ? '#333' : '#215E8F'},
      ]}>
      <Icon name="wifi" size={100} color={isDarkTheme ? 'white' : 'white'} />
      <Text style={[styles.message, {color: isDarkTheme ? 'white' : 'white'}]}>
        No Internet Connection
      </Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  message: {
    fontWeight: '900',
    fontSize: 20,
    marginTop: 20,
  },
});

export default NoInternet;
