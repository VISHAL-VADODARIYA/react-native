/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {Pressable, Text, View} from 'react-native';

function App() {
  

  return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <Pressable style={{backgroundColor:'green',paddingHorizontal:10,paddingVertical:5,borderRadius:5}}>
        <Text style={{color:'yellow',fontSize:18}}>Push Notification</Text>
      </Pressable>
    </View>
  );
}

export default App;
