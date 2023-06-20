import {
  View,
  Text,
  Image,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useContext,useState} from 'react';
import GamingImg from '../../assets/4347656.png';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Google from '../../assets/svg/google-color-svgrepo-com.svg';
import Facebook from '../../assets/svg/facebook-svgrepo-com.svg';
import Twitter from '../../assets/svg/twitter-color-svgrepo-com.svg';
import CustomButton from '../component/CustomButton';
import InputFileds from '../component/InputFileds';
import {AuthContxt} from '../context/AuthContext';

export default function Login({navigation}) {

  const [email, setEmail]=useState(null)
  const [passwod, setPassword]=useState(null)

  const {login} = useContext(AuthContxt);

  const loginHandle = () => {
    login(email, passwod);
  };
  return (
    <SafeAreaView
      style={{flex: 1, justifyContent: 'center', backgroundColor: '#fff'}}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{paddingHorizontal: 25}}>
        <View style={{alignItems: 'center'}}>
          <Image
            source={GamingImg}
            style={{
              width: 300,
              height: 300,
              transform: [{rotate: '-15deg'}],
            }}></Image>
        </View>
        <Text
          style={{
            fontFamily: 'Roboto-Medium',
            fontSize: 28,
            fontWeight: '500',
            color: '#333',
            marginBottom: 30,
          }}>
          Login
        </Text>
        <InputFileds
          lable={'Email ID'}
          icon={
            <MaterialIcons
              name="alternate-email"
              size={20}
              color="#666"
              style={{marginRight: 5}}></MaterialIcons>
          }
          keybordType="email-address"
          value={email}
          onChangeText={text => setEmail(text)}></InputFileds>
        <InputFileds
          lable={'Password'}
          icon={
            <Ionicons
              name="ios-lock-closed-outline"
              size={20}
              color="#666"
              style={{marginRight: 5}}></Ionicons>
          }
          inputType="password"
          filedButtonLabel={'Forgot?'}
          filedButtonFunction={() => {}}
          value={passwod}
          onChangeText={text => setPassword(text)}></InputFileds>

        <CustomButton
          lable={'Login'}
          onPress={loginHandle}></CustomButton>

        <Text style={{textAlign: 'center', marginBottom: 30, color: '#666'}}>
          Or, login with...
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 30,
          }}>
          <TouchableOpacity
            onPress={() => {}}
            style={{
              borderColor: '#ddd',
              borderWidth: 2,
              borderRadius: 10,
              paddingHorizontal: 30,
              paddingVertical: 10,
            }}>
            <Google height={24} width={24}></Google>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {}}
            style={{
              borderColor: '#ddd',
              borderWidth: 2,
              borderRadius: 10,
              paddingHorizontal: 30,
              paddingVertical: 10,
            }}>
            <Facebook height={24} width={24}></Facebook>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {}}
            style={{
              borderColor: '#ddd',
              borderWidth: 2,
              borderRadius: 10,
              paddingHorizontal: 30,
              paddingVertical: 10,
            }}>
            <Twitter height={24} width={24}></Twitter>
          </TouchableOpacity>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginBottom: 30,
          }}>
          <Text>New to the app?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text style={{color: '#AD40AF', fontWeight: '700'}}> Register</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
