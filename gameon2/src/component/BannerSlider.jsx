import React from 'react'
import { Image } from 'react-native'


export default function BannerSlider({data}) {
  return (
        <Image source={data.image} style={{height:150,width:300,borderRadius: 10}}></Image>
  )
}
