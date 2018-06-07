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
  import DatePicker from 'react-native-datepicker'
  import matchsize from '../../components/matchsize'
  import {Button} from 'teaset'
  export default class Probase extends Component {
   static navigationOptions=({navigation})=>({
    headerLeft:null
   })
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
          memberName:'',
          memberMobile:'',
          memberTruename:''
        };
    }
    loginOut(){
      let that = this
      Alert.alert('温馨提醒', '确定退出吗?', [
        {text: '取消'},
        {
            text: '确定', onPress: () =>{
              let url = config.api.loginOut+'token='+global.user.userData.token;
              global.user.loginState = false;
              storage.remove({
                key: 'loginState'
              });
              that.props.navigation.navigate('Login')
              // request.get(url).then((responseText) => {
              //     global.user.loginState = false;
              //     storage.remove({
              //       key: 'loginState'
              //     });
              //     that.props.navigation.navigate('Login')
      
              // })
            }
            
        }
    ])
     
    }
    
    componentDidMount(){
      this.setState({
        memberName:global.user.userData.username.split("@")[0],
        memberfullname:global.user.userData.fullname,
        memberdepName:global.user.userData.depName
      })
    }

      render(){
      return(
          <View style={{ backgroundColor:'#fff',}}>
            <ScrollView style={{marginBottom:matchsize(20)}}>
              <View style={base.item}>
                <Text>用户名</Text>
                <Text>{this.state.memberName}</Text>
              </View>
              <View style={base.item}>
                <Text>用户角色</Text>
                <Text>{this.state.memberfullname}</Text>
              </View>
              <View style={base.item}>
                <Text>公司名称</Text>
                <Text>{this.state.memberdepName}</Text>
              </View>
              <View style={{paddingHorizontal:'3%',paddingVertical:matchsize(50),flexDirection:'row',justifyContent:'space-around'}}>
              {/* <Button title='编辑资料' size="md" type="default" onPress={() => this.props.navigation.navigate('EditData')} /> */}
              <Button title='退出登录' size="md" type="primary" 
                onPress={this.loginOut.bind(this)} />
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
    borderBottomColor:'#ddd',
    alignItems:'center'

  }
  })