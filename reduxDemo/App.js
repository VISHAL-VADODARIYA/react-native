

import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import { Provider} from 'react-redux';
import First from './src/screen/first';
import store from './src/redux/store';


function App() {
  
  return <SafeAreaView>
    <Provider store={store}>
    <First />
    </Provider>
  </SafeAreaView>;
}

export default App;
