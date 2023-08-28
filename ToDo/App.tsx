import React from 'react';
import {Provider} from 'react-redux';
import Store from './src/Redux/Store';
import HomeScreen from './src/Screen/HomeScreen';

function App() {
  return (
    <Provider store={Store}>
      <HomeScreen />
    </Provider>
  );
}

export default App;
