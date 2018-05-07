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
    _submit() {
        let that = this
        const userName = this.state.username
        const password = this.state.password
        if (!userName || !password) {
            return Alert.alert('呜呜~', '手机号或密码不能为空！')
        }
        const loginURL = config.api.login + 'userName=' + userName + '&password=' + password ;
        this._getLogin(loginURL)
            .then((responseText) => {
                if (responseText) {
                    if (responseText.result === 1) {
                        Alert.alert('登录成功');
                        global.user.loginState = true;  
                        storage.save({
                            key:'loginState',
                            data:responseText.member,
                            expires: 1000 * 3600 * 8
                        })
                        console.log('登录之后存储的数据：',responseText.member)
                        that.props.navigation.navigate('Home')
                    } else {
                        Alert.alert(responseText.msg)
                    }

                 }
            })
    }
    _getLogin = (url) => {
        return fetch(url, {credentials: 'include'})
            .then((response) => {
                console.log('返回的数据是===>', response);
                return response.json()
                if(response.result=1){
                    this.props.navigation.navigate('Home')
                }else if(result=0){
                    Alert.alert('用户名不存在')
                }
            }).catch(function (error) {
                console.log('获取用户登录数据报错信息: ' + error.message);
            });
    }
      render(){
          return(
              <View style={add.box}>
                 {/* <Text style={{width:'100%',textAlign:'center',fontSize:matchsize(34)}}>登录</Text> */}
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
                    <Button type='primary' style={{height:matchsize(80),marginTop:matchsize(60)}} onPress={this._submit.bind(this)} >
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