import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {windowHeight, windowWidth} from '../util/Dimensions';

const Card = ({cardNumber, cardHolder, expiration}) => {
  return (
    <View
      style={styles.cardBg}
      className="self-center justify-between bg-blue-100 rounded-xl overflow-hidden">
      <Image
        className="w-full h-full absolute "
        source={require('../assets/images/Atm.jpg')}
      />
      <View className="flex-row justify-between">
        <View className="flex pt-3 px-5 ">
          <Text className="text-gray-400 font-semibold text-md">
            Total Balance
          </Text>
          <Text className="text-white font-bold text-xl">₹ 6000</Text>
        </View>
        <View className="pt-3 px-5">
          <Text className="text-white font-bold text-2xl">· · ·</Text>
        </View>
      </View>

      {/* Credit */}
      <View className="flex-row justify-between">
        <View className="flex pb-3 px-5 ">
          <Text className="text-gray-400 font-semibold text-md">
            Credit
          </Text>
          <Text className="text-white font-bold text-lg">1231 4562 7893</Text>
        </View>
        <View className=" px-5">
          <Image style={styles.mastercard} source={require('../assets/images/MasterCard.png')} />
        </View>
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  cardBg: {
    height: windowHeight / 5,
    width: windowWidth - 20,
  },
  mastercard:{
    width: windowWidth / 9,
    height: windowHeight/20
  }
});
