import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import {movieAction} from '../store/movieSlice';
import {useSelector} from 'react-redux';

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
  console.log(movieData);
  return (
    <ScrollView>
      {movieData ? (
        movieData.map(res => {
          return (
            <TouchableOpacity
              key={res.id}
              onPress={() => {
                navigation.navigate('MovieSub', {res: res});
              }}>
              <View style={styles.list}>
                <Text style={{fontSize: 18, color: '#690009'}}>
                  {res.original_title}
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text style={{fontWeight: 13}}>{res.release_date}</Text>
                  <Text style={{fontWeight: 13}}>{res.vote_count}</Text>
                </View>
              </View>
            </TouchableOpacity>
          );
        })
      ) : (
        <ActivityIndicator size="small" color="#690009" />
      )}
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  list: {
    borderBottomWidth: 1,
    borderColor: '#202020',
    margin: 5,
    padding: 5,
    borderRadius:5
  },
});
export default MovieTab;
