import React, {useState, useEffect} from 'react';
import { SafeAreaView ,StatusBar, Dimensions, Text, TouchableOpacity, FlatList, Image, Animated, View, StyleSheet } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import styles from './styles';

import api from '../services/api';


const URL ="/trending/anime";

export default function Home({navigation}) {

  const [anime, setAnime] = useState([]);
  const scrollX = React.useRef(new Animated.Value(0)).current;

  
  const { width, height} = Dimensions.get('screen');
  const imageW = width * 0.85;
  const imageH = imageW * 1.54;

  useEffect(() => {
    api.get(URL).then((response) => {
      setAnime(response.data.data);
    });
  }, []);


  return (

    
    <SafeAreaView style={styles.container}>
    <StatusBar 
      animated={true}
      hidden={true}/>
    <View style={StyleSheet.absoluteFillObject}>


        {anime.map((image, index) => {
          const inputRange = [
            (index - 1) * width,
            index * width,
            (index + 1) * width
          ]
          const opacity = scrollX.interpolate({
            inputRange,
            outputRange: [0,1,0]
          })
          return <Animated.Image key={`image-${index}`}
                      source={{uri: image.attributes.posterImage.original}}
                      style={[
                        StyleSheet.absoluteFillObject,
                        {
                          opacity
                        }
                      ]}
                      blurRadius={30}
          />
        })}

    </View>

      <TouchableOpacity 
        style={styles.search}
        onPress={() => navigation.navigate('SearchAnime')}>
        <Image style={styles.icon} 
           source={require('../../assets/icons/search.png')}/>
      </TouchableOpacity>
      
      <Animated.FlatList 
      
        data={anime}
        keyExtractor={(item, index) => item.id}
        horizontal
        pagingEnabled
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollX}}}],
          {useNativeDriver: true}
        )}
        renderItem={({ item }) => (
        
          <TouchableOpacity style={styles.item}
            activeOpacity={0.9}
            onPress={() => navigation.navigate('Anime', 
                {
                  name: item.attributes.canonicalTitle,
                  image: item.attributes.posterImage.original,
                  synopsis: item.attributes.synopsis,
                  ageRating: item.attributes.ageRatingGuide,
                  rating: item.attributes.averageRating,
                  video: item.attributes.youtubeVideoId

                })}>



            <View style={styles.containerTitle}>
              <Image source={{uri: item.attributes.posterImage.original}}
                    style={styles.imageItem}
              />

              <LinearGradient colors={['#999', '#777']} end={{ x: 0.7, y: 0.8}} style={styles.viewName}>
                <Text style={styles.titleItem}>{item.attributes.canonicalTitle}</Text>
              </LinearGradient>
            </View>

          </TouchableOpacity>
        )}
      
      />
    </SafeAreaView>

    
  )
}