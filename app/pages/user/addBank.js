import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    ScrollView,
    FlatList,
    Image
  } from 'react-native';
  import {Button} from 'teaset'
  import matchsize from '../../components/matchsize'
  import ImagePicker from 'react-native-image-picker';
  import {DefaultInput,DefaultSelect}  from '../../components/defaultFormgroup'
  
  export default class AddBank extends Component {
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
          myBankFront:require('../../images/idcard-zh.png'),
          myBankBack:require('../../images/idcard-zh.png'),
          openType:'个人',
          accountType:'个人',
          cardTitle:'招商银行',
          storeName:'',
          bankOpenType:'本币开户',
          cardUser:'',
          cardNum:'',


        };
    }
      render(){
          return(
           <View style={{backgroundColor:'#fff',paddingBottom:30}}>
             <ScrollView>
             <DefaultSelect  placeholder={'请选择开户类型'} name={'开户类型'} value={this.state.openType} style={base.item}
					               items={['个人','团体']} onSelected={(item)=>this.setState({openType: item})}/>
            <DefaultSelect  placeholder={'请选择账户类型'} name={'帐户类型'} value={this.state.accountTyp} style={base.item}
					               items={['个人','团体']} onSelected={(item)=>this.setState({accountTyp: item})}/>
            <DefaultSelect  placeholder={'请选择银行名称'} name={'银行名称'} value={this.state.cardTitle} style={base.item}
					               items={['招商银行','邮政银行']} onSelected={(item)=>this.setState({cardTitle: item})}/>
            <DefaultInput placeholder={'请输入...'} name={'网店名称'} style={base.item}
					              onChangeText={(text) => {
                          this.setState({
                            storeName: text
                          })
                      }} />
            <DefaultSelect  placeholder={'银行开户类型'} name={'银行开户类型'} value={this.state.cardTitle} style={base.item}
					               items={['本币开户','本币开户']} onSelected={(item)=>this.setState({cardTitle: item})}/>
             <DefaultInput placeholder={'请输入...'} name={'开户名称'} style={base.item}
					              onChangeText={(text) => {
                          this.setState({
                            cardUser: text
                          })
                      }} />
             <DefaultInput placeholder={'请输入...'} name={'银行卡号'} style={base.item}
					              onChangeText={(text) => {
                          this.setState({
                            cardNum: text
                          })
                      }} />
            <View style={{flexDirection:'row',justifyContent:'space-between',paddingVertical:matchsize(30),paddingHorizontal:matchsize(30)}}>
            <View>
             <TouchableOpacity style={{flexDirection:'row',justifyContent:'center'}} onPress={() => this.uploadImage(true)} >
              <Image style={{width:matchsize(300),height:matchsize(200)}}  source={this.state.myBankFront} />
             </TouchableOpacity>
             <Text style={{marginTop:matchsize(15),width:matchsize(300),textAlign:'center'}}>银行卡正面</Text>
            </View>
            <View>
             <TouchableOpacity style={{flexDirection:'row',justifyContent:'center'}} onPress={() => this.uploadImage(true)} >
              <Image style={{width:matchsize(300),height:matchsize(200)}}  source={this.state.myBankBack} />
             </TouchableOpacity>
             <Text style={{marginTop:matchsize(15),width:matchsize(300),textAlign:'center'}}>银行卡反面</Text>
            </View>
            </View>
            <TouchableOpacity style={{marginTop:matchsize(15),marginHorizontal:'5%'}}>
              <Button title="保存" type="primary"
            accessibilityLabel="保存" onPress={()=>{
              this.props.navigation.navigate('BankList')
              console.log(this.state)
            }
              } />
           
            </TouchableOpacity>
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
  
    }
    })