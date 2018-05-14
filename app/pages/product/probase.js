import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    ScrollView,
    Alert
  } from 'react-native';
  import {Button,Input,Select} from 'teaset';
  import axios from 'axios';
  export default class Probase extends Component {
    static navigationOptions = {
        headerRight: (
          <View style={{height: 44,width: 55,justifyContent: 'center',paddingRight:15} }/>
      ),
      };
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            probase:[]
        };
    }
    _buyApply=()=>{
      let {valueCustom,InvestAmount}=this.state;
      if(!valueCustom){
        Alert.alert('请选择客户');
        return false;
      }
      if(!InvestAmount){
        Alert.alert('请输入投资金额');
        return false;
      }
      this.props.navigation.navigate('Apply')
    }
    componentDidMount(){
     //console.log(this.props.navigation.state.params.item);
     let mmplanId=this.props.navigation.state.params.item.mmplanId;
     let url=config.api.probase+'?mmplanId='+mmplanId
     //console.log(url);
      axios.get(url)
      .then((res)=>{
        if(res.data.succes){
          console.log(res.data.date.plManageMoneyPlan);
          this.setState({
            probase:res.data.date.plManageMoneyPlan
          })
        }
          
          
      })
      .catch((error)=>{
        console.log(error);
        
      })
      
    }
      render(){
        const customItems = [
          {
            text: 'Long long long long long long long',
            value: 1,
          },
          {
            text: 'Short',
            value: 2,
          }
        ];
        let {probase}=this.state;
      return(
          <View style={{ backgroundColor:'#fff',}}>
            <ScrollView style={{marginBottom:20}}>
            <View style={base.item}>
            <Text>产品级别</Text>
            <Text>{probase.productName}</Text>
            </View>
            <TouchableOpacity style={base.item}>
            <Text>产品名称</Text>
            <Text>{probase.mmName}</Text>
            </TouchableOpacity>
            <View style={base.item}>
            <Text>产品编号</Text>
            <Text>{probase.mmNumber}</Text>
            </View>
            <View style={base.item}>
            <Text>产品策略</Text>
            <Text>{probase.proName}</Text>
            </View>
            <TouchableOpacity style={base.item}>
            <Text>计息周期</Text>
            <Text>{probase.interestPeriod}天</Text>
            </TouchableOpacity>
            <View style={base.item}>
            <Text>投资期限</Text>
            <Text>{probase.investlimit}期</Text>
            </View>
            <TouchableOpacity style={base.item}>
            <Text>超息条件</Text>
            <Text>{probase.startinInterestCondition}</Text>
            </TouchableOpacity>
            <View style={base.item}>
            <Text>基础年化率</Text>
            <Text>{probase.yeaRate}%</Text>
            </View>
            <View style={base.item}>
            <Text>付息类型</Text>
            <Text>{probase.isCyclingLend==0?'前期支付':'期初一次性给付'}</Text>
            </View>
            <View style={base.item}>
            <Text>付息方式</Text>
            <Text>{probase.isStartDatePay==3?'前置付息':probase.isStartDatePay}</Text>
            </View>
            <View style={base.item}>
            <Text>礼品年华率</Text>
            <Text>{probase.baseGiftYearRate}</Text>
            </View>
            <View style={base.item}>
            <Text>递增金额</Text>
            <Text>{probase.riseMoney}</Text>
            </View>
            <View style={base.item}>
            <Text>梯级限制</Text>
            <Text>{probase.isLadderProducts==1?'是':'否'}</Text>
            </View>
            <View style={base.item}>
            <Text>投资起点金额</Text>
            <Text>{probase.startMoney}</Text>
            </View>
            <View style={base.item}>
            <Text>投资上线</Text>
            <Text>1000元</Text>
            </View>
            <View style={base.item}>
            <Text>自定义</Text>
            <Text>{probase.dayPerPeriod}日/期</Text>
            </View>
            <View style={base.item}>
            <Text>开始时间</Text>
            <Text>{probase.buyStartTime}</Text>
            </View>
            <View style={base.item}>
            <Text>结束时间</Text>
            <Text>2018-04-02</Text>
            </View>
            <View style={base.item}>
            <Text>业务员提成</Text>
            <Text>{probase.ommissionCoefficient}%</Text>
            </View>
            <View style={base.item}>
            <Text>是否活动</Text>
            <Text>{probase.isActivity==0?'否':'是'}</Text>
            </View>
            <View style={base.item}>
            <Text>红包金额</Text>
            <Text>{probase.redPacketMoney}元</Text>
            </View>
            <View style={base.item}>
            <Text>期满全利率</Text>
            <Text>{probase.expirationRate}%</Text>
            </View>
            <View style={base.item}>
            <Text>参照单位</Text>
            <Text>1倍</Text>
            </View>
            <View style={base.item}>
            <Text>达标金额</Text>
            <Text>{probase.deductionMoney}元</Text>
            </View>
            <View style={base.item}>
            <Text>赠送礼品</Text>
            <Text>{probase.baseGiftMoney}元</Text>
            </View>
            <View style={base.item}>
            <Text>业务考核</Text>
            <Text>{probase.businessCoefficient}%</Text>
            </View>
            <View style={base.item}>
            <Text>团队考核</Text>
            <Text>{probase.teamCoefficient}%</Text>
            </View>
            <View style={{ marginTop:20, marginHorizontal:'3%',}} >
            <Text style={{marginBottom:20,color:'red'}}>购买信息:</Text>
            <View style={base.applybox}>
              <View>
              <Text style={{marginBottom:10}}><Text style={{color:'red'}}>*</Text>客户姓名:</Text>
              <Select
               value={this.state.valueCustom}
               valueStyle={{flex: 1, color: '#8a6d3b', textAlign: 'left'}}
               items={customItems}
               getItemValue={(item, index) => item.value}
               getItemText={(item, index) => item.text}
               iconTintColor='#8a6d3b'
               placeholder='请选择客户'
               pickerTitle='请选择客户姓名'
               onSelected={(item, index) => this.setState({valueCustom: item.value})}
              />
              </View>
              <View style={{marginTop:15}}>
                <Text style={{marginBottom:10}}><Text style={{color:'red'}}>*</Text>投资金额:</Text>
                <Input placeholder="请输入..." value={this.state.InvestAmount}
                 onChangeText={(text)=>{this.setState({InvestAmount:text})}}
                />
              </View>
            </View>
            </View>
            <TouchableOpacity style={{marginTop:15,marginHorizontal:'5%'}}>
            <Button title="购买"
            accessibilityLabel="购买" type="primary" onPress={()=>this._buyApply()} />
           
            </TouchableOpacity>
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
  applybox:{
    backgroundColor:'#ddd',
    paddingVertical:10,
    paddingHorizontal:10,
   
   
  }
  })