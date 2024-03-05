import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View,Image, Pressable } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

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
                <View key={index}>
                    
                    <Imagecomp
                image={item.image}
                /></View>
            )
        })
    }
    <View style={{width:350,paddingLeft:20}}>
       
    <Text style={{color:'#fff',paddingLeft:20}}>Name</Text>
    <View style={{display:'flex',flexDirection:'row',alignItems:'baseline'}}>
     <TextInput
     textColor='white'
     placeholder='Irakoze Kellen'
     style={{backgroundColor:'#26282c',marginBottom:20}}
     color='white'
     
  right={<TextInput.Icon 
    icon={'account'}
    size={30}
    color={'yellow'}
/>} 
    />
    {/* <Icon name='account' type='material-community' color='yellow' style={{}}/> */}
    </View> 
      
      
    <Text style={{color:'#fff',paddingLeft:20}}>Email</Text>
    <View style={{display:'flex',flexDirection:'row',alignItems:'baseline'}}>
     <TextInput
     textColor='white'
     placeholder='ikellen2016@gmail.com'
     style={{backgroundColor:'#26282c',color:'#fff',marginBottom:20}}
     color='white'
      
     right={<TextInput.Icon 
        icon={'email'}
        size={30}
        color={'yellow'}
    />}
     
    />
    {/* <Icon name='email' color='yellow' style={{}}/> */}
    </View>
    
    <Text style={{color:'#fff',paddingLeft:20}}>Phone Number</Text>
    <View style={{display:'flex',flexDirection:'row',alignItems:'baseline'}}>
    <TextInput
    textColor='white'
     placeholder='+250785634'
     style={{backgroundColor:'#26282c',color:'#fff',marginBottom:150,width:300}}
     
     right={<TextInput.Icon 
        icon={'phone'}
        size={30}
        color={'yellow'}
    />}
    />
     {/* <Icon name='phone' color='yellow' style={{}}/> */}
    </View>
    <TouchableOpacity style={{borderWidth:1,padding:10,borderRadius:5,backgroundColor:'yellow'}}>
        <Text style={{textAlign:'center'}}>Save</Text>
    </TouchableOpacity>


</View>



 </View>
 
       </View>





 )}


