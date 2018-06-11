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
import {Button,Select,Input,Toast} from 'teaset'
import Icon from 'react-native-vector-icons/FontAwesome';
import config from '../../common/config';
import axios from 'axios';
import DatePicker from 'react-native-datepicker'
export default class Chaohe extends Component {
    static navigationOptions =({navigation})=>({
        headerRight: (
            <TouchableOpacity onPress={()=>navigation.state.params.navigatePress()}>  
                <Icon style={{marginRight:20}} name="plus-circle" size={15} color="#fff" />
            </TouchableOpacity>
      ),
      });
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
         items:[],
         giftnames:[],
         plManageMoneyPlan:this.props.navigation.state.params.plManageMoneyPlan,
         projectId:this.props.navigation.state.params.projectId,
         giftType:this.props.navigation.state.params.giftType,
         taskId:this.props.navigation.state.params.taskId,
         oldDetailId:'',
         orderManagerNameArr:''
        };
    }
    componentDidMount(){
        this.props.navigation.setParams({navigatePress:this.addChaohe})

        //查询当前已有的列表数据
       let chaoheUrl=config.api.chaoheList+'projectId='+this.state.projectId;
       console.log('chaoheUrl',chaoheUrl);
       
       axios.get(chaoheUrl)
       .then((res)=>{
           if(res.data.totalCounts){
            let chaoheLists=[];
            res.data.result.map((item,index)=>{
              let chaoheList={
                "detailId":item.detailId,
                "name":item.name,
                "price":item.price,
                "deductionMoney":item.deductionMoney,
                "conment":item.conment,
                "sendTime":item.sendTime,
                "payment":item.payment,
                "number":item.number,
                "priceDifferences":item.priceDifferences,
                "oldDetailId":item.oldDetailId,
                "buyId":item.buyId 
              };
              chaoheLists.push(chaoheList)
            })  
            this.setState({
                items: chaoheLists
               })
           }else{
            this.state.items.push( {"detailId":'',"name":"","price":'',"deductionMoney":null,"conment":"","sendTime":"2018-05-28","payment":"","number":0,"priceDifferences":0,"oldDetailId":this.state.oldDetailId,"buyId":this.state.projectId})
            
           }
          
       
       })

        
        //获取朝禾优品礼品名称
        let gitUrl=config.api.gift+'start=0&limit=null';
        axios.get(gitUrl)
        .then((res)=>{
            if(res.data.success){
            let giftnames=[];
            res.data.result.map((item,index)=>{
            let giftname={name:item.name,price:item.price,oldDetailId:item.detailId};
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
    
    addChaohe=()=>{
        if(this.state.giftType==1056){
            let item = this.state.items;
            let shuj = {"detailId":'',"name":"","price":'',"deductionMoney":null,"conment":"","sendTime":"2018-05-28","payment":"","number":0,"priceDifferences":0,"oldDetailId":this.state.oldDetailId,"buyId":this.state.projectId};
            item.push(shuj);
            this.setState({
                items:item
            })
        }else{
            Toast.info('您选择的是代金券，不能添加朝禾优品哦！')
        }
        
    };
    saveChaohe=()=>{
        let savelist = JSON.stringify(this.state.items);
        let saveListData=savelist.replace(/},/g,"}@");
        let listdatas=saveListData.slice(1,saveListData.length-1);
        let saveChaoheUrl=config.api.saveChaohe+'activityStore='+listdatas+'&orderId='+this.state.projectId;
        
         axios.post(saveChaoheUrl)
         .then((res)=>{
                   
        Toast.info('保存成功！')

         })
         
    }
    //删除朝禾优品
    deleteChaohe=(e,i)=>{
        Alert.alert('温馨提醒', '确定要删除吗?', [
            {text: '取消'},
            {
                text: '确定', onPress: () =>{
                let deleteChaoheUrl = config.api.deleteChaohe+'detailId='+e.detailId;
                axios.post(deleteChaoheUrl)
                .then((res)=>{
                   this.state.items.splice(i,1)
                    this.setState({
                        items:this.state.items
                    })
                    

                })
                
                }
                
            }
        ])
    }
      render(){
      let {giftnames,items,plManageMoneyPlan,deductionMoney}=this.state;
          
      return(
            <ScrollView style={{marginBottom:10}}>
            {
                items.length > 0 && items.map((itemList,index)=>{
                    return(
                        <TouchableOpacity style={base.list} onLongPress={()=>{this.deleteChaohe(itemList,index)}}>
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
                                        itemList.name = item.name;
                                        itemList.price = item.price;
                                        itemList.oldDetailId=item.oldDetailId
                                        this.setValue(itemList,index);
                                       
                                       
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
                                <View style={[base.row,{height:35}]}>
                                    <Text>单笔差价：</Text>
                                    <Input value={itemList.priceDifferences+""} style={{borderWidth:0,borderBottomWidth:1}} placeholder={'请输入'} 
                                    onChangeText={text => {
                                        itemList.priceDifferences=parseInt(text);
                                        this.setValue(itemList,index)
                                    }

                                    }/>
                                    <Text>元</Text>
                                </View>
                                <View style={base.row}>
                                    <Text>数量：</Text>
                                    <Input value={`${itemList.number}`} style={{borderWidth:0,borderBottomWidth:1}} placeholder={'请输入'} 
                                    onChangeText={text => {
                                        itemList.number=parseInt(text);
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
                            confirmBtnText="确认"
                            showIcon={true}
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
                        </TouchableOpacity>
                    )
                })
            }
            
            
            
            <View>
            <TouchableOpacity style={[base.btnbox,{marginTop:15,marginHorizontal:'5%'}]}>
            {
                this.state.giftType==1056?
                <Button title="保存" style={{width:100}} color="#ddd" type="primary" accessibilityLabel="下一步" onPress={()=>{
                    this.saveChaohe();
  
                  }}/>
                  :<Text/>
            }
              
              <Button title="下一步" style={{width:100,marginLeft:'3%'}} onPress={()=>this.props.navigation.navigate('Upload',{
                taskId:this.state.taskId
            })} />
           
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
    justifyContent:'center',

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