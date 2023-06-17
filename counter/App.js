/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useReducer } from 'react';
import {
  Button,
  SafeAreaView,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors, Header,
} from 'react-native/Libraries/NewAppScreen';

const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case 'increment':
      return state + 1
    case 'decrement':
      return state - 1
    case 'reset':
      return initialState
  }
}
function App() {

  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <View > 
      
            <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 10, backgroundColor: '#999949', height: '100%' }} >
        <View>
          <Text style={{ fontSize: 40 }}>Count :- {count} </Text>
        </View>
        <View style={{ flexDirection: 'row', width: 200, justifyContent: 'center', marginVertical: 20 }}>
          <View style={{marginHorizontal:5}}>
            <Button title="Increment" style={{ padding: 10 }}
              color="#841584" onPress={() => { dispatch('increment') }}>Increment</Button>
          </View>
          <View style={{marginHorizontal:5}}>
            <Button title="Decrement"
              color="#841584" onPress={() => { dispatch('decrement') }}>Decrement</Button>
          </View>
          <View style={{marginHorizontal:5}}>
            <Button title="Reset"
              color="#841584" onPress={() => { dispatch('reset') }}>Reset</Button>
          </View>
        </View>
      </View>
    </View>
  );
}

export default App;
