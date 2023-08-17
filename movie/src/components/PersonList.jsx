import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  ActivityIndicator,
  Image,
  ImageBackground,
  useColorScheme,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';
import {windowWidth} from '../utils/Dimensions';

const PersonList = ({res, main}) => {
  const theme = useColorScheme();
  const isDarkTheme = theme === 'dark';
  return (
    <View
      style={[styles.list, {borderColor: isDarkTheme ? '#fff' : '#215f8e'}]}>
      <Image
        source={{
          uri: `https://image.tmdb.org/t/p/original/${
            main ? res.poster_path : res.profile_path
          }`,
        }}
        style={{
          marginTop: 5,
          flexDirection: 'row',
          justifyContent: 'center',
          borderRadius: 5,
          alignSelf: 'center',
          width: 90,
          height: 110,
        }}
      />
      <View
        style={{
          width: windowWidth - 140,
          marginLeft: 10,
          marginTop: 2,
        }}>
        <Text style={{fontSize: 18, color: isDarkTheme ? '#fff' : '#215F8E'}}>
          {res.name}
        </Text>
        <View style={{marginVertical: 10}}>
          <Text style={{fontSize: 13, color: isDarkTheme ? '#eaeaea' : '#777'}}>
            Gender : {res.gender === 2 ? 'Male' : 'Female'}
          </Text>
          <Text style={{fontSize: 13, color: isDarkTheme ? '#eaeaea' : '#777'}}>
            Famous for : {res.known_for_department}
          </Text>
        </View>
      </View>
      <View style={{alignSelf: 'center', opacity: 0.8}}>
        <Icon
          name="arrow-forward-ios"
          size={20}
          color={isDarkTheme ? '#fff' : '#215F8E'}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  main: {
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    shadowRadius: 2,
    backgroundColor: '#B3C6D6',
  },
  list: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 0.5,
    borderRightWidth: 0.5,

    margin: 5,
    padding: 5,
    borderRadius: 5,
  },
});
export default PersonList;
