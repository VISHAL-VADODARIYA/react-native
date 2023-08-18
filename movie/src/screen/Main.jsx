import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch} from 'react-redux';
import {userAction} from '../store/userSlice';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import AppStack from '../navigation/AppStack';
import AuthStack from '../navigation/AuthStack';
import {windowHeight, windowWidth} from '../utils/Dimensions';

const Main = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(state => state.user.flag);
  const activeUser = useSelector(state => state.user.activeUser);
  // console.log(activeUser);
  const [isLoading, setisLoading] = useState(false);
  useEffect(() => {
    async function getData() {
      try {
        setisLoading(true);
        const allUser = await AsyncStorage.getItem('register');
        if (allUser !== null) {
          dispatch(userAction.setUsers(JSON.parse(allUser)));
        }
        const active = await AsyncStorage.getItem('login');
        if (active !== null) {
          dispatch(userAction.setActiveUser(JSON.parse(active)));
        }
        setTimeout(() => {
          setisLoading(false);
        }, 1500);
      } catch (e) {
        console.log(e);
      }
    }
    getData();
  }, []);
  let login = AsyncStorage.getItem('login');

  console.log(login);

  if (isLoading) {
    return (
      <View style={styles.container}>
        <ImageBackground
          // source={require('../assets/images/output-onlinepngtools.png')}
          source={{
            uri: 'https://www.internationalshowtimes.com/img/International_Showtimes_API_Movie_Guide_Data_Grid.jpg',
          }}
          style={styles.image}>
          <View style={styles.mainView}>
            <View style={styles.subView}>
              <Text style={styles.text}>Movies</Text>
            </View>
          </View>
        </ImageBackground>
      </View>
    );
  }

  return <>{isLoggedIn ? <AppStack /> : <AuthStack />}</>;
};

export default Main;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: windowHeight,
    width: windowWidth,
  },
  mainView: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },
  subView: {
    opacity: 0.8,
    backgroundColor: '#215f8e',
    paddingVertical: 60,
  },
  text: {color: '#fff', fontSize: 50, textAlign: 'center'},
});
