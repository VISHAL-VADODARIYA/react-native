import {
    View,
    Text,
    Image,
    ActivityIndicator,
    ScrollView,
    TouchableOpacity,
    SafeAreaView,
    Linking,
  } from 'react-native';
  import React from 'react';
  import Icon from 'react-native-vector-icons/dist/FontAwesome5';
  import {windowWidth} from '../utils/Dimensions';
  
  const SeasonsScreen = ({route, navigation}) => {
    const {e} = route.params;
  
    return (
      <SafeAreaView>
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
              {e.name}
            </Text>
          </View>
        </View>
        <View
          style={{
            marginHorizontal: 10,
            marginBottom: 96,
            justifyContent: 'center',
          }}>
          {e ? (
            <ScrollView showsVerticalScrollIndicator={false} key={`2${e.id}`}>
              <View>
                <Image
                  source={{
                    uri: `https://image.tmdb.org/t/p/original/${e.poster_path}`,
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
                <Text style={{fontWeight: 900, fontSize: 15}}>Release Date : </Text>
                {e.air_date}
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
                  {e.season_number}
                  
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
                  {e.vote_average.toFixed(1)}/10
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
                  <Text style={{fontWeight: 900, fontSize: 15}}>Total Episode : </Text>
                  {e.episode_count}

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
  
  export default SeasonsScreen;
  