import React, { Component } from 'react';
import matchsize from '../../components/matchsize'
import CustomItem from './customItem'
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
  import config from '../../common/config';
  import axios from 'axios';

  export default class Mycustomer extends Component {
    // static navigationOptions={
    //     headerLeft:null
    //    }
       constructor(props){
           super(props)
           this.state={
            customerData:[]
           }

       }
       componentWillMount(){
         let customersUrl=config.api.customers+'userIds='+global.user.userData.userIds;//查询客户列表
          axios.get(customersUrl)
          .then((res)=>{
              if(res.data.success){
                this.setState({
                    customerData:res.data.result
                })
              }
           
           
          }) 
          
       }
      render(){
          let customers=global.user.loginState?
          <FlatList
          data={this.state.customerData}
          renderItem={({item})=>
          
          <CustomItem 
          customName={item.investName} 
          belongedName={item.belongedName} 
          customSex={item.sexvalue} 
          customPhone={item.cellphone} 
          customCardNumber={item.cardnumber}
          createdate={item.createdate}
          item={item}
          investId={item.investId}
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