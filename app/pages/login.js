import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
  } from 'react-native';
  import {Input,Button,Label} from 'teaset'
  import Icon from 'react-native-vector-icons/FontAwesome';
  import matchsize from '../components/matchsize';

  export default class Login extends Component{
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
          username:'',
          password:''
         
        };
    }
      render(){
          return(
              <View style={add.box}>
                 <Text style={{width:'100%',textAlign:'center',fontSize:matchsize(34)}}>登录</Text>
                 <View style={{flexDirection:'row',justifyContent:'center',paddingVertical:matchsize(40)}}>
                 <Icon size={40}   name="user-circle"/>
                 </View>
                <View>
                   <Input style={[{width: '100%'},add.input]}
                    size='md'
                    placeholder="请输入手机号"
                    value={this.state.username}
                    onChangeText={text => this.setState({username: text})}
                    />
                    <Input style={[{width: '100%'},add.input]}
                    size='md'
                    secureTextEntry = {true}
                    placeholder="请输入密码"
                    value={this.state.password}
                    onChangeText={text => this.setState({value: text})}
                    />
                    <Button type='primary' style={{height:matchsize(80),marginTop:matchsize(60)}}  >
                        <Label style={{color: '#fff', fontSize: 16, paddingLeft: 8}} text='登录' />
                    </Button>
                </View>
              </View>
          )
      }
  }
  const add=StyleSheet.create({
    box:{
       
        paddingHorizontal:'5%',
        paddingTop:30
    },
    input:{
        width:'100%',
        borderWidth:0,
        borderBottomWidth:1,
        borderBottomColor:'#ccc',
        backgroundColor:'transparent',
        marginTop:matchsize(40)
    }
    })