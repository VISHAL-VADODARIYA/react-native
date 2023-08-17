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
  import React, {useEffect, useState} from 'react';
  import Icon from 'react-native-vector-icons/dist/FontAwesome5';
  import {windowHeight, windowWidth} from '../utils/Dimensions';
  // import {SliderBox} from 'react-native-image-slider-box';
  
  const SubListOfPersonDetail = ({route, navigation}) => {
    const {res, movie} = route.params;
    const [data, setData] = useState();
    const theme = useColorScheme();
    const isDarkTheme = theme === 'dark';
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
      <SafeAreaView
        style={{
          flex: 1,
          paddingBottom: 10,
          backgroundColor: isDarkTheme ? '#555' : '#fff',
        }}>
        <View
          style={{
            backgroundColor: isDarkTheme ? '#333' : '#B3C6D6',
            flexDirection: 'row',
          }}>
          <TouchableOpacity
            style={{alignSelf: 'center', paddingLeft: 20}}
            onPress={() => {
              navigation.goBack();
            }}>
            <Icon
              name="arrow-left"
              size={20}
              color={isDarkTheme ? '#fff' : '#215F8E'}
            />
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
                color: isDarkTheme ? '#fff' : '#215F8E',
                textAlign: 'center',
              }}>
              {data ? (movie ? data.title : data.name) : ''}
            </Text>
          </View>
        </View>
        <View
          style={{
            marginHorizontal: 10,
            justifyContent: 'center',
          }}>
          {data ? (
            <ScrollView showsVerticalScrollIndicator={false}>
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
                      color: isDarkTheme ? '#fff' : '#215f8e',
                      marginVertical: 10,
                      fontWeight: 'bold',
                    }}>
                    {data.tagline}
                  </Text>
                )}
              </View>
  
              <Text
                style={[
                  {
                    color: isDarkTheme ? '#fff' : '#666',
                    margin: 5,
                    fontSize: 15,
                    marginVertical: 4,
                  },
                ]}>
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
                  style={[
                    {
                      color: isDarkTheme ? '#fff' : '#666',
                    },
                    styles.listTitle,
                  ]}>
                  <Text style={{fontWeight: 900, fontSize: 15}}>Rating : </Text>
                  {data.vote_average.toFixed(1)}/10
                  <Text
                    style={{
                      color: isDarkTheme ? '#fff' : '#215f8e',
                      fontSize: 20,
                      alignSelf: 'center',
                    }}>
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
                      color: isDarkTheme ? '#fff' : '#215f8e',
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
                  style={[
                    {
                      color: isDarkTheme ? '#fff' : '#666',
                    },
                    styles.listTitle,
                  ]}>
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
                          color: isDarkTheme ? '#215f8e' : '#fff',
                          backgroundColor: isDarkTheme ? '#fff' : '#215f8e',
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
                  style={[
                    {
                      color: isDarkTheme ? '#fff' : '#666',
                    },
                    styles.listTitle,
                  ]}>
                  Language :
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
                          color: isDarkTheme ? '#215f8e' : '#fff',
                          backgroundColor: isDarkTheme ? '#fff' : '#215f8e',
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
                  style={[
                    {
                      color: isDarkTheme ? '#fff' : '#666',
                    },
                    styles.listTitle,
                  ]}>
                  Production Company :
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
                        key={e.id}
                        style={{
                          color: isDarkTheme ? '#215f8e' : '#fff',
                          backgroundColor: isDarkTheme ? '#fff' : '#215f8e',
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
                  <View>
                    <Text
                      style={[
                        {
                          color: isDarkTheme ? '#fff' : '#666',
                        },
                        styles.listTitle,
                      ]}>
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
                          color: isDarkTheme ? '#215f8e' : '#fff',
                          backgroundColor: isDarkTheme ? '#fff' : '#215f8e',
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
                          color: isDarkTheme ? '#fff' : '#215f8e',
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
                          color: isDarkTheme ? '#fff' : '#215f8e',
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
                      style={[
                        {
                          color: isDarkTheme ? '#fff' : '#666',
                        },
                        styles.listTitle,
                      ]}>
                      Seasons : {data.seasons.length}
                    </Text>
                    <ScrollView
                      horizontal={true}
                      style={{marginHorizontal: 20}}
                      showsHorizontalScrollIndicator={false}>
                      {data.seasons.map(e => (
                        <TouchableOpacity
                          key={e.id}
                          onPress={() =>
                            navigation.navigate('SeasonsScreen', {e: e})
                          }>
                          <View style={{marginRight: 10, marginBottom: 40}}>
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
                                color: isDarkTheme ? '#fff' : '#777',
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
                paddingTop: windowHeight / 2.2,
                justifyContent: 'center',
                alignSelf: 'center',
              }}>
              <Text style={{textAlign: 'center'}}>
                <ActivityIndicator
                  size="large"
                  color={isDarkTheme ? '#fff' : '#215f8e'}
                />
              </Text>
            </View>
          )}
        </View>
      </SafeAreaView>
    );
  };
  
  const styles = StyleSheet.create({
    listTitle: {
      fontWeight: 900,
      margin: 5,
      fontSize: 15,
      marginVertical: 4,
    },
  });
  
  export default SubListOfPersonDetail;
  