import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  ActivityIndicator,
  Image,
  ImageBackground,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import {useSelector} from 'react-redux';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';
import {windowWidth} from '../utils/Dimensions';
import {dataAction} from '../store/dataSlice';
import ListTab from '../components/ListTab';

const TvTab = ({navigation}) => {
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

    fetch('https://api.themoviedb.org/3/discover/tv', options)
      .then(response => response.json())
      .then(response => dispatch(dataAction.fetchTvData(response.results)))
      .catch(err => console.error(err));

    //   var myHeaders = new Headers();
    //   myHeaders.append(
    //     'Authorization',
    //     'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MDdhM2YzNTQ4N2IxYTdjY2U5MTE2ZDE3ZGFlMjE4MSIsInN1YiI6IjY0OGFhN2Q3NTU5ZDIyMDBlMjA0N2ZkYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.bw50vVBFpg0ML9x64owYF_wnyHLtT1TpTBr8gfaY70E',
    //   );

    //   var requestOptions = {
    //     method: 'GET',
    //     headers: myHeaders,
    //     redirect: 'follow',
    //   };

    //   let response = await fetch(
    //     'https://api.themoviedb.org/3/discover/tv',
    //     requestOptions,
    //   );
  };

  useEffect(() => {
    fetchData();
  }, []);
  console.log(tvData)

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
      <ScrollView showsVerticalScrollIndicator={false}>
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
          <ActivityIndicator size="small" color="#215F8E" />
        )}
      </ScrollView>
    </SafeAreaView>
    // <SafeAreaView>
    //   <View style={{backgroundColor: '#B3C6D6', flexDirection: 'row'}}>
    //     <TouchableOpacity
    //       style={{alignSelf: 'center', paddingLeft: 20}}
    //       onPress={() => {
    //         navigation.openDrawer();
    //       }}>
    //       <Icon name="menu" size={24} color="#215F8E" />
    //     </TouchableOpacity>
    //     <View
    //       style={{
    //         padding: 15,
    //         flexDirection: 'row',
    //         justifyContent: 'center',
    //         alignItems: 'center',
    //         shadowRadius: 2,
    //       }}>
    //       <Text
    //         style={{
    //           fontWeight: 900,
    //           fontSize: 18,
    //           color: '#215F8E',
    //           textAlign: 'center',
    //         }}>
    //         Tv
    //       </Text>
    //     </View>
    //   </View>

    //   <ScrollView showsVerticalScrollIndicator={false}>
    //     {tvData ? (
    //       tvData.map(res => {
    //         return (
    //           <>
    //             {res.name !== '' && (
    //               <TouchableOpacity
    //                 key={res.id}
    //                 onPress={() => {
    //                   navigation.navigate('SubScreen', {res: res, movie: false});
    //                 }}>
    //                 <View style={styles.list}>
    //                   <Image
    //                     source={{
    //                       uri: `https://image.tmdb.org/t/p/original/${res.poster_path}`,
    //                     }}
    //                     style={{
    //                       marginTop: 5,
    //                       flexDirection: 'row',
    //                       justifyContent: 'center',
    //                       borderRadius: 5,
    //                       alignSelf: 'center',
    //                       width: 90,
    //                       height: 110,
    //                     }}
    //                   />
    //                   <View
    //                     style={{
    //                       width: windowWidth - 140,
    //                       marginLeft: 10,
    //                       marginTop: 2,
    //                     }}>
    //                     <Text style={{fontSize: 18, color: '#215F8E'}}>
    //                       {res.name}
    //                     </Text>
    //                     <View style={{marginVertical: 10}}>
    //                       <Text style={{fontSize: 13}}>
    //                         Release Date : {res.first_air_date}
    //                       </Text>
    //                       <Text style={{fontSize: 13}}>
    //                         Votes : {res.vote_count}
    //                       </Text>
    //                     </View>
    //                   </View>
    //                   <View style={{alignSelf: 'center', opacity: 0.5}}>
    //                     <Icon
    //                       name="arrow-forward-ios"
    //                       size={20}
    //                       color="#215F8E"
    //                     />
    //                   </View>
    //                 </View>
    //               </TouchableOpacity>
    //             )}
    //           </>
    //         );
    //       })
    //     ) : (
    //       <ActivityIndicator size="small" color="#215F8E" />
    //     )}
    //   </ScrollView>
    // </SafeAreaView>
  );
};

export default TvTab;
