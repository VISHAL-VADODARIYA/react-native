import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';
import {userAction} from '../store/userSlice';

const ProfileTab = ({navigation}) => {
  const loggedIn = useSelector(state => state.user.flag);
  const activeUser = useSelector(state => state.user.activeUser);
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(userAction.logout());
    // navigation.navigate('Login');
  };
  return (
    <SafeAreaView>
      {/* {loggedIn && ( */}
      <View style={styles.titleText}>
        <Text style={{fontWeight: 900, fontSize: 18,color:'#215F8E', textAlign: 'center'}}>
          Profile
        </Text>
      </View>
      <View style={styles.main}>
        <View style={styles.userView}>
          <Image
            style={styles.user}
            source={{
              uri: 'https://img.freepik.com/free-icon/man_318-157617.jpg?w=2000',
            }}
          />
        </View>
        <View>
          <Text style={styles.userData}>Name : {activeUser.name} hello</Text>
        </View>
        <View>
          <Text style={styles.userData}>Email : {activeUser.email}</Text>
        </View>

        <View style={styles.button}>
          <TouchableOpacity
            onPress={() => {
              logoutHandler();
            }}>
            <Text style={{color: '#fff', fontSize: 18}}>Log out</Text>
          </TouchableOpacity>
        </View>
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
    color: '#215F8E',
    fontSize: 20,
  },
  user: {
    height: 150,
    width: 150,
    backgroundColor: '#555',
    alignSelf: 'center',
    borderRadius: 100,
    borderWidth: 3,
    borderColor: '#215F8E',
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
