import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {createContext, useEffect, useState} from 'react';
import user from '../model/user';
import {Alert} from 'react-native';

export const AuthContxt = createContext();

export const AuthProvider = ({children}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [userToken, setUserToken] = useState(null);
  const [userName, setUserName] = useState(null);

  const login = (email, passwod) => {
    setIsLoading(true);

    const foundUser = user.filter(item => {
      return email == item.email && passwod == item.password;
    });

    if (foundUser.length == 0) {
      Alert.alert("Invalid User!",'emailID or Password is incorrect.',[{text:'Okay'}]);
      setIsLoading(false);
      return;
    }
    setUserToken(foundUser[0].userToken);
    setUserName(foundUser[0].userName);
    AsyncStorage.setItem('userToken', foundUser[0].userToken);
    AsyncStorage.setItem('userName', foundUser[0].userName);
    setIsLoading(false);
  };
  const logout = () => {
    setIsLoading(true);
    setUserToken(null);
    setUserName(null);
    AsyncStorage.removeItem('userToken');
    AsyncStorage.removeItem('userName');
    setIsLoading(false);
  };
  const isLoggedIn = async () => {
    try {
      setIsLoading(true);
      let userToken = await AsyncStorage.getItem('userToken');
      let userName = await AsyncStorage.getItem('userName');
      setUserToken(userToken);
      setUserName(userName);
      setIsLoading(false);
    } catch (e) {
      console.log(`isLoggedIn error ${e}`);
    }
  };
  useEffect(() => {
    isLoggedIn();
  }, []);
  return (
    <AuthContxt.Provider value={{login, logout, isLoading, userToken, userName}}>
      {children}
    </AuthContxt.Provider>
  );
};
