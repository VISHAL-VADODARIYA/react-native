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

const Episode = ({route, navigation}) => {
  const {data, image} = route.params;
  const theme = useColorScheme();
  const isDarkTheme = theme === 'dark';

  return (
    <SafeAreaView
      style={[
        styles.mainView,
        {backgroundColor: isDarkTheme ? '#555' : '#fff'},
      ]}>
      <View
        style={[
          styles.viewHeader,
          {backgroundColor: isDarkTheme ? '#333' : '#B3C6D6'},
        ]}>
        <TouchableOpacity
          style={styles.viewHeaderTouchableOpacity}
          onPress={() => {
            navigation.goBack();
          }}>
          <Icon
            name="arrow-left"
            size={20}
            color={isDarkTheme ? '#fff' : '#215E8F'}
          />
        </TouchableOpacity>
        <View style={styles.viewHeaderTextView}>
          <Text
            style={[
              styles.viewHeaderText,
              {color: isDarkTheme ? '#fff' : '#215E8F'},
            ]}>
            {data && data.name}
          </Text>
        </View>
      </View>
      <View style={styles.episodeDataView}>
        {data ? (
          <ScrollView showsVerticalScrollIndicator={false} key={`2${data.id}`}>
            <View>
              <Image
                source={{
                  uri: `https://image.tmdb.org/t/p/original/${image}`,
                }}
                style={styles.episodeImage}
              />
            </View>

            <Text
              style={[
                styles.text,
                {
                  color: isDarkTheme ? '#fff' : '#777',
                },
              ]}>
              <Text style={styles.titleText}>Release Date : </Text>
              {data.air_date}
            </Text>
            <View style={styles.textView}>
              <Text
                style={[
                  styles.text,
                  {
                    color: isDarkTheme ? '#fff' : '#777',
                  },
                ]}>
                <Text style={styles.titleText}>Seasons : </Text>
                {data.season_number}
              </Text>
            </View>
            <View style={styles.textView}>
              <Text
                style={[
                  styles.text,
                  {
                    color: isDarkTheme ? '#fff' : '#777',
                  },
                ]}>
                <Text style={styles.titleText}>Rating : </Text>
                {data.vote_average}/10
                <Text
                  style={[
                    styles.starText,
                    {color: isDarkTheme ? '#fff' : '#215E8F'},
                  ]}>
                  ★
                </Text>
              </Text>
            </View>
            <View style={styles.textView}>
              <Text
                style={[
                  styles.text,
                  {
                    color: isDarkTheme ? '#fff' : '#777',
                  },
                ]}>
                <Text style={styles.titleText}>Total Episode : </Text>
                {data.episode_number}
              </Text>
            </View>
          </ScrollView>
        ) : (
          <View style={styles.activityIndicator}>
            <Text>
              <ActivityIndicator size="large" />
            </Text>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainView: {flex: 1},
  viewHeader: {flexDirection: 'row'},
  viewHeaderTouchableOpacity: {alignSelf: 'center', paddingLeft: 20},
  viewHeaderTextView: {
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'center',
    shadowRadius: 2,
  },
  viewHeaderText: {
    fontWeight: 900,
    fontSize: 18,
    textAlign: 'center',
  },
  episodeDataView: {
    marginHorizontal: 10,
    marginBottom: 96,
    justifyContent: 'center',
  },
  episodeImage: {
    marginTop: 20,
    marginBottom: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: 'center',
    width: 400,
    height: 240,
    resizeMode: 'center',
  },
  text: {
    margin: 5,
    fontSize: 15,
    marginVertical: 4,
  },
  titleText: {fontWeight: 'bold', fontSize: 15},
  textView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: windowWidth - 25,
  },
  starText: {
    fontSize: 20,
    alignSelf: 'center',
  },
  activityIndicator: {
    // flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: 'center',
  },
});

export default Episode;
