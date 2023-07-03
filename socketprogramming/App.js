

import React, { useState, useEffect } from 'react';

import { ScrollView, TextInput, Text, View } from 'react-native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import Home from './src/screen/Home';
// import Info from './src/screen/Info';
// import Profile from './src/screen/Profile';
// import { NavigationContainer } from '@react-navigation/native';
import io from 'socket.io-client';

function App() {
  // const Tab = createBottomTabNavigator();

  const [message, setMessage] = useState('');
  const [messageSave, setMessageSave] = useState([]);
  const [socket, setSocket] = useState(io());


  useEffect(() => {
    setSocket(io('http://192.168.101.162:3000'));
    io('http://192.168.101.162:3000').on('chat message', msg => {
      setMessageSave((old) => [...old, msg]);
      
    });
  }, [])

  const submitChatMessage = () => {
    socket.emit('chat message', message);

    setMessage('');
  };



  return (
    <View>
      <TextInput
        style={{ height: 40, borderWidth: 2 }}
        value={message}
        onSubmitEditing={() => {
          submitChatMessage();
        }}
        autoCorrect={false}
        onChangeText={x => {
          setMessage(x);
        }}
      ></TextInput>
      <ScrollView >
        {messageSave.map((res, i) => (
          <Text key={res + i}>{res}</Text>
        ))}
      </ScrollView>

    </View>
    // <NavigationContainer>
    //   <Tab.Navigator>
    //     <Tab.Screen name='Home' component={Home} />
    //     <Tab.Screen name='Info' component={Info} />
    //     <Tab.Screen name='Profile' component={Profile} />
    //   </Tab.Navigator>
    // </NavigationContainer>
  );
}

export default App;
