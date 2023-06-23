import React from 'react';
import {Button, Image, Text, View} from 'react-native';
import {useSelector,useDispatch} from 'react-redux';
import { addToFav, removeToFav } from '../redux/favoriteSlice';
const ProductDetailScreen = ({route}) => {
  const {res} = route.params;
  const favoriteData = useSelector(state => state.favorite);
const dispatch = useDispatch();
  const addToFavorite = product => {
    dispatch(addToFav(product));
  };
  const removeToFavorite = id => {
    dispatch(removeToFav(id));
  };
  return (
    <View style={{margin: 10, justifyContent: 'center'}}>
      <View>
        <Text style={{fontSize: 30, color: '#1f3f72'}}>{res.title}</Text>
        {/* <Text style={{fontSize: 20, color: '#666'}}>description</Text> */}
        <View
          style={{
            marginTop: 10,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            style={{
              width: 300,
              height: 250,
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
            marginVertical: 10,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text
            style={{
              fontSize: 30,
              marginVertical: 4,
              color: '#e91e63',
              fontWeight: 'bold',
            }}>
            $ {res.price}
          </Text>
          <Text
            style={{
              color: '#a3a8b5',
              fontSize: 20,
              marginVertical: 4,

              fontWeight: 'bold',
              alignSelf: 'center',
            }}>
            {res.stock} in Stock
          </Text>
        </View>
        <Text
          style={{
            color: '#666',
            fontWeight: 'bold',
            margin: 5,
            fontSize: 18,
            marginVertical: 4,
          }}>
          Discount : {res.discountPercentage}%
        </Text>
        <Text
          style={{color: '#666', margin: 5, fontSize: 18, marginVertical: 4}}>
          Description
        </Text>
        <Text
          style={{color: '#777', margin: 5, fontSize: 18, marginVertical: 4}}>
          {res.description}
        </Text>
        <Text
          style={{color: '#777', margin: 5, fontSize: 18, marginVertical: 4}}>
          Rating : {res.rating}
        </Text>
      </View>
      <View style={{justifyContent: 'center'}}>
        {favoriteData.includes(res) ? (
          <Button
            id={res.id}
            color="#e91e63"
            title="Remove As Favorite"
            onPress={() => {
              removeToFavorite(res.id);
            }}
          />
        ) : (
          <Button
            id={res.id}
            color="#e91e63"
            title="Mark As Favorite"
            onPress={() => {
              addToFavorite(res);
            }}
          />
        )}
      </View>
    </View>
  );
};

export default ProductDetailScreen;
