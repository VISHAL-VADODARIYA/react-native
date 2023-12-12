import React from 'react';
import {View, Text, TouchableOpacity, SafeAreaView, StyleSheet} from 'react-native';
import { windowHeight } from '../util/Dimensions';
import Card from '../components/Card';
import Transction from '../components/Transction';

const HomeScreen = ({navigation}) => {
  const [date, setDate] = useState(new Date())
  const [open, setOpen] = useState(false)
  return (
    <SafeAreaView className="flex-1">
      
      <DatePicker
        modal
        open={open}
        date={date}
        onConfirm={(date) => {
          setOpen(false)
          setDate(date)
        }}
        onCancel={() => {
          setOpen(false)
        }}
      />
      <View style={styles.mainTopBar} onPress={() => setOpen(true)} className="flx-1 flex-row items-center justify-between mx-3">
        <View className="">
          <Text>{date.getDay} ,</Text>
          <Text className="font-bold">{date.getDate}, {date.getMonth}</Text>
        </View>
        <View>
          <Text>icon</Text>
        </View>
      </View>
      
      {/* Main Card */}
      <View className="my-2">
      <Card />
      </View>

      {/* Today Transaction */}
      <View className="mx-3 my-3">
        <Text className="font-bold text-xl">Today's Transaction</Text>
      </View>

      {/* Transaction list  */}

      <View className="mx-2">
        <Transction />
      </View>

      <TouchableOpacity
        className="absolute bottom-20 bg-blue-600 px-3 py-1 rounded-full "
        onPress={() => navigation.navigate('Entry')}>
        <Text className="text-white font-bold text-2xl">+</Text>
      </TouchableOpacity>

      {/* List of expenses can be displayed here */}
    </SafeAreaView>
  );
};

export default HomeScreen;


const styles = StyleSheet.create({
  mainTopBar:{
    height: windowHeight/20
  }
})
