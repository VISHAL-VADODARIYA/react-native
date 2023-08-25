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

function App() {
  return (
    <Provider store={Store}>
      <Drawer />
    </Provider>
  );
}

export default App;
