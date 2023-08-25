import React from 'react';

import {Provider} from 'react-redux';
import store from './src/ReduxStore/Store';
import Root from './src/screen/Root';

function App() {
  return (
    <Provider store={store}>
      <Root />
    </Provider>
  );
}

export default App;
