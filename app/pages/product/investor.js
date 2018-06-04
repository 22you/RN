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
import {Input,Button,Toast,Overlay} from 'teaset'
import matchsize from '../../components/matchsize';
import config from '../../common/config';
import axios from 'axios';
import Icon from 'react-native-vector-icons/FontAwesome';
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
          enterpriseid:'',
          orderId:'',
          plManageMoneyPlanBuyinfo:null,
          banklists:[],
         index:0,
         projectId:this.props.navigation.state.params.projectId,
         plManageMoneyPlan:this.props.navigation.state.params.plManageMoneyPlan,
         plManageMoneyPlanOtherInfo:this.props.navigation.state.params.plManageMoneyPlanOtherInfo
        };
    }
    //投资人账户和订单绑定
    saveBankOrder=()=>{
      let bankOrderUrl=config.api.investBankOrder+'plManageMoneyPlanBuyinfo.orderId='+this.state.orderId+'&enterpriseBank.id='+this.state.id;
      axios.post(bankOrderUrl)
      .then((res)=>{
        if(res.data.success){
         Toast.message('保存成功')
        }
       // console.log(res.data);
        
      })
    }
    componentDidMount(){
     // console.log('dnag',this.state.plManageMoneyPlan);
      
     let {orderId}=this.props.navigation.state.params.plManageMoneyPlanBuyinfo;
     let {name,bankid,accountnum,bankOutletsName,enterpriseid,id}=this.props.navigation.state.params.enterpriseBank;
     
      this.setState({
        name:name,
        bankid:bankid,
        accountnum:accountnum,
        bankOutletsName:bankOutletsName,
        enterpriseid:enterpriseid,
        customBanks:null,
        orderId:orderId,
        plManageMoneyPlanBuyinfo:this.props.navigation.state.params.plManageMoneyPlanBuyinfo,
        id:id
        
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
      console.log(investBankUrl);
      
      axios.get(investBankUrl)
      .then((res)=>{
        let banklists=[];
        res.data.topics.map((item)=>{
          let banklistCon={
            accountnum:item.accountnum,
            bankname:item.bankname,
            bankid:item.bankid,
            bankOutletsName:item.bankOutletsName,
            id:item.id
          }
          banklists.push(banklistCon);
                })
        this.setState({
          banklists:banklists
        })
      })
      .catch((e)=>{
        console.log(e);

      })
    }
    //选择当前选择的投资人的银行卡
    setIndex=(item,index)=>{
      this.setState({
        index:index,
        accountnum:item.accountnum,
        bankid:item.bankid,
        bankOutletsName:item.bankOutletsName,
        bankname:item.bankname,
        bankOutletsName:item.bankOutletsName,
        id:item.id
      })
    }

      render(){
       //投资人的银行卡列表（下拉弹窗）
       let {banklists}=this.state;
   
       let banks=banklists.map((item,index)=>{
        return (<TouchableOpacity key={index} style={{borderBottomColor:'#ddd',borderBottomWidth:1,paddingHorizontal:20,paddingVertical:15,flexDirection:'row',justifyContent:'space-between'}}
          onPress={()=>{
            this.setIndex(item,index);
            this.overlayPullView.close();
          //  console.log(item);
            
          }}>
        <View>
          <Text>{item.bankname}</Text>
          <Text>尾号{item.accountnum.substr(item.accountnum.length-4,4)}</Text>
        </View>
        {/* 判断当前index跟所存储的index值是否一致  */}
        {
          this.state.index==index?
          <Icon name="check" size={matchsize(29)} color={'#ddd'} style={{paddingHorizontal:matchsize(20)}}/>
          :
          <View/>
          
        }
      </TouchableOpacity> )
          
        })
       let overlayView = (
        <Overlay.PullView side='bottom' modal={false} ref={v => this.overlayPullView = v}>
        <ScrollView style={{backgroundColor: '#fff'}}>
        <View style={{height:300,justifyContent:'flex-start'}}>
          <View style={{paddingVertical:10,paddingLeft:15}}><Text>请选择您的银行卡</Text></View>
          {banks}
          </View>
        </ScrollView>
      </Overlay.PullView>
      );
       //
      let {name,bankid,accountnum,bankOutletsName,bankname,customBanks,plManageMoneyPlanBuyinfo}=this.state;
       //console.log(this.state.projectId);
        
      return(
          <View style={{ backgroundColor:'#fff',}}>
            <ScrollView style={{marginBottom:20}}>
            <KeyboardAwareScrollView>
           
            <DefaultInput value={name}  placeholder={'未知'} name={'开户名称'} style={base.item} disabled/>
              <TouchableOpacity style={base.item} onPress={()=>Overlay.show(overlayView)}>
              <Text>开户账号</Text>
              <Text>{accountnum} ></Text>
            </TouchableOpacity>
            <DefaultInput  value={bankname} placeholder={'未知'} name={'银行名称'} style={base.item} disabled/>
            <DefaultInput  value={`${bankOutletsName}`} placeholder={'未知'} name={'支行名称'} style={base.item} disabled/>
            
            <View>
            <TouchableOpacity style={[base.btnbox,{marginTop:15,marginHorizontal:'12%'}]}>
              <Button title="保存" style={{width:100}} color="#ddd" type="primary"  onPress={()=>this.saveBankOrder()}/>
              <Button title="下一步"  style={{width:100}} onPress={()=>{
                    this.props.navigation.navigate('Other',{
                      plManageMoneyPlan:this.state.plManageMoneyPlan,
                      plManageMoneyPlanBuyinfo:plManageMoneyPlanBuyinfo,
                      projectId:this.state.projectId,
                      plManageMoneyPlanOtherInfo:this.state.plManageMoneyPlanOtherInfo
                    });
                   // console.log(this.props.navigation.navigate);
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