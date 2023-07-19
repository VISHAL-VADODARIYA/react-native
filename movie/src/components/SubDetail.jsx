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
import React, {useEffect, useState} from 'react';
import Icon from 'react-native-vector-icons/dist/FontAwesome5';
import {windowWidth} from '../utils/Dimensions';
// import {SliderBox} from 'react-native-image-slider-box';

const SubDetail = ({route, navigation}) => {
  const {res, movie} = route.params;

  const [data, setData] = useState();
  // const [imageData, setImageData] = useState();
  // const [image, setImage] = useState();

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
      `https://api.themoviedb.org/3/${movie ? 'movie' : 'tv'}/${res.id}`,
      requestOptions,
    ).catch(e => console.log(e));
    setData(await response.json());


    // IMAGE SLIDER //
    // const options = {
    //   method: 'GET',
    //   headers: {
    //     accept: 'application/json',
    //     Authorization:
    //       'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MDdhM2YzNTQ4N2IxYTdjY2U5MTE2ZDE3ZGFlMjE4MSIsInN1YiI6IjY0OGFhN2Q3NTU5ZDIyMDBlMjA0N2ZkYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.bw50vVBFpg0ML9x64owYF_wnyHLtT1TpTBr8gfaY70E',
    //   },
    // };

    // await fetch(`https://api.themoviedb.org/3/movie/${res.id}/images`, options)
    //   .then(responseImage => responseImage.json())
    //   .then(response => {setImageData(response)})
    //   .catch(err => console.error(err));
    // let imageArr = []
    // imageData?.backdrops.map(e => {
    //   imageArr.push(`https://image.tmdb.org/t/p/original${e.file_path}`)
    // });
    // // imageArr = imageArr.splice(5,imageArr.length)

    // setImage(imageArr)
    // console.log(image.length);
  };

  useEffect(() => {
    dataFetch();
  }, []);
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
            shadowRadius: 2,
            width: windowWidth - 50,
            overflow: 'hidden',
          }}>
          <Text
            style={{
              fontWeight: 900,
              fontSize: 18,
              color: '#215F8E',
              textAlign: 'center',
            }}>
            {data ? (movie ? data.title : data.name) : ''}
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
          <ScrollView showsVerticalScrollIndicator={false} key={`1${data.id}`}>
            <View>
              {/* <SliderBox images={image} /> */}
              <Image
                source={{
                  uri: `https://image.tmdb.org/t/p/original/${
                    data.backdrop_path ? data.backdrop_path : data.poster_path
                  }`,
                }}
                style={{
                  marginTop: 20,
                  marginBottom: 5,
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignSelf: 'center',
                  width: 400,
                  height: 240,
                  resizeMode: `${data.backdrop_path ? 'stretch' : 'contain'}`,
                }}
              />
              {data.tagline && (
                <Text
                  style={{
                    textAlign: 'center',
                    color: '#215f8e',
                    marginVertical: 10,
                    fontWeight: 'bold',
                  }}>
                  {data.tagline}
                </Text>
              )}
            </View>

            <Text
              style={{
                color: '#777',
                margin: 5,
                fontSize: 15,
                marginVertical: 4,
                textAlign: 'justify',
              }}>
              <Text style={{fontWeight: 900, fontSize: 15}}>Overview : </Text>
              {data.overview}
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
                <Text style={{fontWeight: 900, fontSize: 15}}>Rating : </Text>
                {data.vote_average.toFixed(1)}/10{' '}
                <Text
                  style={{color: '#215f8e', fontSize: 20, alignSelf: 'center'}}>
                  ★
                </Text>
              </Text>
              <TouchableOpacity
                onPress={() =>
                  Linking.canOpenURL(data.homepage).then(() => {
                    Linking.openURL(data.homepage);
                  })
                }>
                <Text
                  style={{
                    color: '#215f8e',
                    margin: 5,
                    fontSize: 15,
                    marginVertical: 4,
                    fontWeight: 900,
                  }}>
                  See More
                </Text>
              </TouchableOpacity>
            </View>

            <View>
              <Text
                style={{
                  color: '#666',
                  fontWeight: 900,
                  margin: 5,
                  fontSize: 15,
                  marginVertical: 4,
                }}>
                Genres :
              </Text>
              <View
                style={{
                  width: windowWidth - 40,
                  flexDirection: 'row',
                  flexWrap: 'wrap',
                  flexBasis: 'auto',
                  marginLeft: 18,
                }}>
                {data.genres.map(e => {
                  return (
                    <Text
                      key={e.id}
                      style={{
                        color: '#fff',
                        backgroundColor: '#215f8e',
                        paddingVertical: 2,
                        paddingHorizontal: 5,
                        borderRadius: 5,
                        overflow: 'hidden',
                        margin: 2,
                        fontSize: 15,
                        marginVertical: 4,
                      }}>
                      {e.name}
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
                  fontSize: 15,
                  marginVertical: 4,
                }}>
                Language :{' '}
              </Text>
              <View
                style={{
                  width: windowWidth - 40,
                  flexDirection: 'row',
                  flexWrap: 'wrap',
                  flexBasis: 'auto',
                  marginLeft: 18,
                }}>
                {data.spoken_languages.map(e => {
                  return (
                    <Text
                      key={e.iso_639_1}
                      style={{
                        color: '#fff',
                        backgroundColor: '#215f8e',
                        paddingVertical: 2,
                        paddingHorizontal: 5,
                        borderRadius: 5,
                        overflow: 'hidden',
                        margin: 2,
                        fontSize: 15,
                        marginVertical: 4,
                      }}>
                      {e.english_name}
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
                  fontSize: 15,
                  marginVertical: 4,
                }}>
                Production Company :{' '}
              </Text>
              <View
                style={{
                  width: windowWidth - 40,
                  flexDirection: 'row',
                  flexWrap: 'wrap',
                  flexBasis: 'auto',
                  marginHorizontal: 18,
                }}>
                {data.production_companies.map(e => {
                  return (
                    <Text
                      key={`pc${e.id}`}
                      style={{
                        color: '#fff',
                        backgroundColor: '#215f8e',
                        paddingVertical: 2,
                        paddingHorizontal: 5,
                        borderRadius: 5,
                        overflow: 'hidden',
                        margin: 2,
                        fontSize: 15,
                        marginVertical: 4,
                      }}>
                      {e.name}
                    </Text>
                  );
                })}
              </View>
            </View>
            {data.original_name && (
              <>
                <View >
                  <Text
                    style={{
                      color: '#666',
                      fontWeight: 900,
                      margin: 5,
                      fontSize: 15,
                      marginVertical: 4,
                    }}>
                    Type :{' '}
                  </Text>
                  <View
                    style={{
                      width: windowWidth - 40,
                      flexDirection: 'row',
                      flexWrap: 'wrap',
                      flexBasis: 'auto',
                      marginHorizontal: 18,
                      marginBottom: 10,
                    }}>
                    <Text
                      style={{
                        color: '#fff',
                        backgroundColor: '#215f8e',
                        paddingVertical: 2,
                        paddingHorizontal: 5,
                        borderRadius: 5,
                        overflow: 'hidden',
                        margin: 2,
                        fontSize: 15,
                        marginVertical: 4,
                      }}>
                      {data.type}
                    </Text>
                  </View>
                </View>

                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-evenly',
                    alignItems: 'center',
                    width: windowWidth - 25,
                  }}>
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate('Episode', {
                        data: data.last_episode_to_air,
                        image: data.backdrop_path
                          ? data.backdrop_path
                          : data.poster_path,
                      });
                    }}>
                    <Text
                      style={{
                        color: '#215f8e',
                        margin: 5,
                        fontSize: 15,
                        marginVertical: 4,
                        alignSelf: 'center',
                        fontWeight: 900,
                      }}>
                      Latest Episode
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate('Episode', {
                        data: data.next_episode_to_air,
                        image: data.backdrop_path
                          ? data.backdrop_path
                          : data.poster_path,
                      });
                    }}>
                    <Text
                      style={{
                        color: '#215f8e',
                        margin: 5,
                        fontSize: 15,
                        marginVertical: 4,
                        alignSelf: 'center',
                        fontWeight: 900,
                      }}>
                      Coming Soon Episode
                    </Text>
                  </TouchableOpacity>
                </View>

                <View style={{marginBottom: 20}}>
                  <Text
                    style={{
                      color: '#666',
                      fontWeight: 900,
                      margin: 5,
                      fontSize: 15,
                      marginVertical: 4,
                    }}>
                    Seasons : {data.seasons.length}
                  </Text>
                  <ScrollView
                    horizontal={true}
                    style={{marginHorizontal: 20}}
                    showsHorizontalScrollIndicator={false}>
                    {data.seasons.map(e => (
                      <TouchableOpacity
                        onPress={() =>
                          navigation.navigate('SeasonsScreen', {e: e})
                        }>
                        <View key={`sub${e.id}`} style={{marginRight: 10}}>
                          <Image
                            source={{
                              uri: `https://image.tmdb.org/t/p/original/${e.poster_path}`,
                            }}
                            style={{
                              marginTop: 5,
                              flexDirection: 'row',
                              justifyContent: 'center',
                              borderRadius: 5,
                              alignSelf: 'center',
                              width: 90,
                              height: 130,
                            }}
                          />
                          <Text
                            style={{
                              color: '#777',
                              margin: 5,
                              fontSize: 15,
                              marginVertical: 4,
                              textAlign: 'center',
                            }}>
                            {e.name}
                          </Text>
                        </View>
                      </TouchableOpacity>
                    ))}
                  </ScrollView>
                </View>
              </>
            )}
          </ScrollView>
        ) : (
          <View
            style={{
              flexDirection: 'column',
              justifyContent: 'center',
              alignSelf: 'center',
            }}>
            <Text style={{textAlign: 'center'}}>
              <ActivityIndicator size="large" color={'#215f8e'} />
            </Text>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

export default SubDetail;
