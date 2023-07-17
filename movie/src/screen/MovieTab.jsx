import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import {movieAction} from '../store/movieSlice';
import {useSelector} from 'react-redux';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';
import { windowWidth } from '../utils/Dimensions';

const MovieTab = ({navigation}) => {
  const dispatch = useDispatch();
  const movieData = useSelector(state => state.movie.data);

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
      'https://api.themoviedb.org/3/discover/movie',
      requestOptions,
    );
    response = await response.json();

    dispatch(movieAction.fetchData(response.results));
  };

  useEffect(() => {
    fetchData();
  }, []);
  // console.log(movieData);
  return (
    <SafeAreaView>
      {/* <View style={styles.main}>
        <Text
          style={{
            fontWeight: 'bold',
            color: '#215F8E',
            fontSize: 20,
            textAlign: 'center',
          }}>
          Movie List
        </Text>
        
      </View> */}
      <View style={{backgroundColor: '#B3C6D6', flexDirection: 'row'}}>
        <TouchableOpacity
          style={{alignSelf: 'center', paddingLeft: 20}}
          onPress={() => {
            navigation.openDrawer();
          }}>
          <Icon name="menu" size={24} color="#215F8E" />
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
              color: '#215F8E',
              textAlign: 'center',
            }}>
            Movie List
          </Text>
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {movieData ? (
          movieData.map(res => {
            return (
              <TouchableOpacity
                key={res.id}
                onPress={() => {
                  navigation.navigate('MovieSub', {res: res});
                }}>
                <View style={styles.list}>
                  <View style={{width:windowWidth-60}}>
                    <Text style={{fontSize: 18, color: '#215F8E'}}>
                      {res.original_title}
                    </Text>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                      }}>
                      <Text style={{fontSize: 13}}>
                        {' '}
                        Release Date : {res.release_date}
                      </Text>
                      <Text style={{fontSize: 13}}>
                        Votes : {res.vote_count}
                      </Text>
                    </View>
                  </View>
                  <View style={{alignItems: 'center'}}>
                    <Icon name="arrow-forward-ios" size={20} color="#215F8E" />
                  </View>
                </View>
              </TouchableOpacity>
            );
          })
        ) : (
          <ActivityIndicator size="small" color="#215F8E" />
        )}
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  main: {
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    shadowRadius: 2,
    backgroundColor: '#B3C6D6',
  },
  list: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderColor: '#202020',
    margin: 5,
    padding: 5,
    borderRadius: 5,
  },
});
export default MovieTab;
