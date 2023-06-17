import React, { Component } from 'react'
import { Text, View ,Image } from 'react-native'
import {  } from 'react-native-svg'

export default function BannerSlider ({data}) {
  
    return (
      <View>
        <Image source={data.image} style={{width:300,height:150,borderRadius:10}} />
      </View>
    )
  
}