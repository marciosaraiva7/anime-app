import react from "react";
import { StyleSheet, Dimensions } from "react-native";


const { width, height} = Dimensions.get('screen');
const imageW = width * 0.7;
const imageH = imageW * 1.54;

const styles = StyleSheet.create({

  container: {
    flex:1, 
    alignItems:'center',
  },
  titleContainer:{
    flex:1,
    alignItems:'flex-start',
    marginHorizontal:20,
    marginVertical: 10,
  },
  itemContainer:{
    flex:1,
    alignItems:'flex-start',
    marginHorizontal:20,
    marginBottom:20,
  },
  title:{
    fontSize:25,
    fontWeight:'bold',
  },
  item:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  imageItem:{
    width:284,
    height:402,
    resizeMode:'cover',
    borderRadius:16,
    margin:20,
  },
  imageBack:{
    flex:1,
    width,
    height,
    justifyContent:'center',
    alignItems:'center',
    resizeMode:'cover',
  },
  icon:{
    width:30,
    height:30,
  },
  videoContainer:{
    flex:1,
    alignItems:'flex-start',
    marginHorizontal:20,
    marginBottom:20,
    marginTop:20,
  }
})

  export default styles;