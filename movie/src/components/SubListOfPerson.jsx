import {SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View, useColorScheme} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/dist/FontAwesome5';
import {windowHeight, windowWidth} from '../utils/Dimensions';
import PersonList from './PersonList';



const SubListOfPerson = ({route , navigation}) => {
    const {res, main} = route.params;
    const theme = useColorScheme();
    const isDarkTheme = theme === 'dark';
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
            {/* {data ? (movie ? data.title : data.name) : ''} */}hello
          </Text>
        </View>
        <ScrollView>
        {res ? (
          res.map(res => {
            return (
              <TouchableOpacity
                key={res.id}
                onPress={() => {
                  navigation.navigate('SubScreen', {res: res, main: true});
                }}>
                <PersonList res={res} movie={true} />
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
      </View>
    </SafeAreaView>
  );
};

export default SubListOfPerson;

const styles = StyleSheet.create({});
