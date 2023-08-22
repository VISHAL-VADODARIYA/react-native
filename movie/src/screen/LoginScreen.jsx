import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Alert,
  ImageBackground,
  useColorScheme,
} from 'react-native';
import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {userAction} from '../store/userSlice';
import Icon from 'react-native-vector-icons/dist/Entypo';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginScreen = ({navigation}) => {
  const [userData, setUserData] = useState({email: '', password: ''});
  const [emailMessage, setEmailMessage] = useState(false);
  const [passwordMessage, setPasswordMessage] = useState(false);

  // console.log(userData);
  const theme = useColorScheme();
  const isDarkTheme = theme === 'dark';

  const user = useSelector(state => state.user.user);
  const a = useSelector(state => state.user.activeUser);
  const isLoggedIn = useSelector(state => state.user.flag);

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
    if (userData.email !== '' && userData.password !== '') {
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
        style={styles.backgroundImage}>
        <View
          style={[
            styles.main,
            {backgroundColor: isDarkTheme ? '#555' : '#E8EFF7'},
          ]}>
          <View>
            <Text
              style={[styles.text, {color: isDarkTheme ? '#fff' : '#215E8F'}]}>
              Login
            </Text>
          </View>
          <View
            style={[
              styles.inputField,
              {borderBottomColor: isDarkTheme ? '#fff' : '#215E8F'},
            ]}>
            <Icon
              name="email"
              size={20}
              color={isDarkTheme ? '#fff' : '#215E8F'}
            />
            <TextInput
              style={[styles.textInput, {color: isDarkTheme ? '#fff' : '#333'}]}
              placeholder="Email ID"
              placeholderTextColor={isDarkTheme ? '#fff' : '#333'}
              autoCapitalize="none"
              value={userData.email}
              onChangeText={text => {
                setUserData({...userData, email: text});
              }}></TextInput>
          </View>
          {emailMessage && (
            <Text style={styles.validateMessage}>Enter Valid Email</Text>
          )}
          <View
            style={[
              styles.inputField,
              {borderBottomColor: isDarkTheme ? '#fff' : '#215E8F'},
            ]}>
            <Icon
              name="lock"
              size={20}
              color={isDarkTheme ? '#fff' : '#215E8F'}
            />
            <TextInput
              style={[styles.textInput, {color: isDarkTheme ? '#fff' : '#333'}]}
              placeholderTextColor={isDarkTheme ? '#fff' : '#333'}
              secureTextEntry={true}
              autoCapitalize="none"
              placeholder="Password"
              value={userData.password}
              onChangeText={text => {
                setUserData({...userData, password: text});
              }}></TextInput>
          </View>
          {passwordMessage && (
            <Text style={styles.validateMessage}>Enter Valid Password</Text>
          )}

          <TouchableOpacity
            onPress={() => {
              LoginHandler();
            }}
            style={[
              styles.button,
              {backgroundColor: isDarkTheme ? '#fff' : '#215E8F'},
            ]}>
            <Text
              style={[
                styles.buttonText,
                {
                  color: isDarkTheme ? '#333' : '#fff',
                },
              ]}>
              Login
            </Text>
          </TouchableOpacity>

          <View style={styles.signup}>
            <Text
              style={[
                styles.dontHaveText,
                {color: isDarkTheme ? '#fff' : '#333'},
              ]}>
              You Don't Have Account ?{' '}
            </Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Register');
              }}>
              <Text
                style={[
                  styles.goToRegisterText,
                  {color: isDarkTheme ? '#fff' : '#215E8F'},
                ]}>
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
  container: {flex: 1},
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
  },
  main: {
    opacity: 1,
    padding: 15,
    marginTop: -150,
    paddingVertical: 30,
    margin: 10,
    borderRadius: 10,
  },
  text: {
    fontSize: 30,
    marginVertical: 5,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  inputField: {
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderBottomWidth: 1,
    margin: 5,
    flexDirection: 'row',
  },
  textInput: {flex: 1, flexDirection: 'row', paddingLeft: 10},
  button: {
    backgroundColor: '#215E8F',
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
  signup: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  dontHaveText: {fontSize: 15},
  goToRegisterText: {
    fontSize: 15,
    fontWeight: 800,
  },
  validateMessage: {marginVertical: 5, marginLeft: 5, color: '#f00'},
});
export default LoginScreen;
