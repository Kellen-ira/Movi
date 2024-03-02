
import { StyleSheet, Text, View ,   Image} from 'react-native'
import React from 'react'

const Imgcomp = ({img,title_movie}) => {
  return (
    <View style={{width:250,height:200,paddingTop:20,paddingLeft:120}}>
      <Image source={{uri: `https://image.tmdb.org/t/p/w500${img}`}}  style={{width:200,height:250}}/>
      <Text>{title_movie}</Text>

    </View>
  )
}

export default Imgcomp

const styles = StyleSheet.create({})