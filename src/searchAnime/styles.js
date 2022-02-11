import react from "react";
import { StyleSheet, Dimensions } from "react-native";


const { width, height} = Dimensions.get('screen');
const inputW = width * 0.85;
const imageH = inputW * 1.54;

const styles = StyleSheet.create({

  container: {
    flex:1,
    alignItems:'center',
  },
  Input:{
    width:inputW,
    height: 50,
    backgroundColor:"#d3d3d3",
    color:"#222",
    paddingLeft:20,
    marginTop:20,
    fontSize: 20,
    borderRadius:12,
  },
  list:{
    width:inputW,
    height,
    alignItems:'flex-start',
    marginHorizontal:30,
    marginTop:100,
    paddingBottom: 200,
  },
  containerItem:{
    marginVertical:10,
  },
  card:{
    width:inputW,
    height:90,
    backgroundColor:"#fff",
    borderRadius:12,
    flexDirection:'row',
  },
  cardTexts:{
    flexDirection:'column',
    padding:5,
  },
  titleItem:{
    fontSize:16,
    fontWeight:'bold',
  },
  subTitleItem:{
    color:"#555",
    fontSize:14,
    fontWeight:'400',
    marginTop:2,
  },
  imageItem:{
    width:90,
    height:90,
    borderBottomLeftRadius:10,
    borderTopLeftRadius:10,
    resizeMode:'cover',
    marginRight:15,
  }
})

  export default styles;