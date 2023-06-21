import React from 'react';
import {Button, Image, Text, View} from 'react-native';
const ProductDetailScreen = ({route, navigation,setTemp}) => {
  const {title1, id, description, thumbnail, price, rating} = route.params;
  return (
    <View style={{margin: 10, justifyContent: 'center'}}>
      <View>
        <Text style={{fontSize: 30, color: '#666'}}>{title1}</Text>
        <Text style={{fontSize: 20, color: '#666'}}>description</Text>
        <View
          style={{
            marginTop: 10,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            style={{
              width: 250,
              height: 250,
              borderColor: 'black',
              border: 1,
              borderRadius: 5,
            }}
            source={{
              uri: thumbnail,
            }}
          />
        </View>
        <Text style={{color: '#666', fontSize: 18, marginVertical: 4}}>
          $ {price}
        </Text>
        <Text style={{color: '#666', fontSize: 18, marginVertical: 4}}>
          Description
        </Text>
        <Text style={{color: '#777', fontSize: 18, marginVertical: 4}}>
          {description}
        </Text>
        <Text style={{color: '#777', fontSize: 18, marginVertical: 4}}>
          Rating : {rating}
        </Text>
      </View>
      <View style={{justifyContent: 'center'}}>
        <Button
          color="#e91e63"
          title="Add To Favorite"
          onPress={() => {
            setTemp(
              temp.push(
                data.products.filter(d => {
                  return d.id == id;
                }),
              ),
            );
          }}
        />
      </View>
    </View>
  );
};

export default ProductDetailScreen;
