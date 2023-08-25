import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../Redux/Store';

const HomeScreen = () => {
    const selector = useSelector((state:RootState)=>state.data)

  return (
    <View>
      <Text>HomeScreen</Text>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
