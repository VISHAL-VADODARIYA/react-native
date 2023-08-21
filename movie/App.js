/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React, {useEffect, useState} from 'react';
import {Provider} from 'react-redux';
import store from './src/store/store';
import Main from './src/screen/Main';
import NoInternetConnection from './src/components/NoInternetConnection';
import NoInternet from './src/screen/NoInternet';

function App() {
  const [isConnected, setIsConnected] = useState(false);
  useEffect(() => {
    NoInternetConnection(setIsConnected);
  }, [NoInternetConnection]);
  return (
    <Provider store={store}>{isConnected ? <Main /> : <NoInternet />}</Provider>
  );
}

// const styles = StyleSheet.create({
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//   },
//   highlight: {
//     fontWeight: '700',
//   },
// });

export default App;
