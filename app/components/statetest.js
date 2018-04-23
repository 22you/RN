import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    ScrollView,
    Button,
    Alert,
    Image
  } from 'react-native';
  import ImagePicker from 'react-native-image-picker'
  export default class stateTest extends Component {

    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
         size:80,
        };
    }
    componentDidMount(){
      this.setState(
        
      )
    }
    
  
      render(){
      return(
          <View style={{backgroundColor:'#fff',paddingBottom:20}}>
           <Text style={{fontSize:this.state.size,backgroundColor:'red'}}
             onPress={()=>{
                 this.setState({
                     size:this.state.size+!0
                 })
             }}
           >{this.state.size}</Text>
          </View>
      )
      }
  }
  const base=StyleSheet.create({
  item:{
  

  }
  })