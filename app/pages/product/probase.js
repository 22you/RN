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
  import {Button,Input,Select} from 'teaset'
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
      console.log(this.props);
      
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
      return(
          <View style={{ backgroundColor:'#fff',}}>
            <ScrollView style={{marginBottom:20}}>
            <View style={base.item}>
            <Text>产品级别</Text>
            <Text>常规</Text>
            </View>
            <TouchableOpacity style={base.item}>
            <Text>产品名称</Text>
            <Text>20180402001</Text>
            </TouchableOpacity>
            <View style={base.item}>
            <Text>产品编号</Text>
            <Text>001001</Text>
            </View>
            <View style={base.item}>
            <Text>产品策略</Text>
            <Text>001002</Text>
            </View>
            <TouchableOpacity style={base.item}>
            <Text>计息周期</Text>
            <Text>3天</Text>
            </TouchableOpacity>
            <View style={base.item}>
            <Text>投资期限</Text>
            <Text>12期</Text>
            </View>
            <TouchableOpacity style={base.item}>
            <Text>超息条件</Text>
            <Text>互融云</Text>
            </TouchableOpacity>
            <View style={base.item}>
            <Text>基础年化率</Text>
            <Text>5.65%</Text>
            </View>
            <View style={base.item}>
            <Text>付息类型</Text>
            <Text>互融云</Text>
            </View>
            <View style={base.item}>
            <Text>付息方式</Text>
            <Text>支付宝</Text>
            </View>
            <View style={base.item}>
            <Text>礼品年华率</Text>
            <Text>5.65%</Text>
            </View>
            <View style={base.item}>
            <Text>递增全额</Text>
            <Text>1000元</Text>
            </View>
            <View style={base.item}>
            <Text>梯级限制</Text>
            <Text>支付宝</Text>
            </View>
            <View style={base.item}>
            <Text>投资起点全额</Text>
            <Text>1000元</Text>
            </View>
            <View style={base.item}>
            <Text>投资上线</Text>
            <Text>1000元</Text>
            </View>
            <View style={base.item}>
            <Text>日期</Text>
            <Text>2018-04-02</Text>
            </View>
            <View style={base.item}>
            <Text>开始时间</Text>
            <Text>2018-04-02</Text>
            </View>
            <View style={base.item}>
            <Text>结束时间</Text>
            <Text>2018-04-02</Text>
            </View>
            <View style={base.item}>
            <Text>业务员提成</Text>
            <Text>10%</Text>
            </View>
            <View style={base.item}>
            <Text>是否活动</Text>
            <Text>是</Text>
            </View>
            <View style={base.item}>
            <Text>红包金额</Text>
            <Text>100元</Text>
            </View>
            <View style={base.item}>
            <Text>期满全利率</Text>
            <Text>5.50%</Text>
            </View>
            <View style={base.item}>
            <Text>参照单位</Text>
            <Text>5.50倍</Text>
            </View>
            <View style={base.item}>
            <Text>达标金额</Text>
            <Text>1000元</Text>
            </View>
            <View style={base.item}>
            <Text>赠送礼品</Text>
            <Text>1000元</Text>
            </View>
            <View style={base.item}>
            <Text>业务考核</Text>
            <Text>10%</Text>
            </View>
            <View style={base.item}>
            <Text>团队考核</Text>
            <Text>10%</Text>
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