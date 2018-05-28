import React,{Component} from 'react';
import {View,Text,TouchableOpacity} from 'react-native';
import {Checkbox,Toast,Button} from 'teaset';
import Icon from 'react-native-vector-icons/FontAwesome';
export default class TreeComponent extends Component{
constructor(props){
 super(props);
 this.state={
     visible:true,
 }
  } 
  toggle=()=>{
    this.setState({visible:!visible});
  } 
  render(){
      var childNodes;
       let nodes=this.props.node;
      if(nodes){
          childNodes=nodes.map((item,index)=>{
            return  (  <View style={{paddingLeft:10,marginTop:5}} >
          
                        <TouchableOpacity ><Text style={{color:this.state.departmentId==item.id?'red':'#555'}} >{item.text}</Text></TouchableOpacity> 
                        <TreeComponent node={item}/>
                        
                    </View>)
          })
      }
      return(
          <View>
           {childNodes}
          </View>
      )
  }
}