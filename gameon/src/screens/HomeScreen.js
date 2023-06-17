//import liraries
import React, {useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  ImageBackground,
  TextInput,
  Touchable,
  TouchableOpacity,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Feather from 'react-native-vector-icons/Feather';
import Carousel from 'react-native-snap-carousel';
import {freeGames,paidGames, sliderdata} from '../model/data';
import BannerSlider from '../components/BannerSlider';
import {windowWidth} from '../utils/Dimensions';
import CustomSwitch from '../components/CustomeSwitch';
import ListItem from '../components/ListItem';

export default function HomeScreen({navigation}) {
  const [gameTab, setGameTab] = useState(1);

  const renderBanner = ({item, index}) => {
    return <BannerSlider data={item} />;
  };

  const onSelectSwitch = value => {
    setGameTab(value);
  };

  return (
    <SafeAreaView styles={{flex: 1, backgroundColor: '#fff'}}>
      <ScrollView style={{padding: 20}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 20,
          }}>
          <Text style={{fontSize: 18, fontFamily: 'Roboto-Medium'}}>
            Hello Vishal Vadodariya
          </Text>
          <TouchableOpacity onPress={()=>navigation.openDrawer()}>
          <ImageBackground
            source={require('../assets/images/user-profile.png')}
            style={{width: 35, height: 35}}
            imageStyle={{borderRadius: 25}}
          /></TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: 'row',
            borderRadius: 8,
            borderWidth: 1,
            borderColor: '#C6C6C6',
            paddingHorizontal: 10,
            paddingVertical: 8,
            alignItems:'center'
          }}>
          <Feather
            name="search"
            size={20}
            color="#C6C6C6"
            style={{marginRight: 5}}
          />
          <TextInput placeholder="Search" />
        </View>
        <View
          style={{
            marginVertical: 15,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text style={{fontSize: 18, fontFamily: 'Roboto-Medium'}}>
            Upcoming Games
          </Text>
          <TouchableOpacity onPress={() => {}}>
            <Text style={{color: '#0aada8'}}>See all</Text>
          </TouchableOpacity>
        </View>

        <Carousel
          ref={c => {
            this._carousel = c;
          }}
          data={sliderdata}
          renderItem={renderBanner}
          sliderWidth={windowWidth - 40}
          itemWidth={300} loop={true}></Carousel>

        <View style={{marginVertical: 20}}>
          <CustomSwitch
            selectionMode={1}
            option1="Free to Play"
            option2="Paid Games"
            onSelectSwitch={onSelectSwitch}></CustomSwitch>
        </View>
        {gameTab == 1 &&
          freeGames.map(item => (
            <ListItem
              key={item.id}
              photo={item.poster}
              title={item.title}
              subTitle={item.subTitle}
              isFree={item.isFree}
              
            />
          ))}
        {gameTab == 2 &&
          paidGames.map(item => (
            <ListItem
              key={item.id}
              photo={item.poster}
              title={item.title}
              subTitle={item.subTitle}
              isFree={item.isFree}
              price={item.price}
            />
          ))}
      </ScrollView>
    </SafeAreaView>
  );
}
