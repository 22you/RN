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
    static navigationOptions = {
      headerRight: (
        <View style={{height: 44,width: 55,justifyContent: 'center',paddingRight:15} }/>
    ),
    }
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
          investName:'',
          sex:'',
          cellphone:'',
          alternatePhone:'',
          cardtype:'',
          cardnumber:'',
          birthDay:'2018-1-1',
          postcode:'',
          selfemail:'',
          customerNature:'',
          postaddress:'',
          belongedName:'',
          departmentId:''

        };
    }
   
    _upload_userbase=()=>{
      let {
        investName,sex,cellphone,alternatePhone,cardtype,cardnumber,birthDay,postcode,selfemail,customerNature,postaddress,belongedName,departmentId
          }=this.state;
      let regMobile = /^(((13[0-9]{1})|(17[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
      if(!investName){
        Alert.alert('请输入客户姓名！')
        return false;
      }
      if(!sex){
        Alert.alert('请选择性别！')
        return false;
      }
      if(!cellphone){
        Alert.alert('请输入主联系电话！')
        return false;
      }
      if(!cardtype){
        Alert.alert('请选择证件类型！')
        return false;
      }
      if(!cardnumber){
        Alert.alert('请输入证件号码')
        return false;
      }
      if(!postaddress){
        Alert.alert('请输入通讯地址')
        return false;
      }
      if (!regMobile.test(cellphone)) {
        Alert.alert("请输入正确手机号码");
        return null;
    }
      let formData = new FormData();
     
      formData.append('investName', investName);//客户姓名
      formData.append('sex', sex);//性别
      formData.append('cellphone', cellphone);
      formData.append('alternatePhone', alternatePhone);//备用电话
      formData.append('cardtype', cardtype);//证件类型
      formData.append('cardnumber',cardnumber);//证件号码
      formData.append('birthDay', birthDay);//出生日期
      formData.append('postcode',postcode);//邮政编码
      formData.append('selfemail',selfemail);//电子邮箱
      formData.append('customerNature',customerNature);//客户性质
      formData.append('postaddress',postaddress);//通讯地址
      formData.append('belongedName',belongedName);//客户授权人
      formData.append('departmentId',departmentId);//登记团队
       this.props.navigation.navigate('UploadId',{...this.state});
      // console.log(formData)
    }
  
      render(){
       
      return(
          <View style={{ backgroundColor:'#fff',}}>
            <ScrollView style={{marginBottom:matchsize(20)}}>
            <KeyboardAwareScrollView>
            <DefaultInput 
            placeholder={'请输入...'} 
            name={'客户姓名'} 
            require
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
             require
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
            require
            keyboardType="numeric"
					  onChangeText={(text)=>{
                 this.setState({
                     cellphone: text
                      })
             }} />

             <DefaultInput 
             placeholder={'请输入...'} 
             name={'备用电话'} 
             keyboardType="numeric"
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
            require
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
            require
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
              minDate="null"
              maxDate={new Date()}
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
             keyboardType="email-address"
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
             <DefaultInput placeholder={'请输入...'} require name={'通讯地址'} style={base.item}
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