import react from "react";
import { StyleSheet, Dimensions } from "react-native";


const { width, height} = Dimensions.get('screen');
const imageW = width * 0.85;
const imageH = imageW * 1.54;

const styles = StyleSheet.create({
  container: {
    flex:1, 
    alignItems:'center',
    marginVertical: -50,
  },
  item:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    width,
    zIndex:0,
  },
  imageItem:{
    width:imageW,
    height:imageH,
    resizeMode:'cover',
    borderRadius:20,
  },
  imageBack:{
    flex:1,
    width,
    height,
    justifyContent:'center',
    alignItems:'center',
    resizeMode:'cover',
  },
  titleItem:{
    flex:1,
    color:"#dadedf",
    fontWeight:'bold',
    fontSize:20,

  },
  containerTitle:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    position:'absolute',
  },
  viewName:{
    width:300,
    height:50,
    marginTop:20,
    borderRadius:12,
    backgroundColor:'gray',
    justifyContent:'center',
    alignItems:'center',
    padding:12,
  },
  search:{
    flex:1,
    position:'absolute',
    marginTop:100,
    zIndex:1,
    right:50,
  },
  textSearch:{
    fontSize:30,
    fontWeight:'bold',
    color:"#000",

  },
  icon:{
    width:30,
    height:30,
  },
})

  export default styles;