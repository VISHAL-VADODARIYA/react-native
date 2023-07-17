import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import { useDispatch } from 'react-redux';
import { userAction } from '../store/userSlice';

const ProfileTab = ({navigation}) => {
  const loggedIn = useSelector(state => state.user.flag);
  const activeUser = useSelector(state => state.user.activeUser);
  console.log(activeUser)
  const dispatch = useDispatch()

  const logoutHandler =()=>{
    dispatch(userAction.logout())
    navigation.navigate('Login')
  }
  return (
    <View style={styles.main}>
      {/* {loggedIn && ( */}
        <View>
          <View style={styles.user}>
            <Image
              style={styles.user}
              source={{
                uri: 'https://www.vecteezy.com/free-vector/user-avatar',
              }}
            />
          </View>
          <View>
            <Text style={styles.userData}>Name : {activeUser.name}</Text>
          </View>
          <View>
            <Text style={styles.userData}>Email : {activeUser.email}</Text>
          </View>
        </View>
        <View  style={styles.button}>
            <TouchableOpacity onPress={()=>{logoutHandler()}} >
                <Text style={{color:"#fff",fontSize:18}}>Log out</Text>
            </TouchableOpacity>
        </View>
      {/* )} */}
    </View>
  );
};
const styles = StyleSheet.create({
  main: {

    marginHorizontal: 20,
    justifyContent:'space-between'
  },
  userData: {
    margin:5,
    color:"#690009",
    fontSize:20
  },
  user:{
    height:100,
    width:100
  },
  button:{
    marginTop:20,
    borderRadius:5,
    backgroundColor:'#690009',
    padding:15
  }
});

export default ProfileTab;
