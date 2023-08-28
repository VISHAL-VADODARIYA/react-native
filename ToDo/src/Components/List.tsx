import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {windowWidth} from '../utils/Dimensions';

const List = () => {
  return (
    <View style={styles.container}>
      <View style={styles.dateView}>
        <Text style={styles.dateText}>28</Text>
        <Text style={styles.dateText}>Mar</Text>
      </View>
      <View style={styles.dataView}>
        <Text numberOfLines={1} style={styles.dataTitle}>
          Title
        </Text>
        <Text numberOfLines={1} style={styles.dataTag}>
          Tag
        </Text>
        <Text numberOfLines={1} style={styles.dataDiscription}>
          Description
        </Text>
      </View>
    </View>
  );
};

export default List;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderRadius: 10,
    overflow: 'hidden',
    marginHorizontal: 10,
    marginVertical: 10,
    shadowColor: 'black',
  },
  dateView: {
    width: windowWidth / 10,
    paddingVertical: 10,
    justifyContent: 'center',
    backgroundColor: '#562631',
  },
  dateText: {textAlign: 'center', fontSize: 12, color: '#fff'},
  dataView: {
    flex: 1,
    justifyContent: 'space-between',
    paddingHorizontal: 5,
  },
  dataTitle: {
    fontSize: 20,
    fontWeight: '700',
  },
  dataTag: {
    borderColor: '#562631',
    fontSize: 11,
    textAlign: 'center',
    marginVertical: 10,
    borderWidth: 0.5,
    width: 40,
    borderRadius: 2,
  },
  dataDiscription: {
    opacity: 0.5,
  },
});
