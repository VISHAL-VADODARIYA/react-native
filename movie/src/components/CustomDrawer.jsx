//import liraries
import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  useColorScheme,
  StyleSheet,
} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {useDispatch, useSelector} from 'react-redux';
import {userAction} from '../store/userSlice';
import ProfileTab from '../screen/ProfileTab';
import {useNavigation} from '@react-navigation/native';

const CustomDrawer = props => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const activeUser = useSelector(state => state.user.activeUser);
  const logoutHandler = () => {
    dispatch(userAction.logout());
    // navigation.navigate('Login');
  };
  const theme = useColorScheme();
  const isDarkTheme = theme === 'dark';

  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{backgroundColor: '#133a59'}}>
        <ImageBackground
          source={{
            uri: 'https://img.tineye.com/flickr-images/?filepath=labs-flickr-public/images/08/2592647075_08304c12c7_m.jpg&size=73',
          }}
          style={styles.backgroundImage}>
          <TouchableOpacity
            style={styles.profileImageTouchableOpacity}
            onPress={() => {
              navigation.navigate('Profile');
            }}>
            <Image
              source={{
                uri: 'https://img.freepik.com/free-icon/man_318-157617.jpg?w=2000',
              }}
              style={styles.profileImage}
            />
          </TouchableOpacity>
          <Text style={styles.userName}>{activeUser.name}</Text>
        </ImageBackground>

        <View
          style={[
            styles.drawerItemList,
            {backgroundColor: isDarkTheme ? '#333' : '#fff'},
          ]}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
      <View
        style={[
          styles.logoutView,
          {borderTopColor: isDarkTheme ? '#fff' : '#215f8e'},
        ]}>
        <TouchableOpacity
          onPress={() => {
            logoutHandler();
          }}
          style={styles.logoutTouchabaleOpacity}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Ionicons
              name="exit-outline"
              size={24}
              color={isDarkTheme ? '#fff' : '#215f8e'}
            />
            <Text
              style={[
                styles.logoutText,
                {color: isDarkTheme ? '#fff' : '#215f8e'},
              ]}>
              Log out
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {padding: 20},
  profileImageTouchableOpacity: {
    height: 80,
    width: 80,
    borderRadius: 40,
    marginBottom: 10,
  },
  profileImage: {
    height: 80,
    width: 80,
    borderRadius: 40,
    marginBottom: 10,
  },
  userName: {
    color: '#fff',
    fontSize: 18,
    fontFamily: 'Roboto-Medium',
    marginBottom: 5,
  },
  drawerItemList: {
    flex: 1,
    paddingTop: 10,
  },
  logoutView: {
    padding: 20,
    borderTopWidth: 1,
  },
  logoutTouchabaleOpacity: {paddingVertical: 15},
  logoutText: {
    fontSize: 15,
    marginLeft: 5,
    fontWeight: 'bold',
  },
});

export default CustomDrawer;

{
  /* <View>
      <DrawerContentScrollView
        {...props}
        // contentContainerStyle={{backgroundColor: '#8200d6'}}
        >
        {/* <ImageBackground
          source={require('../assets/images/header-bg.jpeg')}
          style={{padding: 20}}>
          <Image
            source={require('../assets/images/user-profile.png')}
            style={{height: 80, width: 80, borderRadius: 40, marginBottom: 10}}
          />
          <Text
            style={{
              color: '#fff',
              fontSize: 18,
              fontFamily: 'Roboto-Medium',
              marginBottom: 5,
            }}>
            Vishal Vadodariya
          </Text>
          <View style={{flexDirection:'row'}}>
          <Text style={{color: '#fff', fontFamily: 'Roboto-Regular', marginRight:5}}>
            280 Coins
          </Text>
          <FontAwesome5 name='coins' size={14} color='#fff' />
          </View>
        </ImageBackground> */
}
{
  /* <View style={{flex:1,backgroundColor:'#fff',paddingTop:10}} >  */
}
// <DrawerItemList {...props} />
{
  /* </View> */
}

// </DrawerContentScrollView>
{
  /* <View style={{padding:20,borderTopWidth:1,borderTopColor:'#ccc'}}>
        <TouchableOpacity onPress={()=>{}} style={{paddingVertical:15}}>
            <View style={{flexDirection:'row', alignItems:'center'}}>
            <Ionicons name='share-social-outline' sixe ={22} />
        <Text style={{fontSize:15,fontFamily:'Roboto-Medium',marginLeft:5}}>Tell a Friend</Text>
            </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{}} style={{paddingVertical:15}}>
            <View style={{flexDirection:'row', alignItems:'center'}}>
            <Ionicons name='exit-outline' sixe ={22} />
        <Text style={{fontSize:15,fontFamily:'Roboto-Medium',marginLeft:5}}>Sign Out</Text>
            </View>
        </TouchableOpacity>
      </View> */
}
// </View> */}
