import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Alert,
  ImageBackground,
} from 'react-native';
import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {userAction} from '../store/userSlice';
import Icon from 'react-native-vector-icons/dist/Entypo';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginScreen = ({navigation}) => {
  const [userData, setUserData] = useState({email: '', password: ''});
  // console.log(userData);
  const user = useSelector(state => state.user.user);
  const a = useSelector(state => state.user.activeUser);
  const isLoggedIn = useSelector(state => state.user.flag);

  const [emailMessage, setEmailMessage] = useState(false);
  const [passwordMessage, setPasswordMessage] = useState(false);
  console.log(a);

  // const [message, setMessage] = useState();
  const dispatch = useDispatch();
  var activeUser;
  const LoginHandler = () => {
    // const ky = Object.keys(user);

    if (userData.email === '') {
      setEmailMessage(true);
    } else if (userData.email !== '') {
      setEmailMessage(false);
    } 
    if (userData.password === '') {
      setPasswordMessage(true);
    } else if (userData.password !== '') {
      setPasswordMessage(false);
    } 
    if(userData.email !== '' && userData.password !== '') {
      let flag = true;
      for (let i of user) {
        if (i.email === userData.email && i.password === userData.password) {
          flag = false;
          dispatch(userAction.login(i));
          activeUser = i;
        }
      }
      if (flag) {
        Alert.alert('Login Failed', 'incorrect Detail', [{}]);
        setUserData({email: '', password: ''});
      } 
    }
  };

  console.log(a.id);
  const activeUser2 = useSelector(state => state.user.activeUser);
  console.log(activeUser2);

  return (
    <SafeAreaView style={{flex: 1}}>
      <ImageBackground
        source={{
          uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqy5ytbJuBCv9t55-A_ZxR22_FufHk9dI8fw&usqp=CAU',
        }}
        resizeMode="cover"
        style={{
          flex: 1,
          justifyContent: 'center',
        }}>
        <View style={styles.main}>
          <View>
            <Text style={styles.text}>Login</Text>
          </View>
          <View style={styles.inputField}>
            <Icon name="email" size={20} color="#215F8E" />
            <TextInput
              style={{flex: 1, flexDirection: 'row'}}
              placeholder="Email ID"
              autoCapitalize='none'
              value={userData.email}
              onChangeText={text => {
                setUserData({...userData, email: text});
              }}></TextInput>
          </View>
          {emailMessage && (
            <Text style={{marginVertical: 5, marginLeft: 5, color: '#f00'}}>
              Enter Valid Email
            </Text>
          )}
          <View style={styles.inputField}>
            <Icon name="lock" size={20} color="#215F8E" />
            <TextInput
              style={{flex: 1, flexDirection: 'row'}}
              secureTextEntry={true}
              autoCapitalize='none'
              placeholder="Password"
              value={userData.password}
              onChangeText={text => {
                setUserData({...userData, password: text});
              }}></TextInput>
          </View>
          {passwordMessage && (
            <Text style={{marginVertical: 5, marginLeft: 5, color: '#f00'}}>
              Enter Valid Password
            </Text>
          )}
          <View style={styles.button}>
            <TouchableOpacity
              onPress={() => {
                LoginHandler();
              }}>
              <Text
                style={{
                  color: '#fff',
                  textAlign: 'center',
                  flexDirection: 'row',
                }}>
                Login
              </Text>
            </TouchableOpacity>
          </View>
          {/* {message && (
        <View>
          <Text>{message}</Text>
        </View>
      )} */}
          <View style={styles.signup}>
            <Text style={{fontSize: 15}}>You Don't Have Account ? </Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Register');
              }}>
              <Text style={{fontSize: 15, color: '#215F8E', fontWeight: 800}}>
                Register
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  main: {
    opacity: 1,
    padding: 15,
    marginTop: -150,
    backgroundColor: '#E8EFF7',
    paddingVertical: 30,
    margin: 10,
    borderRadius: 10,
  },
  inputField: {
    alignItems: 'center',
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBlockColor: '#888',
    margin: 5,
    flexDirection: 'row',
  },
  text: {
    fontSize: 30,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#215F8E',
  },
  button: {
    backgroundColor: '#215F8E',
    marginVertical: 20,
    padding: 15,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  signup: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
export default LoginScreen;
