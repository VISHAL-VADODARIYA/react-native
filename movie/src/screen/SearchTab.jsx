import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  useColorScheme,
  StyleSheet,
  TextInput,
  Image,
  FlatList,
  ActivityIndicator,
  Switch,
  Checkbox,
} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import Icon from 'react-native-vector-icons/dist/MaterialIcons';
import {windowHeight, windowWidth} from '../utils/Dimensions';
import {dataAction} from '../store/dataSlice';
import NoInternetConnection from '../components/NoInternetConnection';

const SearchTab = ({navigation}) => {
  const dispatch = useDispatch();
  const searchData = useSelector(state => state.data.search);

  const theme = useColorScheme();
  const isDarkTheme = theme === 'dark';

  const [page, setPage] = useState(1);
  const [movieTvSwitch, setMovieTvSwitch] = useState(true);
  const [isConnected, setIsConnected] = useState(false);
  const [newSearch, setNewSearch] = useState(0);
  const [searchMovie, setSearchMovie] = useState([]);
  const [defaultSearch, setDefaultSearch] = useState(0);

  const fetchData = async () => {
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
    let response = await fetch(
      `https://api.themoviedb.org/3/search/${
        movieTvSwitch ? 'movie' : 'tv'
      }?query=${searchMovie.trim()}&include_adult=false&language=en-US&page=${page}`,
      requestOptions,
    );
    response = await response.json();
    newSearch === 0
      ? dispatch(dataAction.fetchSearchData(response.results))
      : dispatch(dataAction.fetchNewSearchData(response.results));
    setDefaultSearch(1);
  };

  useEffect(() => {
    NoInternetConnection(setIsConnected);
  }, [NoInternetConnection]);

  useEffect(() => {
    if (searchMovie.length !== 0 && isConnected && !searchMovie.trim()) fetchData();
    // AsyncStorage.setItem('Movie', JSON.stringify(movieData));
  }, [page, isConnected]);

  const renderLoader = () => {
    return (
      <View style={styles.renderLoader}>
        <ActivityIndicator
          size={'large'}
          color={isDarkTheme ? '#fff' : '#215E8F'}
        />
      </View>
    );
  };

  const loadMoreItem = () => {
    setPage(page + 1);
    setNewSearch(0);
  };

  const switchHandler = () => {
    setMovieTvSwitch(!movieTvSwitch);
    setNewSearch(1);
  };

  const searchFieldHandler = e => {
    setSearchMovie(e);
    setNewSearch(1);
    e.trim() === '' ? setDefaultSearch(0) : '';
  };

  return (
    <SafeAreaView style={{backgroundColor: isDarkTheme ? '#333' : 'white'}}>
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: isDarkTheme ? '#333' : 'white',
        }}>
        <TouchableOpacity
          style={{alignSelf: 'center', paddingLeft: 20}}
          onPress={() => {
            navigation.openDrawer();
          }}>
          <Icon
            name="menu"
            size={24}
            color={isDarkTheme ? '#fff' : '#215E8F'}
          />
        </TouchableOpacity>
        <View
          style={{
            padding: 15,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            shadowRadius: 2,
          }}>
          <Text
            style={{
              fontWeight: 900,
              fontSize: 18,
              color: isDarkTheme ? '#fff' : '#215E8F',
              textAlign: 'center',
            }}>
            Search
          </Text>
        </View>
      </View>
      {!isConnected && (
        <View
          style={{
            backgroundColor: '#555',
            paddingVertical: 4,
          }}>
          <Text
            style={{
              color: 'white',
              textAlign: 'center',
              fontWeight: 600,
              fontSize: 15,
            }}>
            No Connection
          </Text>
        </View>
      )}

      <View
        style={[
          styles.textInputView,
          {
            backgroundColor: isDarkTheme ? '#555' : '#fff',
            borderBottomColor: isDarkTheme ? '#fff' : '#215E8F',
          },
        ]}>
        <TextInput
          style={[
            styles.textInput,
            {
              borderColor: isDarkTheme ? 'white' : '#215E8F',
              color: isDarkTheme ? '#fff' : '#333',
            },
          ]}
          autoCapitalize="none"
          onChangeText={text => searchFieldHandler(text.trim())}
          placeholder="Search Movie or TV"
          placeholderTextColor={isDarkTheme ? '#fff' : '#333'}
        />
        <TouchableOpacity
          style={[
            styles.searchButton,
            {backgroundColor: isDarkTheme ? 'white' : '#215E8F'},
          ]}
          onPress={fetchData}>
          <Text
            style={[
              styles.searchButtonText,
              {color: isDarkTheme ? '#333' : 'white'},
            ]}>
            Search
          </Text>
        </TouchableOpacity>
      </View>

      {/* tv movie switch */}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          paddingVertical: 5,
          borderBottomWidth: 0.5,
          borderBottomColor: isDarkTheme ? '#fff' : '#215E8F',
          backgroundColor: isDarkTheme ? '#555' : '#fff',
        }}>
        <Text
          style={{
            fontSize: 18,
            color: isDarkTheme ? '#fff' : '#333',
            alignSelf: 'center',
            marginRight: 10,
          }}>
          TV
        </Text>
        <Switch
          value={movieTvSwitch}
          // onValueChange={(e)=>switchHandler(e)}
          activeText={'Movie'}
          trackColor={{
            false: isDarkTheme ? '#222' : '#dbdbdb',
            true: isDarkTheme ? '#333' : '#dbdbdb',
          }}
          inActiveText={'TV'}
          borderColor={'393939'}
          thumbColor={isDarkTheme ? '#fff' : '#215E8F'}
          changeValueImmediately={true}
          onChange={switchHandler}
        />
        <Text
          style={{
            fontSize: 18,
            color: isDarkTheme ? '#fff' : '#333',
            alignSelf: 'center',
            marginLeft: 10,
          }}>
          Movie
        </Text>
      </View>

      {searchData && (
        <View
          style={{
            height: windowHeight - 200,
            backgroundColor: isDarkTheme ? '#555' : '#fff',
          }}>
          {defaultSearch !== 0 && (
            <>
              {searchData.length === 0 ? (
                <View style={styles.notFoundView}>
                  <View style={styles.searchOffIconWrapView}>
                    <Icon
                      name="search-off"
                      size={40}
                      color={isDarkTheme ? '#fff' : '215E8F'}
                    />
                  </View>

                  <Text
                    style={[
                      styles.notFoundText,
                      {
                        color: isDarkTheme ? '#fff' : '#333',
                      },
                    ]}>
                    Not Found
                  </Text>
                </View>
              ) : (
                <FlatList
                  keyExtractor={item => item.id}
                  data={searchData}
                  renderItem={({item}) => (
                    <TouchableOpacity
                      style={{flex: 1}}
                      key={item.id}
                      onPress={() => {
                        navigation.navigate('SubScreen', {
                          res: item,
                          movie: true,
                        });
                      }}>
                      <View>
                        <Image
                          source={{
                            uri: `https://image.tmdb.org/t/p/original${item.poster_path}`,
                          }}
                          style={styles.image}
                        />
                        <Text
                          style={{
                            paddingHorizontal: 5,
                            color: isDarkTheme ? '#fff' : '#333',
                            textAlign: 'center',
                          }}>
                          {movieTvSwitch ? item?.title : item?.name}
                        </Text>
                      </View>
                    </TouchableOpacity>
                  )}
                  numColumns={3}
                  ListFooterComponent={renderLoader}
                  onEndReached={loadMoreItem}
                  onEndReachedThreshold={0}
                />
              )}
            </>
          )}
        </View>
      )}
    </SafeAreaView>
  );
};

