import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  useColorScheme,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/dist/Entypo';
import {StyleSheet} from 'react-native';

const AboutScreen = ({navigation}) => {
  const theme = useColorScheme();
  const isDarkTheme = theme === 'dark';
  return (
    <SafeAreaView
      style={{flex: 1, backgroundColor: isDarkTheme ? '#555' : '#fff'}}>
      {/* <View style={styles.shadow}> */}
      <View
        style={{
          backgroundColor: isDarkTheme ? '#333' : '#B3C6D6',
          flexDirection: 'row',
        }}>
        <TouchableOpacity
          style={{alignSelf: 'center', paddingLeft: 20}}
          onPress={() => {
            navigation.openDrawer();
          }}>
          <Icon
            name="menu"
            size={24}
            color={isDarkTheme ? '#fff' : '#215F8E'}
          />
        </TouchableOpacity>
        <View
          style={{
            padding: 15,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            shadowRadius: 2,
          }}>
          <Text
            style={{
              fontWeight: 900,
              fontSize: 18,
              color: isDarkTheme ? '#fff' : '#215F8E',
              textAlign: 'center',
            }}>
            About Us
          </Text>
        </View>
      </View>
      {/* </View> */}
      <View
        style={{margin: 10, justifyContent: 'space-between', alignItems: 'center'}}>
        <Text style={{color: isDarkTheme ? '#fff' : '#777'}}>
          this is movie listing with authentication which is shows movie data.
          which if fetch from api and show here in list formate.
        </Text>
        <Text></Text>
        <Text style={{color: isDarkTheme ? '#fff' : '#777'}}>
          created by vishal Vadodariya
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  main: {
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    shadowRadius: 2,
    backgroundColor: '#fff',
  },
  // shadow: {
  //   shadowColor: '#171717',
  //   shadowOffset: {width: -2, height: 4},
  //   shadowOpacity: 0.2,
  //   shadowRadius: 3,
  // },
});

export default AboutScreen;
