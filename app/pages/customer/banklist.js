import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    ScrollView,
    FlatList
  } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import matchsize from '../../components/matchsize';
import BankItem from './bankItem'
import config from '../../common/config';
import axios from 'axios';

  export default class BankList extends Component{
    static navigationOptions = {
        headerRight: (
          <View style={{height: 44,width: 55,justifyContent: 'center',paddingRight:15} }/>
      ),
      }
      constructor(props) {
        super(props);
        this.state={
            userinfo:this.props.navigation.state.params.userinfo,
            bankdata:null,
            investId:this.props.navigation.state.params.userinfo.investId
        }
    }
    componentDidMount(){
      let {investId}=this.state.userinfo; 
      let bankUrl=config.api.bankInfo+'id='+investId+'&isEnterpriseStr=1&isInvest=3&start=0&limit=25'
      //console.log('bankUrl',bankUrl);
      axios.get(bankUrl)
      .then((res)=>{
          if(res.data.totalProperty){
           // console.log(res.data.topics);
            this.setState({
                bankdata:res.data.topics
            })
          }
          
          
      })
      
        
    }
      render(){
          let {bankdata}=this.state;
          return(
              <View style={add.item}>
                  <ScrollView>
                  <FlatList
                    data={bankdata}
                    renderItem={
                        ({item}) => <BankItem  cardNum={item.accountnum} cardUser={item.name} cardTitle={item.bankname} id={item.id}  {...this.props}/>
                    }
                    />
                    <TouchableOpacity style={add.addbtn} onPress={()=>this.props.navigation.navigate('AddBank',{investId:this.state.investId})}>
                     <View style={{flexDirection:'row'}}>
                        <Icon name="plus-circle" style={{marginRight:matchsize(20)}} size={matchsize(32)}/>
                       <Text style={{fontSize:matchsize(32)}}>添加银行卡</Text>
                       </View>
                       <Icon name="angle-right" size={matchsize(32)}/>
                    </TouchableOpacity>
                  </ScrollView>
              </View>
          )
      }
  }
  const add=StyleSheet.create({
    item:{
      paddingHorizontal:'3%',
      paddingVertical:matchsize(25)
    },
    addbtn:{
        flexDirection:'row',
        justifyContent:'space-between',
        backgroundColor:'#fff',
        alignItems:'center',
        paddingHorizontal:matchsize(30),
        borderRadius:4,
        paddingVertical:matchsize(30)
    }
    })