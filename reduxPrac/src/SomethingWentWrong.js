import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';
// import COLORS from '../constants/Colors'

const SomethingWentWrong = () => {
  return (
    <View style={styles.container}>
      <Icon name="error" size={100} color="#fff" />
      <Text style={styles.text}>Something Went Wrong</Text>
      <Text style={styles.description}>
        An error occurred while loading the content
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#D84E55',
  },
  text: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    color: '#fff',
  },
});

export default SomethingWentWrong;
