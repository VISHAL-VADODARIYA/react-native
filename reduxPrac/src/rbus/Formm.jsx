import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';

import Usercontact from './usercontact';
import Passenger from './pInfo';

const Form = () => {
  return (
    <View style={styles.main}>
      <View>
        <Text style={styles.subtitle}>Contact Information</Text>
        <Usercontact />
        <Text style={styles.subtitle}>Passenger Information</Text>
        <Passenger />
      </View>
      <View style={styles.buttonView}>
        <View style={styles.buttonBgUpperLine}></View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  subtitle: {
    marginLeft: 10,
    color: '#000',
  },
  main: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  button: {
    backgroundColor: '#D84E55',
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonView: {
    padding: 10,
    justifyContent: 'center',
    backgroundColor: '#565656',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  buttonBgUpperLine: {
    alignSelf: 'center',
    padding: 3,
    backgroundColor: '#ccc',
    borderRadius: 5,
    width: 70,
    marginBottom: 10,
  },
});
export default Form;
