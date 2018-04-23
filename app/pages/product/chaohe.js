import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    ScrollView,
    Alert
  } from 'react-native';
  import {Button} from 'teaset'
  export default class Chaohe extends Component {
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
      return(
          <View style={{ backgroundColor:'#fff',}}>
            <ScrollView style={{marginBottom:20}}>
            <View style={base.list}>
                <View style={base.title}>
                 <View>
                     <Text>礼品名称</Text>

                 </View>
                 <View style={base.row}>
                     <Text>单价</Text>
                     <Text style={{color:'red'}}>1</Text>
                     <Text>元</Text>
                 </View>
                </View>
                <View style={base.center}>
                <View style={{borderRightColor:'#ddd',borderRightWidth:1,width:'50%'}}>
                    <View style={base.row}>
                        <Text>单笔差价</Text>
                        <Text>1</Text>
                        <Text>元</Text>
                    </View>
                    <View style={base.row}>
                        <Text>数量</Text>
                        <Text>1</Text>
                    </View>
                    </View>
                    <View>
                        <View style={base.row}>
                            <Text>差价支付方</Text>
                            <Text>投资账户</Text>
                        </View>
                        <View style={base.row}>
                            <Text>达标金额</Text>
                            <Text>1000</Text>
                            <Text>元</Text>
                        </View>
                    </View>
                </View>
                <View style={base.bottom}>
                  <Text>计划发放时间 2018-04-03</Text>
                </View>
            </View>
            
            
            <View>
            <TouchableOpacity style={[base.btnbox,{marginTop:15,marginHorizontal:'5%'}]}>
              <Button title="保存" style={{width:100}} color="#ddd" type="primary" accessibilityLabel="下一步" onPress={()=>Alert.alert('保存成功')}/>
              <Button title="下一步"
            accessibilityLabel="下一步"  style={{width:100}} onPress={()=>this.props.navigation.navigate('Upload')} />
           
            </TouchableOpacity>
            </View>
            </ScrollView>
          </View>
      )
      }
  }
  const base=StyleSheet.create({
  item:{
    marginHorizontal:'3%',
    paddingVertical:15,
    flexDirection:'row',
    justifyContent:'space-between',
    borderBottomWidth:1,
    borderBottomColor:'#ddd'

  },
  btnbox:{
    flexDirection:'row',
    width:'80%',
    justifyContent:'space-between',

  },
  title:{
      borderBottomColor:'#ddd',
      borderBottomWidth:1,
      paddingVertical:10,
      flexDirection:'row',
      justifyContent:'space-between'
  },
  center:{
      borderBottomColor:'#ddd',
      borderBottomWidth:1,
      paddingVertical:10,
      flexDirection:'row',
      justifyContent:'space-between'
  },
  list:{
    paddingHorizontal:'3%',
      
  },
  row:{
      flexDirection:'row'
  }
  })