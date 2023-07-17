import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';

import {useDispatch} from 'react-redux';
import {userAction} from '../store/userSlice';
import uuid from 'react-native-uuid';
import Icon from 'react-native-vector-icons/dist/Entypo';

const RegisterScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const [userData, setUserData] = useState({name: '', email: '', password: ''});

  const registerHandler = () => {
    dispatch(userAction.register(userData));
    navigation.navigate('Login');
  };

  return (
    <SafeAreaView style={styles.main}>
      <View>
        <Text style={styles.text}>Register</Text>
      </View>
      <View style={styles.inputField}>
        <Icon name="user" size={20} color="#900" />

        <TextInput
          placeholder="Name"
          onChangeText={text =>
            setUserData({...userData, name: text})
          }></TextInput>
      </View>
      <View style={styles.inputField}>
        <Icon name="email" size={20} color="#900" />

        <TextInput
          placeholder="Email ID"
          onChangeText={text =>
            setUserData({...userData, email: text})
          }></TextInput>
      </View>
      <View style={styles.inputField}>
        <Icon name="email" size={20} color="#900" />

        <TextInput
          placeholder="Password"
          onChangeText={text =>
            setUserData({...userData, password: text})
          }></TextInput>
      </View>
      <View style={styles.button}>
        <TouchableOpacity onPress={() => {}}>
          <Text
            style={{color: '#fff', textAlign: 'center'}}
            onPress={registerHandler}>
            Register
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.signup}>
        <Text style={{fontSize: 15}}>Already You have Account? </Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Login');
          }}>
          <Text style={{fontSize: 15, color: '#690009', fontWeight: 800}}>
            Login
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  main: {
    padding: 5,
    marginTop: 100,
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
    color: '#690009',
  },
  button: {
    backgroundColor: '#690009',
    marginVertical: 20,
    padding: 15,
    borderRadius: 5,
  },
  signup: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

export default RegisterScreen;
