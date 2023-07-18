import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch} from 'react-redux';
import {userAction} from '../store/userSlice';
import {ActivityIndicator, View} from 'react-native';
import AppStack from '../navigation/AppStack';
import AuthStack from '../navigation/AuthStack';

const Main = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(state => state.user.flag);
  const activeUser = useSelector(state => state.user.activeUser);
  console.log(activeUser);
  const [isloding, setisloding] = useState(false);
  useEffect(() => {
    async function getData() {
      try {
        setisloding(true);
        const allUser = await AsyncStorage.getItem('register');
        if (allUser !== null) {
          dispatch(userAction.setUsers(JSON.parse(allUser)));
        }
        const active = await AsyncStorage.getItem('login');
        if (active !== null) {
          dispatch(userAction.setActiveUser(JSON.parse(active)));
        }
        setisloding(false);
      } catch (e) {
        console.log(e);
      }
    }
    getData();
  }, []);
  let login = AsyncStorage.getItem('login');

  console.log(login);

  if (isloding) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItem: 'center'}}>
        <ActivityIndicator size={'large'}></ActivityIndicator>
      </View>
    );
  }

  return <>{isLoggedIn ? <AppStack /> : <AuthStack />}</>;
};

export default Main;
