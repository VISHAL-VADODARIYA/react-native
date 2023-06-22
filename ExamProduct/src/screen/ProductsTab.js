import React, {useEffect, useState} from 'react';

import {
  Button,
  Image,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Text,
  View,
} from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

function ProductTab({navigation,route}) {

    console.log(navigation.setTemp)
  const [data, setData] = useState();
  const [isLoading,setIsLoading] = useState(true)

  const getApiData = async () => {
    const url = 'https://dummyjson.com/products';
    let result = await fetch(url)
      .then(async res => {
        if (res.status === 200) {
          result = await res.json();

          setData(result);
          console.log(result);
          setIsLoading(false)
        } else {
          console.log('error while data fetching');
          setIsLoading(false)
        }
      })
      .catch(err => {
        console.log('Err :: ' + err);
        setIsLoading(false)
      });
  };
  useEffect(() => {
    getApiData();
  }, []);


  return (
    <SafeAreaView>
     {isLoading ? <View style={{justifyContent:'center',alignItems:'center'}}><Text style={{fontSize:30, color:'#666'}}>Loading...</Text></View>: <View>
        <ScrollView>
          {data
            ? data.products.map((res, index) => {
                return (
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate('ProductDetailScreen', {
                        title1: res.title,
                        id: res.id,
                        description: res.description,
                        thumbnail: res.thumbnail,
                        price: res.price,
                        rating: res.rating,
                      });
                    }}>
                    <View
                      key={res.id}
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
                          <MaterialIcon
                          name='favorite'
                          style={{fontSize:25}}
                         
                            color="#e91e63"
                            title="Add to Favorite"
                            key={'item' + res.id}
                            onPress={() => {
                                route.param.setTemp(a=>[
                                ...a,
                                ...(data.products.filter(d => {
                                  return d.id == res.id;
                                })),
                              ]);
                            }}
                          />
                        </View>
                      </View>
                    </View>
                  </TouchableOpacity>
                );
              })
            : null}
        </ScrollView>
      </View>}
    </SafeAreaView>
  );
}

export default ProductTab;
