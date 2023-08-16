import {View, StyleSheet, TextInput} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Usercontact = () => {
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  return (
    <View style={styles.main}>
      <View style={styles.inputContainer}>
        {/* <Icon name="email" size={24} color="#D84E55" style={styles.icon} /> */}
        <TextInput
          style={styles.input}
          placeholder="Email ID"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />
      </View>
      <View style={styles.inputContainer}>
        {/* <Icon name="phone" size={24} color="#D84E55" style={styles.icon} /> */}
        <TextInput
          style={styles.input}
          placeholder="Phone"
          keyboardType="phone-pad"
          value={phoneNumber}
          onChangeText={setPhoneNumber}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    margin: 10,
    backgroundColor: '#fff',
    padding: 10,
    elevation: 5, // This is for Android
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  container: {
    padding: 20,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  inputContainer: {
    margin: 5,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  genderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: 'gray',
    borderBottomWidth: 1,
    paddingHorizontal: 10,
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
});

export default Usercontact;
