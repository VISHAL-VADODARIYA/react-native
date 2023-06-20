import {
  View,
  Text,
  Image,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import GamingImg from '../../assets/4347656.png';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Google from '../../assets/svg/google-color-svgrepo-com.svg';
import Facebook from '../../assets/svg/facebook-svgrepo-com.svg';
import Twitter from '../../assets/svg/twitter-color-svgrepo-com.svg';
import InputFileds from '../component/InputFileds';
import CustomButton from '../component/CustomButton';
import DatePicker from 'react-native-date-picker';

export default function Register({navigation}) {
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [dobLable, setDobLable] = useState('Date of Birth');

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
          Register
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

        <Text style={{textAlign: 'center', marginBottom: 30, color: '#666'}}>
          Or, register with email...
        </Text>

        <InputFileds
          lable={'Full Name'}
          icon={
            <Ionicons
              name="person-outline"
              size={20}
              color="#666"
              style={{marginRight: 5}}></Ionicons>
          }></InputFileds>
        <InputFileds
          lable={'Email ID'}
          icon={
            <MaterialIcons
              name="alternate-email"
              size={20}
              color="#666"
              style={{marginRight: 5}}></MaterialIcons>
          }
          keybordType="email-address"></InputFileds>
        <InputFileds
          lable={'Password'}
          icon={
            <Ionicons
              name="ios-lock-closed-outline"
              size={20}
              color="#666"
              style={{marginRight: 5}}></Ionicons>
          }
          inputType="password"></InputFileds>
        <InputFileds
          lable={'Confirm Password'}
          icon={
            <Ionicons
              name="ios-lock-closed-outline"
              size={20}
              color="#666"
              style={{marginRight: 5}}></Ionicons>
          }
          inputType="password"></InputFileds>
        
        <View
          style={{
            flexDirection: 'row',
            borderBottomColor: '#ccc',
            borderBottomWidth: 1,
            paddingBottom: 8,
            marginBottom: 30,
            alignItems: 'center',
          }}>
          <Ionicons
            name="calendar-outline"
            size={20}
            color="#666"
            style={{marginRight: 5}}></Ionicons>
          <TouchableOpacity onPress={() => setOpen(true)}>
            <Text style={{color: '#666', marginLeft: 5}}>{dobLable}</Text>
          </TouchableOpacity>
        </View>
        <DatePicker
          modal
          open={open}
          date={date}
          mode={'date'}
          maximumDate={new Date('2005-01-01')}
          minimumDate={new Date('1980-01-01')}
          onConfirm={date => {
            setOpen(false);
            setDate(date);
            setDobLable(date.toDateString())
          }}
          onCancel={() => {
            setOpen(false);
          }}
        />

        <CustomButton lable={'Register'} onPress={() => {}}></CustomButton>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginBottom: 30,
          }}>
          <Text>Already registered?</Text>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={{color: '#AD40AF', fontWeight: '700'}}> Login</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
