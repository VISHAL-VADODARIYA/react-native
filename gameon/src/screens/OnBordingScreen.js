//import liraries
import React from 'react';

import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import GamingImg from '../assets/gaming.svg';

export  default function OnBordingScreen({navigation}) {
    return (
      <SafeAreaView
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#fff',
        }}>
        <View>
          <Text
            style={{
              fontSize: 30,
              fontWeight: 'bold',
              color: '#20315f',
              fontFamily: 'Inter-Bold',
            }}>
            {' '}
            GAME ON
          </Text>
        </View>
        <GamingImg width={300} height={300}></GamingImg>
        <TouchableOpacity
          onPress={() => navigation.navigate('Login')}
          style={{
            backgroundColor: '#AD40AF',
            padding: 20,
            width: '90%',
            borderRadius: 5,
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 18,
              color: '#fff',
              fontFamily: 'Roboto-MediumItalic',
            }}>
            Lets's Begin
          </Text>
          <MaterialIcons name="arrow-forward-ios" size={22} color="#fff" />
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
