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
import config from '../../common/config';
import axios from 'axios';
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
          name:'',
          bankid:'',
          accountnum:'',
          bankOutletsName:'',
          bankname:'',
          enterpriseid:''
        };
    }
    componentDidMount(){
     let {name,bankid,accountnum,bankOutletsName,enterpriseid}=this.props.navigation.state.params.enterpriseBank;
      this.setState({
        name:name,
        bankid:bankid,
        accountnum:accountnum,
        bankOutletsName:bankOutletsName,
        enterpriseid:enterpriseid,
        customBanks:null
        
      })
      //查询银行卡列表 并给bankname赋值
      let bankUrl=config.api.bankList;
      axios.get(bankUrl)
      .then((res)=>{
        if(res.data.success){
          res.data.data.map((item)=>{
            if(item.bankid==this.state.bankid)
           this.setState({
            bankname:item.bankname
           })
          })
        }
      })
      //查询投资人的银行卡列表
      let investBankUrl=config.api.bankInfo+'id='+enterpriseid+'&isEnterpriseStr=1&isInvest=3&start=0&limit=25'
      axios.get(investBankUrl)
      .then((res)=>{
        console.log('jiayan',res.data);
        this.setState({
          customBanks:res.data.topics.map((item)=>{
             return item.accountnum
          })
        })
      })
      .catch((e)=>{
        console.log(e);

      })
    }
      render(){
        let {name,bankid,accountnum,bankOutletsName,bankname,customBanks}=this.state;
        
      return(
          <View style={{ backgroundColor:'#fff',}}>
            <ScrollView style={{marginBottom:20}}>
            <KeyboardAwareScrollView>
           
            <DefaultInput value={name}  placeholder={'未知'} name={'开户名称'} style={base.item} disabled/>
           
            <DefaultSelect  placeholder={'选择开户账号'} name={'开户账号'} value={accountnum} style={base.item}
                  items={customBanks} onSelected={(item, index)=>{
                    this.setState({
                      accountnum: item,
                      });
                  
                  this.selectEvent(item.value);
                  }}/> 
        
           <DefaultInput  value={bankname} placeholder={'未知'} name={'银行名称'} style={base.item} disabled/>
                        
          <DefaultInput  value={bankOutletsName} placeholder={'未知'} name={'支行名称'} style={base.item} disabled/>
            
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