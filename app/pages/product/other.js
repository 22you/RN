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
  import {Button} from 'teaset'
  export default class Other extends Component {
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
 
        };
    }
      render(){
      return(
          <View style={{ backgroundColor:'#fff',}}>
            <ScrollView style={{marginBottom:20}}>
            <KeyboardAwareScrollView>
            <DefaultInput placeholder={'客户经理'} name={'客户经理'} style={base.item}
					              onChangeText={()=>{}} />
      
             <DefaultInput placeholder={'团队经理'} name={'团队经理'} style={base.item}
					              onChangeText={()=>{}} />
          
            <DefaultInput placeholder={'所属部门'} name={'所属部门'} style={base.item}
					              onChangeText={()=>{}} />
          
            <DefaultInput placeholder={'接单经理'} name={'接单经理'} style={base.item}
					              onChangeText={()=>{}} />
      
            <DefaultInput placeholder={'所属团队'} name={'所属团队'} style={base.item}
					              onChangeText={()=>{}} />
           
            
            <View>
            <TouchableOpacity style={[base.btnbox,{marginTop:15,marginHorizontal:'12%'}]}>
              <Button title="保存" color="#ddd" style={{width:100}} type="primary" accessibilityLabel="下一步" onPress={()=>Alert.alert('保存成功')}/>
              <Button title="下一步"
            accessibilityLabel="下一步" style={{width:100}}  onPress={()=>this.props.navigation.navigate('Buyinfo')} />
           
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