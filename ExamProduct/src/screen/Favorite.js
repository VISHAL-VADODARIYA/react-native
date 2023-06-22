import React from 'react';
import {Button, Image, ScrollView, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {removeToFav} from '../redux/favoriteSlice';
const Favorite = () => {
  const favProduct = useSelector(state => state.favorite);
  const dispatch = useDispatch();
  const removeToFavorite = id => {
    dispatch(removeToFav(id));
  };
  return favProduct.length != 0 ? (
    <ScrollView>
      {favProduct.map(temp => {
        return (
          <View
            key={temp.id}
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
                  border: 1,
                  borderRadius: 5,
                }}
                source={{
                  uri: temp.thumbnail,
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
                {temp.title}
              </Text>
              <Text
                style={{
                  marginHorizontal: 5,
                  fontSize: 12,
                  color: '#666',
                }}>
                {temp.description}
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
                    fontSize: 15,
                    color: '#e91e63',
                  }}>
                  $ {temp.price}
                </Text>
              </View>
              <Button
                id={temp.id}
                color="#e91e63"
                title="Remove As Favorite"
                onPress={() => {
                  removeToFavorite(temp.id);
                }}
              />
            </View>
          </View>
        );
      })}
    </ScrollView>
  ) : (
    <View style={{justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontSize: 20, color: '#666'}}>
        Please add item to favorite
      </Text>
    </View>
  );
};

export default Favorite;
