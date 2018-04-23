
import {StyleSheet} from "react-native"
import matchsize from '../components/matchsize'

  const styles=StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },

  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: matchsize(5),
  },
  bigblue:{
    backgroundColor: '#F5FCFF',
  },
  indexItem:{
    backgroundColor: '#fff',
     width: "48%",
    marginVertical:matchsize(5),
    borderRadius:matchsize(4),
    paddingHorizontal:'3%',
    justifyContent:'center',
    alignItems:'center',
    paddingVertical:matchsize(25),
    flexDirection:'row'
   
  },
 
  indexCenterBox:{
    flex: 1,
    flexDirection:'row',
    justifyContent:'space-between',
    flexWrap:'wrap',
    paddingHorizontal:'3%',
    marginVertical:matchsize(15),

  },
  indexBuy:{
    backgroundColor:'#fff',
    borderRadius:matchsize(4),
    marginHorizontal:'3%',
    paddingHorizontal:'2%',
    paddingVertical:matchsize(5),
    marginBottom:matchsize(50)

  },
  indexBuyTitle:{
    borderBottomWidth:1,
    borderBottomColor:'#ddd',
    justifyContent:'center',
    alignItems:'center',
    paddingVertical:matchsize(30),
    flexDirection:'row',
    

  },
  indexBuyRate:{
    alignItems:'center',
    paddingVertical:matchsize(50),

  },
  indexBuyRateHea:{
    color:'#acacac',

  },
  indexBuyRatesubHea:{
    color:'#ff5152',
    fontSize:matchsize(55),
  },
  indexBuyInfo:{
    flexDirection:'row'
  },
  indexBuyInfoItem:{
   flex:1,
   alignItems:'center',
   borderRightWidth:1,
   borderRightColor:'#ddd',
  },
  BuyInfoDt:{
    color:'#333333',
  },
  buyTitleTag:{
    color:'#34a1ff',
    borderRadius:4,
    borderColor:'#34a1ff',
    borderWidth:1,
    fontSize:matchsize(20),
    paddingHorizontal:matchsize(10),
    paddingVertical:matchsize(6),
    marginLeft:matchsize(5)


  },
  buynowBtn:{
    backgroundColor:'#34a1ff',
    alignItems:'center',
    marginVertical:matchsize(10),
    borderRadius:matchsize(4),
    paddingVertical:matchsize(15),


  },
  wrapper: {
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  text: {
    color: '#fff',
    fontSize: matchsize(30),
    fontWeight: 'bold',
  },
  indexBox:{
    backgroundColor:'#f5f5f5'
  }
});
export default  styles;