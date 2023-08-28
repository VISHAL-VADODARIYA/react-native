/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {Provider} from 'react-redux';
import Store from './src/Redux/Store';
import Drawer from './src/Components/Drawer';
import List from './src/Components/List';
import HomeScreen from './src/Screen/HomeScreen';

function App() {
  return (
    <Provider store={Store}>
      {/* <Drawer /> */}
      <HomeScreen />
    </Provider>
  );
}

export default App;
