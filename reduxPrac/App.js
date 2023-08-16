import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import Users from './src/user';
import SomethingWentWrong from './src/SomethingWentWrong';
import NoBusesFound from './src/NoBusesFound';
import UserDetailForm from './src/UserDetailForm';
import UserDetailsForm from './src/TicketForm';
import Form from './src/rbus/Formm';
import DetailForm from './src/RbusForm/DetailForm';
import PaymentScreen from './src/RbusForm/PaymentScreen';
import PayScreen from './src/rozerPay/payScreen';
import Webview from './src/webview/webview';

function App() {
  return (
    <SafeAreaView style={{flex: 1}}>
      {/* <Users /> */}
      {/* <SomethingWentWrong /> */}
      {/* <NoBusesFound /> */}
      {/* <UserDetailForm /> */}
      {/* <UserDetailsForm /> */}
      {/* <Form /> */}
      {/* <DetailForm /> */}
      {/* <PaymentScreen /> */}
      {/* <PayScreen /> */}
      <Webview />
    </SafeAreaView>
  );
}

export default App;
