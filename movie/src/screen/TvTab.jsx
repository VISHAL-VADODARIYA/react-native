import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  ActivityIndicator,
  RefreshControl,
} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import {useSelector} from 'react-redux';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';
import {dataAction} from '../store/dataSlice';
import ListTab from '../components/ListTab';

const TvTab = ({navigation}) => {
  const [page,setPage] =useState(1)
  const dispatch = useDispatch();
  const tvData = useSelector(state => state.data.tv);

  const fetchData = () => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MDdhM2YzNTQ4N2IxYTdjY2U5MTE2ZDE3ZGFlMjE4MSIsInN1YiI6IjY0OGFhN2Q3NTU5ZDIyMDBlMjA0N2ZkYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.bw50vVBFpg0ML9x64owYF_wnyHLtT1TpTBr8gfaY70E',
      },
    };

    fetch(`https://api.themoviedb.org/3/discover/tv?page=${page}`, options)
      .then(response => response.json())
      .then(response => dispatch(dataAction.fetchTvData(response.results)))
      .catch(err => console.error(err));
  };

  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setPage(page+1);
      setRefreshing(false);
    }, 2000);
  };

  useEffect(() => {
    fetchData();
  }, [page]);

  return (
    <SafeAreaView>
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
            Tv
          </Text>
        </View>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl tintColor="#215f8e" refreshing={refreshing} onRefresh={onRefresh} />
        }>
        {tvData ? (
          tvData.map(res => {
            return (
              <TouchableOpacity
                key={res.id}
                onPress={() => {
                  navigation.navigate('SubScreen', {res: res, movie: false});
                }}>
                <ListTab res={res} movie={false} />
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
      </ScrollView>
    </SafeAreaView>
  );
};

export default TvTab;
