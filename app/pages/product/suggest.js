
import React, { Component } from 'react';
import {Input} from 'teaset' 
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import {
    Platform,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Button,
    Alert
  } from 'react-native';

  export default class Suggest extends Component {
    static navigationOptions = {
        headerStyle: {
          backgroundColor: '#34a1ff',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontSize: 16,
          },
      };
    constructor(props) {

        super(props);
        // 初始状态
        this.state = {
          valueCustom:'',
        };
    }
      render(){        
      return(
        <View> 
          <Input
  style={{width:'94%',marginHorizontal:'3%'}}
  value={this.state.valueCustom} placeHolder="请输入您遇到的困难及建议。。。"
  onChangeText={text => this.setState({valueCustom: text})}
  />
       
        <View style={{marginTop:15,marginHorizontal:'3%'}}>          
          <Button title="提交"
          accessibilityLabel="提交"
            onPress={()=>Alert.alert('aaa')}/>
        </View>
          </View>
      )
      }
  }
  const add=StyleSheet.create({
  
  })