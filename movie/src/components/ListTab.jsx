import {View, Text, StyleSheet, Image, useColorScheme} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';
import {windowWidth} from '../utils/Dimensions';

const ListTab = ({res, movie}) => {
  const theme = useColorScheme();
  const isDarkTheme = theme === 'dark';
  return (
    <View
      style={[styles.list, {borderColor: isDarkTheme ? '#fff' : '#215f8e'}]}>
      <Image
        source={{
          uri: `https://image.tmdb.org/t/p/original/${res.poster_path}`,
        }}
        style={styles.image}
      />
      <View style={styles.textView}>
        <Text
          style={[styles.titleText, {color: isDarkTheme ? '#fff' : '#215F8E'}]}>
          {movie ? res.title : res.name}
        </Text>
        <View style={styles.textWarp}>
          <Text
            style={[styles.text, {color: isDarkTheme ? '#eaeaea' : '#777'}]}>
            Release Date : {movie ? res.release_date : res.first_air_date}
          </Text>
          <Text
            style={[styles.text, {color: isDarkTheme ? '#eaeaea' : '#777'}]}>
            Votes : {res.vote_count}
          </Text>
        </View>
      </View>
      <View style={styles.arrow}>
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
  image: {
    marginTop: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    borderRadius: 5,
    alignSelf: 'center',
    width: 90,
    height: 110,
  },
  textView: {
    width: windowWidth - 140,
    marginLeft: 10,
    marginTop: 2,
  },
  textWarp: {marginVertical: 10},
  text: {fontSize: 13},
  titleText: {fontSize: 18},
  arrow: {alignSelf: 'center', opacity: 0.8},
});
export default ListTab;
