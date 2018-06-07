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
    Button,
    Alert
  } from 'react-native';

  export default class Probase extends Component {
    // static navigationOptions = {
    //     headerStyle: {
    //       backgroundColor: '#34a1ff',
    //     },
    //     headerTintColor: '#fff',
    //     headerTitleStyle: {
    //         fontSize: 16,
    //       },
    //   };
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
            <KeyboardAwareScrollView>
            <DefaultInput placeholder={'请输入...'} name={'产品级别'} style={base.item}
					              onChangeText={(text) => {
                          this.setState({
                              proLevel: text
                          })
                      }} />
            <DefaultInput placeholder={'请输入...'} name={'产品名称'} style={base.item}
					              onChangeText={(text) => {
                          this.setState({
                              proName: text
                          })
                      }} />
            <DefaultInput placeholder={'请输入...'} name={'产品编号'} style={base.item}
					              onChangeText={(text) => {
                          this.setState({
                              proNumber: text
                          })
                      }} />
          <DefaultInput placeholder={'请输入...'} name={'产品策略'} style={base.item}
					              onChangeText={(text) => {
                          this.setState({
                              proStrategy: text
                          })
                      }} />
           <DefaultInput placeholder={'请输入...'} name={'计息周期'} style={base.item}
					              onChangeText={(text) => {
                          this.setState({
                              bearCycle: text
                          })
                      }} />
          <DefaultInput placeholder={'请输入...'} name={'投资期限'} style={base.item}
					              onChangeText={(text) => {
                          this.setState({
                              investcycle: text
                          })
                      }} />
           <DefaultInput placeholder={'请输入...'} name={'超息条件'} style={base.item}
					              onChangeText={(text) => {
                          this.setState({
                            beyondFactor: text
                          })
                      }} />
           <DefaultInput placeholder={'请输入...'} name={'基础年化率'} style={base.item}
					              onChangeText={(text) => {
                          this.setState({
                              basicAPR: text
                          })
                      }} />
        <DefaultInput placeholder={'请输入...'} name={'付息类型'} style={base.item}
					              onChangeText={(text) => {
                          this.setState({
                              payInterestType: text
                          })
                      }} />
          <DefaultSelect  placeholder={'请选择付息方式'} name={'付息方式'} value={this.state.maritalStatusValue} style={base.item}
					               items={['支付宝','微信']} onSelected={this.onSelectedmaritalStatus}/>

           <DefaultInput placeholder={'请输入...'} name={'礼品年化率'} style={base.item}
					              onChangeText={(text) => {
                          this.setState({
                            giftAPR: text
                          })
                      }} />
          <DefaultInput placeholder={'请输入...'} name={'递增全额'} style={base.item}
					              onChangeText={(text) => {
                          this.setState({
                            increase: text
                          })
                      }} />
            <DefaultInput placeholder={'请输入...'} name={'梯级限制'} style={base.item}
					              onChangeText={(text) => {
                          this.setState({
                              stepLimit: text
                          })
                      }} />
           <DefaultInput placeholder={'请输入...'} name={'投资起点全额'} style={base.item}
					              onChangeText={(text) => {
                          this.setState({
                              investStart: text
                          })
                      }} />
           <DefaultInput placeholder={'请输入...'} name={'投资上限'} style={base.item}
					              onChangeText={(text) => {
                          this.setState({
                              investUpper: text
                          })
                      }} />
          
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
            <DefaultInput placeholder={'请输入...'} name={'业务员提成'} style={base.item}
					              onChangeText={(text) => {
                          this.setState({
                              userName: text
                          })
                      }} />
           <DefaultSelect  placeholder={'请选择是否活动'} name={'是否活动'} value={this.state.maritalStatusValue} style={base.item}
					               items={['是','否']} onSelected={this.onSelectedmaritalStatus}/>

          <DefaultInput placeholder={'请输入...'} name={'红包金额'} style={base.item}
					              onChangeText={(text) => {
                          this.setState({
                              packet: text
                          })
                      }} />
           <DefaultInput placeholder={'请输入...'} name={'期满全利率'} style={base.item}
					              onChangeText={(text) => {
                          this.setState({
                            wholeLv: text
                          })
                      }} />
           <DefaultInput placeholder={'请输入...'} name={'参照单位'} style={base.item}
					              onChangeText={(text) => {
                          this.setState({
                              referTo: text
                          })
                      }} />
           <DefaultInput placeholder={'请输入...'} name={'达标金额'} style={base.item}
					              onChangeText={(text) => {
                          this.setState({
                              targetAmount: text
                          })
                      }} />
         <DefaultInput placeholder={'请输入...'} name={'赠送礼品'} style={base.item}
					              onChangeText={(text) => {
                          this.setState({
                              gift: text
                          })
                      }} />
          <DefaultInput placeholder={'请输入...'} name={'业务考核'} style={base.item}
					              onChangeText={(text) => {
                          this.setState({
                              workCheck: text
                          })
                      }} />
          <DefaultInput placeholder={'请输入...'} name={'团队考核'} style={base.item}
					              onChangeText={(text) => {
                          this.setState({
                              teamCheck: text
                          })
                      }} />
          
            <TouchableOpacity style={{marginTop:15,marginHorizontal:'5%'}}>
              <Button title="下一步"
            accessibilityLabel="下一步" onPress={()=>this.props.navigation.navigate('Applybase')} />
           
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
    borderBottomColor:'#ddd'

  }
  })