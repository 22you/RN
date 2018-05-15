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
  import config from '../../common/config';
  import axios from 'axios';
  
  export default class AddBank extends Component {
    static navigationOptions = {
      headerRight: (
        <View style={{height: 44,width: 55,justifyContent: 'center',paddingRight:15} }/>
    ),
    }
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
          myBankFront:require('../../images/idcard-zh.png'),
          myBankBack:require('../../images/idcard-zh.png'),
          openType:'',//开户类型
          accountType:'',//账户类型
          bankid:'',//银行id
          bankName:'',//银行名称
          bankOutletsName:'',//网点名称
          openCurrency:'',//银行开户类别
          name:'',//开户名称
          accountnum:'',//银行卡号
          banks:[]


        };
    }
    componentDidMount(){
      //获取银行卡下拉列表
      let bankUrl=config.api.bankList;
      axios.get(bankUrl)
      .then((res)=>{
        if(res.data.success){
        //  console.log(res.data.data);
         let bankItem=[];
         res.data.data.map(item=>{
            let bank = {
              text:item.bankname,
              value:item.bankid
            };
            bankItem.push(bank)
         })
         this.setState({
           banks:bankItem
         })
      
         
  
        }
      
  
      })
    }
    _saveBank=()=>{
      let {openType,bankid,bankOutletsName,openCurrency,name,accountnum,accountType} =this.state;
      let saveBankUrl=config.api.saveBank+'enterpriseBank.openType='+openType+'&enterpriseBank.bankid='+bankid
                      +'&enterpriseBank.bankOutletsName='+bankOutletsName+'&enterpriseBank.openCurrency='+openCurrency
                      +'&enterpriseBank.name='+name+'&enterpriseBank.accountnum='+accountnum+'&enterpriseBank.accountType='+accountType;
  console.log(saveBankUrl);
     axios.post(saveBankUrl)
     .then((res)=>{
       console.log(res.data);
       
     })
  
     // this.props.navigation.navigate('BankList')
    }
      render(){
      
        let {banks,bankid,openType,bankOutletsName,openCurrency,name,accountnum,accountType} =this.state;
        
        let {cardTitle,cardUser}=this.props.navigation.state.params;
          return(
           <View style={{backgroundColor:'#fff',paddingBottom:30}}>
             <ScrollView>
             <DefaultSelect  placeholder={'请选择开户类型'} name={'开户类型'} value={openType} style={base.item}
					               items={[{text:'个人',value:0},{text:'公司',value:1}]} onSelected={(item)=>this.setState({openType: item.value})}/>

            <DefaultSelect  placeholder={'请选择账户类型'} name={'帐户类型'} value={accountType} style={base.item}
					               items={[{text:'个人储蓄户',value:0},{text:'基本户',value:1},{text:'一般户',value:2}]} onSelected={(item)=>this.setState({accountType: item.value})}/>

            <DefaultSelect  placeholder={'请选择银行名称'} name={'银行名称'} value={bankid} style={base.item}
					               items={banks} onSelected={(item)=>this.setState({bankid: item.value})
                         }/>
                         
            <DefaultInput placeholder={'请输入...'} value={bankOutletsName} name={'网点名称'} style={base.item}
					              onChangeText={(text) => {
                          this.setState({
                            bankOutletsName: text
                          })
                      }} />
            <DefaultSelect  placeholder={'银行开户类型'} name={'银行开户类型'} value={openCurrency} style={base.item}
					               items={[{text:'本币开户',value:0},{text:'外币开户',value:1}]} onSelected={(item)=>this.setState({openCurrency: item.value})}/>

             <DefaultInput placeholder={'请输入...'} name={'开户名称'} style={base.item}
             value={name}
					              onChangeText={(text) => {
                          this.setState({
                            name: text
                          })
                      }} />
             <DefaultInput placeholder={'请输入...'} name={'银行卡号'} style={base.item} value={accountnum}
					              onChangeText={(text) => {
                          this.setState({
                            accountnum: text
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
            accessibilityLabel="保存" onPress={this._saveBank }/>
             {/* this.props.navigation.navigate('BankList')
              console.log(this.state) */}
           
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