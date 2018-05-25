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
import {Button} from 'teaset';
import DatePicker from 'react-native-datepicker'
import config from '../../common/config';
import axios from 'axios';
  export default class Buyinfo extends Component {
    static navigationOptions = {
      headerRight: (
        <View style={{height: 44,width: 55,justifyContent: 'center',paddingRight:15} }/>
    ),
    };
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
          contractNumber:'',//合同编号
          buyMoney:'',//投资金额 可更改
          sumMoney:'',//累计金额 禁用
          buyDatetime:'',//进账日期 可选日期
          startinInterestTime:'',//起息日 读写
          endinInterestTime:'',//到期日 禁用
          totleRate:'',//利率  只读
          totalGiftRate:'',//礼品率 只读
          giftMoney:'',//礼品金额 只读
          giftType:'',//礼品 读选
          commissionMoney:'',//业务员提成 只读
          isBirthday:'',//是否生日月
          totleRate:'',//利率
          giftLists:[],//礼品列表
          bankName:'',//转入我司开户行
          bankAccountId:'',//开户行id
          name:'',//银行账户名
          account:'',//银行账号
          other:'',//转入我司其他
          investment:''//续投/首投
          
        };
    }
    componentDidMount(){
      let {contractNumber,isBirthday,plManageMoneyPlan,totleRate,giftType,buyMoney,sumMoney,endinInterestTime,totalGiftRate,giftMoney,commissionMoney,name,account}=this.props.navigation.state.params.plManageMoneyPlanBuyinfo
      
      this.setState({
        plManageMoneyPlanBuyinfo:this.props.navigation.state.params.plManageMoneyPlanBuyinfo,
        contractNumber:contractNumber,
        isBirthday:isBirthday,
        giftType:giftType,
        buyMoney:buyMoney,
        sumMoney:sumMoney,
        endinInterestTime:endinInterestTime,
        totleRate:totleRate,
        totalGiftRate:totalGiftRate,
        giftMoney:giftMoney,
        commissionMoney:commissionMoney,
        name:name,
        account:account,

      })
      //获取礼品名称
      let giftUrl=config.api.gift+'start=0&limit=null';
      
      axios.get(giftUrl)
      .then((res)=>{
        if(res.data.success){
          let giftnames=res.data.result.map((item)=>{
            return item.name;
            })
             this.setState({
               giftLists:giftnames
             })
        }
        
      })
      //公司开户行查询
      let companyBanksUrl=config.api.companyBank+'start=0&limit=null&isEnterpriseStr=1&isInvest=3';
      axios.get(companyBanksUrl)
      .then((res)=>{
        log(res.data)
        if(res.data.totalProperty){
          let companyBankcon=[];
          res.data.topics.map((item)=>{
             let companyBank={
               name:item.bankName,
               number:item.account,
               bankId:item.bankId
             };
             companyBankcon.push(companyBank)
          })
          this.setState({
            companyBanks:companyBankcon
          })
        }
      })

    }
      render(){

        let {
          contractNumber,commissionMoney,isBirthday,giftType,giftLists,
          buyDatetime,startinInterestTime,
          giftMoney,bankName,bankAccountId,name,other,investment,buyMoney,sumMoney,
          endinInterestTime,totleRate,totalGiftRate,account
        }=this.state;
        
      return(
          <View style={{ backgroundColor:'#fff',}}>
            <ScrollView style={{marginBottom:20}}>
            <KeyboardAwareScrollView>
            <DefaultInput placeholder={'合同编号'} name={'合同编号'} require value={contractNumber} style={base.item}
					              onChangeText={(text)=>{
                          this.setState({
                            contractNumber:text
                          })
                        }} />
            <TouchableOpacity style={base.item}>
                <Text>进账日期</Text>
                <DatePicker
                //  disabled={true}
                  date={buyDatetime}
                  mode="date"
                  placeholder="请选择日期"
                  format="YYYY-MM-DD"
                  minDate='null'
                  maxDate={new Date()}
                  confirmBtnText="确认"
                  showIcon={false}
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
            <DefaultSelect  placeholder={'请选择'} name={'是否生日月'} value={this.state.isBirthday?this.state.isBirthday:'否'} style={base.item}
					               items={[{text:'是',value:1},{text:'否',value:0}]} onSelected={(item)=>{
                           this.setState({
                            isBirthday:item.value
                           })
                         }}/>
            <DefaultInput placeholder={'投资金额'} name={'投资金额'}  value={`${buyMoney}元`} style={base.item} />
            <TouchableOpacity style={base.item}>
                <Text>起息日</Text>
                <DatePicker
                //  disabled={true}
                  date={startinInterestTime}
                  mode="date"
                  placeholder="请选择日期"
                  format="YYYY-MM-DD"
                  minDate='null'
                  maxDate={new Date()}
                  confirmBtnText="确认"
                  showIcon={false}
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
            <TouchableOpacity style={base.item}>
                <Text>到期日</Text>
                <DatePicker
                  disabled={true}
                  date={endinInterestTime}
                  mode="date"
                  placeholder="请选择日期"
                  format="YYYY-MM-DD"
                  minDate='null'
                  maxDate={new Date()}
                  confirmBtnText="确认"
                  showIcon={false}
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
            <DefaultInput placeholder={'累计金额'} name={'累计金额'} require style={base.item} value={sumMoney}  disabled/>
            <DefaultInput placeholder={'业务员提成'} name={'业务员提成'} value={commissionMoney} require style={base.item} disabled/>
            <DefaultInput placeholder={'利率'} name={'利率'} value={totleRate} require style={base.item} disabled/>
            <DefaultInput placeholder={'礼品率'} name={'礼品率'} value={totalGiftRate} require style={base.item} disabled/>
            <DefaultInput placeholder={'礼品金额'} name={'礼品金额'} value={giftMoney} require style={base.item} disabled/>
            <DefaultSelect value={giftType} name={'礼品'} items={giftLists}  style={base.item}
            onSelected={(item)=>{
              this.setState({
                giftType:item
              })
            }}
            />
         
            <View style={base.item}>
            <Text>转入我司开户行</Text>
            <Text>请选择{bankName}</Text>
            </View>
           
            <DefaultInput placeholder={'银行账户名'} name={'银行账户名'} value={name}  style={base.item} disabled/>
            <DefaultInput placeholder={'银行账号'} name={'银行账号'} value={account}  style={base.item} disabled/>
            <DefaultInput placeholder={'转入其他'} name={'转入其他'} value={other}  style={base.item} />
            <DefaultSelect value={investment} name={'续投/首投'} items={[{text:'首投',value:'0'},{text:'续投',value:'1'}]}  style={base.item}
            onSelected={(item)=>{
              this.setState({
                investment:item.text
              })
            }}
            />
            <View>
            <TouchableOpacity style={[base.btnbox,{marginTop:15,marginHorizontal:'12%'}]}>
              <Button title="保存" style={{width:100}} color="#ddd" type="primary" accessibilityLabel="下一步" onPress={()=>Alert.alert('保存成功')}/>
              <Button title="下一步"  style={{width:100}} accessibilityLabel="下一步"  onPress={()=>{
                this.props.navigation.navigate('Chaohe');
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