export default SearchTab;

const styles = StyleSheet.create({
  container: {flex: 1},
  textInputView: {
    flexDirection: 'row',
    width: windowWidth,
    paddingVertical: 10,
    borderBottomWidth: 0.5,
  },
  textInput: {
    width: windowWidth - 110,
    borderWidth: 1,
    marginHorizontal: 10,
    paddingHorizontal: 5,
    paddingVertical: 5,
    borderRadius: 10,
  },
  searchButton: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 10,
    backgroundColor: '#215e8f',
    textAlign: 'center',
    alignSelf: 'center',
  },
  searchButtonText: {color: '#fff', fontSize: 15, fontWeight: 500},
  image: {
    marginTop: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    borderRadius: 5,
    alignSelf: 'center',
    width: 90,
    height: 110,
  },
  mainView: {flexDirection: 'column'},
  listView: {
    borderBottomWidth: 0.5,
    borderRightWidth: 0.5,
    margin: 5,
    padding: 5,
    borderRadius: 5,
    flex: 1,
    width: '30%', // Each column takes half of the screen width
  },
  renderLoader: {
    marginVertical: 16,
    alignItems: 'center',
  },
  notFoundText: {textAlign: 'center', fontSize: 20},
  searchOffIconWrapView: {alignSelf: 'center'},
  notFoundView: {
    alignSelf: 'center',
    justifyContent: 'center',
    flex: 1,
  },

  //vaidika ma'am e mane login form no task aapyo j nathi ane aa result ma to tena mark ganya hse n sir, pachi last ma mane j ochu salary madse aavi rite thyu to

  //   column: {
  //     width: '50%',
  //     padding: 10,
  //   },
  //   image: {
  //     width: '100%',
  //     height: 150,
  //     resizeMode: 'cover',
  //   },
  //   name: {
  //     marginTop: 5,
  //     fontSize: 16,
  //     textAlign: 'center',
  //   },
});
