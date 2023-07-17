import {
  View,
  Text,
  Image,
  ActivityIndicator,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Icon from 'react-native-vector-icons/dist/FontAwesome5';

const SubMovieScreen = ({route, navigation}) => {
  const {res} = route.params;

  const [movieData, setMovieData] = useState();
  const dataFetch = async () => {
    var myHeaders = new Headers();
    myHeaders.append(
      'Authorization',
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MDdhM2YzNTQ4N2IxYTdjY2U5MTE2ZDE3ZGFlMjE4MSIsInN1YiI6IjY0OGFhN2Q3NTU5ZDIyMDBlMjA0N2ZkYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.bw50vVBFpg0ML9x64owYF_wnyHLtT1TpTBr8gfaY70E',
    );

    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow',
    };

    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${res.id}`,
      requestOptions,
    ).catch(e => console.log(e));
    setMovieData(await response.json());
  };

  useEffect(() => {
    dataFetch();
  }, []);

  return (
    // <MovieDetail res={res} />
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
            {movieData && movieData.original_title}
          </Text>
        </View>
      </View>
      <View
        style={{
          marginHorizontal: 10,
          marginBottom: 96,
          justifyContent: 'center',
        }}>
        {movieData ? (
          <ScrollView showsVerticalScrollIndicator={false} key={movieData.id}>
            {/* <Text
              style={{
                fontSize: 25,
                fontWeight: 800,
                margin: 5,
                marginVertical: 20,
                color: '#215F8E',
              }}>
              {movieData.original_title}
            </Text> */}
            <View>
              {/* {movieData.poster_path ? ( */}
                <Image
                  source={{
                    uri: `https://image.tmdb.org/t/p/original/${movieData.poster_path}`,
                  }}
                  style={{
                    marginTop: 20,
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignSelf: 'center',
                    width: 240,
                    height: 400,
                  }}
                />
              {/* ) : (
                <ActivityIndicator size={'large'}></ActivityIndicator>
              )} */}
            </View>
            <View
              style={{
                marginTop: 10,
                // justifyContent: 'center',
                alignItems: 'center',
              }}>
              {/* <Image
              style={{
                width: 300,
                height: 250,
                borderColor: 'black',
                borderRadius: 5,
              }}
              source={{
                uri: `https://api.themoviedb.org/3/discover/movieres.poster_path/${res.poster_path}`,
              }}
            /> */}
            </View>

            <Text
              style={{
                color: '#777',
                margin: 5,
                fontSize: 18,
                marginVertical: 4,
                textAlign: 'justify',
              }}>
              <Text style={{fontWeight: 900}}>Overview : </Text>{' '}
              {movieData.overview}
            </Text>
            <View>
              <Text
                style={{
                  color: '#666',
                  fontWeight: 900,
                  margin: 5,
                  fontSize: 18,
                  marginVertical: 4,
                }}>
                Language :{' '}
              </Text>
              <View>
                {movieData.spoken_languages.map(e => {
                  return (
                    <Text
                    key={e.iso_639_1}
                      style={{
                        color: '#666',

                        margin: 20,
                        fontSize: 18,
                        marginVertical: 4,
                      }}>
                      • {e.english_name}
                    </Text>
                  );
                })}
              </View>
            </View>
            <View>
              <Text
                style={{
                  color: '#666',
                  fontWeight: 900,
                  margin: 5,
                  fontSize: 18,
                  marginVertical: 4,
                }}>
                Production Company :{' '}
              </Text>
              <View>
                {movieData.production_companies.map(e => {
                  return (
                    <Text
                      key={e.id}
                      style={{
                        color: '#666',

                        margin: 20,
                        fontSize: 18,
                        marginVertical: 4,
                      }}>
                      • {e.name}
                    </Text>
                  );
                })}
              </View>
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

export default SubMovieScreen;
