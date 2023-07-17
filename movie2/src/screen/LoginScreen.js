import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {userAction} from '../store/userSlice';
import Icon from 'react-native-vector-icons/dist/Entypo';

const LoginScreen = ({navigation}) => {
  const [userData, setUserData] = useState({email: '', password: ''});
  console.log(userData);
  const user = useSelector(state => state.user.user);
  const a = useSelector(state => state.user.activeUser);
  console.log(user);

  const [message, setMessage] = useState();
  const dispatch = useDispatch();
  const LoginHandler = () => {
    // const ky = Object.keys(user);
    console.log('called');
    let flag = true;
    for (let i of user) {
      if (i.email === userData.email && i.password === userData.password) {
        flag = false;
        dispatch(userAction.login(i));
      }
    }
    if (flag) {
      setMessage('inccorect Detail');
    } else {
      setMessage('');
      setUserData({email: '', password: ''});
      navigation.navigate('Home');
    }
  };
  return (
    <SafeAreaView style={styles.main}>
      <View>
        <Text style={styles.text}>Login</Text>
      </View>
      <View style={styles.inputField}>
        <Icon name="email" size={20} color="#900" />
        <TextInput
          style={{flexDirection: 'row'}}
          placeholder="Email ID"
          value={userData.email}
          onChangeText={text => {
            setUserData({...userData, email: text});
          }}></TextInput>
      </View>
      <View style={styles.inputField}>
        <Icon name="lock" size={20} color="#900" />
        <TextInput
          style={{flexDirection: 'row'}}
          secureTextEntry={true}
          placeholder="Password"
          value={userData.password}
          onChangeText={text => {
            setUserData({...userData, password: text});
          }}></TextInput>
      </View>
      <View style={styles.button}>
        <TouchableOpacity
          onPress={() => {
            LoginHandler();
          }}>
          <Text style={{color: '#fff', textAlign: 'center'}}>Login</Text>
        </TouchableOpacity>
      </View>
      {message && (
        <View>
          <Text>{message}</Text>
        </View>
      )}
      <View style={styles.signup}>
        <Text style={{fontSize: 15}}>You Don't Have Account ? </Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Register');
          }}>
          <Text style={{fontSize: 15, color: '#690009', fontWeight: 800}}>
            Register
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
export default LoginScreen;
