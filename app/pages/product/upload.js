import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Button
  } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
  export default class Upload extends Component {
    static navigationOptions = {
        headerStyle: {
          backgroundColor: '#34a1ff',
        },
        headerRight: (
          
          <Button
            onPress={() => alert('This is a button!')}
            title="+" style={{marginRight:'3%'}}            
          />
        ),
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontSize: 16,
          },
      };
    constructor(props) {

        super(props);
        // 初始状态
         
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
          accessibilityLabel="下一步"
            onPress={()=>this.props.navigation.navigate('Suggest')}/>
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