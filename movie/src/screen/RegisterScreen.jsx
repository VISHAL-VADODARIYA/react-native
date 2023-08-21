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
  useColorScheme,
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


  const theme = useColorScheme();
  const isDarkTheme = theme === 'dark';

  // const urlDark =

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
    <SafeAreaView
      style={[
        styles.container,
        {backgroundColor: isDarkTheme ? '#555' : '#E8EFF7'},
      ]}>
      <ImageBackground
        source={{
          uri: isDarkTheme
            ? 'https://images.unsplash.com/photo-1574790335676-2a2bb9d70d08?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8&w=1000&q=80'
            : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqy5ytbJuBCv9t55-A_ZxR22_FufHk9dI8fw&usqp=CAU',
        }}
        resizeMode="cover"
        style={styles.imageBackground}>
        <View
          style={[
            styles.main,
            {backgroundColor: isDarkTheme ? '#555' : '#E8EFF7'},
          ]}>
          <View>
            <Text
              style={[styles.text, {color: isDarkTheme ? '#fff' : '#215F8E'}]}>
              Register
            </Text>
          </View>
          <View
            style={[
              styles.inputField,
              {borderBottomColor: isDarkTheme ? '#fff' : '#215F8E'},
            ]}>
            <Icon
              name="user"
              size={20}
              color={isDarkTheme ? '#fff' : '#215F8E'}
            />
            <TextInput
              style={[styles.textinput, {color: isDarkTheme ? '#fff' : '#333'}]}
              placeholder="Name"
              placeholderTextColor={isDarkTheme ? '#fff' : '#333'}
              autoCapitalize="none"
              onChangeText={nameHandler}></TextInput>
          </View>
          {nameMessage && (
            <Text style={styles.validateMessage}>
              Name must be at least 3 characters
            </Text>
          )}
          <View
            style={[
              styles.inputField,
              {borderBottomColor: isDarkTheme ? '#fff' : '#215F8E'},
            ]}>
            <Icon
              name="email"
              size={20}
              color={isDarkTheme ? '#fff' : '#215F8E'}
            />

            <TextInput
              style={[styles.textinput, {color: isDarkTheme ? '#fff' : '#333'}]}
              placeholder="Email ID"
              placeholderTextColor={isDarkTheme ? '#fff' : '#333'}
              autoCapitalize="none"
              onChangeText={emailHandler}></TextInput>
          </View>
          {emailMessage && (
            <Text style={styles.validateMessage}>Invalid Email</Text>
          )}
          <View
            style={[
              styles.inputField,
              {borderBottomColor: isDarkTheme ? '#fff' : '#215F8E'},
            ]}>
            <Icon
              name="lock"
              size={20}
              color={isDarkTheme ? '#fff' : '#215F8E'}
            />

            <TextInput
              style={[styles.textinput, {color: isDarkTheme ? '#fff' : '#333'}]}
              placeholder="Password"
              placeholderTextColor={isDarkTheme ? '#fff' : '#333'}
              autoCapitalize="none"
              secureTextEntry={true}
              onChangeText={passwordHandler}></TextInput>
          </View>
          {passwordMessage && (
            <Text style={styles.validateMessage}>
              password length should be 6 or more
            </Text>
          )}

          <View
            style={[
              styles.inputField,
              {borderBottomColor: isDarkTheme ? '#fff' : '#215F8E'},
            ]}>
            <Icon
              name="lock"
              size={20}
              color={isDarkTheme ? '#fff' : '#215F8E'}
            />

            <TextInput
              style={[styles.textinput, {color: isDarkTheme ? '#fff' : '#333'}]}
              placeholder="Confirm Password"
              placeholderTextColor={isDarkTheme ? '#fff' : '#333'}
              autoCapitalize="none"
              secureTextEntry={true}
              onChangeText={text => {
                confirmPasswordHandler(text);
              }}></TextInput>
          </View>
          {CPHMessage && (
            <View>
              <Text style={styles.validateMessage}>{CPHMessage}</Text>
            </View>
          )}

          <TouchableOpacity
            disabled={buttonDisable}
            onPress={registerHandler}
            style={[
              styles.button,
              {backgroundColor: isDarkTheme ? '#fff' : '#215F8E'},
            ]}>
            <Text
              style={[
                styles.buttonText,
                {
                  color: isDarkTheme ? '#333' : '#fff',
                },
              ]}>
              Register
            </Text>
          </TouchableOpacity>
          <View style={styles.signin}>
            <Text
              style={[
                styles.dontHaveText,
                {color: isDarkTheme ? '#fff' : '#333'},
              ]}>
              Already You have Account?{' '}
            </Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Login');
              }}>
              <Text
                style={[
                  styles.goToLoginText,
                  {color: isDarkTheme ? '#fff' : '#215F8E'},
                ]}>
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
  container: {flex: 1},
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
    paddingVertical: 5,
    borderBottomWidth: 1,
    margin: 5,
    flexDirection: 'row',
  },
  textinput: {flex: 1, flexDirection: 'row', paddingLeft: 10},
  text: {
    fontSize: 30,
    marginVertical: 5,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#215F8E',
    marginVertical: 20,
    padding: 15,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  buttonText: {
    textAlign: 'center',
    flexDirection: 'row',
    fontWeight: 600,
    fontSize: 15,
  },
  signin: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  dontHaveText: {fontSize: 15},
  goToLoginText: {
    fontSize: 15,
    fontWeight: 800,
  },
  validateMessage: {marginVertical: 5, marginLeft: 5, color: '#f00'},
});

export default RegisterScreen;
