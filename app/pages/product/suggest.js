
import React, { Component } from 'react';
import {Input,Button,Toast} from 'teaset' 
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import {
    Platform,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Alert
  } from 'react-native';
import config from '../../common/config';
import axios from 'axios';
  // import matchsize from '../../components/matchsize'
  export default class Suggest extends Component {
    // static navigationOptions = {
    //   headerRight: (
    //     <View style={{height: 44,width: 55,paddingRight:15} }/>
    // )
    //   };
    constructor(props) {

        super(props);
        // 初始状态
        this.state = {
          taskId:'',
          comments:''
        };
    }
    
    componentDidMount(){
      this.setState({
        taskId:this.props.navigation.state.params.taskId,
      })
      
    }
    //保存意见与说明
    saveSuggest=()=>{
     let saveSuggestUrl=config.api.suggest+'taskId='+this.state.taskId+'&comments='+this.state.comments;
     axios.post(saveSuggestUrl)
     .then((res)=>{
       if(res.data.success){
        this.props.navigation.navigate('MyTodo')
       }else{
        Toast.info('上传失败')
       }
       
       
     })
    }
      render(){   
        //console.log(this.state.taskId);     
      return(
        <View style={{paddingTop:30}}> 
          <Input
    style={{width:'94%',marginHorizontal:15,height:200,flexDirection:'row',alignItems:'flex-start'}}
    value={this.state.valueCustom} placeHolder="请输入您遇到的困难及建议。。。" multiline={true}
    onChangeText={text => this.setState({comments: text})}
    />
       
        <View style={{marginTop:15,marginHorizontal:'3%'}}>          
          <Button title="提交"   type="primary"
            onPress={this.saveSuggest}/>
        </View>
           
          </View>
      )
      }
  }
  const add=StyleSheet.create({
  
  })