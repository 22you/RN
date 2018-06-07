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
import {Button,Overlay,Label,Checkbox} from 'teaset'
import Icon from 'react-native-vector-icons/FontAwesome';
import config from '../../common/config';
import axios from 'axios';
import TeamManageTree from '../../components/teamManageTree';
import Tree from '../../components/treeItem';
import Toast from 'teaset/components/Toast/Toast';
  export default class Other extends Component {
    static navigationOptions = ({navigation})=>({
      headerRight: (
        <View style={{height: 44,width: 55,justifyContent: 'center',paddingRight:15} }/>
    ),
    });
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
          plManageMoneyPlanBuyinfo:null,
          plManageMoneyPlan:this.props.navigation.state.params.plManageMoneyPlan,
          plManageMoneyPlanOtherInfo:this.props.navigation.state.params.plManageMoneyPlanOtherInfo,
          customerPrecidentName:'',
          customerPrecidentId:'',
          teamManagers:[],
          teamManagerName:'',
          teamManagerId:'',
          belongsDepName:'',
          belongsDepId:'',
          orderManagerName:'',
          orderManagerId:'',
          belongsTeamName:'',
          belongsTeamId:'',
          orderId:'',
          taskId:this.props.navigation.state.params.taskId,
          projectId:this.props.navigation.state.params.projectId,
          organization:[],
          orgTeams:[],
        };
    }
    //保存其他信息
    saveOthers=()=>{
      let otherUrl=config.api.others+'plManageMoneyPlanOtherInfo.customerPrecidentName='+global.user.userData.fullname+"&plManageMoneyPlanOtherInfo.customerPrecidentId="
                  +global.user.userData.userIds+'&plManageMoneyPlanOtherInfo.teamManagerName='+this.state.teamManagerName+'&plManageMoneyPlanOtherInfo.teamManagerId='
                  +this.state.teamManagerId+'&plManageMoneyPlanOtherInfo.belongsDepName='+this.state.belongsDepName+'&plManageMoneyPlanOtherInfo.belongsDepId='
                  +this.state.belongsDepId+'&plManageMoneyPlanOtherInfo.orderManagerName='+this.state.orderManagerName+'&plManageMoneyPlanOtherInfo.orderManagerId='
                  +this.state.orderManagerId+'&plManageMoneyPlanOtherInfo.belongsTeamName='+this.state.belongsTeamName+'&plManageMoneyPlanOtherInfo.belongsTeamId='
                  +this.state.belongsTeamId+'&orderId='+this.state.orderId+'&plManageMoneyPlanOtherInfo.id='+this.state.plManageMoneyPlanOtherInfo.id;
    axios.post(otherUrl)
    .then((res)=>{
      if(res.data.success){
        Toast.success("保存成功！")
      }
    
    })
    
    }
    //
    componentDidMount(){
      let {orderId}=this.props.navigation.state.params.plManageMoneyPlanBuyinfo;
      let {teamManagerName,belongsDepName,orderManagerName,belongsTeamName}=this.state.plManageMoneyPlanOtherInfo;
      this.setState({
        plManageMoneyPlanBuyinfo:this.props.navigation.state.params.plManageMoneyPlanBuyinfo,
        orderId:orderId,
        teamManagerName:teamManagerName,
        belongsDepName:belongsDepName,
        orderManagerName:orderManagerName,
        belongsTeamName:belongsTeamName
      })
    }
    

      render(){
      let {teamManagers,teamManagerName,teamManagerId,belongsDepName,orderManagerName,belongsTeamName,belongsTeamId,organization,orgTeams}=this.state;
     // console.log('orderid',this.props.navigation.state.params.plManageMoneyPlanBuyinfo.orderId);
      
      let overlayView = (
        <Overlay.PullView side='bottom' modal={false} ref={v => this.overlayPullView = v}>
          <TeamManageTree 
           selectTeamManager={(teamManagers)=>{
             let teamManagerNameArr=[],teamManagerIdArr=[];
             teamManagers.map((item,index)=>{
              // console.log(item.text);
              teamManagerNameArr.push(item.text)
              teamManagerIdArr.push(item.value)
             })
             this.setState({
              teamManagerName:teamManagerNameArr.join(','),
              teamManagerId:teamManagerIdArr.join(',')
              // customerPrecidentId:item.value
             })
             this.overlayPullView.close();
            }
             }/>
        </Overlay.PullView>
      );
      let overlayDepart=(
        <Overlay.PullView side='bottom' modal={false} ref={v => this.overlayDepart = v}>
          <Tree treePass={(departmentName,departmentId)=>{
            this.setState({belongsDepName:departmentName,belongsDepId:departmentId}), 
            this.overlayDepart.close();
          }}/>
        </Overlay.PullView>
      );
      let overlayOrderManager=(
        <Overlay.PullView side='bottom' modal={false} ref={v => this.overlayPullView = v}>
          <TeamManageTree  selectTeamManager={(teamManagers)=>{
            let orderManagerNameArr=[],orderManagerIdArr=[];
             teamManagers.map((item,index)=>{
              // console.log(item.text);
              orderManagerNameArr.push(item.text)
              orderManagerIdArr.push(item.value)
             })
             this.setState({
              orderManagerName:orderManagerNameArr.join(','),
              orderManagerId:orderManagerIdArr.join(',')
              // customerPrecidentId:item.value
             })
             this.overlayPullView.close();
          }}/>
        </Overlay.PullView>
      );
      let overlayTeam=(
        <Overlay.PullView side='bottom' modal={false} ref={v => this.overlayTeam = v}>
            <Tree treePass={(departmentName,departmentId)=>{
            this.setState({belongsTeamName:departmentName,belongsTeamId:departmentId}), 
            this.overlayTeam.close();
          }}/>
         </Overlay.PullView>
      )
      return(
          <View style={{ backgroundColor:'#fff',}}>
            <ScrollView style={{marginBottom:20}}>
            <KeyboardAwareScrollView>
            <DefaultInput value={global.user.userData.fullname} name={'客户经理'} style={base.item} disabled />
      
            <TouchableOpacity style={base.item} onPress={()=>Overlay.show(overlayView)}>
              <Text> <Text style={{color: '#FF1737'}}>*</Text>团队经理</Text>
              <Text>{teamManagerName} ></Text>
            </TouchableOpacity>
            {/* 所属部门就直接的是一级组织架构 */}
            <TouchableOpacity style={base.item} onPress={()=>Overlay.show(overlayDepart)}>
              <Text>所属部门</Text>
              <Text>{belongsDepName} ></Text>
            </TouchableOpacity>
            {/* 挂单经理 可多选 */}
            <TouchableOpacity style={base.item} onPress={()=>Overlay.show(overlayOrderManager)}>
              <Text>挂单经理</Text>
              <Text>{orderManagerName} ></Text>
            </TouchableOpacity>

            {/* 所属团队就直接的是一级组织架构 */}
             <TouchableOpacity style={base.item} onPress={()=>Overlay.show(overlayTeam)}>
              <Text>所属团队</Text>
              <Text>{belongsTeamName} ></Text>
            </TouchableOpacity>
            
            <View>
            <TouchableOpacity style={[base.btnbox,{marginTop:15,marginHorizontal:'12%'}]}>
              <Button title="保存" color="#ddd" style={{width:100}} type="primary" accessibilityLabel="下一步" onPress={()=>this.saveOthers()}/>
              <Button title="下一步"   style={{width:100}}  
              onPress={()=>this.props.navigation.navigate('Buyinfo',{
                                          plManageMoneyPlanBuyinfo:this.state.plManageMoneyPlanBuyinfo,
                                          plManageMoneyPlan:this.state.plManageMoneyPlan,
                                          taskId:this.state.taskId,
                                          projectId:this.props.navigation.state.params.projectId
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