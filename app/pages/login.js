import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    Alert
  } from 'react-native';
  import {Input,Button,Label} from 'teaset'
  import Icon from 'react-native-vector-icons/FontAwesome';
  import matchsize from '../components/matchsize';
  import Toast, {DURATION} from 'react-native-easy-toast'
import axios from 'axios';
  export default class Login extends Component{
      static navigationOptions={
          headerLeft:null,
          title:'登录'
      }
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
          username:'',
          password:''
         
        };
    }
  
    _submit=()=> {
       
        const userName = this.state.username
        const password = this.state.password
        if (!userName || !password) {
              return this.refs.toast.show('手机号或密码不能为空！')
        }
        const loginURL = config.api.login + 'username=' + userName + '&password=' + password ;
        axios.get(loginURL)
        .then((res)=>{
            //let resnew= eval("(" + res.data + ")");
            if(res.data.success){
                 global.user.loginState = true;  
                     storage.save({
                         key:'loginState',
                         data:res.data,
                         expires: 1000 * 3600 * 8
                      })
                      global.user.userData=res.data;
                      this.refs.toast.show('登录成功！')
                       this.props.navigation.navigate('Home')
            }else{
                this.refs.toast.show('用户名或密码错误')
            }
            
        })
        .catch((error)=>{
            console.log(error)
        })
   
    }
   
      render(){
          return(
              <View style={add.box}>
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
                    onChangeText={text => this.setState({password: text})}
                    />
                    <Button type='primary' style={{height:matchsize(80),marginTop:matchsize(60)}} onPress={this._submit} >
                        <Label style={{color: '#fff', fontSize: 16, paddingLeft: 8}} text='登录' />
                    </Button>
                </View>
                <Toast ref="toast"/>
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