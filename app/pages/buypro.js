import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    ProgressBarAndroid,
    ProgressViewIOS
  } from 'react-native';


  export default class Buypro extends Component {
    static navigationOptions = {
        headerRight: (
          <View style={{height: 44,width: 55,justifyContent: 'center',paddingRight:15} }/>
      )
      };
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
        progress:.5
        };
    }
      render(){
      return(
          <View>
            <TouchableOpacity style={buy.item} onPress={()=>this.props.navigation.navigate('Probase')}>
            <View style={buy.left}>
             <View style={buy.bigtitle}><Text style={{color:'#ff5152',fontSize:35}}>5.65</Text><Text style={{fontSize:25,color:"#ddd"}}>%</Text></View>
             <Text style={{fontSize:12,}}>20180402001</Text>
             <View style={buy.proName}><Text style={{color:'#fff'}}>随意宝</Text></View>
            </View>
            <View style={buy.right}>
              <View style={buy.slider}>
                { Platform.OS == 'ios' ?<ProgressViewIOS  progressTintColor='#ff5152' style={{width:'80%'}} progress={this.state.progress}/>
                :<ProgressBarAndroid color='#ff5152' styleAttr='Horizontal' progress={this.state.progress} indeterminate={false} style={{width:'80%'}} />
                }
                 <Text>{this.state.progress*100}%</Text>
              </View>
              <View style={buy.rightItems}>
                  <View style={buy.rightItem}>
                      <Text>产品类型</Text>
                      <Text style={{color:'#000'}}>常规产品</Text>
                  </View>
                  <View style={buy.rightItem}>
                      <Text>投资期限</Text>
                      <Text style={{color:'#000'}}>12<Text>期</Text></Text>
                  </View>
                  <View style={buy.rightItem}>
                      <Text>授权范围</Text>
                      <Text style={{color:'#000'}}>企业</Text>
                  </View>
              </View>
            </View>
            </TouchableOpacity>
         
          </View>
      )
      }
  }
  const buy=StyleSheet.create({
 row:{
    flexDirection:'row',  
 },
  item:{
    marginTop:10,
    backgroundColor:'#fff',
    paddingHorizontal:'5%',
    paddingVertical:15,
    flexDirection:'row',
    justifyContent:'space-between',

  },
  bigtitle:{
      flexDirection:'row',
      alignItems:'center'
  },
  right:{
    width:'60%'  
  },
  rightItems:{
      flexDirection:'row',
      justifyContent:'space-between',
     
  },
  rightItem:{
      alignItems:'center',
      justifyContent:'center'
  },
  proName:{
      backgroundColor:'#efaa11',
      alignItems:'center',
      borderRadius:25,
      paddingVertical:3,
      marginTop:15
  },
  slider:{
      flexDirection:'row',
      flex:1,
      justifyContent:'space-between',
      alignItems:'center'
  }
  })