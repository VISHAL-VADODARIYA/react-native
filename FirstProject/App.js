/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect, useState } from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

const Context = React.createContext('Default Value');

function App() {

  const [data, setData] = useState(undefined)

  const getApiData = async () => {
    const url = "https://jsonplaceholder.typicode.com/posts/1";
    let results = await fetch(url);
    results = await results.json();
    setData(results)
  }
  useEffect(() => {
    getApiData();
  }, [])


  return (

    <View style={styles.container}>

      <Text style={styles.welcome}>Context Api In React-Native </Text>

      <Context.Provider value={data}>

        <Child />
      </Context.Provider>

    </View>

  );
}

function Child() {
  return (
    <View style={styles.container}>
      <Context.Consumer>
        {data ?<View>
          <Text style={styles.child}> id: {data.id} </Text>
          <Text style={styles.child}> userId: {data.userId} </Text>
          <Text style={styles.child}> title: {data.title} </Text>
          <Text style={styles.child}> body: {data.body} </Text>
        </View> :null
        
      }
      </Context.Consumer>
    </View>
  )
}

const styles = StyleSheet.create(
  {
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF'
    },
    child: {
      fontSize: 18,
      textAlign: 'center',
      margin: 10,
      color: '#454545'
    },
    welcome: {
      fontSize: 25,
      fontWeight: 'bold',
      textAlign: 'center',
      margin: 10,
      color: '#e4a934'
    }
  })


export default App;
