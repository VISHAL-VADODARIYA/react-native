import { View, Text } from 'react-native'
import React from 'react'

const MovieDetail = ({route}) => {
    const {res} = route.params
  return (
    <View style={{margin: 10, justifyContent: 'center'}}>
        
      <View>
        <Text style={{fontSize: 30,margin:5, color: '#1f3f72'}}>
          {res.original_title}
        </Text>

        <View
          style={{
            marginTop: 10,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          {/* <Image
            style={{
              width: 300,
              height: 250,
              borderColor: 'black',
              borderRadius: 5,
            }}
            source={{
              uri: `https://api.themoviedb.org/3/discover/movieres.poster_path/${res.poster_path}`,
            }}
          /> */}

        </View>
        

        <Text
          style={{color: '#777', margin: 5, fontSize: 18, marginVertical: 4, textAlign:'justify'}}>
          <Text style={{fontWeight: 900}}>Overview : </Text> {res.overview}
        </Text>
        <Text
          style={{
            color: '#666',
            fontWeight: 900,
            margin: 5,
            fontSize: 18,
            marginVertical: 4,
          }}>
          Language : {res.original_language}
        </Text>
        <Text
          style={{color: '#777', margin: 5, fontSize: 18, marginVertical: 4}}>
          <Text style={{fontWeight: 900}}>Vote Aaverage : </Text> {res.vote_average}
        </Text>
      </View>
      
    </View>
  )
}

export default MovieDetail