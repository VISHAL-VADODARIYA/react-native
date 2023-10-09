import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import DatePicker from 'react-native-datepicker';
import tailwind from 'react-native-wind';

const StylishForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = () => {
    // Handle form submission here
    console.log('Title:', title);
    console.log('Description:', description);
    console.log('Amount:', amount);
    console.log('Date:', date);
  };

  return (
    <View style={tailwind('p-4')}>
      <Text style={tailwind('text-xl font-semibold mb-4')}>Expense Form</Text>

      <View style={tailwind('mb-4')}>
        <Text style={tailwind('text-gray-600 mb-2')}>Title</Text>
        <TextInput
          style={tailwind('input')}
          placeholder="Enter title"
          value={title}
          onChangeText={(text) => setTitle(text)}
        />
      </View>

      <View style={tailwind('mb-4')}>
        <Text style={tailwind('text-gray-600 mb-2')}>Description</Text>
        <TextInput
          style={tailwind('input')}
          placeholder="Enter description"
          value={description}
          onChangeText={(text) => setDescription(text)}
        />
      </View>

      <View style={tailwind('mb-4')}>
        <Text style={tailwind('text-gray-600 mb-2')}>Amount</Text>
        <TextInput
          style={tailwind('input')}
          placeholder="Enter amount"
          value={amount}
          onChangeText={(text) => setAmount(text)}
          keyboardType="numeric"
        />
      </View>

      <View style={tailwind('mb-4')}>
        <Text style={tailwind('text-gray-600 mb-2')}>Date</Text>
        <DatePicker
          style={tailwind('input')}
          date={date}
          mode="date"
          placeholder="Select date"
          format="YYYY-MM-DD"
          onDateChange={(newDate) => setDate(newDate)}
        />
      </View>

      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

export default StylishForm;
