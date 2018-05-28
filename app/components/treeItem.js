import React,{Component} from 'react';
import {View,Text,ScrollView,ALert,TouchableOpacity} from 'react-native';
import {Checkbox,Toast,Button} from 'teaset';
import Icon from 'react-native-vector-icons/FontAwesome';
import TreeNodes from './treeData'
import config from '../common/config';
import axios from 'axios';
export default class Tree extends Component {
  constructor(args) {
    super(args);
    this.state = {
      arr:[],
      show: '',
      departmentName:'',
      departmentId:'',
      expanded:false
    };
  }
  componentDidMount(){
    let treeUrl=config.api.department+'type=undefined&branchCompanyId=undefined';
    //console.log(treeUrl);
    
    axios.get(treeUrl)
    .then((res)=>{
    this.setState({
      arr:res.data
    })
    //console.log(Array.isArray(this.state.arr));
    console.log(res.data);
    
    
    }
  )
   
  }

  render() {
    let {arr,departmentName,departmentId}=this.state;
    
    return (
      <ScrollView style={{paddingHorizontal:10,paddingVertical:20,backgroundColor:'#fff'}}>
         <TreeNodes node={arr}/>
         <Button style={{marginVertical:20}} title='确认' type='primary' 
             onPress={()=>{this.props.treePass(departmentName,departmentId)}}
         />
      </ScrollView>
    );
  }
}

