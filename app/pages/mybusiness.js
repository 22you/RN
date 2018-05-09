import React, { Component } from 'react';
import matchsize from '../components/matchsize'
import {
    Platform,
    StyleSheet,
    Text,
    View,
    FlatList,
    TouchableOpacity
  } from 'react-native';

  export default class Mybusiness extends Component {
    static navigationOptions={
        headerLeft:null
       }
 
      render(){
          let business=global.user.loginState?
          <FlatList
           data={[
               {
                   customName:'小w',
                   taskName:'投资金单申请',
                   proName:'随意宝20180404001',
                   contractNum:'092fhe29873',
                   create_at:'2018-04-03'
               }
           ]}
           renderItem={
               ({item})=> 
               <View style={bus.busItem}>
               <View style={bus.title}>
                   <View style={{flexDirection:'row',}}><Text style={{color:'#ababab'}}>客户名称</Text><Text style={{color:'#000',marginLeft:matchsize(15)}}>{item.customName}</Text></View>
                   <View style={{flexDirection:'row',}}><Text style={{color:'#ababab'}}>任务名称</Text><Text style={{color:'#000',marginLeft:matchsize(15)}}>{item.taskName}</Text></View>
                 </View>
                 <View style={bus.content}>
                   <View style={{flexDirection:'row',alignItems:'center',}}><Text style={{color:'#ababab',fontSize:matchsize(27)}}>项目名称</Text><Text style={{color:'#99cffe',fontSize:matchsize(27),marginLeft:matchsize(8)}}>{item.proName}</Text></View>
                   <View style={{flexDirection:'row',alignItems:'center',marginTop:matchsize(20)}}><Text  style={{color:'#ababab',fontSize:matchsize(27)}}>合同编号</Text><Text style={{fontSize:matchsize(27),marginLeft:matchsize(8)}}>{item.contractNum}</Text></View>
                 </View>
                 <View style={bus.bottom}>
                     <Text style={{color:'#ababab',fontSize:matchsize(27)}}>创建时间</Text>
                     <Text style={{color:'#656565',paddingLeft:matchsize(8),fontSize:matchsize(27)}}>{item.create_at}</Text>
                 </View>
                 
               </View>
            }

          />
          :
          <View style={bus.noticebox}>
          <Text>要查看相关信息,请先</Text>
          <Text style={{color:'red'}} onPress={()=>this.props.navigation.navigate('Login')}>登录</Text>
          
        </View>
          ;
      return(
          <View>
              <View style={bus.busBox}>
               {business}
              </View>
          </View>
      )
      }
  }
  const bus=StyleSheet.create({
    busItem:{
        marginTop:matchsize(10),
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
    },
    bottom:{
        paddingVertical:matchsize(30), 
        flexDirection:'row',
        justifyContent:'flex-end'
    },
    noticebox:{
        flexDirection:'row',
         width:'100%',
       justifyContent:'center',
       paddingVertical:matchsize(30)
      }
  })