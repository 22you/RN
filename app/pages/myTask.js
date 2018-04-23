import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
  } from 'react-native';

  export default class MyTodo extends Component {
      render(){
      return(
          <View>
              <View style={bus.busBox}>
                <View style={bus.busItem}>
                  <View style={bus.title}>
                    <Text>客户名称<Text style={{color:'#000',marginLeft:5}}>蔡晴</Text></Text>
                    <Text>任务名称<Text style={{color:'#000',marginLeft:5}}>投资金单申请</Text></Text>
                  </View>
                  <View style={bus.content}>
                    <View style={{flexDirection:'row',alignItems:'center',}}><Text style={{color:'#ababab',fontSize:13}}>项目名称</Text><Text style={{color:'#99cffe',fontSize:12,marginLeft:8}}>随意宝20180404001</Text></View>
                    <View style={{flexDirection:'row',alignItems:'center'}}><Text  style={{color:'#ababab',fontSize:13}}>合同编号</Text><Text style={{fontSize:12,marginLeft:8}}>092fhe29873</Text></View>
                  </View>
                  <View style={bus.bottom}>
                      <Text style={{color:'#ababab',fontSize:12}}>任务分配时间</Text>
                      <Text style={{color:'#656565',paddingLeft:8,fontSize:12}}>2018-04-03  11:50</Text>
                  </View>
                </View>
              </View>
          </View>
      )
      }
  }
  const bus=StyleSheet.create({
    busItem:{
        marginTop:10,
        backgroundColor:'#fff',
        paddingHorizontal:'3%',
    },
 
    title:{
        flexDirection:'row',
        justifyContent:'space-between',
        borderBottomWidth:1,
        borderBottomColor:'#ddd',
        paddingVertical:10,
    },
    content:{
        borderBottomWidth:1,
        borderBottomColor:'#ddd',
        paddingVertical:10,
    },
    bottom:{
        paddingVertical:10, 
        flexDirection:'row',
        justifyContent:'flex-end'
    }
  })