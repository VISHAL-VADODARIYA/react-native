import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const List = () => {
  return (
    <View style={styles.container}>
      <View style={styles.dateView}>
        <Text style={styles.dateText}>Date Text</Text>
      </View>
      <View style={styles.dataView}>
        <Text>Title</Text>
        <Text>Tag</Text>
        <Text>Description</Text>
      </View>
    </View>
  );
};

export default List;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderRadius: 10,
    backgroundColor: '#0634fa',
    overflow: 'hidden',
    marginHorizontal: 10,
    marginVertical: 10,
  },
  dateView: {
    paddingVertical: 10,
    paddingHorizontal: 5,
    justifyContent: 'center',
    backgroundColor: '#f00',
  },
  dateText: {},
  dataView: {paddingVertical: 10},
});
