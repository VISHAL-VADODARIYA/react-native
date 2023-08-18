import {
  View,
  Text,
  Image,
  ActivityIndicator,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  Linking,
  useColorScheme,
  StyleSheet,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/dist/FontAwesome5';
import {windowWidth} from '../utils/Dimensions';

const SeasonsScreen = ({route, navigation}) => {
  const {e} = route.params;
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
            navigation.goBack();
          }}>
          <Icon
            name="arrow-left"
            size={20}
            color={isDarkTheme ? '#fff' : '#215F8E'}
          />
        </TouchableOpacity>
        <View style={styles.titleTextView}>
          <Text
            style={[
              styles.titleText,
              {
                color: isDarkTheme ? '#fff' : '#215F8E',
              },
            ]}>
            {e.name}
          </Text>
        </View>
      </View>
      <View style={styles.scrollviewWrap}>
        {e ? (
          <ScrollView showsVerticalScrollIndicator={false} key={`2${e.id}`}>
            <View>
              <Image
                source={{
                  uri: `https://image.tmdb.org/t/p/original/${e.poster_path}`,
                }}
                style={styles.image}
              />
            </View>

            <View style={styles.textheadView}>
              <Text
                style={[
                  styles.texthead,
                  {color: isDarkTheme ? '#fff' : '#777'},
                ]}>
                <Text style={[styles.text, {fontWeight: 900}]}>
                  Release Date :{' '}
                </Text>
                {e.air_date}
              </Text>
            </View>
            <View style={styles.textheadView}>
              <Text
                style={[
                  styles.texthead,
                  {color: isDarkTheme ? '#fff' : '#777'},
                ]}>
                <Text style={[styles.text, {fontWeight: 900}]}>Seasons : </Text>
                {e.season_number}
              </Text>
            </View>
            <View style={styles.textheadView}>
              <Text
                style={[
                  styles.texthead,
                  {color: isDarkTheme ? '#fff' : '#777'},
                ]}>
                <Text style={[styles.text, {fontWeight: 900}]}>Rating : </Text>
                {e.vote_average === 0 ? '6' : `${e.vote_average.toFixed(1)}`}/10
                <Text
                  style={[
                    styles.star,
                    {
                      color: isDarkTheme ? '#fff' : '#215f8e',
                    },
                  ]}>
                  ★
                </Text>
              </Text>
            </View>
            <View style={styles.textheadView}>
              <Text
                style={[
                  styles.texthead,
                  {color: isDarkTheme ? '#fff' : '#777'},
                ]}>
                <Text style={[styles.text, {fontWeight: 900}]}>
                  Total Episode :{' '}
                </Text>
                {e.episode_count}
              </Text>
            </View>
          </ScrollView>
        ) : (
          <View
            style={styles.activity}>
            <ActivityIndicator
              size="large"
              color={isDarkTheme ? '#fff' : '#215f8e'}
            />
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

export default SeasonsScreen;

const styles = StyleSheet.create({
  container: {flex: 1},
  header: {flexDirection: 'row'},
  goback: {alignSelf: 'center', paddingLeft: 20},
  titleTextView: {
    padding: 15,
    flexDirection: 'row',
    shadowRadius: 2,
    width: windowWidth - 50,
    overflow: 'hidden',
  },
  titleText: {
    fontWeight: 900,
    fontSize: 18,
    textAlign: 'center',
  },
  scrollviewWrap: {
    flex: 1,
    marginHorizontal: 10,
    justifyContent: 'center',
  },
  image: {
    marginTop: 20,
    marginBottom: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: 'center',
    width: 400,
    height: 240,
    resizeMode: 'center',
  },
  texthead: {
    margin: 5,
    fontSize: 15,
    marginVertical: 4,
    textAlign: 'justify',
  },
  textheadView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: windowWidth - 25,
  },
  text: {fontSize: 15},
  star: {
    fontSize: 20,
    alignSelf: 'center',
  },
  activity:{
    flex:1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignSelf: 'center',
  }
});
