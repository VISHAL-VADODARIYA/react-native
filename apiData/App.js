import React, { useEffect, useState } from 'react';
import { ScrollView, Text, View } from 'react-native';

function App() {

  const [data, setData] = useState([]);
  const getApiData = async () => {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    let result = await fetch(url).then(async (res) => {
      if (res.status === 200) {
        result = await res.json();
        setData(result);
        console.warn(data)
      } else {
        console.log("error while fetching")
      }
    }).catch((err) => {
      console.log("err ::::", err);
    });


  }

  useEffect(() => {
    getApiData()
  }, []);

  return (
    <View>
      <View style={{
        backgroundColor: '#015F78'
      }}>
        <Text style={{ color: 'black', fontSize: 30,fontWeight:'bold', backgroundColor: '#fff', borderBottomWidth: 3, borderBottomColor: 'red', textAlign: 'center', paddingVertical: 10, borderRadius: 50, margin: 10 }}>Api Data Call</Text>
      </View>
      <ScrollView style={{ backgroundColor: '#fff'}}>

        {data.length ?
          data.map((item, index) => (
            <View key={'item' + index} style={{ margin: 10, borderWidth: 1, borderBottomColor: 'orange', borderRadius: 10, overflow: 'hidden' }}>
              <View style={{flex: 1, backgroundColor: '#00f5f6' }}>
                <Text style={{ alignSelf: 'center', fontSize: 25,fontWeight:'bold',color:'#0a0990' }}>Id : {item.id}</Text>
              </View>
              <Text style={{ fontSize: 20, color: 'green', marginHorizontal: 10 }}>Title : {item.title}</Text>
              <Text style={{ fontSize: 15, color: 'black', marginHorizontal: 10 }}>Body : {item.body}</Text>
            </View>
          ))
          : null}
      </ScrollView></View>
  );
}

export default App;
