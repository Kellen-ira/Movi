import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View,Image, } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

import { TextInput,Checkbox} from "react-native-paper";

import { Icon } from 'react-native-elements';

import Imgcomp from './components/Imgcomp'
//import { Image } from '@rneui/base';
const image=require('./assets/gf.jpg')

export default function Search(navigation) {
  const array=[
    {
      id:1,
      image:image
    }
  ]
  
 return (
   <View>

    <View style={{backgroundColor:"#060608",paddingLeft:50,paddingTop:30}}>

<Text style={{color:'white',fontWeight:'bold',fontSize:20,paddingBottom:20}}>Search</Text>
</View>
<View style={{backgroundColor:'#26282c',display:'flex',height:700}}>
<TextInput
textColor='white'
  placeholder={'Type Title,Categories,Years,etc'}
  
  mode={'outlined'}
  style={{backgroundColor:'#26282c'}}
  background={'#26282c'}
  name={'search'}
  />
  <View style={{display:'flex',flexDirection:'row',gap:20, flexWrap:'wrap',paddingLeft:20,paddingTop:20}}>
    <TouchableOpacity>
      <Text style={{borderRadius:5,borderWidth:1,padding:5,width:90,textAlign:'center',borderColor:'gray',color:'gray'}}>Comedy</Text>
    </TouchableOpacity>
    <TouchableOpacity>
      <Text style={{borderRadius:5,borderWidth:1,padding:5,width:90,textAlign:'center',borderColor:'gray',color:'gray'}}>Thriller</Text>
    </TouchableOpacity>
    <TouchableOpacity>
      <Text style={{borderRadius:5,borderWidth:1,padding:5,width:120,textAlign:'center',borderColor:'gray',color:'gray'}}>Assian Dramas</Text>
    </TouchableOpacity>
    <TouchableOpacity>
      <Text style={{borderRadius:5,borderWidth:1,padding:5,width:150,textAlign:'center',borderColor:'gray',color:'gray'}}>U.s Top Action</Text>
    </TouchableOpacity>
    <TouchableOpacity>
      <Text style={{borderRadius:5,borderWidth:1,padding:5,width:150,textAlign:'center',borderColor:'gray',color:'gray'}}>Horror Comedy</Text>
    </TouchableOpacity>
  </View>
  <View>
{
        array.map((item,index)=>{
            return(
                <View key={index}><Imgcomp
                image={item.image}
                /></View>
            )
        })
    }

</View>
<View>
  <Text style={{fontWeight:'bold' ,color:'white',textAlign:'center',paddingTop:50,fontSize:20}}>Search, Play and Enjoy</Text>
   <Text style={{color:'white',fontSize:15,textAlign:'center',paddingTop:10}}>Start Typing a movie or series  of your choice to </Text>
   <Text style={{textAlign:'center',color:'white',fontSize:15,paddingTop:10}}>watch on movi</Text>
</View>
<View style={{paddingTop:120}}>


</View>
</View>


</View>



  








  )}