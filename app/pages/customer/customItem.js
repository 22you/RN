import React,{Component} from 'react';
import { TouchableOpacity, View,Text,StyleSheet,} from "react-native";
import matchsize from '../../components/matchsize';
import Swipeout from 'react-native-swipeout';
export default class CustomItem extends Component{
 render(){
   let swipeoutBtns = [
        {
          text: '编辑',
          type:'secondary'
        },
       
          {
            text: '删除',
            type:'delete'
          }

      ]
     return(
        <Swipeout right={swipeoutBtns}  style={{borderBottomWidth:1,borderBottomColor:'#ddd'}} autoClose>
        <TouchableOpacity style={bus.busItem} onPress={()=>this.props.navigation.navigate('Adduser',{
            item:this.props.item
        })}>
         
          <View style={bus.content}>
            <View style={{flexDirection:'row',flex:1,justifyContent:'space-between'}}>
                <Text style={{fontSize:matchsize(27),marginLeft:matchsize(8)}}><Text style={{color:'#ababab'}}>客户名称:</Text>{this.props.customName}</Text>
                <Text style={{marginLeft:matchsize(8)}}><Text style={{color:'#ababab'}}>客户经理：</Text>{this.props.belongedName}</Text>
            </View>
            <View style={{flexDirection:'row',justifyContent:'flex-end',marginTop:10}}><Text style={{fontSize:matchsize(25),color:'#ababab'}}>{this.props.createdate}</Text></View>
          </View>
       
        </TouchableOpacity>
        </Swipeout>
     )
 }
}
const bus=StyleSheet.create({
    busItem:{
        backgroundColor:'#fff',
        paddingHorizontal:'3%',
    },
    content:{
        paddingVertical:matchsize(25),
        flexWrap:'wrap',
       justifyContent:'space-between'
    }
  
  })