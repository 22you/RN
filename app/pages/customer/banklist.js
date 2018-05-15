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

  export default class BankList extends Component{
    static navigationOptions = {
        headerRight: (
          <View style={{height: 44,width: 55,justifyContent: 'center',paddingRight:15} }/>
      ),
      }
      constructor(props) {
        super(props);
    }
    componentDidMount(){
        console.log(this.props.navigation.state.params);
        
    }
      render(){
          return(
              <View style={add.item}>
                  <ScrollView>
                  <FlatList
                    data={[
                        {
                            key: '1',
                            cardNum:'6314111111117235',
                            cardTitle:'招商银行',
                            cardUser:'小说'
                        }, 
                        { key: '2',
                        cardNum:'6314111111117235',
                        cardTitle:'邮政银行',
                        cardUser:'小尚未'
                    }
                    ]}
                    renderItem={
                        ({item}) => <BankItem  cardNum={item.cardNum} cardUser={item.cardUser} cardTitle={item.cardTitle}  {...this.props}/>
                    }
                    />
                    <TouchableOpacity style={add.addbtn} onPress={()=>this.props.navigation.navigate('AddBank',{...this.state})}>
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