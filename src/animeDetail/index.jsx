import React from 'react'
import { View, 
        ScrollView,
        SafeAreaView,
        StatusBar, 
        Text, 
        Dimensions,
        Image,
        Platform } from 'react-native';

import styles from '../animeDetail/styles';
import YoutubePlayer from "react-native-youtube-iframe";

const { width, height} = Dimensions.get('screen');
const imageW = width * 0.9;

export default function AnimeDetail({route}) {
  return (
    <ScrollView>
    <StatusBar hidden={false}/>
      <View style={styles.container}>
        <Image source={{uri: route.params.image}} 
                        resizeMode="cover"
                        style={styles.imageItem}/>
      </View>

      <View style={styles.titleContainer}>
        <Text style={styles.title}>
        <Image style={styles.icon} 
            source={require('../../assets/icons/resume.png')}/>  Synopsis</Text>
      </View>

      <View style={styles.itemContainer}>
        <Text>{route.params.synopsis}</Text>
      </View>

      <View style={styles.titleContainer}>
        <Text style={styles.title}>
        <Image style={styles.icon} 
            source={require('../../assets/icons/like.png')}/>  Age Rating</Text>
      </View>

      <View style={styles.itemContainer}>
        <Text>{route.params.ageRating}</Text>
      </View>

      <View style={styles.titleContainer}>
        <Text style={styles.title}>
        <Image style={styles.icon} 
            source={require('../../assets/icons/rating.png')}/>  Average Rating</Text>
      </View>

      <View style={styles.itemContainer}> 
        <Text>{route.params.rating} (maximum score: 100)</Text>
      </View>

      <View style={styles.titleContainer}>
      <Text style={styles.title}>
      <Image style={styles.icon} 
          source={require('../../assets/icons/YouTube.png')}/>  Video</Text>
    </View>

    <View style={styles.videoContainer}> 
      <YoutubePlayer
          height={300}
          width={imageW}
          play={false}
          videoId={route.params.video}/>
    </View>

    </ScrollView>
  )
}