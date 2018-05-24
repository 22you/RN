import React,{Component} from 'react';
import {View,Text,ScrollView,ALert,TouchableOpacity} from 'react-native';
import {Checkbox,Toast,Button} from 'teaset';
import Icon from 'react-native-vector-icons/FontAwesome';
import config from '../common/config';
import axios from 'axios';
export default class Tree extends Component {
  constructor(args) {
    super(args);
    this.state = {
      arr:[],
      show: '',
      departmentName:'',
      departmentId:''
    };
  }
  componentDidMount(){
    let treeUrl=config.api.department+'type=undefined&branchCompanyId=undefined';
    
    axios.get(treeUrl)
    .then((res)=>{
    this.setState({
      arr:res.data
    })
    //console.log(Array.isArray(this.state.arr));
    
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
                    <TouchableOpacity  onPress={()=>{this.setState({departmentName:item.text,departmentId:item.id})}}><Text style={{color:this.state.departmentId==item.id?'red':'#555'}} >{item.text}</Text></TouchableOpacity>
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
  render() {
    let {arr,departmentName,departmentId}=this.state;
    //console.log(arr);
    
    return (
      <ScrollView style={{paddingHorizontal:10,paddingVertical:20,backgroundColor:'#fff'}}>
         {this.menu(arr)}
         <Button style={{marginVertical:20}} title='确认' type='primary' 
             onPress={()=>{this.props.treePass(departmentName,departmentId)}}
         />
      </ScrollView>
    );
  }
}

