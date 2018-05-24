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
import config from '../../common/config';
import axios from 'axios'
  export default class Other extends Component {
    static navigationOptions = {
      headerRight: (
        <View style={{height: 44,width: 55,justifyContent: 'center',paddingRight:15} }/>
    ),
    };
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
          plManageMoneyPlanBuyinfo:null,
          customerPrecidentName:'',
          customerPrecidentId:'',
          teamManagerName:'',
          teamManagerId:'',
          belongsDepName:'',
          belongsDepId:'',
          orderManagerName:'',
          orderManagerId:'',
          belongsTeamName:'',
          belongsTeamId:'',
          orderId:''
        };
    }
    //保存其他信息
    saveOthers=()=>{
      let otherUrl=config.api.others+'plManageMoneyPlanOtherInfo.customerPrecidentName='+global.user.userData.fullname+"&plManageMoneyPlanOtherInfo.customerPrecidentId="
                  +global.user.userData.userIds+'&plManageMoneyPlanOtherInfo.teamManagerName='+this.state.teamManagerName+'&plManageMoneyPlanOtherInfo.teamManagerId='
                  +this.state.teamManagerId+'&plManageMoneyPlanOtherInfo.belongsDepName='+this.state.belongsDepName+'&plManageMoneyPlanOtherInfo.belongsDepId='
                  +this.state.belongsDepId+'&plManageMoneyPlanOtherInfo.orderManagerName='+this.state.orderManagerName+'&plManageMoneyPlanOtherInfo.orderManagerId='
                  +this.state.orderManagerId+'&plManageMoneyPlanOtherInfo.belongsTeamName='+this.state.belongsTeamNam+'&plManageMoneyPlanOtherInfo.belongsTeamId='
                  +this.state.belongsTeamId+'&orderId='+this.state.orderId;
    console.log(otherUrl);
    axios.post(otherUrl)
    .then((res)=>{
    console.log(res.data);
    
    })
    
    }
    //
    componentDidMount(){
     // console.log('others',this.props.navigation.state.params);
      let {orderId}=this.props.navigation.state.params.plManageMoneyPlanBuyinfo
      this.setState({
        plManageMoneyPlanBuyinfo:this.props.navigation.state.params.plManageMoneyPlanBuyinfo,
        orderId:orderId                       
      })
    }
      render(){
      let {teamManagerName,belongsDepName,orderManagerName,belongsTeamName}=this.state;
      
      return(
          <View style={{ backgroundColor:'#fff',}}>
            <ScrollView style={{marginBottom:20}}>
            <KeyboardAwareScrollView>
            <DefaultInput value={global.user.userData.fullname} name={'客户经理'} style={base.item} disabled />
      
             <DefaultInput placeholder={'请选择'} name={'团队经理'} style={base.item} value={teamManagerName}
					              onChangeText={()=>{

                        }} />
          
            <DefaultInput placeholder={'请选择'} name={'所属部门'} style={base.item} value={belongsDepName}
					              onChangeText={()=>{}} />
          
            <DefaultInput placeholder={'请选择'} name={'接单经理'} style={base.item} value={orderManagerName}
					              onChangeText={()=>{}} />
      
            <DefaultInput placeholder={'请选择'} name={'所属团队'} style={base.item} value={belongsTeamName}
					              onChangeText={()=>{}} />
           
            
            <View>
            <TouchableOpacity style={[base.btnbox,{marginTop:15,marginHorizontal:'12%'}]}>
              <Button title="保存" color="#ddd" style={{width:100}} type="primary" accessibilityLabel="下一步" onPress={()=>this.saveOthers()}/>
              <Button title="下一步"   style={{width:100}}  
              onPress={()=>this.props.navigation.navigate('Buyinfo',{
                                          plManageMoneyPlanBuyinfo:this.state.plManageMoneyPlanBuyinfo
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