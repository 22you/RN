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
  import {Button} from 'teaset'
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
      render(){
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
            <TouchableOpacity style={{marginTop:15,marginHorizontal:'5%'}}>
              <Button title="购买"
            accessibilityLabel="购买" type="primary" onPress={()=>this.props.navigation.navigate('Apply')} />
           
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

  }
  })