import React, {useState, useContext} from 'react';
import {
  ImageBackground,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import Feather from 'react-native-vector-icons/Feather';
import {freeGames, paidGames, sliderData} from '../model/data';
import BannerSlider from '../component/BannerSlider';
import {windowWidth} from '../utils/Dimensions';
import CustomSwitch from '../component/CustomSwitch';
import Listitem from '../component/Listitem';
import { AuthContxt } from '../context/AuthContext';

const Home = ({navigation}) => {

  const {userName} = useContext(AuthContxt);

  const [gamesTab, setGamesTab] = useState(1);
  const renderBaner = ({item, index}) => {
    return <BannerSlider data={item}></BannerSlider>;
  };

  const onSelectSwitch = value => {
    setGamesTab(value);
  };
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <ScrollView style={{padding: 20}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 20,
          }}>
          <Text
            style={{
              fontSize: 18,
              fontWeight: 'bold',
              color: '#000',
              fontFamily: 'Roboto-Medium',
            }}>
            Hello {userName}
          </Text>
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <ImageBackground
              source={require('../../assets/images/homeScreen/user-Profile.jpg')}
              style={{width: 35, height: 35}}
              imageStyle={{borderRadius: 25}}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            borderColor: '#C6C6C6',
            borderWidth: 1,
            borderRadius: 8,
            paddingHorizontal: 10,
            paddingVertical: Platform.OS === 'ios' ? 15 : 0,
          }}>
          <Feather
            name="search"
            size={20}
            color="#C6C6C6"
            style={{marginRight: 5}}
          />
          <TextInput placeholder="Search"></TextInput>
        </View>
        <View
          style={{
            marginVertical: 15,
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 20,
          }}>
          <Text
            style={{
              fontSize: 18,
              fontWeight: 'bold',
              color: '#000',
              fontFamily: 'Roboto-Medium',
            }}>
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
          data={sliderData}
          renderItem={renderBaner}
          sliderWidth={windowWidth - 40}
          itemWidth={300}
          loop={true}
        />
        <View style={{marginVertical: 20}}>
          <CustomSwitch
            selectionMode={1}
            option1="Free to Play"
            option2="Paid Games"
            onSelectSwitch={onSelectSwitch}></CustomSwitch>
        </View>
        <View style={{marginBottom: 18}}>
          {gamesTab == 1 &&
            freeGames.map(game => {
              return (
                <Listitem
                  key={game.id}
                  photo={game.poster}
                  title={game.title}
                  subTitle={game.subtitle}
                  isFree={game.isFree}
                  onPress={() =>
                    navigation.navigate('GameDetails', {
                      title: game.title,
                      id: game.id,
                    })
                  }></Listitem>
              );
            })}
          {gamesTab == 2 &&
            paidGames.map(game => {
              return (
                <Listitem
                  key={game.id}
                  photo={game.poster}
                  title={game.title}
                  subTitle={game.subtitle}
                  isFree={game.isFree}
                  price={game.price}
                  onPress={() =>
                    navigation.navigate('GameDetails', {
                      title: game.title,
                      id: game.id,
                    })
                  }></Listitem>
              );
            })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
