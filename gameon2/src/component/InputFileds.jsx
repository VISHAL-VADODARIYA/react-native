import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import React from 'react';

export default function InputFileds({
  lable,
  icon,
  inputType,
  keybordType,
  filedButtonLabel,
  filedButtonFunction,
  value,
  onChangeText,
}) {
  return (
    <View
      style={{
        flexDirection: 'row',
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        paddingBottom: 8,
        marginBottom: 25,
        alignItems: 'center',
      }}>
      {icon}
      {inputType == 'password' ? (
        <TextInput
          placeholder={lable}
          keyboardType={keybordType}
          style={{flex: 1, paddingVertical: 0}}
          secureTextEntry={true}
          value={value}
          onChangeText={onChangeText}></TextInput>
      ) : (
        <TextInput
          placeholder={lable}
          keyboardType={keybordType}
          style={{flex: 1, paddingVertical: 0}}
          value={value}
          onChangeText={onChangeText}></TextInput>
      )}
      <TouchableOpacity onPress={filedButtonFunction}>
        <Text style={{color: '#AD40AF', fontWeight: '700'}}>
          {filedButtonLabel}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
