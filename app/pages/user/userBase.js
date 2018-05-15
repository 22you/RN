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
  import DatePicker from 'react-native-datepicker';
  import matchsize from '../../components/matchsize';
  import {Button} from 'teaset';
  import axios from 'axios';
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
          cardtypes:[],
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
    componentDidMount(){
      let dictionaryUrl=config.api.dictionary+'nodeKey=card_type_key';
      axios.get(dictionaryUrl)
      .then((res)=>{
        if(res.data.success){
      // let cardTypes=res.data.result.map(item=>item);
      this.setState({
        cardtypes:res.data.result
      })
      
        }
  
  
      })
    }
   
    _upload_userbase=()=>{
      
      let {
        cardtypes,investName,sex,cellphone,alternatePhone,cardtype,cardnumber,birthDay,postcode,selfemail,customerNature,postaddress,belongedName,departmentId
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

       let url = config.api.userbase+'csInvestmentperson.investName='+investName+'&csInvestmentperson.sex='+sex+'&csInvestmentperson.cellphone='+cellphone
       +'&csInvestmentperson.alternatePhone='+alternatePhone+'&csInvestmentperson.cardtype='+cardtype+'&csInvestmentperson.cardnumber='+cardnumber+'&csInvestmentperson.birthDay='+birthDay+'&csInvestmentperson.postcode='+postcode
       +'&csInvestmentperson.selfemail='+selfemail+'&csInvestmentperson.customerNature='+customerNature+'&csInvestmentperson.postaddress='+postaddress+'&csInvestmentperson.belongedName='+belongedName+'&csInvestmentperson.departmentId='+departmentId;
        // console.log(url);
        
      axios.post(url)       
      .then((res)=>{
        if(res.data.success){
          // console.log(res.data.data.investId);
          
          this.props.navigation.navigate('UploadId',{investId:res.data.data.investId});
        }
      })
 
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
             items={[{text:'男',value:312},{text:'女',value:313}]} 
             onSelected={(text)=>{
               this.setState({
                 sex:text.value
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
            items={this.state.cardtypes} 
            onSelected={
              (item)=>{
                this.setState({cardtype: item.value})
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