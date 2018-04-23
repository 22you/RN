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
  import DatePicker from 'react-native-datepicker'
  import Icon from 'react-native-vector-icons/FontAwesome';
  
  export default class Applybase extends Component {
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
          maritalStatusValue:'男',
          cardType:'身份证',
          date:'2018-01-01',
          address:'',
        };
    }
    onChangeAddressText=(address) => {
      this.setState({
        address
      })
    }
    onSelectedmaritalStatus=(item, index) => {
      this.setState({maritalStatusValue: item})
    }
   
      render(){
      return(
          <View style={{ backgroundColor:'#fff',}}>
          
            <ScrollView style={{marginBottom:20}}>
            <KeyboardAwareScrollView>
             <DefaultInput placeholder={'客户姓名'} name={'客户姓名'} style={base.item}
					              onChangeText={()=>{}} />
                        
            <DefaultSelect  placeholder={'请选择性别'} name={'性别'} value={this.state.maritalStatusValue} style={base.item}
					               items={['男','女']} onSelected={this.onSelectedmaritalStatus}/>
          
          
            <DefaultInput placeholder={'17610763019'} name={'联系电话'} style={base.item}
					              onChangeText={()=>{}} />
            <DefaultInput placeholder={'17610763019'} name={'备用电话'} style={base.item}
					              onChangeText={()=>{}} />

             <DefaultSelect  placeholder={'证件类型'} name={'证件类型'} value={this.state.cardType} style={base.item}
					               items={['身份证','护照']} onSelected={(item, index) => {
                          this.setState({cardType: item})
                        }}/>
        
            <DefaultInput placeholder={'12989766622870727'} name={'证件号码'} style={base.item}
					              onChangeText={()=>{}} />
            <TouchableOpacity style={base.item}>
            <Text>出生日期</Text>
            <DatePicker
              date={this.state.date}
              mode="date"
              placeholder="select date"
              format="YYYY-MM-DD"
              minDate="2016-05-01"
              maxDate="2016-06-01"
              confirmBtnText="Confirm"
              showIcon="false"
              cancelBtnText="Cancel"
              customStyles={{
                dateIcon: {
                  display:'none'
                 
                },
                dateInput: {
                  marginLeft: 36,
                  borderWidth:0
                }
          
        }}
        onDateChange={(date) => {this.setState({date: date})}}
      />
            </TouchableOpacity>
            <DefaultInput placeholder={'123456'} name={'邮政编码'} style={base.item}
					              onChangeText={()=>{}} />
            <DefaultInput placeholder={'12345678'} name={'电子邮箱'} style={base.item}
					              onChangeText={()=>{}} />
           
           <DefaultInput placeholder={'vip'} name={'客户性质'} style={base.item}
					              onChangeText={()=>{}} />
         
            <DefaultInput placeholder={'请输入通讯地址'} name={'通讯地址'} style={base.item}
					              onChangeText={()=>{}} />           
             <DefaultInput placeholder={'蔡晴'} name={'客户授权人'} style={base.item}
					              onChangeText={()=>{}} />  
            <DefaultInput placeholder={'互融云'} name={'登记团队'} style={base.item}
					              onChangeText={()=>{}} /> 
            <View>
            <TouchableOpacity style={[base.btnbox,{marginTop:15,marginHorizontal:'12%'}]}>
              <Button title="保存" style={{width:100}} type="primary" color="#ddd" accessibilityLabel="下一步" onPress={()=>Alert.alert('保存成功')}/>
              <Button title="下一步"  style={{width:100}} accessibilityLabel="下一步"  onPress={()=>this.props.navigation.navigate('Investor')} />
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
    paddingVertical:10,
    flexDirection:'row',
    justifyContent:'space-between',
    borderBottomWidth:1,
    borderBottomColor:'#ddd',
    alignItems:'center'

  },
  btnbox:{
    flexDirection:'row',
    width:'80%',
    justifyContent:'space-between',

  }
  })