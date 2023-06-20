import React from 'react';
import {SafeAreaView, Text, TouchableOpacity, View, Image} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import GamingImg from '../../assets/4347656.png';

const Main = ({navigation}) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#fff',
      }}>
      <View>
        <Text
          style={{
            fontSize: 30,
            fontWeight: 'bold',
            color: '#20315f',
            marginTop: 20,
            fontFamily: 'Roboto-Medium',
          }}>
          GAMEON
        </Text>
      </View>
      <View>
        <Image
          source={GamingImg}
          style={{
            width: 300,
            height: 300,
            transform: [{rotate: '-15deg'}],
          }}></Image>
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate('Login')}
        style={{
          backgroundColor: '#AD40AF',
          padding: 20,
          width: '90%',
          borderRadius: 5,
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginBottom: 50,
        }}>
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 18,
            color: '#fff',
            fontStyle:'italic',
            fontFamily: 'Roboto-MediumItalic',
          }}>
          Let's Begin
        </Text>
        <MaterialIcons name="arrow-forward-ios" size={22} color="#fff" />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Main;
