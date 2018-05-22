import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    ScrollView,
  } from 'react-native';
  import {Button} from 'teaset'
import matchsize from '../../components/matchsize';
import config from '../../common/config';
  export default class Adduser extends Component {
    static navigationOptions = {
      headerRight: (
        <View style={{height: 44,width: 55,justifyContent: 'center',paddingRight:15} }/>
    ),
    };
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
          projectId:this.props.navigation.state.params.projectId,
          taskId:this.props.navigation.state.params.taskId
        };
    }
    componentDidMount(){
      let {projectId,taskId}=this.state;
      let loadingUrl=config.api.loading+'projectId='+projectId+'&taskId='+taskId;//流程加载
      console.log(loadingUrl);
      
    }
      render(){
        console.log("props",this.props.navigation.state.params);
        
      return(
          <View>
            <ScrollView>
            <TouchableOpacity style={add.item} onPress={()=>this.props.navigation.navigate('Probase')}>
            <Text>产品基本信息</Text>
            <Text>></Text>
            </TouchableOpacity>
            <TouchableOpacity style={add.item} onPress={()=>this.props.navigation.navigate('Applybase')}>
            <Text>基本信息</Text>
            <Text>></Text>
            </TouchableOpacity>
            <TouchableOpacity style={add.item} onPress={()=>this.props.navigation.navigate('Investor')}>
            <Text>投资人账户</Text>
            <Text>></Text>
            </TouchableOpacity>
            <TouchableOpacity style={add.item} onPress={()=>this.props.navigation.navigate('Other')}>
            <Text>其他信息</Text>
            <Text>></Text>
            </TouchableOpacity>
            <TouchableOpacity style={add.item} onPress={()=>this.props.navigation.navigate('Buyinfo')}>
            <Text>购买信息</Text>
            <Text>></Text>
            </TouchableOpacity>
            <TouchableOpacity style={add.item} onPress={()=>this.props.navigation.navigate('Chaohe')}>
            <Text>朝禾优品</Text>
            <Text>></Text>
            </TouchableOpacity>
            <TouchableOpacity style={add.item} onPress={()=>this.props.navigation.navigate('Upload')}>
            <Text>上传资料</Text>
            <Text>></Text>
            </TouchableOpacity>
            <TouchableOpacity style={add.item} onPress={()=>this.props.navigation.navigate('')}s>
            <Text>意见和说明</Text>
            <Text>></Text>
            </TouchableOpacity>
            <TouchableOpacity style={add.item} onPress={()=>this.props.navigation.navigate('')}>
            <Text>流程示意图</Text>
            <Text>></Text>
            </TouchableOpacity>
           
            </ScrollView>
           
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