import { View, Text, Image } from 'react-native'
import React from 'react'
import {EthPrice} from './SubInfo'
import {COLORS, SIZES, FONTS} from '../constants'

const DetailsBid = ({bid}) => {
  return (
    <View>
      <Image 
        source={bid.image}
        resizeMode="contain"
        style={{width: 48, height: 48}}
      />
      <Text> Bid placed by {bid.name}</Text>
    </View>
  )
}

export default DetailsBid