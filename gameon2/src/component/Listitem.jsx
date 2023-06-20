import React from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import {windowWidth} from '../utils/Dimensions';

export default function Listitem({photo, title, subTitle, isFree, price, onPress}) {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
      }}>
      <View style={{flexDirection: 'row', alignItems: 'center', flex: 1}}>
        <Image
          source={photo}
          style={{
            width: 55,
            height: 55,
            borderRadius: 10,
            marginRight: 8,
          }}></Image>

        <View style={{width: windowWidth - 220}}>
          <Text
            numberOfLines={1}
            style={{
              color: '#333',
              fontSize: 14,
              textTransform: 'uppercase',
              fontFamily: 'Roboto-Medium',
            }}>
            {title}
          </Text>
          <Text
            style={{
              color: '#333',
              fontSize: 14,
              fontFamily: 'Roboto-Medium',
            }}>
            {subTitle}
          </Text>
        </View>
      </View>
      <TouchableOpacity
      onPress={onPress}
        style={{
          backgroundColor: '#0aada8',
          padding: 10,
          width: 100,
          borderRadius: 10,
        }}>
        {isFree == 'Yes' && (
          <Text
            style={{
              color: '#fff',
              textAlign: 'center',
              fontFamily: 'Inter-Bold',
            }}>
            Play
          </Text>
        )}
        {isFree == 'No' && (
          <Text
            style={{
              color: '#fff',
              textAlign: 'center',
              fontFamily: 'Inter-Bold',
            }}>
            {price}
          </Text>
        )}
      </TouchableOpacity>
    </View>
  );
}
