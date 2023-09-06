import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  ActivityIndicator,
  RefreshControl,
  useColorScheme,
  FlatList,
  StyleSheet,
  Animated,
} from 'react-native';
import React, {useCallback, useEffect, useRef, useState} from 'react';
import {useDispatch} from 'react-redux';
import {useSelector} from 'react-redux';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';

import {dataAction} from '../store/dataSlice';
import ListTab from '../components/ListTab';
import AsyncStorage from '@react-native-async-storage/async-storage';
import NoInternetConnection from '../components/NoInternetConnection';
import {windowHeight} from '../utils/Dimensions';

const MovieTab = ({navigation}) => {
  const [page, setPage] = useState(1);
  const [isConnected, setIsConnected] = useState(false);

  const dispatch = useDispatch();
  const movieData = useSelector(state => state.data.movie);
  const theme = useColorScheme();
  const isDarkTheme = theme === 'dark';

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
      `https://api.themoviedb.org/3/discover/movie?page=${page}`,
      requestOptions,
    );
    response = await response.json();

    dispatch(dataAction.fetchMovieData(response.results));
  };

  // const [refreshing, setRefreshing] = useState(false);

  // const onRefresh = () => {
  //   setRefreshing(true);
  //   setTimeout(() => {
  //     setPage(page + 1);
  //     setRefreshing(false);
  //   }, 2000);
  // };

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
  };

  useEffect(() => {
    NoInternetConnection(setIsConnected);
  }, [NoInternetConnection]);

  useEffect(() => {
    if (isConnected) fetchData();
    // AsyncStorage.setItem('Movie', JSON.stringify(movieData));
  }, [page, isConnected]);

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
            Movie
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
      {movieData ? (
        <View
          style={[
            styles.flatlistView,
            {backgroundColor: isDarkTheme ? '#555' : 'white'},
          ]}>
          <FlatList
            keyExtractor={item => item.id}
            data={movieData}
            renderItem={({item}) => (
              <TouchableOpacity
                key={item.id}
                onPress={() => {
                  navigation.navigate('SubScreen', {res: item, movie: true});
                }}>
                <ListTab res={item} movie={true} />
              </TouchableOpacity>
            )}
            numColumns={1}
            initialNumToRender={5}
            ListFooterComponent={renderLoader}
            onEndReached={loadMoreItem}
            onEndReachedThreshold={0}
          />
        </View>
      ) : (
        <View
          style={{
            // flex: 1,

            height: windowHeight - 100,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <ActivityIndicator
            size="large"
            color={isDarkTheme ? '#fff' : '#215E8F'}
          />
        </View>
      )}
      {/* <ScrollView
        style={
          isDarkTheme ? {backgroundColor: '#555'} : {backgroundColor: 'white'}
        }
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl
            tintColor="#215E8F"
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
            <ActivityIndicator size="large" color="#215E8F" />
          </View>
        )}
      </ScrollView> */}
    </SafeAreaView>
  );
};

export default MovieTab;

const styles = StyleSheet.create({
  renderLoader: {
    marginVertical: 16,
    alignItems: 'center',
  },
  flatlistView: {
    // height:windowHeight-120,
    // flex:1,
    height:windowHeight-100,
    marginBottom: 100,
  },
});
