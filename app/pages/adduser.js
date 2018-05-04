import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    TouchableOpacity
  } from 'react-native';

  export default class Adduser extends Component {
    static navigationOptions = {
        headerStyle: {
          backgroundColor: '#34a1ff',
        },
        headerRight: (
          <View style={{height: 44,width: 55,justifyContent: 'center',paddingRight:15} }/>
      ),
        headerTintColor: '#fff',
      
      };
    constructor(props) {

        super(props);
        // 初始状态
        this.state = {
 
        };
    }
      render(){
        console.log("props",this.props);
        
      return(
          <View>
            <TouchableOpacity style={add.item} onPress={()=>this.props.navigation.navigate('Userbase')}>
            <Text>个人基本信息</Text>
            <Text>></Text>
            </TouchableOpacity>
            <TouchableOpacity style={add.item} onPress={()=>this.props.navigation.navigate('UploadId')}>
            <Text>身份证上传</Text>
            <Text>></Text>
            </TouchableOpacity>
            <TouchableOpacity style={add.item} onPress={()=>this.props.navigation.navigate('BankList')}>
            <Text>银行账户信息</Text>
            <Text>></Text>
            </TouchableOpacity>
          </View>
      )
      }
  }
  const add=StyleSheet.create({
  item:{
    marginTop:10,
    backgroundColor:'#fff',
    paddingHorizontal:'3%',
    paddingVertical:15,
    flexDirection:'row',
    justifyContent:'space-between',

  }
  })