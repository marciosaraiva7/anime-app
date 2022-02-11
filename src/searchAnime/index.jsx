import { SafeAreaView,
        ScrollView,
        View,
        StatusBar,
        TextInput, 
        Text,
        FlatList,
        Image,
        TouchableOpacity } from 'react-native'
import React, {useState, useEffect} from 'react'
import styles from './styles'
import api from '../services/api';


const URL = "/trending/anime";

export default function SearchAnime({navigation}) {

  const [searchText, setSearchText] = React.useState('');
  const [anime, setAnime] = useState([]);
  const [list, setList] = useState(anime);

  useEffect(() => {
    api.get(URL).then((response) => {
      setAnime(response.data.data);
    });
  }, []);

  useEffect(() => {
    if(searchText === '') {
      setList(anime);
    }else{
      setList(anime.filter(
          (item) => {
            if(item.attributes.canonicalTitle.toLowerCase().indexOf(searchText.toLowerCase()) > -1){
              return true;
            }else{
              return false;
            }
          })
      );
    }
  }, [searchText]);


  return (
    <SafeAreaView>
    
    <StatusBar hidden={false}/>

      <View style={styles.container}>
          <TextInput 
            style={styles.Input}
            onChangeText={setSearchText}
            value={searchText}
            placeholder={"Search"}
          />
      </View> 
      
      <View style={styles.list}>
        <FlatList 
            data={list}
            keyExtractor={(item, index) => item.id}
            renderItem={({ item }) => (
              
              <ScrollView style={styles.containerItem}>
                <TouchableOpacity 
                  activeOpacity={0.6}
                  onPress={() => navigation.navigate('Anime', 
                  {
                    name: item.attributes.canonicalTitle,
                    image: item.attributes.posterImage.original,
                    synopsis: item.attributes.synopsis,
                    ageRating: item.attributes.ageRatingGuide,
                    rating: item.attributes.averageRating,
                    video: item.attributes.youtubeVideoId

                  })}
                  style={styles.card}>
                  <Image source={{uri: item.attributes.posterImage.original}}
                    style={styles.imageItem}/>
                  <View style={styles.cardTexts}>
                  <Text style={styles.titleItem}>{item.attributes.canonicalTitle}</Text>
                  <Text style={styles.subTitleItem}>Type: {item.type}</Text>
                  <Text style={styles.subTitleItem}>Status: {item.attributes.status}</Text>
                  <Text style={styles.subTitleItem}>Start date: {item.attributes.startDate}</Text>
                  </View>
                </TouchableOpacity>  
              </ScrollView>
            )}
        />
      </View>   
    </SafeAreaView>
  )
}