import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    ScrollView,
    Button
  } from 'react-native';

  export default class Adduser extends Component {
    static navigationOptions = {
        headerStyle: {
          backgroundColor: '#34a1ff',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontSize: 16,
          },
      };
    constructor(props) {

        super(props);
        // 初始状态
        this.state = {
 
        };
    }
      render(){
        console.log("props",this.props);
        
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
            <Button
            title="下一步"
            accessibilityLabel="下一步"
            onPress={()=>Alert.alert('aaa')}
          />
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