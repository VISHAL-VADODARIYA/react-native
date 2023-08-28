import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import {RootState} from '../Redux/Store';
import List from '../Components/List';
import {Color} from '../utils/Color';
import Icon from 'react-native-vector-icons/FontAwesome';
const HomeScreen = () => {
  const selector = useSelector((state: RootState) => state.data);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleTextView}>
        <Text style={styles.titleText}>To Do</Text>
      </View>

      <List />
      <View style={styles.taskView}>
        <View style={styles.dashline}></View>
        <Text style={styles.taskText}>
          <Icon name="plus-circle" size={30} color="#fff" />
          Add Task{' '}
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'space-between'},
  titleTextView: {},
  titleText: {
    fontSize: 30,
    marginHorizontal: 10,
    marginTop: 20,
    fontWeight: '800',
  },
  taskView: {
    backgroundColor: Color.blue,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  dashline: {
    padding: 2,
    marginBottom: 5,
    marginTop: 10,
    width: 40,
    alignSelf: 'center',
    borderRadius: 3,
    // justifyContent: 'center',
    backgroundColor: Color.white,
  },
  taskText: {
    marginVertical: 5,
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 18,
    color: Color.white,
  },
});
