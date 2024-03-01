import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View,Image, Pressable } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Bottoms from './components/Bottoms.jsx';
import { TextInput,Checkbox} from "react-native-paper";
import Imagecomp from './components/Imagecomp.jsx';
import {Icon} from 'react-native-elements';
//import { Image } from '@rneui/base';

const image=require('./assets/k.jpg')
export default function Edit({navigation}) {

    const array=[
       { id:1,
        image:image
       }
    ]
 return (

    <View>

<View style={{backgroundColor:"#1f2123",paddingLeft:50,paddingTop:30}}>

<Text style={{color:'white',fontWeight:'bold',fontSize:20}}>Edit Profile</Text>
</View> 
       
<View style={{backgroundColor:'#26282c',paddingTop:5,height:700,paddingLeft:10}}>
    {
        array.map((item,index)=>{
            return(
                <View key={index}><Imagecomp
                image={item.image}
                /></View>
            )
        })
    }

<TextInput
placeholder='J'






/>








 </View>
 
       </View>





 )}


