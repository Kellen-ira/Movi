import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { View, TextInput, StyleSheet, FlatList,TouchableHighlight } from 'react-native';
import { Button, Icon } from 'react-native-elements';
import PostCard from '../fetchApi/component/Card';



const Search = ({navigation}) => {

    const [search,setSearch] = useState([])
    const [searchdata,setSearchdata] = useState('')
   
    React.useEffect(() => {
     if (searchdata.length > 0){
       Searchapi()
     }else{
       setSearch([])
     }
      
    }, [searchdata])
   
    const Searchapi = async () => {
     axios.get(https://api.themoviedb.org/3/search/movie?api_key=d9cf23cf23f14a29b69eccb99afeaeff&language=en-US&query=${searchdata}&page=1&include_adult=false
      )
      .then((data1)=>{
        console.log(data1.data.results);
       setSearch(data1.data.results)
      }).catch((err)=>{
       console.log(err)
      })
    }
    return (
        <>
            <View style={{ height: 10 }}></View>
            <View style={styles.container}>
                <Icon name="search" size={20} color="#666" style={styles.icon} />
                <TextInput
                    style={styles.input}
                    placeholder="Search..."
                    value={searchdata}
                    placeholderTextColor="rgba(0, 0, 0, 0.4)"
                    placeholderStyle={styles.placeholder}
                    onChangeText={(e)=>setSearchdata(e)}
                />
                <Icon name="tune-variant" type="material-community" color="#bcbcbc" size={20} style={styles.icon} />
            </View>
            <View>
                <FlatList
                    data={search}
                    renderItem={({ item }) =>
                    <><TouchableHighlight>
                        <PostCard img={item.poster_path} title_movie={item.original_title} />
                        </TouchableHighlight></>}
                    keyExtractor={(item, index) => index.toString()}
                />
            </View>
        </>

    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f3f3fe',
        borderRadius: 30,
        paddingHorizontal: 10,
        paddingVertical: 2,
        marginVertical: 20,
        marginHorizontal: 10,
        shadowColor: '#000',
        shadowOffset: 2,
        borderColor: '#000',
        borderWidth: 1
    },

    input: {
        flex: 1,
        height: 50,
        marginLeft: 10,
        fontSize: 16,
        borderRadius: 80,
    },
    icon: {
        padding: 10,
    },
    placeholder: {
        fontSize: 20,
        fontWeight: 'bold'
    },
});

export default Search;