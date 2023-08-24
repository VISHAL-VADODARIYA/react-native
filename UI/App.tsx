import React from 'react';

import Ui from './src/Ui';
import {Provider} from 'react-redux';
import store from './src/ReduxStore/Store';

function App() {
  return (
    <Provider store={store}>
      <Ui />
    </Provider>
  );
}

export default App;
