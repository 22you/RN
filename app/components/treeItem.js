import React,{Component} from 'react';
import {View,Text,ScrollView,ALert,TouchableOpacity} from 'react-native';
import {Checkbox,Toast,Button} from 'teaset';
import Icon from 'react-native-vector-icons/FontAwesome';
export default class Tree extends Component {
  constructor(args) {
    super(args);
    this.state = {
        arr:[{"i":"1","text":"广东朝禾实业集团有限公司","orgType":"0","orgDem":"1","expanded":true,"children":[{"id":"3","text":"总经办","orgType":"2","orgDem":"1","expanded":true,"children":[{"id":"110","text":"综合管理中心","orgType":"2","orgDem":"1","teamNumber":"null","iconCls":"dept","expanded":true,"children":[{"id":"111","text":"财务部","orgType":"2","orgDem":"1","teamNumber":"null","iconCls":"dept","leaf":true,"expanded":true},{"id":"112","text":"人力资源部","orgType":"2","orgDem":"1","teamNumber":"null","iconCls":"dept","leaf":true,"expanded":true},{"id":"113","text":"客服部","orgType":"2","orgDem":"1","teamNumber":"null","iconCls":"dept","leaf":true,"expanded":true},{"id":"114","text":"综合服务部","orgType":"2","orgDem":"1","teamNumber":"null","iconCls":"dept","leaf":true,"expanded":true}]},{"id":"116","text":"投资渠道中心","orgType":"2","orgDem":"1","teamNumber":"null","iconCls":"dept","expanded":true,"children":[{"id":"137","text":"部门区域","orgType":"3","orgDem":"1","teamNumber":"null","iconCls":"addIcon","expanded":true,"children":[{"id":"138","text":"公司主管团队-12组","orgType":"2","orgDem":"1","teamNumber":"12","iconCls":"dept","leaf":true,"expanded":true}]},{"id":"139","text":"塘厦区域","orgType":"3","orgDem":"1","teamNumber":"null","iconCls":"addIcon","expanded":true,"children":[{"id":"140","text":"曹斌团队-06组","orgType":"2","orgDem":"1","teamNumber":"06","iconCls":"dept","leaf":true,"expanded":true}]},{"id":"117","text":"总部区域","orgType":"2","orgDem":"1","teamNumber":"22","iconCls":"dept","expanded":true,"children":[{"id":"120","text":"公司主管团队-12组","orgType":"2","orgDem":"1","teamNumber":"3","iconCls":"dept","leaf":true,"expanded":true},{"id":"121","text":"杨小平团队-03组","orgType":"2","orgDem":"1","teamNumber":"4","iconCls":"dept","leaf":true,"expanded":true},{"id":"122","text":"郑岚团队-05组","orgType":"2","orgDem":"1","teamNumber":"null","iconCls":"dept","leaf":true,"expanded":true},{"id":"123","text":"丁世冲团队-07组","orgType":"2","orgDem":"1","teamNumber":"null","iconCls":"dept","expanded":true,"children":[{"id":"124","text":"邓华栋团队","orgType":"2","orgDem":"1","teamNumber":"null","iconCls":"dept","leaf":true,"expanded":true},{"id":"125","text":"任振强团队","orgType":"2","orgDem":"1","teamNumber":"null","iconCls":"dept","leaf":true,"expanded":true},{"id":"126","text":"招少梅团队","orgType":"2","orgDem":"1","teamNumber":"null","iconCls":"dept","leaf":true,"expanded":true},{"id":"127","text":"丁世冲直管团队","orgType":"2","orgDem":"1","teamNumber":"null","iconCls":"dept","leaf":true,"expanded":true}]}]},{"id":"119","text":"塘厦区域","orgType":"2","orgDem":"1","teamNumber":"null","iconCls":"dept","expanded":true,"children":[{"id":"128","text":"曹斌团队-06组","orgType":"2","orgDem":"1","teamNumber":"null","iconCls":"dept","leaf":true,"expanded":true},{"id":"129","text":"张健团队-08组","orgType":"2","orgDem":"1","teamNumber":"null","iconCls":"dept","leaf":true,"expanded":true},{"id":"130","text":"郭祥兵团队","orgType":"2","orgDem":"1","teamNumber":"null","iconCls":"dept","expanded":true,"children":[{"id":"131","text":"郭祥兵直管团队-09组","orgType":"2","orgDem":"1","teamNumber":"null","iconCls":"dept","leaf":true,"expanded":true},{"id":"132","text":"段勇翔团队-10组","orgType":"2","orgDem":"1","teamNumber":"null","iconCls":"dept","leaf":true,"expanded":true}]}]}]}]}]}],
      show: '',
      departmentName:'广东朝禾实业集团有限公司',
      departmentId:''
    };
  }



 menu=(arr)=>{
    
     return arr.map((item,index)=>{
        if(item.children) { 
        return ( 
            <View style={{paddingLeft:10,marginTop:5}}>
          
                <View style={{flexDirection:'row'}}>
                    <Icon name="chevron-circle-down" size={15} style={{marginRight:5,color:'#666'}} 
                    onPress={()=>{
                      console.log();
                    }}/>
                    <TouchableOpacity  onPress={()=>{this.setState({departmentName:item.text,departmentid:item.id})}}><Text style={{color:this.state.departmentid==item.id?'red':'#555'}} >{item.text}</Text></TouchableOpacity>
                </View>
                {this.menu(item.children)}
            </View>
            )
          
        }else{
            return (
            <View style={{paddingLeft:20,marginTop:5}}>
             <TouchableOpacity onPress={()=>{this.setState({departmentName:item.text,departmentid:item.id})}}><Text style={{color:this.state.departmentid==item.id?'red':'#555'}}>{item.text}</Text></TouchableOpacity>
            </View>
        )
        }
      })
  }
  render() {
    let {arr}=this.state;
    return (
      <ScrollView style={{paddingHorizontal:10,paddingVertical:20}}>
         {this.menu(arr)}
         <Button style={{marginVertical:20}} title='确认' type='primary' 
            onPress={() =>{ 
              Toast.info('您选择的是：'+this.state.departmentName);
              this.props.navigation.navigate('Userbase',{departmentName:this.state.departmentName,departmentid:this.state.departmentid})
            }} 
         />
      </ScrollView>
    );
  }
}

