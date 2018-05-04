import React, { Component } from 'react';
import matchsize from '../components/matchsize'
import {
    Platform,
    StyleSheet,
    Text,
    View,
  } from 'react-native';

  export default class Mybusiness extends Component {
<<<<<<< HEAD
    static navigationOptions={
        headerLeft:null
       }
=======
 
>>>>>>> f9985f843589a513678c9b67bd7993b9fb3dcf4d
      render(){
      return(
          <View>
              <View style={bus.busBox}>
                <View style={bus.busItem}>
                <View style={bus.title}>
                    <View style={{flexDirection:'row',}}><Text style={{color:'#ababab'}}>客户名称</Text><Text style={{color:'#000',marginLeft:matchsize(15)}}>蔡晴</Text></View>
                    <View style={{flexDirection:'row',}}><Text style={{color:'#ababab'}}>任务名称</Text><Text style={{color:'#000',marginLeft:matchsize(15)}}>投资金单申请</Text></View>
                  </View>
                  <View style={bus.content}>
                    <View style={{flexDirection:'row',alignItems:'center',}}><Text style={{color:'#ababab',fontSize:matchsize(27)}}>项目名称</Text><Text style={{color:'#99cffe',fontSize:matchsize(27),marginLeft:matchsize(8)}}>随意宝20180404001</Text></View>
                    <View style={{flexDirection:'row',alignItems:'center',marginTop:matchsize(20)}}><Text  style={{color:'#ababab',fontSize:matchsize(27)}}>合同编号</Text><Text style={{fontSize:matchsize(27),marginLeft:matchsize(8)}}>092fhe29873</Text></View>
                  </View>
                  <View style={bus.bottom}>
                      <Text style={{color:'#ababab',fontSize:matchsize(27)}}>创建时间</Text>
                      <Text style={{color:'#656565',paddingLeft:matchsize(8),fontSize:matchsize(27)}}>2018-04-03</Text>
                  </View>
                </View>
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
    }
  })