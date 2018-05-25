import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    ScrollView,
  } from 'react-native';
  import matchsize from '../../components/matchsize';
  import LinearGradient from 'react-native-linear-gradient';
  export default class BankItem extends Component{
      render(){
          return(
            <LinearGradient start={{x: 0.25, y: 0.25}} end={{x: 0.75, y: 0.75}} colors={['#ff6162', '#ff8181']} style={add.bankbox}
           
            >
            <TouchableOpacity  onPress={()=>this.props.navigation.navigate('AddBank',{...this.props})}>
            <View>
                <Text style={{letterSpacing:matchsize(5),color:'#fff',fontSize:matchsize(36)}}>{this.props.cardTitle}</Text>
                 {/* <Text style={{color:'#fff'}}>zhao shang yin hang</Text> */}
            </View>
            <View style={{paddingVertical:matchsize(40)}}>
                <View style={{justifyContent:'space-between',flexDirection:'row'}}>
                <Text style={{color:'#fff',fontSize:matchsize(34)}}>{this.props.cardNum.trim().substr(0,4)}</Text>
                <Text style={{color:'#fff',fontSize:matchsize(34)}}>****</Text>
                <Text style={{color:'#fff',fontSize:matchsize(34)}}>****</Text>
                <Text style={{color:'#fff',fontSize:matchsize(34)}}>{this.props.cardNum.trim().substr(this.props.cardNum.length-4,4)}</Text>
                 
                </View>
            </View>
            <View>
                <Text style={{color:'#fff',fontSize:matchsize(24)}}>{this.props.cardUser}</Text>
            </View>
            </TouchableOpacity>
        </LinearGradient>
          )
      }
  }
  const add=StyleSheet.create({

    bankbox:{
        borderRadius:4,
        paddingHorizontal:matchsize(80),
        paddingVertical:matchsize(35),
        backgroundColor:'red',
        marginBottom:matchsize(25),
        
    }
    })