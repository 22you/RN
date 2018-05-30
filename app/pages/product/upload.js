import React, { Component } from 'react';
import {Button} from 'teaset';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
  } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
  export default class Upload extends Component {
    static navigationOptions = {
        headerRight: (
          <View style={{}}> <Icon style={{marginRight:20}} name="plus-circle" size={15} color="#fff" /></View>
   
        )
      };
    constructor(props) {

        super(props);
        // 初始状态
        this.state={
          taskId:this.props.navigation.state.params.taskId
        }
         
    }
   
      render(){
        console.log("props",this.props);
        
      return(
          <View>
            <TouchableOpacity style={add.item}>
            <Text>互融云</Text>
           <Icon name="trash" size={15}/>
           </TouchableOpacity>

            <TouchableOpacity style={add.item}>
            <Text>朝阳区</Text>
            <Icon name="trash" size={15} />
            </TouchableOpacity>

            <TouchableOpacity style={add.item}>
            <Text>铁建广场</Text>
            <Icon name="trash" size={15}/>
            </TouchableOpacity>

            <View style={{marginTop:15,marginHorizontal:'3%'}}>
            <Button title="下一步"
          accessibilityLabel="下一步" type="primary"
            onPress={()=>this.props.navigation.navigate('Suggest',{taskId:this.state.taskId})}/>
            </View>
          </View>
      )
      }
  }
  const add=StyleSheet.create({
  item:{
    marginTop:10,
    backgroundColor:'#fff',
    paddingHorizontal:'3%',
    paddingVertical:15,
    flexDirection:'row',
    justifyContent:'space-between',

  }
  })