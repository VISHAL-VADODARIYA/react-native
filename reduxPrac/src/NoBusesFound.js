import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';
// import COLORS from '../constants/Colors'

const NoBusesFound = () => {
  return (
    <View style={styles.main}>
      <Icon name="error" size={100} color="#D84E55" />
      <Text style={styles.text}>Oops! No buses found.</Text>
      <Text style={styles.description}>No routes available</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#D84E55',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 20,
    textAlign: 'center',
    color: '#D84E55',
  },
});

export default NoBusesFound;
