import {View, Text} from 'react-native';
import React from 'react';

export default function GameDetails({navigation, route}) {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Game Details</Text>
      <Text>{route.params?.title}</Text>
    </View>
  );
}
