import React from 'react';
import {Text} from 'react-native';

const Favorite = ({temp}) => {
  return temp.map(temp => {
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
        </View>
      </View>
    );
  });
};

export default Favorite;
