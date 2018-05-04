import React, { Component } from 'react';
import {DefaultInput,DefaultSelect}  from '../../components/defaultFormgroup' 
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
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
  export default class Buyinfo extends Component {
    static navigationOptions = {
      headerRight: (
        <View style={{height: 44,width: 55,justifyContent: 'center',paddingRight:15} }/>
    ),
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
            <KeyboardAwareScrollView>
            <DefaultInput placeholder={'合同编号'} name={'合同编号'} style={base.item}
					              onChangeText={()=>{}} />
         
            <TouchableOpacity style={base.item}>
            <Text>刷卡日期</Text>
            <Text>2018.04.02</Text>
            </TouchableOpacity>
            <View style={base.item}>
            <Text>是否生日月</Text>
            <Text>是></Text>
            </View>
            <DefaultInput placeholder={'累计全额'} name={'累计全额'} style={base.item}
					              onChangeText={()=>{}} />
        
            <TouchableOpacity style={base.item}>
            <Text>计息起日</Text>
            <Text>2018.04.02</Text>
            </TouchableOpacity>
            
            <View style={base.item}>
            <Text>计息止日</Text>
            <Text>2016.06.02</Text>
            </View>
            <View style={base.item}>
            <Text>累计全额</Text>
            <Text>1000元</Text>
            </View>
            <View style={base.item}>
            <Text>业务员提成</Text>
            <Text>1000元</Text>
            </View>
            <View style={base.item}>
            <Text>最终利率</Text>
            <Text>5.65%</Text>
            </View>
            <View style={base.item}>
            <Text>礼品利率</Text>
            <Text>5.65%</Text>
            </View>
            <View style={base.item}>
            <Text>礼品全额</Text>
            <Text>1000元</Text>
            </View>
            <View style={base.item}>
            <Text>礼品</Text>
            <Text>朝禾优品></Text>
            </View>
            <View style={base.item}>
            <Text>转入开户行</Text>
            <Text>172637252777</Text>
            </View>
            <View style={base.item}>
            <Text>银行账户名</Text>
            <Text>WX</Text>
            </View>
            <View style={base.item}>
            <Text>银行账户</Text>
            <Text>77777</Text>
            </View>
            <View style={base.item}>
            <Text>转入其他</Text>
            <Text>7777</Text>
            </View>
            <View style={base.item}>
            <Text>续投/首投</Text>
            <Text>首投</Text>
            </View>
            <View>
            <TouchableOpacity style={[base.btnbox,{marginTop:15,marginHorizontal:'12%'}]}>
              <Button title="保存" style={{width:100}} color="#ddd" type="primary" accessibilityLabel="下一步" onPress={()=>Alert.alert('保存成功')}/>
              <Button title="下一步"  style={{width:100}} accessibilityLabel="下一步"  onPress={()=>{
                this.props.navigation.navigate('Chaohe');
                }} />
           
            </TouchableOpacity>
            </View>
            </KeyboardAwareScrollView>
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

  }
  })