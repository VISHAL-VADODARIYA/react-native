import {TouchableOpacity, Text} from 'react-native';
import React from 'react'

export default function CustomButton({lable,onPress}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: '#AD40AF',
        padding: 20,
        borderRadius: 10,
        marginBottom: 30,
      }}>
      <Text style={{textAlign: 'center', fontWeight: '700', color: '#fff'}}>
        {lable}
      </Text>
    </TouchableOpacity>
  );
}