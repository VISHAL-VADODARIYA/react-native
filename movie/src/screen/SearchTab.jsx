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
} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import Icon from 'react-native-vector-icons/dist/MaterialIcons';
import {windowHeight, windowWidth} from '../utils/Dimensions';
import {dataAction} from '../store/dataSlice';

const SearchTab = ({navigation}) => {
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const searchData = useSelector(state => state.data.search);
  const theme = useColorScheme();
  const isDarkTheme = theme === 'dark';
  const [searchMovie, setSearchMovie] = useState();

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
      `https://api.themoviedb.org/3/search/movie?query=${searchMovie}&include_adult=false&language=en-US&page=1`,
      requestOptions,
    );
    response = await response.json();
    dispatch(dataAction.fetchSearchData(response.results));
  };
  console.log(searchData);
  console.log(searchMovie);

  return (
    <SafeAreaView>
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
            color={isDarkTheme ? '#fff' : '#215F8E'}
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
              color: isDarkTheme ? '#fff' : '#215F8E',
              textAlign: 'center',
            }}>
            Search
          </Text>
        </View>
      </View>
      <View style={styles.textInputView}>
        <TextInput
          style={styles.textInput}
          onChangeText={text => setSearchMovie(text)}
          placeholder="Search Movie"
        />
        <TouchableOpacity style={styles.searchButton} onPress={fetchData}>
          <Text style={styles.searchButtonText}>Search</Text>
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.mainView}>
        {searchData &&
          searchData?.map(res => {
            return (
              <TouchableOpacity onPress={() => {}} style={styles.listView}>
                <View key={res.id}>
                  <Image
                    source={{
                      uri: `https://image.tmdb.org/t/p/original${res.poster_path}`,
                    }}
                    style={styles.image}
                  />
                  <Text style={{color: 'black', textAlign: 'center'}}>
                    {res.title}
                  </Text>
                </View>
              </TouchableOpacity>
            );
          })}
      </ScrollView>
      {/* <View style={styles.mainView}>
      <FlatList
        data={searchData}
        renderItem={res => {
          return (
            <View style={styles.column}>
              <Image
                source={{
                  uri: `https://image.tmdb.org/t/p/original${res.poster_path}`,
                }}
                style={styles.image}
              />
              <Text style={styles.name}>{res.title}</Text>
            </View>
          );
        }}
        keyExtractor={res => res.id}
        numColumns={2}
      />
      </View> */}
      {/* <ScrollView
        style={
          isDarkTheme ? {backgroundColor: '#555'} : {backgroundColor: 'white'}
        }
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl
            tintColor="#215f8e"
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        }>
        {movieData ? (
          movieData.map(res => {
            return (
              <TouchableOpacity
                key={res.id}
                onPress={() => {
                  navigation.navigate('SubScreen', {res: res, movie: true});
                }}>
                <ListTab res={res} movie={true} />
              </TouchableOpacity>
            );
          })
        ) : (
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'center',
              alignContent: 'center',
            }}>
            <ActivityIndicator size="large" color="#215F8E" />
          </View>
        )}
      </ScrollView> */}
    </SafeAreaView>
  );
};

export default SearchTab;

const styles = StyleSheet.create({
  container: {flex: 1},
  textInputView: {flexDirection: 'row', width: windowWidth},
  textInput: {
    width: windowWidth - 100,
    borderWidth: 1,
    marginHorizontal: 10,
    paddingHorizontal: 5,
    paddingVertical: 10,
    borderRadius: 10,
    borderColor: '#215F8E',
  },
  searchButton: {
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#215e8f',
    textAlign: 'center',
    alignSelf: 'center',
  },
  searchButtonText: {color: '#fff', fontSize: 15},
  image: {
    marginTop: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    borderRadius: 5,
    alignSelf: 'center',
    width: 90,
    height: 110,
  },
  mainView: { flexDirection: 'column'},
  listView: {
    borderBottomWidth: 0.5,
    borderRightWidth: 0.5,
    margin: 5,
    padding: 5,
    borderRadius: 5,
    flex: 1,
    width: '30%', // Each column takes half of the screen width
  },

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
