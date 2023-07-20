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
import React from 'react';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';
import {windowWidth} from '../utils/Dimensions';


const ListTab = ({res, movie}) => {
  return (
    <View style={styles.list}>
      <Image
        source={{
          uri: `https://image.tmdb.org/t/p/original/${res.poster_path}`,
        }}
        style={{
          marginTop: 5,
          flexDirection: 'row',
          justifyContent: 'center',
          borderRadius: 5,
          alignSelf: 'center',
          width: 90,
          height: 110,
        }}
      />
      <View
        style={{
          width: windowWidth - 140,
          marginLeft: 10,
          marginTop: 2,
        }}>
        <Text style={{fontSize: 18, color: '#215F8E'}}>
          {movie ? res.title : res.name}
        </Text>
        <View style={{marginVertical: 10}}>
          <Text style={{fontSize: 13}}>
            Release Date : {movie ? res.release_date : res.first_air_date}
          </Text>
          <Text style={{fontSize: 13}}>Votes : {res.vote_count}</Text>
        </View>
      </View>
      <View style={{alignSelf: 'center', opacity: 0.5}}>
        <Icon name="arrow-forward-ios" size={20} color="#215F8E" />
      </View>
    </View>
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
    borderRightWidth:1,
    borderColor: '#215f8e',
    margin: 5,
    padding: 5,
    borderRadius: 5,
    
  },
});
export default ListTab;
