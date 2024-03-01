
import { StyleSheet, Text, View ,   Image} from 'react-native'
import React from 'react'

const Imgcomp = ({image}) => {
  return (
    <View style={{width:250,height:200,paddingTop:20,paddingLeft:120}}>
      <Image source={image}  style={{width:200,height:250}}/>
    </View>
  )
}

export default Imgcomp

const styles = StyleSheet.create({})