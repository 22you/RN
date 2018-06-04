import React,{Component} from 'react';
import {View,Text,ScrollView,ALert,TouchableOpacity} from 'react-native';
import {Checkbox,Toast,Button,Overlay} from 'teaset';
import Icon from 'react-native-vector-icons/FontAwesome';
import config from '../common/config';
import axios from 'axios';
export default class TeamManageTree extends Component {
  constructor(args) {
    super(args);
    this.state = {
      show: '',
      departmentName:'',
      departmentId:'',
      organization:[],
      orgTeams:[],
      teamManagers:[],
    };
  }
  componentDidMount(){
    let treeUrl=config.api.department+'type=undefined&branchCompanyId=undefined';
    //console.log(treeUrl);
    
    axios.get(treeUrl)
    .then((res)=>{
    this.setState({
        organization:res.data
    })
    
    }
  )
   
  }
  menu=(arr)=>{
    
    return arr.map((item,index)=>{
       if(item.children) { 
       return ( 
           <View style={{paddingLeft:10,marginTop:5}} >
         
               <View style={{flexDirection:'row'}}>
                   <Icon name="chevron-circle-down" size={15} style={{marginRight:5,color:'#666'}} 
                   onPress={()=>{
                     console.log();
                   }}/>
                   {/* 这里点击查询二级菜单选项 */}
                   <TouchableOpacity  onPress={()=>{
                       this.setState({departmentName:item.text,departmentId:item.id})
                       this.secondSelect(item.id)
                       }}>
                     <Text style={{color:this.state.departmentId==item.id?'red':'#555'}} >{item.text}</Text>
                  </TouchableOpacity>
               </View>
               {this.menu(item.children)}
           </View>
           )
         
       }else{
           return (
           <View style={{paddingLeft:20,marginTop:5}}>
            <TouchableOpacity onPress={()=>{this.setState({departmentName:item.text,departmentId:item.id})}}><Text style={{color:this.state.departmentId==item.id?'red':'#555'}}>{item.text}</Text></TouchableOpacity>
           </View>
       )
       }
     })
 }
   //二级查询菜单
   secondSelect=(orgId)=>{
    
    let secondSelectUrl=config.api.orgTeam+'start=0&limit=null&type=undefined&orgId='+orgId;
    axios.get(secondSelectUrl)
    .then((res)=>{
      if(res.data.success){
        this.setState({
         orgTeams:res.data.result 
        })
      }
     
    })
    

  };


  render() {
    let {teamManagers,belongsDepName,orderManagerName,belongsTeamName,organization,orgTeams}=this.state;
  //console.log('teamManagers',teamManagers);
  
    return (
        <View>
        <View style={{flexDirection:'row',justifyContent:'space-between',paddingVertical:10,paddingHorizontal:10,borderBottomColor:"#ddd",borderBottomWidth:1}}>
            <Text>请选择：</Text>
            <Text onPress={()=>{this.props.selectTeamManager(teamManagers)}}>确认</Text>
        </View>
        <View style={{flexDirection:'row', backgroundColor: '#fff', minWidth: 300,maxHeight:280,  justifyContent: 'center'}}>
        
        <ScrollView horizontal={true} style={{width:'58%'}}>
          <ScrollView
           style={{flex:1,paddingHorizontal:15}}>
            {/* <Text style={{marginVertical:10}}>按组织架构查找:</Text> */}
            <View style={{marginBottom:20}}>
            {this.menu(organization)}
            </View>
          </ScrollView>
        </ScrollView>
        <View style={{width:'42%',paddingHorizontal:15,paddingVertical:10,borderLeftColor:'#efefef',borderLeftWidth:8}}>
         { orgTeams.length
         ? 
         orgTeams.map((item,index)=>{
            // console.log(item);
             
         return <Checkbox title={item.fullname} 
                  onChange={(e)=>{
                    let ManagerName={
                        text:item.fullname,
                        value:item.userId
                     };
                      if(e){
                        teamManagers.push(ManagerName);
                      }else{
                        teamManagers.map((option,i)=>{
                           // console.log(option.value,item.userId);
                            
                            if(option.value==item.userId){
                                teamManagers.splice(index,1)
                            }
                        })
                       
                      }
                      
                    }}/> 
         })
        
          : 
          <Text>暂无可用的数据！</Text>
          }
         
        </View>
        </View>
      </View>
    );
  }
}
