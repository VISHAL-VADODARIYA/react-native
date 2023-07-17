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

import {useDispatch} from 'react-redux';
import {userAction} from '../store/userSlice';
import uuid from 'react-native-uuid';
import Icon from 'react-native-vector-icons/dist/Entypo';

const RegisterScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const [userData, setUserData] = useState({name: '', email: '', password: ''});
  const [message, setMessage] = useState('');
  const [CPHMessage, setCPHMessage] = useState('');

  const registerHandler = () => {
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userData.email)) {
      setMessage('email is invalid');
      Alert.alert('Registration Failed', 'email is invalid', [{}]);
    } else {
      if (userData.password.trim().length < 6 && CPHMessage !== '') {
        setMessage('password length should be 6 or more');
        Alert.alert(
          'Registration Failed',
          'password length should be 6 or more',
          [{}],
        );
      } else {
        dispatch(userAction.register({...userData, id: uuid.v4()}));
        navigation.navigate('Login');
      }
    }
  };
  const confirmPasswordHandler = text => {
    if (text != userData.password) {
      setCPHMessage("password doesn't match");
    } else {
      setCPHMessage('');
    }
  };
  // const image = {uri: 'https://legacy.reactjs.org/logo-og.png'};
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
              <Text style={styles.text}>Register</Text>
            </View>
            <View style={styles.inputField}>
              <Icon name="user" size={20} color="#215F8E" />

              <TextInput
                style={{flex: 1, flexDirection: 'row'}}
                placeholder="Name"
                onChangeText={text =>
                  setUserData({...userData, name: text})
                }></TextInput>
            </View>
            <View style={styles.inputField}>
              <Icon name="email" size={20} color="#215F8E" />

              <TextInput
                style={{flex: 1, flexDirection: 'row'}}
                placeholder="Email ID"
                onChangeText={text =>
                  setUserData({...userData, email: text})
                }></TextInput>
            </View>
            <View style={styles.inputField}>
              <Icon name="lock" size={20} color="#215F8E" />

              <TextInput
                style={{flex: 1, flexDirection: 'row'}}
                placeholder="Password"
                secureTextEntry={true}
                onChangeText={text =>
                  setUserData({...userData, password: text})
                }></TextInput>
            </View>
            <View style={styles.inputField}>
              <Icon name="lock" size={20} color="#215F8E" />

              <TextInput
                style={{flex: 1, flexDirection: 'row'}}
                placeholder="Confirm Password"
                secureTextEntry={true}
                onChangeText={text => {
                  confirmPasswordHandler(text);
                }}></TextInput>
            </View>
            {CPHMessage && (
              <View>
                <Text style={{marginVertical: 5, marginLeft: 5, color: '#666'}}>
                  {CPHMessage}
                </Text>
              </View>
            )}
            <View style={styles.button}>
              <TouchableOpacity onPress={() => {}}>
                <Text
                  style={{color: '#fff', textAlign: 'center'}}
                  onPress={registerHandler}>
                  Register
                </Text>
              </TouchableOpacity>
            </View>
            {/* <View style={{marginVertical: 10}}>
        <Text style={{alignItems: 'center'}}>{message}</Text>
      </View> */}
            <View style={styles.signup}>
              <Text style={{fontSize: 15}}>Already You have Account? </Text>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('Login');
                }}>
                <Text style={{fontSize: 15, color: '#215F8E', fontWeight: 800}}>
                  Login
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
    marginTop: -100,
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

export default RegisterScreen;
