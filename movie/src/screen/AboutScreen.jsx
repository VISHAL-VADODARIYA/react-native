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
      style={[
        styles.container,
        {backgroundColor: isDarkTheme ? '#555' : '#fff'},
      ]}>
      <View
        style={[
          styles.header,
          {
            backgroundColor: isDarkTheme ? '#333' : '#B3C6D6',
          },
        ]}>
        <TouchableOpacity
          style={styles.goback}
          onPress={() => {
            navigation.openDrawer();
          }}>
          <Icon
            name="menu"
            size={24}
            color={isDarkTheme ? '#fff' : '#215F8E'}
          />
        </TouchableOpacity>
        <View style={styles.headerTextView}>
          <Text
            style={[
              styles.headerText,
              {
                color: isDarkTheme ? '#fff' : '#215F8E',
              },
            ]}>
            About Us
          </Text>
        </View>
      </View>

      <View style={styles.mainView}>
        <Text
          style={[styles.textJustify, {color: isDarkTheme ? '#fff' : '#777'}]}>
          This is movie listing with authentication which is shows movie data.
          which if fetch from api and show here in list formate.
        </Text>

        <TouchableOpacity onPress={() => {
            navigation.navigate('NoInternet');
          }}>
          <Text style={{fontSize:20,color:'#575757'}}>
          check Internet
          </Text>
        </TouchableOpacity>

        <Text
          style={[styles.textJustify, {color: isDarkTheme ? '#fff' : '#777'}]}>
          Created by Vishal Vadodariya
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
  header: {flexDirection: 'row'},
  goback: {alignSelf: 'center', paddingLeft: 20},
  headerText: {
    fontWeight: 900,
    fontSize: 18,
    textAlign: 'center',
  },
  headerTextView: {
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    shadowRadius: 2,
  },
  mainView: {
    flex: 1,
    margin: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textJustify: {textAlign: 'justify'},
});

export default AboutScreen;
