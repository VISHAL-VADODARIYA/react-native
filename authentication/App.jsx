/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';

import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {Provider, useDispatch, useSelector} from 'react-redux';
import {login} from './store/userSlice';
import store from './store/store';

function App() {
  const [message, setMessage] = useState();
  const [loginn, setLoginn] = useState({email: '', password: ''});

  const dispatch = useDispatch();
  const userData = useSelector(state => state.user.userlist);
  const loginHandler = () => {
    if (!userData.includes(loginn.email)) {
      setMessage('incorrect email');
    } else {
      if (!userData.includes(loginn.password)) {
        setMessage('incorrect password');
      } else {
        dispatch(login(loginn));
        setMessage('login successful');
      }
    }
  };
  return (
    <Provider store={store}>
      <View style={styles.main}>
        <View style={styles.formView}>
          <Text style={styles.textlogin}>Login</Text>
          <View style={styles.field}>
            <View style={styles.field}>
              <Text style={styles.text}>Email :</Text>
              <TextInput
                style={styles.textInput}
                placeholder="Enter Your Email"
                onChangeText={text =>
                  setLoginn({...loginn, email: text})
                }></TextInput>
            </View>
            <View style={styles.field}>
              <Text style={styles.text}>Password :</Text>
              <TextInput
                style={styles.textInput}
                placeholder="Enter Your password"
                onChangeText={text =>
                  setLoginn({...loginn, password: text})
                }></TextInput>
            </View>
            <TouchableOpacity
              onPress={loginHandler}
              style={{
                backgroundColor: '#D5E6EB',
                padding: 5,
                borderRadius: 20,
                alignSelf: 'center',
                width: '40%',
                marginTop: 30,
              }}>
              <Text style={{textAlign: 'center'}}> Login </Text>
            </TouchableOpacity>
          </View>
          {message && <Text>{message}</Text>}
        </View>
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#D5E6EB',
    justifyContent: 'center',
    alignItems: 'center',
    height: '30',
  },
  formView: {
    borderRadius: 5,
    padding: 10,
    backgroundColor: '#0C6C89',
    height: 288,
    width: 288,
  },
  field: {
    marginTop: 15,
    marginVertical: 5,
  },
  textlogin: {
    color: '#D5E6EB',
    fontSize: 20,
    fontWeight: '700',
  },
  text: {
    color: '#D5E6EB',
    fontSize: 15,
    fontWeight: '700',
    marginBottom: 5,
  },
  textInput: {
    padding: 5,
    borderRadius: 4,
    backgroundColor: '#fff',
    color: '#0C6C89',
    fontWeight: '600',
  },
  button: {
    color: '#90ff90',
    backgroundColor: '#cdeded',
    width: 50,
    justifyContent: 'center',
  },
});

export default App;
