import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Alert,
  ImageBackground,
  NativeEventEmitter,
} from 'react-native';
import React, {useState, useEffect} from 'react';

import {useDispatch} from 'react-redux';
import {userAction} from '../store/userSlice';
import uuid from 'react-native-uuid';
import Icon from 'react-native-vector-icons/dist/Entypo';

const RegisterScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const [userData, setUserData] = useState({name: '', email: '', password: ''});
  const [nameMessage, setNameMessage] = useState(false);
  const [emailMessage, setEmailMessage] = useState(false);
  const [passwordMessage, setPasswordMessage] = useState(false);
  const [CPHMessage, setCPHMessage] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [buttonDisable, setButtonDisable] = useState(true);

    const nameHandler = text => {
    setUserData({...userData, name: text});
    if (userData.name.trim().length < 3) {
      setNameMessage(true);
    } else {
      setNameMessage(false);
    }
  };
  const emailHandler = text => {
    setUserData({...userData, email: text});
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userData.email)) {
      setEmailMessage(true);
    } else {
      setEmailMessage(false);
    }
  };
  const passwordHandler = text => {
    setUserData({...userData, password: text});
    if (userData.password.trim().length < 6) {
      setPasswordMessage(true);
    } else {
      setPasswordMessage(false);
    }
  };

  const confirmPasswordHandler = text => {
    setConfirmPassword(text);
    if (text !== userData.password) {
      setCPHMessage("Password doesn't match");
    } else {
      setCPHMessage('');
    }
  };
  useEffect(() => {
    if (
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userData.email) &&
      userData.password.trim().length >= 6 &&
      userData.name.trim().length >= 3 &&
      userData.password === confirmPassword
    ) {
      setButtonDisable(false);
    }
  }, [nameMessage, emailMessage, passwordMessage, CPHMessage]);

  const registerHandler = () => {
    if (
      nameMessage === false &&
      emailMessage === false &&
      passwordMessage === false
    ) {
      console.log('hello clicked');
      dispatch(userAction.register({...userData, id: uuid.v4()}));
      navigation.navigate('Login');
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
        style={styles.imageBackground}>
        <View style={styles.main}>
          <View>
            <Text style={styles.text}>Register</Text>
          </View>
          <View style={styles.inputField}>
            <Icon name="user" size={20} color="#215F8E" />
            <TextInput
              style={styles.textinput}
              placeholder="Name"
              onChangeText={nameHandler}></TextInput>
          </View>
          {nameMessage && (
            <Text style={{marginVertical: 5, marginLeft: 5, color: '#f00'}}>
              Name must be at least 3 characters
            </Text>
          )}
          <View style={styles.inputField}>
            <Icon name="email" size={20} color="#215F8E" />

            <TextInput
              style={styles.textinput}
              placeholder="Email ID"
              onChangeText={emailHandler}></TextInput>
          </View>
          {emailMessage && (
            <Text style={{marginVertical: 5, marginLeft: 5, color: '#f00'}}>
              Invalid Email
            </Text>
          )}
          <View style={styles.inputField}>
            <Icon name="lock" size={20} color="#215F8E" />

            <TextInput
              style={styles.textinput}
              placeholder="Password"
              secureTextEntry={true}
              onChangeText={passwordHandler}></TextInput>
          </View>
          {passwordMessage && (
            <Text style={{marginVertical: 5, marginLeft: 5, color: '#f00'}}>
              password length should be 6 or more
            </Text>
          )}

          <View style={styles.inputField}>
            <Icon name="lock" size={20} color="#215F8E" />

            <TextInput
              style={styles.textinput}
              placeholder="Confirm Password"
              secureTextEntry={true}
              onChangeText={text => {
                confirmPasswordHandler(text);
              }}></TextInput>
          </View>
          {CPHMessage && (
            <View>
              <Text style={{marginVertical: 5, marginLeft: 5, color: '#f00'}}>
                {CPHMessage}
              </Text>
            </View>
          )}
          <View style={styles.button}>
            <TouchableOpacity
              disabled={buttonDisable}
              onPress={registerHandler}>
              <Text style={{color: '#fff', textAlign: 'center'}}>Register</Text>
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
  imageBackground: {
    flex: 1,
    justifyContent: 'center',
  },
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
  textinput: {flex: 1, flexDirection: 'row'},
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
