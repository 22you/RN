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
  import axios from 'axios';
  export default class Applybase extends Component {
    static navigationOptions = ({navigation})=>({
      headerRight: (
        <View style={{height: 44,width: 55,justifyContent: 'center',paddingRight:15} }/>
    ),
    });
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
          birthDay:'',
          postcode:'',
          selfemail:'',
          postaddress:'',
          cardText:'',
          shopName:'',
          orderId:'',
          investId:'',
          plManageMoneyPlan:this.props.navigation.state.params.plManageMoneyPlan,
          projectId:this.props.navigation.state.params.projectId,
          plManageMoneyPlanOtherInfo:this.props.navigation.state.params.plManageMoneyPlanOtherInfo
        };
    }
    //保存  客户信息和订单的绑定
    saveInvestOrder=()=>{
      let investOrderUrl=config.api.investOrder+'plManageMoneyPlanBuyinfo.orderId='+this.state.orderId+'&csInvestmentperson.investId='+this.state.investId+'&csInvestmentperson.investName='+this.state.investName;
      axios.post(investOrderUrl)
      .then((res)=>{
        if(res.data.success){
          Toast.message('保存成功')
        }
      
      })
      .catch((error)=>{
        console.log(error);
        
      })
    }
    //选择客户
    selectEvent=(investId)=>{
       let InvestorInfoUrl=config.api.InvestorInfo+'investId='+investId;
       axios.get(InvestorInfoUrl)
       .then((res)=>{
         if(res.data.success){
         // console.log('selectEvent',res.data.data);
          let {investId,investName,sex,cellphone,alternatePhone,cardtype,cardnumber,birthDay,postcode,selfemail,postaddress,cardText,shopName}=res.data.data;
          this.setState({
          investId:investId, 
          investName:investName,
          sex:sex,
          cellphone:cellphone,
          alternatePhone:alternatePhone,
          cardtype:cardtype,
          cardnumber:cardnumber,
          birthDay:birthDay,
          postcode:postcode,
          selfemail:selfemail,
          postaddress:postaddress,
          cardText:cardText,
          shopName:shopName
          })
         }
       
       })
    }
  
    componentDidMount(){
      //初始化的时候是从上一个页面中传过来的数据（客户基本信息）
      //console.log(this.props.navigation.state.params);
      let {orderId}=this.props.navigation.state.params.plManageMoneyPlanBuyinfo;
      let {investId,investName,sex,cellphone,alternatePhone,cardtype,cardnumber,birthDay,postcode,selfemail,postaddress,shopName}=this.props.navigation.state.params.csInvestmentperson
      this.setState({
        investName:investName,
        sex:sex,
        cellphone:cellphone,
        alternatePhone:alternatePhone,
        cardtype:cardtype,
        cardnumber:cardnumber,
        birthDay:birthDay,
        postcode:postcode,
        selfemail:selfemail,
        postaddress:postaddress,
        shopName:shopName,
        orderId:orderId,
        investId:investId,
        plManageMoneyPlanBuyinfo:this.props.navigation.state.params.plManageMoneyPlanBuyinfo,
        csInvestmentperson:this.props.navigation.state.params.csInvestmentperson,
        enterpriseBank:this.props.navigation.state.params.enterpriseBank
        
      })
      let dictionaryUrl=config.api.dictionary+'nodeKey=card_type_key'; //证件类型数据字典
      let customersUrl=config.api.customers+'userIds='+global.user.userData.userIds;//查询客户列表
      axios.get(dictionaryUrl)
      .then((res)=>{
        
        if(res.data.success){
          res.data.result.map((item)=>{
            if(item.value==cardtype){
                this.setState({
                  cardText:item.text
                })
            }
          })
     
        }
      })
      .catch((error)=>{
        console.log(error);

      })
      //查询客户列表
      axios.post(customersUrl)
      .then((res)=>{
        if(res.data.success){
        let customItems=res.data.result.map(item=>{
          return { 
            text:item.investName,
            value:item.investId}
         
        })
        this.setState({
         customItems:customItems
        })
         
        }
   
      
      })
      .catch((error)=>{
        console.log(error);
        
      })
    }
 
   
      render(){
        let {investName,sex,cellphone,alternatePhone,cardtype,cardnumber,birthDay,postcode,selfemail,personProperty,postaddress,
            belongedName,belongedId,departmentName,departmentId,customItems,cardText,shopName}=this.state;
            
      return(
          <View style={{ backgroundColor:'#fff',}}>
          
            <ScrollView style={{marginBottom:20}}>
            <KeyboardAwareScrollView>
              
           <DefaultSelect  placeholder={'请选择客户'} name={'客户姓名'} value={investName} style={base.item}
                      items={customItems} onSelected={(item, index)=>{
                        this.setState({
                          investId: item.value,
                          investName:item.text
                         });
                     
                      
                      this.selectEvent(item.value);
                      }}/>            
            <DefaultInput  placeholder={'未知'} name={'性别'} value={sex==312?'男':'女'} style={base.item} disabled/>
          
            <DefaultInput placeholder={'请输入'} name={'联系电话'} style={base.item} value={cellphone} disabled/>
            <DefaultInput placeholder={'未填写'} name={'备用电话'} style={base.item} value={alternatePhone} disabled/>

             <DefaultInput  placeholder={'未知'} name={'证件类型'} value={cardText} style={base.item}  disabled/>
          
            <DefaultInput placeholder={''} name={'证件号码'} style={base.item} value={cardnumber} disabled/>
            <TouchableOpacity style={base.item}>
                <Text>出生日期</Text>
                <DatePicker
                 disabled={true}
                  date={birthDay}
                  mode="date"
                  placeholder="请选择日期"
                  format="YYYY-MM-DD"
                  minDate='null'
                  maxDate={new Date()}
                  confirmBtnText="确认"
                  showIcon='false'
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
             />
            </TouchableOpacity>
            <DefaultInput placeholder={'未知'} name={'邮政编码'} style={base.item} value={postcode} disabled/>
            <DefaultInput placeholder={'未知'} name={'电子邮箱'} style={base.item} value={selfemail} disabled/>
            {/* <DefaultInput placeholder={'vip'} name={'客户性质'} style={base.item}
					              onChangeText={()=>{}} /> */}
         
            <DefaultInput placeholder={'未知'} name={'通讯地址'} style={base.item} value={postaddress} disabled/>           
            <DefaultInput  name={'客户授权人'} style={base.item} value={global.user.userData.fullname} disabled/>  
            <DefaultInput placeholder={'未知'} value={shopName} name={'登记团队'} style={base.item} disabled/> 
            <View>
            <TouchableOpacity style={[base.btnbox,{marginTop:15,marginHorizontal:'12%'}]}>
              <Button title="保存" style={{width:100}} type="primary" color="#ddd" accessibilityLabel="下一步" onPress={()=>this.saveInvestOrder()}/>
              <Button title="下一步"  style={{width:100}} accessibilityLabel="下一步"  onPress={()=>this.props.navigation.navigate('Investor',{
                 enterpriseBank:this.state.enterpriseBank,
                 plManageMoneyPlanBuyinfo:this.state.plManageMoneyPlanBuyinfo,
                 plManageMoneyPlan:this.state.plManageMoneyPlan,
                 projectId:this.state.projectId,
                 plManageMoneyPlanOtherInfo:this.state.plManageMoneyPlanOtherInfo
                 
              })} />
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