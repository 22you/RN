import React, { Component } from 'react';
import matchsize from '../components/matchsize'
import CustomItem from '../pages/user/customItem'
import {
    Platform,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    FlatList,
    Alert
  } from 'react-native';
  import Swipeout from 'react-native-swipeout';

  export default class Mycustomer extends Component {
    static navigationOptions={
        headerLeft:null
       }
       componentWillMount(){
        console.log('登录状态',global.user.loginState)
          
       }
      render(){
          let customers=global.user.loginState?
          <FlatList
          data={[
            {
                key: '1',
                customName:'xiaohang',
                customTeam:'信息部',
                customSex:'女',
                customPhone:'19082378236',
                customCardNumber:'127892132937',
                customSettime:'2018-12-12'
            }, 
            {  
            key: '2',
            customName:'戴旭',
            customTeam:'广告部',
            customSex:'男',
            customPhone:'1232382378236',
            customCardNumber:'99927892132937',
            customSettime:'2012-12-12'
        }
        ]}
          renderItem={({item})=>
          
          <CustomItem 
          customName={item.customName} 
          customTeam={item.customTeam} 
          customSex={item.customSex} 
          customPhone={item.customPhone} 
          customCardNumber={item.customCardNumber}
          customSettime={item.customSettime}
          {...this.props}
          />}
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
                {customers}
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
    },
    noticebox:{
      flexDirection:'row',
       width:'100%',
     justifyContent:'center',
     paddingVertical:matchsize(30)
    }

  })