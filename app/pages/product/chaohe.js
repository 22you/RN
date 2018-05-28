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
import {Button,Select,Input} from 'teaset'
import Icon from 'react-native-vector-icons/FontAwesome';
import config from '../../common/config';
import axios from 'axios';
import DatePicker from 'react-native-datepicker'
  export default class Chaohe extends Component {
    static navigationOptions =({navigation})=>({
        headerRight: (
            <TouchableOpacity onPress={()=>navigation.state.params.navigatePress()}>  <Icon style={{marginRight:20}} name="plus-circle" size={15} color="#fff" /></TouchableOpacity>
      ),
      });
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
         items:[
            {"detailId":1116,"name":"鸡蛋","price":3,"deductionMoney":null,"conment":"","sendTime":"2018-05-28","payment":"","number":0,"priceDifferences":0,"oldDetailId":1111,"buyId":"6445"},
            {"detailId":1117,"name":"鸡蛋","price":3,"deductionMoney":null,"conment":"","sendTime":"2018-05-28","payment":"","number":0,"priceDifferences":0,"oldDetailId":1111,"buyId":"6445"}
         ],
         giftnames:[],
         plManageMoneyPlan:this.props.navigation.state.params.plManageMoneyPlan,
        };
    }
    componentDidMount(){
        this.props.navigation.setParams({navigatePress:this.addChaohe})
        
        //获取朝禾优品礼品名称
        let gitUrl=config.api.gift+'start=0&limit=25';
        axios.get(gitUrl)
        .then((res)=>{
           // console.log("res",res)
            if(res.data.success){
                let giftnames=[];
            res.data.result.map((item,index)=>{
                let giftname={name:item.name,price:item.price};
                giftnames.push(giftname)
             })
             this.setState({
                giftnames:giftnames
             })
            }
     
        })

    }
    //
    // 更改之后改变数组
    setValue=(itemList,index)=>{
        let list = this.state.items.map((t,i) => {
            return i === index
                ? itemList
                : t;
        });
        this.setState({
            items: list
        })  
    }
    //
    addChaohe=()=>{
        let item = this.state.items;
        let shuj = {"detailId":'',"name":"","price":'',"deductionMoney":null,"conment":"","sendTime":"2018-05-28","payment":"","number":0,"priceDifferences":0,"oldDetailId":'',"buyId":''};
        item.push(shuj);
        this.setState({
            items:item
        })
    };
      render(){
          let {giftnames,items,plManageMoneyPlan,deductionMoney}=this.state;
         console.log(plManageMoneyPlan);
          
          
      return(
            <ScrollView style={{marginBottom:10}}>
            {
                items.map((itemList,index)=>{
                    return(
                        <View style={base.list}>
                            <View style={base.title}>
                            <View style={{flexDirection:'row',alignItems:'center'}}>
                                <Text>礼品名称：</Text>
                                <Select
                                    style={{width: 100}}
                                    value={itemList.name}
                                    items={giftnames}
                                    getItemValue={(item, index) => item.price}
                                    getItemText={(item, index) => item.name}
                                    placeholder='请选择'
                                    pickerTitle='礼品名称'
                                    onSelected={(item) => {
                                        //this.setState({name: item.name,price:item.price})
                                        itemList.name = item.name;
                                        itemList.price = item.price;
                                        this.setValue(itemList,index)
                                    }}
                                    />
                            </View>
                            <View style={base.row}>
                                <Text>单价</Text>
                                <Text style={{color:'red'}}>{itemList.price}</Text>
                                <Text>元</Text>
                            </View>
                            </View>
                            <View style={base.center}>
                            <View style={{width:'44%'}}>
                                <View style={[base.row,{lineHeight:35,height:35}]}>
                                    <Text>单笔差价：</Text>
                                    <Input value={itemList.priceDifferences+""} style={{borderWidth:0,borderBottomWidth:1}} placeholder={'请输入'} 
                                    onChangeText={text => {
                                        itemList.priceDifferences=text;
                                        this.setValue(itemList,index)
                                    }

                                    }/>
                                    <Text>元</Text>
                                </View>
                                <View style={base.row}>
                                    <Text>数量：</Text>
                                    <Input value={itemList.number} style={{borderWidth:0,borderBottomWidth:1}} placeholder={'请输入'} 
                                    onChangeText={text => {
                                        itemList.numbe=text;
                                        this.setValue(itemList,index)
                                    }
                                    }/>
                                </View>
                                </View>
                                <View>
                                    <View style={base.row}>
                                        <Text>差价支付方：</Text>
                                        <Select
                                        style={{width: 100}}
                                        value={itemList.payment}
                                        items={['投资账户','平台账户']}
                                        placeholder='请选择'
                                        pickerTitle='投资账户'
                                        onSelected={(item) => {
                                            itemList.payment=item
                                            this.setValue(itemList,index)
                                        }}
                                        />
                                    </View>
                                    <View style={[base.row,{marginTop:10}]}>
                                        <Text>达标金额</Text>
                                        <Text style={{marginHorizontal:10}}>{plManageMoneyPlan.deductionMoney}</Text>
                                        <Text>元</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={base.bottom}>
                            <Text>计划发放时间：</Text>
                            <DatePicker
                            date={itemList.sendTime}
                            mode="date"
                            placeholder="请选择日期"
                            format="YYYY-MM-DD"
                            minDate={new Date()}
                            maxDate={''}
                            confirmBtnText="确认"
                            showIcon='false'
                            cancelBtnText="取消"
                            style={{width:150}}
                            customStyles={{
                                dateIcon: {
                                    width:20,
                                    height:20
                                },
                                dateInput: {
                                    marginLeft: 36,
                                    borderWidth:0,
                                    
                                }
                            }}
                            onDateChange={(date) => {
                                itemList.sendTime=date;
                                setValue(itemList,index)
                                
                            }
                            }
                        />
                            </View>
                        </View>
                    )
                })
            }
            
            
            
            <View>
            <TouchableOpacity style={[base.btnbox,{marginTop:15,marginHorizontal:'5%'}]}>
              <Button title="保存" style={{width:100}} color="#ddd" type="primary" accessibilityLabel="下一步" onPress={()=>Alert.alert('保存成功')}/>
              <Button title="下一步"
            accessibilityLabel="下一步"  style={{width:100}} onPress={()=>this.props.navigation.navigate('Upload')} />
           
            </TouchableOpacity>
            </View>
            </ScrollView>
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

  },
  title:{
      borderBottomColor:'#ddd',
      borderBottomWidth:1,
      paddingVertical:10,
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center'
  },
  center:{
      borderBottomColor:'#ddd',
      borderBottomWidth:1,
      paddingVertical:10,
      flexDirection:'row',
      justifyContent:'space-between'
  },
  list:{
    paddingHorizontal:'3%',
    marginTop:10,
    backgroundColor:'#fff'
      
  },
  row:{
      flexDirection:'row',
      alignItems:'center'
  },
  bottom:{
      paddingTop:10,
      flexDirection:'row',
      alignItems:'center'
  }
  })