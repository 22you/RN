import React,{Component} from 'react';
import { TouchableOpacity, View,Text,StyleSheet,} from "react-native";
import matchsize from '../../components/matchsize'
export default class CustomItem extends Component{
 render(){
     return(
        <TouchableOpacity style={bus.busItem} onPress={()=>this.props.navigation.navigate('ChangeUserInfo',{
            customName: this.props.customName
        })}>
        <View style={bus.title}>
            <View style={{flexDirection:'row',}}><Text style={{color:'#ababab'}}>客户名称</Text><Text style={{color:'#000',marginLeft:matchsize(15)}}>{this.props.customName}</Text></View>
            <View style={{flexDirection:'row',}}><Text style={{color:'#ababab'}}>部门名称</Text><Text style={{color:'#000',marginLeft:matchsize(15)}}>{this.props.customTeam}</Text></View>
          </View>
          <View style={bus.content}>
            <View style={{flexDirection:'row',alignItems:'center',width:'50%'}}><Text style={{color:'#ababab',fontSize:matchsize(27)}}>性别</Text><Text style={{color:'#99cffe',fontSize:matchsize(27),marginLeft:matchsize(8)}}>{this.props.customSex}</Text></View>
            <View style={{flexDirection:'row',alignItems:'center',width:'50%',justifyContent:'flex-end'}}><Text  style={{color:'#ababab',fontSize:matchsize(27)}}>手机号</Text><Text style={{fontSize:matchsize(27),marginLeft:matchsize(8)}}>{this.props.customPhone}</Text></View>
            <View style={{flexDirection:'row',alignItems:'center',marginTop:matchsize(20)}}><Text  style={{color:'#ababab',fontSize:matchsize(27)}}>证件号码</Text><Text style={{fontSize:matchsize(27),marginLeft:matchsize(8)}}>{this.props.customPhoneNumber}</Text></View>
          </View>
          <View style={bus.bottom}>
              <Text style={{color:'#ababab',fontSize:matchsize(27)}}>创建时间</Text>
              <Text style={{color:'#656565',paddingLeft:matchsize(8),fontSize:matchsize(27)}}>{this.props.customSettime}</Text>
          </View>
        </TouchableOpacity>
     )
 }
}
const bus=StyleSheet.create({
    busItem:{
        marginTop:matchsize(30),
        backgroundColor:'#fff',
        paddingHorizontal:'3%',
    },
 
    title:{
        flexDirection:'row',
        justifyContent:'space-between',
        borderBottomWidth:1,
        borderBottomColor:'#ddd',
        paddingVertical:matchsize(30),
    },
    content:{
        borderBottomWidth:1,
        borderBottomColor:'#ddd',
        paddingVertical:matchsize(30),
        flexDirection:'row',
        flexWrap:'wrap'
    },
    bottom:{
        paddingVertical:matchsize(20), 
        flexDirection:'row',
        justifyContent:'flex-end',
        alignItems:'center'
    }
  })