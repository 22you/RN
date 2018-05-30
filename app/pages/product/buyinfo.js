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
import {Button,Overlay} from 'teaset';
import DatePicker from 'react-native-datepicker'
import config from '../../common/config';
import axios from 'axios';
import Icon from 'react-native-vector-icons/FontAwesome';
import matchsize from '../../components/matchsize';
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
          projectId:this.props.navigation.state.params.projectId,
          plManageMoneyPlan:this.props.navigation.state.params.plManageMoneyPlan,
          orderId:this.props.navigation.state.params.plManageMoneyPlanBuyinfo.orderId,
          taskId:this.props.navigation.state.params.taskId,
          contractNumber:'',//合同编号
          buyMoney:'',//投资金额 可更改
          sumMoney:'',//累计金额 禁用
          buyDatetime:this.props.navigation.state.params.plManageMoneyPlanBuyinfo.buyDatetime,//进账日期 可选日期
          startinInterestTime:this.props.navigation.state.params.plManageMoneyPlanBuyinfo.startinInterestTime,//起息日 读写
          endinInterestTime:'',//到期日 禁用
          totalGiftRate:'',//礼品率 只读
          giftMoney:'',//礼品金额 只读
          giftType:'',//礼品 读选
          commissionMoney:'',//业务员提成 只读
          isBirthday:this.props.navigation.state.params.plManageMoneyPlanBuyinfo.isBirthday,//是否生日月
          totleRate:'',//利率
          giftLists:[],//礼品列表
          bankName:this.props.navigation.state.params.plManageMoneyPlanBuyinfo.bankName,//转入我司开户行
          bankAccountId:'',//开户行id
          name:'',//银行账户名
          account:'',//银行账号
          other:this.props.navigation.state.params.plManageMoneyPlanBuyinfo.other,//转入我司其他
          investment:this.props.navigation.state.params.plManageMoneyPlanBuyinfo.investment,//续投/首投
          companyBanks:[],
          index:0,
        };
    }
    componentDidMount(){
     // console.log('orderId',this.state.orderId);
      
      let {contractNumber,totleRate,giftType,buyMoney,sumMoney,endinInterestTime,totalGiftRate,giftMoney,commissionMoney,name,account}=this.props.navigation.state.params.plManageMoneyPlanBuyinfo
      
      this.setState({
        plManageMoneyPlanBuyinfo:this.props.navigation.state.params.plManageMoneyPlanBuyinfo,
        contractNumber:contractNumber,
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
          let giftnames=[];
          res.data.result.map((item,index)=>{
            return giftnames.push({text:item.name,value:index})
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
        if(res.data.totalProperty){
          let companyBankcon=[];
          res.data.topics.map((item)=>{
             let companyBank={
              bankName:item.bankName,
              account:item.account,
               bankId:item.bankId,
               name:item.name
             };
             companyBankcon.push(companyBank)
          })
          this.setState({
            companyBanks:companyBankcon
          })
        }
      })

    }
    //设置我司开户  回填信息

    setIndex=(item,index)=>{
     this.setState({
      bankName:item.bankName,
      account:item.account,
      bankId:item.bankId,
      name:item.name,
      index:index
     })
    }

    //保存用户基本信息
    saveBuyinfo=()=>{
      let {orderId,contractNumber,buyDatetime,isBirthday,buyMoney,startinInterestTime,endinInterestTime,sumMoney,commissionMoney,totleRate,totalGiftRate,giftMoney,giftType,bankName,bankAccountId,name,account,other,investment,ommissionCoefficient}=this.state;
      let buyInfoUrl=config.api.saveBuyinfo+'plManageMoneyPlanBuyinfo.orderId='+orderId+'&plManageMoneyPlanBuyinfo.contractNumber='+contractNumber
      +'&plManageMoneyPlanBuyinfo.buyDatetime='+buyDatetime+'&plManageMoneyPlanBuyinfo.isBirthday='+isBirthday+'&plManageMoneyPlanBuyinfo.buyMoney='
      +buyMoney+'&plManageMoneyPlanBuyinfo.startinInterestTime='+startinInterestTime+'&plManageMoneyPlanBuyinfo.endinInterestTime='+endinInterestTime
      +'&plManageMoneyPlanBuyinfo.sumMoney='+sumMoney+'&plManageMoneyPlan.ommissionCoefficient='+ommissionCoefficient+'&plManageMoneyPlanBuyinfo.totleRate='+
      totleRate+'&plManageMoneyPlanBuyinfo.totalGiftRate='+totalGiftRate+'&plManageMoneyPlanBuyinfo.giftMoney='+giftMoney+'&plManageMoneyPlanBuyinfo.giftType='+
      giftType+'&plManageMoneyPlanBuyinfo.bankName='+bankName+'&plManageMoneyPlanBuyinfo.bankAccountId='+bankAccountId+'&plManageMoneyPlanBuyinfo.name='+
      name+'&plManageMoneyPlanBuyinfo.account='+account+'&plManageMoneyPlanBuyinfo.other='+other+'&plManageMoneyPlanBuyinfo.investment='+investment;
      axios.post(buyInfoUrl)
      .then((res)=>{
          if(res.data.success){
            Alert.alert('保存成功')
          }
 
 
      })
      
    }
    
      render(){

        let {
          contractNumber,commissionMoney,companyBanks,isBirthday,giftType,giftLists,
          buyDatetime,startinInterestTime,
          giftMoney,bankName,bankAccountId,name,other,investment,buyMoney,sumMoney,
          endinInterestTime,totleRate,totalGiftRate,account,
        }=this.state;
        console.log('state',this.state);
        //我司开户行列表  弹窗底部
        
        let banks=companyBanks.map((item,index)=>{
        return (<TouchableOpacity key={index} style={{borderBottomColor:'#ddd',borderBottomWidth:1,paddingHorizontal:20,paddingVertical:15,flexDirection:'row',justifyContent:'space-between'}}
          onPress={()=>{
            this.setIndex(item,index);
            this.overlayPullView.close();
          }}>
        <View>
          <Text>{item.bankname}</Text>
          <Text>尾号{item.account.substr(item.account.length-4,4)}</Text>
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
                  onDateChange={(date) => {this.setState({buyDatetime: date})}}
             />
            </TouchableOpacity>
            <DefaultSelect  placeholder={'请选择'} name={'是否生日月'} value={this.state.isBirthday?this.state.isBirthday:'否'} style={base.item}
					               items={[{text:'是',value:1},{text:'否',value:0}]} onSelected={(item)=>{
                           this.setState({
                            isBirthday:item.value
                           })
                         }}/>
            <DefaultInput require placeholder={'投资金额'} name={'投资金额'}  value={`${buyMoney}元`} style={base.item} />
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
                  onDateChange={(date) => {this.setState({startinInterestTime: date})}}
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
            <DefaultInput placeholder={'累计金额'} name={'累计金额'} require style={base.item} value={`${sumMoney==null?0:sumMoney}元`}  disabled/>
            <DefaultInput placeholder={'业务员提成'} name={'业务员提成'} value={`${commissionMoney}元`} require style={base.item} disabled/>
            <DefaultInput placeholder={'利率'} name={'利率'} value={`${totleRate}%`} require style={base.item} disabled/>
            <DefaultInput placeholder={'礼品率'} name={'礼品率'} value={`${totalGiftRate}%`} require style={base.item} disabled/>
            <DefaultInput placeholder={'礼品金额'} name={'礼品金额'} value={`${giftMoney}元`} require style={base.item} disabled/>
            <DefaultSelect value={giftType=='1056'?'朝禾优品':'代金券'} name={'礼品'} items={[{text:'朝禾优品',value:'1056'},{text:'代金券',value:'1057'}]}  style={base.item}
            onSelected={(item)=>{
              this.setState({
                giftType:item.value
              })
            }}
            />
            <TouchableOpacity style={base.item} onPress={()=>Overlay.show(overlayView)}>
              <Text>转入我司开户行</Text>
              <Text>{bankName} ></Text>
            </TouchableOpacity>
            <DefaultInput placeholder={'银行账户名'} name={'银行账户名'} value={name}  style={base.item} disabled/>
            <DefaultInput placeholder={'银行账号'} name={'银行账号'} value={account}  style={base.item} disabled/>
            <DefaultInput placeholder={'转入其他'} name={'转入其他'} value={other}  style={base.item} />
            <DefaultSelect require value={investment} name={'续投/首投'} items={[{text:'首投',value:'0'},{text:'续投',value:'1'}]}  style={base.item}
            onSelected={(item)=>{
              this.setState({
                investment:item.text
              })
            }}
            />
            <View>
            <TouchableOpacity style={[base.btnbox,{marginTop:15,marginHorizontal:'12%'}]}>
              <Button title="保存" style={{width:100}} color="#ddd" type="primary"  
                 onPress={()=>{
                   this.saveBuyinfo();
                   }
                   }/>
              <Button title="下一步"  style={{width:100}} accessibilityLabel="下一步"  onPress={()=>{
                this.props.navigation.navigate('Chaohe',{
                plManageMoneyPlan:this.state.plManageMoneyPlan,
                projectId:this.state.projectId,
                giftType:this.state.giftType
                });
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
    borderBottomColor:'#ddd',
    alignItems:'center'

  },
  btnbox:{
    flexDirection:'row',
    width:'80%',
    justifyContent:'space-between',

  }
  })