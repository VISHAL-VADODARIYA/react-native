import React from 'react';
import {Button, Image, TouchableOpacity, Text, View} from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

export default function List({navigation,res,addToFavorite,removeToFavorite}) {

    
  return (
    <TouchableOpacity
    key={res.id}
    onPress={() => {
      navigation.navigate('ProductDetailScreen', {
        res: res,
        addToFavorite: addToFavorite,
        removeToFavorite: removeToFavorite,
      });
    }}>
    <View
      style={{
        marginHorizontal: 5,
        marginVertical: 5,
        padding: 5,
        flexDirection: 'row',
        borderBottomColor: '#666',
        borderBottomWidth: 1,
      }}>
      <View>
        <Image
          style={{
            width: 100,
            height: 100,
            borderColor: 'black',
            borderRadius: 5,
          }}
          source={{
            uri: res.thumbnail,
          }}
        />
      </View>
      <View
        style={{
          width: 240,
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}>
        <Text
          style={{
            marginHorizontal: 5,
            fontSize: 20,
            color: '#666',
          }}>
          {res.title}
        </Text>
        <Text
          style={{
            marginHorizontal: 5,
            fontSize: 12,
            color: '#666',
          }}>
          {res.description}
        </Text>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'baseline',
          }}>
          <Text
            style={{
              marginHorizontal: 5,
              fontSize: 18,
              color: '#e91e63',
            }}>
            $ {res.price}
          </Text>
          {favoriteData.includes(res) ? (
            <MaterialIcon
              name="favorite"
              style={{fontSize: 25}}
              color="#e91e63"
              key={'item' + res.id}
            />
          ) : (
            <MaterialIcon
              name="favorite-outline"
              style={{fontSize: 25}}
              color="#e91e63"
              key={'item' + res.id}
            />
          )}
        </View>
      </View>
    </View>
  </TouchableOpacity>
  );
}
