import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  SafeAreaView,
  useColorScheme,
} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';
import {userAction} from '../store/userSlice';
import Icon from 'react-native-vector-icons/dist/FontAwesome5';
import {useNavigation} from '@react-navigation/native';

const ProfileTab = () => {
  const navigation = useNavigation();
  const activeUser = useSelector(state => state.user.activeUser);
  const theme = useColorScheme();
  const isDarkTheme = theme === 'dark';

  return (
    <SafeAreaView
      style={{flex: 1, backgroundColor: isDarkTheme ? '#555' : '#fff'}}>
      {/* {loggedIn && ( */}
      <View
        style={{
          backgroundColor: isDarkTheme ? '#333' : '#B3C6D6',
          flexDirection: 'row',
        }}>
        <TouchableOpacity
          style={{alignSelf: 'center', paddingLeft: 20}}
          onPress={() => {
            navigation.navigate('Home');
          }}>
          <Icon
            name="arrow-left"
            size={24}
            color={isDarkTheme ? '#fff' : '#215F8E'}
          />
        </TouchableOpacity>
        <View
          style={{
            padding: 15,
            flexDirection: 'row',
            justifyContent: 'center',
            shadowRadius: 2,
          }}>
          <Text
            style={{
              fontWeight: 900,
              fontSize: 18,
              color: isDarkTheme ? '#fff' : '#215F8E',
              textAlign: 'center',
            }}>
            Profile
          </Text>
        </View>
      </View>
      <View style={styles.main}>
        <View style={styles.userView}>
          <Image
            style={[
              styles.user,
              {
                borderColor: isDarkTheme?'#fff':'#215F8E',
              },
            ]}
            source={{
              uri: 'https://img.freepik.com/free-icon/man_318-157617.jpg?w=2000',
            }}
          />
        </View>
        <View>
          <Text
            style={[
              styles.userData,
              {color: isDarkTheme ? '#fff' : '#215F8E'},
            ]}>
            Name : {activeUser.name}
          </Text>
        </View>
        <View>
          <Text
            style={[
              styles.userData,
              {color: isDarkTheme ? '#fff' : '#215F8E'},
            ]}>
            Email : {activeUser.email}
          </Text>
        </View>

        {/* <View style={styles.button}>
          <TouchableOpacity
            onPress={() => {
              logoutHandler();
            }}>
            <Text style={{color: '#fff', fontSize: 18}}>Log out</Text>
          </TouchableOpacity>
        </View> */}
        {/* )} */}
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  main: {
    marginHorizontal: 20,
    justifyContent: 'space-between',
  },
  titleText: {
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'center',
    shadowRadius: 2,
    backgroundColor: '#B3C6D6',
  },
  userData: {
    margin: 5,
    fontSize: 20,
  },
  user: {
    height: 150,
    width: 150,
    alignSelf: 'center',
    borderRadius: 100,
    borderWidth: 3,
    marginVertical: 20,
  },
  userView: {
    marginVertical: 20,
    marginBottom: 20,
  },
  button: {
    marginTop: 20,
    borderRadius: 5,
    backgroundColor: '#215F8E',
    padding: 15,
  },
});

export default ProfileTab;
