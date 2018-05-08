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
   
    _upload_userbase=()=>{debugger
      let formData = new FormData();
      formData.append('investName', this.state.investName);//客户姓名
      formData.append('sex', this.state.sex);//性别
      formData.append('cellphone', this.state.cellphone);
      formData.append('alternatePhone', this.state.alternatePhone);//备用电话
      formData.append('cardtype', this.state.cardtype);//证件类型
      formData.append('cardnumber', this.state.cardNumber);//证件号码
      formData.append('birthDay', this.state.birthDay);//出生日期
      formData.append('postcode', this.state.postcode);//邮政编码
      formData.append('selfemail',this.state.selfemail);//电子邮箱
      formData.append('customerNature',this.state.customerNature);//客户性质
      formData.append('postaddress',this.state.postaddress);//通讯地址
      formData.append('belongedName',this.state.belongedName);//客户授权人
      formData.append('departmentId',this.state.departmentId);//登记团队
      // this.props.navigation.navigate('UploadId',{...this.state});
      console.log(formData)
    }
  
      render(){
       
      return(
          <View style={{ backgroundColor:'#fff',}}>
            <ScrollView style={{marginBottom:matchsize(20)}}>
            <KeyboardAwareScrollView>
            <DefaultInput 
            placeholder={'请输入...'} 
            name={'客户姓名'} 
            style={base.item}
					  onChangeText={(text) => {
                   this.setState({
                              investName: text
                          })
             }} 
             />

             <DefaultSelect  
             placeholder={'请选择性别'} 
             name={'性别'} 
             value={this.state.sex} 
             style={base.item}
             items={['男','女']} 
             onSelected={(text)=>{
               this.setState({
                 sex:text
               })
             }}
             />

            <DefaultInput 
            placeholder={'请输入...'} 
            name={'主联系电话'} 
            style={base.item}
					  onChangeText={(text)=>{
                 this.setState({
                     cellphone: text
                      })
             }} />

             <DefaultInput 
             placeholder={'请输入...'} 
             name={'备用电话'} 
             style={base.item}
					   onChangeText={(text)=>{
                          this.setState({
                            alternatePhone: text
                        })
              }} 
              />

            <DefaultSelect  
            placeholder={'请选择'} 
            name={'证件类型'} 
            value={this.state.cardtype} 
            style={base.item}
            items={['身份证','护照']} 
            onSelected={
              (item)=>{
                this.setState({cardtype: item})
             }}
            />

            <DefaultInput 
            placeholder={'请输入...'} 
            name={'证件号码'} 
            style={base.item}
					  onChangeText={(text)=>{
                          this.setState({
                            cardnumber: text
                        })
            }} />


            <TouchableOpacity style={base.item}>
            <Text>出生日期</Text>
            <DatePicker
              date={this.state.birthDay}
              mode="date"
              placeholder="请选择日期"
              format="YYYY-MM-DD"
              minDate=""
              maxDate="2016-06-01"
              confirmBtnText="确认"
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
        onDateChange={(date) => {this.setState({birthDay: date})}}
      />
            </TouchableOpacity>
      
            <DefaultInput 
            placeholder={'请输入...'} 
            name={'邮政编码'} 
            style={base.item}
					  onChangeText={(text)=>{
                          this.setState({
                            postcode: text
                        })
             }} />
             <DefaultInput placeholder={'请输入...'} name={'电子邮箱'} style={base.item}
					              onChangeText={(text)=>{
                          this.setState({
                            selfemail: text
                        })
                        }} />
             <DefaultInput placeholder={'请输入...'} name={'客户性质'} style={base.item}
					              onChangeText={(text)=>{
                          this.setState({
                            customerNature: text
                        })
                        }} />
             <DefaultInput placeholder={'请输入...'} name={'通讯地址'} style={base.item}
					              onChangeText={(text)=>{
                          this.setState({
                            postaddress: text
                        })
                        }} />
            <DefaultInput placeholder={'请输入...'} name={'客户授权人'} style={base.item}
					              onChangeText={(text)=>{
                          this.setState({
                            belongedName: text
                        })
                        }} />
            <DefaultInput placeholder={'请输入...'} name={'登记团队'} style={base.item}
					              onChangeText={(text)=>{
                          this.setState({
                            departmentId: text
                        })
                        }} />
         
            <TouchableOpacity style={{marginTop:15,marginHorizontal:'5%'}}>
              <Button title="下一步" type="primary"
            accessibilityLabel="下一步" onPress={()=>this._upload_userbase()} 
              />
           
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