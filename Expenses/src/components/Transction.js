import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';
import {windowWidth} from '../util/Dimensions';

const Transction = () => {
  const data = [
    {
      id: 1,
      title: 'Item 1',
      description: 'Description for Item 1',
      image: require('../assets/images/icon.png'),
      amount: 1000,
    },
    {
      id: 2,
      title: 'Item 2',
      description: 'Description for Item 2',
      image: require('../assets/images/icon2.png'),
      amount: 1500,
    },
    {
      id: 3,
      title: 'Item 3',
      description: 'Description for Item 3',
      image: require('../assets/images/icon3.png'),
      amount: 2500,
    },
    // Add more items as needed
  ];

  return (
    <>
      {data.map(item => (
        <View
          key={item.id}
          style={styles.mainView}
          className="bg-white rounded-lg p-4 m-1 shadow-md flex-row items-center">
          <Image
            style={styles.image}
            source={item.image}
            className="w-16 h-16 rounded-full mr-4"
          />
          <View
            style={styles.dataView}
            className="flex-row items-center justify-between">
            <View>
              <Text className="text-lg font-semibold text-gray-800">
                {item.title}
              </Text>
              <Text className="text-sm text-gray-600">{item.description}</Text>
            </View>
            <View>
              <Text className="font-bold">₹ {item.amount}</Text>
              <Text className="text-right text-gray-500">
                {item.amount > 1200 ? 'credit' : 'debit'}
              </Text>
            </View>
          </View>
        </View>
      ))}
    </>
  );
};

export default Transction;

const styles = StyleSheet.create({
  mainView: {
    width: windowWidth - 23,
  },
  image: {
    width: windowWidth / 9,
    height: windowWidth / 9,
  },
  dataView: {
    width: windowWidth / 1.45,
  },
});
