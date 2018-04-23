import React, { Component } from 'react';
import matchsize from '../components/matchsize'
import {
    Platform,
    StyleSheet,
    Text,
    View,
  } from 'react-native';

  export default class Mycustomer extends Component {

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
                    <View style={{flexDirection:'row',alignItems:'center',width:'50%'}}><Text style={{color:'#ababab',fontSize:matchsize(27)}}>性别</Text><Text style={{color:'#99cffe',fontSize:matchsize(27),marginLeft:matchsize(8)}}>女</Text></View>
                    <View style={{flexDirection:'row',alignItems:'center',width:'50%',justifyContent:'flex-end'}}><Text  style={{color:'#ababab',fontSize:matchsize(27)}}>手机号</Text><Text style={{fontSize:matchsize(27),marginLeft:matchsize(8)}}>15743615276</Text></View>
                    <View style={{flexDirection:'row',alignItems:'center',marginTop:matchsize(20)}}><Text  style={{color:'#ababab',fontSize:matchsize(27)}}>证件号码</Text><Text style={{fontSize:matchsize(27),marginLeft:matchsize(8)}}>092fhe29873</Text></View>
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