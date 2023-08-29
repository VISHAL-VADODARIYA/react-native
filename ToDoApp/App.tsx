import React from 'react';
import {Text, View} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

function App() {
  return (
    <View>
      <Text style={{fontSize: 30}}>
        hello
        <FontAwesome name="plus-circle" size={20} color="#000" />{' '}
      </Text>
    </View>
  );
}

export default App;
