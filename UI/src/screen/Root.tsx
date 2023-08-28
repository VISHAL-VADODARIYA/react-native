// 2d70ff

import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import List from '../Components/List';

const Root = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.todoTitle}>TO DO</Text>
      </View>
      <List />
    </SafeAreaView>
  );
};

export default Root;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  todoTitle: {
    fontSize: 30,
    fontWeight: 'bold',
  },
});
