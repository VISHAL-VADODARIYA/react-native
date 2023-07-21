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
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/dist/FontAwesome5';
import {windowWidth} from '../utils/Dimensions';

const Episode = ({route, navigation}) => {
  const {data, image} = route.params;
  const theme = useColorScheme();
  const isDarkTheme = theme === 'dark';

  return (
    <SafeAreaView style={{backgroundColor:isDarkTheme?'#555':'#fff'}}>
      <View style={{backgroundColor: '#B3C6D6', flexDirection: 'row'}}>
        <TouchableOpacity
          style={{alignSelf: 'center', paddingLeft: 20}}
          onPress={() => {
            navigation.goBack();
          }}>
          <Icon name="arrow-left" size={20} color="#215F8E" />
        </TouchableOpacity>
        <View
          style={{
            padding: 15,
            flexDirection: 'row',
            justifyContent: 'center',
            shadowRadius: 2,
          }}>
          <Text
            style={{
              fontWeight: 900,
              fontSize: 18,
              color: '#215F8E',
              textAlign: 'center',
            }}>
            {data.name}
          </Text>
        </View>
      </View>
      <View
        style={{
          marginHorizontal: 10,
          marginBottom: 96,
          justifyContent: 'center',
        }}>
        {data ? (
          <ScrollView showsVerticalScrollIndicator={false} key={`2${data.id}`}>
            <View>
              <Image
                source={{
                  uri: `https://image.tmdb.org/t/p/original/${image}`,
                }}
                style={{
                  marginTop: 20,
                  marginBottom: 5,
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignSelf: 'center',
                  width: 400,
                  height: 240,
                  resizeMode: 'center',
                }}
              />
            </View>

            <Text
              style={{
                color: '#777',
                margin: 5,
                fontSize: 15,
                marginVertical: 4,
                textAlign: 'justify',
              }}>
              <Text style={{fontWeight: 900, fontSize: 15}}>
                Release Date :{' '}
              </Text>
              {data.air_date}
            </Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: windowWidth - 25,
              }}>
              <Text
                style={{
                  color: '#777',
                  margin: 5,
                  fontSize: 15,
                  marginVertical: 4,
                }}>
                <Text style={{fontWeight: 900, fontSize: 15}}>Seasons : </Text>
                {data.season_number}
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: windowWidth - 25,
              }}>
              <Text
                style={{
                  color: '#777',
                  margin: 5,
                  fontSize: 15,
                  marginVertical: 4,
                }}>
                <Text style={{fontWeight: 900, fontSize: 15}}>Rating : </Text>
                {data.vote_average}/10
                <Text
                  style={{color: '#215f8e', fontSize: 20, alignSelf: 'center'}}>
                  ★
                </Text>
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: windowWidth - 25,
              }}>
              <Text
                style={{
                  color: '#777',
                  margin: 5,
                  fontSize: 15,
                  marginVertical: 4,
                }}>
                <Text style={{fontWeight: 900, fontSize: 15}}>
                  Total Episode :{' '}
                </Text>
                {data.episode_number}
              </Text>
            </View>
          </ScrollView>
        ) : (
          <View
            style={{
              flexDirection: 'column',
              justifyContent: 'center',
              alignSelf: 'center',
            }}>
            <Text>
              <ActivityIndicator size="large" />
            </Text>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

export default Episode;
