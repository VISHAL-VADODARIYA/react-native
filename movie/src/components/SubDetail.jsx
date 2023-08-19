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

const SubDetail = ({route, navigation}) => {
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
      style={[
        styles.container,
        {
          backgroundColor: isDarkTheme ? '#555' : '#fff',
        },
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
            {data ? (movie ? data.title : data.name) : ''}
          </Text>
        </View>
      </View>
      <View style={styles.scrollviewWrap}>
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
                style={[
                  styles.image,
                  {
                    resizeMode: `${data.backdrop_path ? 'stretch' : 'contain'}`,
                  },
                ]}
              />
              {data.tagline && (
                <Text
                  style={[
                    styles.taglineText,
                    {
                      color: isDarkTheme ? '#fff' : '#215f8e',
                    },
                  ]}>
                  {data.tagline}
                </Text>
              )}
            </View>

            {/* overview */}
            {data.overview && (
              <Text
                style={[
                  styles.overview,
                  {
                    color: isDarkTheme ? '#fff' : '#666',
                  },
                ]}>
                <Text style={{fontWeight: 900, fontSize: 15}}>Overview : </Text>
                {data.overview}
              </Text>
            )}

            {/* rating row */}
            <View style={styles.ratingRow}>
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
                  style={[
                    styles.star,
                    {
                      color: isDarkTheme ? '#fff' : '#215f8e',
                    },
                  ]}>
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
                  style={[
                    styles.seeMore,
                    {
                      color: isDarkTheme ? '#fff' : '#215f8e',
                    },
                  ]}>
                  See More
                </Text>
              </TouchableOpacity>
            </View>

            {/* genres */}
            {data.genres.length > 0 && (
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
                <View style={styles.listView}>
                  {data.genres.map(e => {
                    return (
                      <Text
                        key={e.id}
                        style={[
                          styles.listText,
                          {
                            color: isDarkTheme ? '#215f8e' : '#fff',
                            backgroundColor: isDarkTheme ? '#fff' : '#215f8e',
                          },
                        ]}>
                        {e.name}
                      </Text>
                    );
                  })}
                </View>
              </View>
            )}

            {/* Language */}
            {data.spoken_languages.length > 0 && (
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
                <View style={styles.listView}>
                  {data.spoken_languages.map(e => {
                    return (
                      <Text
                        key={e.iso_639_1}
                        style={[
                          styles.listText,
                          {
                            color: isDarkTheme ? '#215f8e' : '#fff',
                            backgroundColor: isDarkTheme ? '#fff' : '#215f8e',
                          },
                        ]}>
                        {e.english_name}
                      </Text>
                    );
                  })}
                </View>
              </View>
            )}

            {/* production companies */}
            {data.production_companies.length > 0 && (
              <View style={data.original_name ? '' : {marginBottom: 15}}>
                <Text
                  style={[
                    {
                      color: isDarkTheme ? '#fff' : '#666',
                    },
                    styles.listTitle,
                  ]}>
                  Production Company :
                </Text>
                <View style={styles.listView}>
                  {data.production_companies.map(e => {
                    return (
                      <Text
                        key={e.id}
                        style={[
                          styles.listText,
                          {
                            color: isDarkTheme ? '#215f8e' : '#fff',
                            backgroundColor: isDarkTheme ? '#fff' : '#215f8e',
                          },
                        ]}>
                        {e.name}
                      </Text>
                    );
                  })}
                </View>
              </View>
            )}
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
                  <View style={styles.listView}>
                    <Text
                      style={[
                        styles.listText,
                        {
                          color: isDarkTheme ? '#215f8e' : '#fff',
                          backgroundColor: isDarkTheme ? '#fff' : '#215f8e',
                        },
                      ]}>
                      {data.type}
                    </Text>
                  </View>
                </View>

                <View
                  style={[
                    styles.latestComingView,
                    {borderColor: isDarkTheme ? '#fff' : '#666'},
                  ]}>
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
                      style={[
                        styles.latestComingText,
                        {
                          color: isDarkTheme ? '#fff' : '#215f8e',
                        },
                      ]}>
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
                      style={[
                        styles.latestComingText,
                        {
                          color: isDarkTheme ? '#fff' : '#215f8e',
                        },
                      ]}>
                      Coming Soon Episode
                    </Text>
                  </TouchableOpacity>
                </View>

                <View style={styles.seasonView}>
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
                        <View style={styles.seasonTouchableView}>
                          <Image
                            source={{
                              uri: `https://image.tmdb.org/t/p/original/${e.poster_path}`,
                            }}
                            style={styles.seasonImage}
                          />
                          <Text
                            style={[
                              styles.seasonText,
                              {
                                color: isDarkTheme ? '#fff' : '#777',
                              },
                            ]}>
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
          <View style={styles.activityView}>
            <Text style={styles.activityText}>
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
  container: {flex: 1, paddingBottom: 10},
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
  },
  taglineText: {
    textAlign: 'center',
    marginVertical: 10,
    fontWeight: 'bold',
  },
  overview: {
    margin: 5,
    fontSize: 15,
    marginVertical: 4,
    textAlign:'justify'
  },
  ratingRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: windowWidth - 25,
  },
  listTitle: {
    fontWeight: 900,
    margin: 5,
    fontSize: 15,
    marginVertical: 4,
  },
  star: {
    fontSize: 20,
    alignSelf: 'center',
  },
  seeMore: {
    margin: 5,
    fontSize: 15,
    marginVertical: 4,
    fontWeight: 900,
  },
  listView: {
    width: windowWidth - 40,
    flexDirection: 'row',
    flexWrap: 'wrap',
    flexBasis: 'auto',
    marginLeft: 18,
  },
  listText: {
    paddingVertical: 2,
    paddingHorizontal: 5,
    borderRadius: 5,
    overflow: 'hidden',
    margin: 2,
    fontSize: 15,
    marginVertical: 4,
  },
  latestComingView: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginVertical: 10,
    borderBottomWidth: 1,
    borderTopWidth: 1,
    paddingVertical: 5,
    width: windowWidth - 25,
  },
  latestComingText: {
    margin: 5,
    fontSize: 15,
    marginVertical: 4,
    alignSelf: 'center',
    fontWeight: 900,
  },
  seasonView: {marginBottom: 20},
  seasonImage: {
    marginTop: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    borderRadius: 5,
    alignSelf: 'center',
    width: 90,
    height: 130,
  },
  seasonText: {
    margin: 5,
    fontSize: 15,
    marginVertical: 4,
    textAlign: 'center',
  },
  seasonTouchableView: {marginRight: 10},
  activityView: {
    paddingTop: windowHeight / 2.2,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  activityText: {textAlign: 'center'},
});

export default SubDetail;
