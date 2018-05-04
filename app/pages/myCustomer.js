import React, { Component } from 'react';
import matchsize from '../components/matchsize'
<<<<<<< HEAD
import CustomItem from '../pages/user/customItem'
=======
>>>>>>> f9985f843589a513678c9b67bd7993b9fb3dcf4d
import {
    Platform,
    StyleSheet,
    Text,
    View,
<<<<<<< HEAD
    TouchableOpacity,
    FlatList
  } from 'react-native';

  export default class Mycustomer extends Component {
    static navigationOptions={
        headerLeft:null
       }
=======
  } from 'react-native';

  export default class Mycustomer extends Component {

>>>>>>> f9985f843589a513678c9b67bd7993b9fb3dcf4d
      render(){
      return(
          <View>
              <View style={bus.busBox}>
<<<<<<< HEAD
                <FlatList
                  data={[
                    {
                        key: '1',
                        customName:'xiaohang',
                        customTeam:'信息部',
                        customSex:'女',
                        customPhone:'19082378236',
                        customPhoneNumber:'127892132937',
                        customSettime:'2018-12-12'
                    }, 
                    {  
                    key: '2',
                    customName:'戴旭',
                    customTeam:'广告部',
                    customSex:'男',
                    customPhone:'1232382378236',
                    customPhoneNumber:'99927892132937',
                    customSettime:'2012-12-12'
                }
                ]}
                  renderItem={({item})=><CustomItem 
                  customName={item.customName} 
                  customTeam={item.customTeam} 
                  customSex={item.customSex} 
                  customPhone={item.customPhone} 
                  customPhoneNumber={item.customPhoneNumber}
                  customSettime={item.customSettime}
                  {...this.props}
                  />}
                />
                
=======
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
>>>>>>> f9985f843589a513678c9b67bd7993b9fb3dcf4d
              </View>
          </View>
      )
      }
  }
  const bus=StyleSheet.create({
<<<<<<< HEAD
   
   
=======
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
>>>>>>> f9985f843589a513678c9b67bd7993b9fb3dcf4d
  })