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
  import DatePicker from 'react-native-datepicker'
  import matchsize from '../../components/matchsize'
  import {Button} from 'teaset'
  export default class Probase extends Component {

    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
          date:'2018-01-01',
          maritalStatusValue:'男',
          cardType:'身份证'
        };
    }
    // componentDidMount(){
    //   let url = ".................................";//接口地址

    //     let formData = new FormData();
    //     formData.append('userName', this.state.userName);
    //     formData.append('maritalStatusValue', this.state.maritalStatusValue);
    //     formData.append('mainPhone', this.state.mainPhone);
    //     formData.append('subPhone', this.state.subPhone);
    //     formData.append('subPhone', this.state.subPhone);
    //     formData.append('subPhone', this.state.subPhone);
    //     formData.append('subPhone', this.state.subPhone);
    //     formData.append('subPhone', this.state.subPhone);
    //     fetch(url,{
    //         method: 'post',
    //         body: formData,
    //     }).then(function (res) {
    //         return res.json();
    //     }).then(function (json) {
    //         if (json.code == "200") {
    //             console.log("232323233-----正确")
    //         }else if (json.code == "400") {
    //             console.log("2323232323------错了～")
    //         }
    //     })

    // }
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
              <Button title="下一步" type="primary"
            accessibilityLabel="下一步" onPress={()=>{
              this.props.navigation.navigate('UploadId',{...this.state});
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
    alignItems:'center',
    borderBottomColor:'#ddd',
    borderBottomColor:'#ddd'

  }
  })