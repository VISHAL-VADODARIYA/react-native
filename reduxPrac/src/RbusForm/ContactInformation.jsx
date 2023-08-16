import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import PassengerInformation from './PassengerInformation';

const ContactInformation = () => {
  return (
    <View>
      <Text>Contact Information</Text>
      <ContactInformation />
      <Text>Passenger Information</Text>
      <PassengerInformation />
    </View>
  );
};
const styles = StyleSheet.create({});
export default ContactInformation;
