import React, { Component } from 'react';
import matchsize from '../components/matchsize'
import CustomItem from '../pages/user/customItem'
import {
    Platform,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    FlatList
  } from 'react-native';

  export default class Mycustomer extends Component {
    static navigationOptions={
        headerLeft:null
       }
      render(){
      return(
          <View>
              <View style={bus.busBox}>
                <FlatList
                  data={[
                    {
                        key: '1',
                        customName:'xiaohang',
                        customTeam:'信息部',
                        customSex:'女',
                        customPhone:'19082378236',
                        customPhoneNumber:'127892132937',
                        customSettime:'2018-12-12'
                    }, 
                    {  
                    key: '2',
                    customName:'戴旭',
                    customTeam:'广告部',
                    customSex:'男',
                    customPhone:'1232382378236',
                    customPhoneNumber:'99927892132937',
                    customSettime:'2012-12-12'
                }
                ]}
                  renderItem={({item})=><CustomItem 
                  customName={item.customName} 
                  customTeam={item.customTeam} 
                  customSex={item.customSex} 
                  customPhone={item.customPhone} 
                  customPhoneNumber={item.customPhoneNumber}
                  customSettime={item.customSettime}
                  {...this.props}
                  />}
                />
                
              </View>
          </View>
      )
      }
  }
  const bus=StyleSheet.create({
   
   
  })