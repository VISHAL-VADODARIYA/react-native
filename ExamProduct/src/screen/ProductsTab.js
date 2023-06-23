import React, {useEffect, useState} from 'react';

import {
  Button,
  Image,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Text,
  View,
  ActivityIndicator,
} from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import {useDispatch, useSelector} from 'react-redux';
import {addToFav, removeToFav, setFavorite} from '../redux/favoriteSlice';
import {fetchData} from '../redux/productSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';

function ProductTab({navigation, route}) {
  const data = useSelector(state => state.product.data);
  const favoriteData = useSelector(state => state.favorite);

  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();
  useEffect(() => {
    const loading = async () => {
      setIsLoading(true);
      try {
        const value = await AsyncStorage.getItem('fav');
        console.log(value);
        if (value !== null) {
          dispatch(setFavorite(JSON.parse(value)));
        } else {
          console.log('null');
        }
      } catch (e) {
        console.log(e);
      }
      const url = 'https://dummyjson.com/products';
      let result = await fetch(url)
        .then(async res => {
          if (res.status === 200) {
            result = await res.json();
            // console.log(result.products)
            dispatch(fetchData(result.products));
          } else {
            console.log('error while data fetching');
          }
        })
        .catch(err => {
          console.log('Err :: ' + err);
        });

      setIsLoading(false);
    };
    loading();
  }, []);

  const addToFavorite = product => {
    dispatch(addToFav(product));
  };
  const removeToFavorite = id => {
    dispatch(removeToFav(id));
  };
  if (isLoading) {
    return (
      <View style={{justifyContent: 'center', flex: 1, alignItems: 'center'}}>
        <ActivityIndicator size="large" />
      </View>
    );
  }
  return (
    <ScrollView>
      {data.map((res, index) => {
        return (
          <TouchableOpacity
            key={res.id}
            onPress={() => {
              navigation.navigate('ProductDetailScreen', {
                res: res,
              });
            }}>
            <View
              style={{
                marginHorizontal: 5,
                marginVertical: 5,
                padding: 5,
                flexDirection: 'row',
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
                    fontWeight: 'bold',
                    color: '#1f3f72',
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
      })}
    </ScrollView>
  );
}

export default ProductTab;
