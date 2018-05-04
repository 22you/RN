import React, { Component } from 'react';
import {DefaultInput,DefaultSelect}  from '../../components/defaultFormgroup' 
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import {
    Platform,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    ScrollView,
    Alert
  } from 'react-native';
  import {Input,Button} from 'teaset'
  export default class Investor extends Component {
    static navigationOptions = {
      headerRight: (
        <View style={{height: 44,width: 55,justifyContent: 'center',paddingRight:15} }/>
    ),
    };
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
 
        };
    }
      render(){
      return(
          <View style={{ backgroundColor:'#fff',}}>
            <ScrollView style={{marginBottom:20}}>
            <KeyboardAwareScrollView>
           
            <DefaultInput placeholder={'开户名称'} name={'开户名称'} style={base.item}
					              onChangeText={()=>{}} />
           
           <DefaultInput placeholder={'开户账号'} name={'开户账号'} style={base.item}
					              onChangeText={()=>{}} />
        
           <DefaultInput placeholder={'银行名称'} name={'银行名称'} style={base.item}
					              onChangeText={()=>{}} />
                        
          <DefaultInput placeholder={'支行名称'} name={'支行名称'} style={base.item}
					              onChangeText={()=>{}} />
            
            <View>
            <TouchableOpacity style={[base.btnbox,{marginTop:15,marginHorizontal:'12%'}]}>
              <Button title="保存" style={{width:100}} color="#ddd" type="primary" accessibilityLabel="下一步" onPress={()=>Alert.alert('保存成功')}/>
              <Button title="下一步"
            accessibilityLabel="下一步" style={{width:100}} onPress={()=>{
                    this.props.navigation.navigate('Other');
                    console.log(this.props.navigation.navigate);
                }} />
           
            </TouchableOpacity>
            </View>
            </KeyboardAwareScrollView>
            </ScrollView>
          </View>
      )
      }
  }
  const base=StyleSheet.create({
  item:{
    marginHorizontal:'3%',
    paddingVertical:15,
    flexDirection:'row',
    justifyContent:'space-between',
    borderBottomWidth:1,
    borderBottomColor:'#ddd'

  },
  btnbox:{
    flexDirection:'row',
    width:'80%',
    justifyContent:'space-between',

  }
  })