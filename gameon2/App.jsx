/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import AppNav from './src/navigation/AppNav';
import { AuthProvider } from './src/context/AuthContext';

const App = () => {
  return (
    <AuthProvider>
      <AppNav></AppNav>
    </AuthProvider>
  );
};

export default App;
