import { StyleSheet, Text, View ,   Image} from 'react-native'
import React from 'react'

const Imagecomp = ({image,TextInput}) => {
  return (
    <View style={{width:250,height:200,paddingTop:20,marginRight:60,paddingLeft:120}}>
      <Image source={image} style={{width:150,height:148}}/>
    </View>
  )
}

export default Imagecomp

const styles = StyleSheet.create({})