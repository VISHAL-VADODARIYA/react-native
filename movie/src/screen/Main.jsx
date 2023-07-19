import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch} from 'react-redux';
import {userAction} from '../store/userSlice';
import {ImageBackground, Text, View} from 'react-native';
import AppStack from '../navigation/AppStack';
import AuthStack from '../navigation/AuthStack';
import {windowHeight, windowWidth} from '../utils/Dimensions';

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
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        {/* <ActivityIndicator size={'large'}></ActivityIndicator> */}

        <ImageBackground
          // source={require('../assets/images/output-onlinepngtools.png')}
          source={{
            uri: 'https://www.internationalshowtimes.com/img/International_Showtimes_API_Movie_Guide_Data_Grid.jpg',
          }}
          style={{
            height: windowHeight,
            width: windowWidth,
          }}>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignContent: 'center',
            }}>
            <View
              style={{
                opacity: 0.8,
                backgroundColor: '#215f8e',
                paddingVertical: 60,
              }}>
              <Text style={{color: '#fff', fontSize: 40, textAlign: 'center'}}>
                Hello
              </Text>
            </View>
          </View>
        </ImageBackground>
      </View>
    );
  }

  return <>{isLoggedIn ? <AppStack /> : <AuthStack />}</>;
};

export default Main;
