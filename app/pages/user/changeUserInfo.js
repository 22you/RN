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
  import matchsize from '../../components/matchsize';
  import {Button} from 'teaset';
  import DatePicker from 'react-native-datepicker'
  export default class ChangeUserInfo extends Component {

    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
          maritalStatusValue:'男',
          cardType:'身份证'
        };
    }
    
    onSelectedmaritalStatus=(item, index) => {
      this.setState({maritalStatusValue: item})
    }
      render(){
      return(
          <View style={{ backgroundColor:'#fff',}}>
            <ScrollView style={{marginBottom:matchsize(20)}}>
            <KeyboardAwareScrollView>
            <DefaultInput placeholder={'请输入...'} name={'客户姓名'} style={base.item}
					              onChangeText={(text) => {
                          this.setState({
                              userName: text
                          })
                      }} />

             <DefaultSelect  placeholder={'请选择性别'} name={'性别'} value={this.state.maritalStatusValue} style={base.item}
					               items={['男','女']} onSelected={this.onSelectedmaritalStatus}/>

            <DefaultInput placeholder={'请输入...'} name={'主联系电话'} style={base.item}
					              onChangeText={(text)=>{
                          this.setState({
                            mainPhone: text
                        })
                        }} />

             <DefaultInput placeholder={'请输入...'} name={'备用电话'} style={base.item}
					              onChangeText={(text)=>{
                          this.setState({
                            subPhone: text
                        })
                        }} />

            <DefaultSelect  placeholder={'请选择'} name={'证件类型'} value={this.state.cardType} style={base.item}
					               items={['身份证','护照']} onSelected={this.onSelectedmaritalStatus}/>

            <DefaultInput placeholder={'请输入...'} name={'证件号码'} style={base.item}
					              onChangeText={(text)=>{
                          this.setState({
                            cardNumber: text
                        })
                        }} />

         <TouchableOpacity style={base.item}>
            <Text>出生日期</Text>
            <DatePicker
              date={this.state.date}
              mode="date"
              placeholder="请选择日期"
              format="YYYY-MM-DD"
              minDate="2016-05-01"
              maxDate={new Date()}
              confirmBtnText="确定"
              showIcon="false"
              cancelBtnText="取消"
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
      
            <DefaultInput placeholder={'请输入...'} name={'邮政编码'} style={base.item}
					              onChangeText={(text)=>{
                          this.setState({
                            userName: text
                        })
                        Alert.alert(text)
                        }} />
             <DefaultInput placeholder={'请输入...'} name={'电子邮箱'} style={base.item}
					              onChangeText={(text)=>{
                          this.setState({
                            userEmail: text
                        })
                        }} />
             <DefaultInput placeholder={'请输入...'} name={'客户性质'} style={base.item}
					              onChangeText={(text)=>{
                          this.setState({
                            userNature: text
                        })
                        }} />
             <DefaultInput placeholder={'请输入...'} name={'通讯地址'} style={base.item}
					              onChangeText={(text)=>{
                          this.setState({
                            userAddress: text
                        })
                        }} />
            <DefaultInput placeholder={'请输入...'} name={'客户授权人'} style={base.item}
					              onChangeText={(text)=>{
                          this.setState({
                            userNature: text
                        })
                        }} />
            <DefaultInput placeholder={'请输入...'} name={'登记团队'} style={base.item}
					              onChangeText={(text)=>{
                          this.setState({
                            userTeam: text
                        })
                        }} />
         
            <TouchableOpacity style={{marginTop:15,marginHorizontal:'5%'}}>
              <Button title="保存" type="primary"
            accessibilityLabel="保存" onPress={()=>{
              this.props.navigation.navigate('');
              }} />
           
            </TouchableOpacity>
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
    borderBottomColor:'#ddd',
    alignItems:'center'

  }
  })