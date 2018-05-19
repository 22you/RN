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
  import DatePicker from 'react-native-datepicker'
  import Icon from 'react-native-vector-icons/FontAwesome';
  import axios from 'axios';
  export default class Applybase extends Component {
    static navigationOptions = {
      headerRight: (
        <View style={{height: 44,width: 55,justifyContent: 'center',paddingRight:15} }/>
    ),
    };
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
          cardtype:'',
          cardTypes:null
          
        };
    }
    onChangeAddressText=(address) => {
      this.setState({
        address
      })
    }
    // saveFirst=()=>{
    //   let saveUrl=config.api.
    // }
    componentDidMount(){
      let dictionaryUrl=config.api.dictionary+'nodeKey=card_type_key';
      axios.get(dictionaryUrl)
      .then((res)=>{
        if(res.data.success){
          console.log(res.data.result);
          // let cardTypes=res.data.result.map(item=>item);
          this.setState({
            cardtypes:res.data.result
          })
        }
      })
    }
 
   
      render(){
        let {cardtypes,investName,sex,cellphone,alternatePhone,cardtype,cardnumber,birthDay,postcode,selfemail,personProperty,postaddress,
            belongedName,belongedId,departmentName,departmentId}=this.state;
      return(
          <View style={{ backgroundColor:'#fff',}}>
          
            <ScrollView style={{marginBottom:20}}>
            <KeyboardAwareScrollView>
             <DefaultInput placeholder={'客户姓名'} name={'客户姓名'} style={base.item} value={investName}
					              onChangeText={(text)=>{
                            this.setState({
                              investName:text
                            })
                        }} />
                        
            <DefaultSelect  placeholder={'请选择性别'} name={'性别'} value={sex} style={base.item}
					               items={[{text:'男',value:312},{text:'女',value:313}]} onSelected={(item, index)=>{
                           this.setState({
                            sex:item.value
                           })
                         }}/>
          
          
            <DefaultInput placeholder={'请输入'} name={'联系电话'} style={base.item} value={cellphone}
					              onChangeText={(text)=>{
                          this.setState({
                            cellphone:text
                          })
                        }} />
            <DefaultInput placeholder={'请输入'} name={'备用电话'} style={base.item} value={alternatePhone}
					              onChangeText={(text)=>{
                          this.setState({
                            alternatePhone:text
                          })
                        }} />

             <DefaultSelect  placeholder={'请选择'} name={'证件类型'} value={cardtype} style={base.item}
					               items={cardtypes} onSelected={(item, index) => {
                          this.setState({
                            cardtype:item.value
                          })
                        }}/>
        
            <DefaultInput placeholder={'请输入'} name={'证件号码'} style={base.item} value={cardnumber}
					              onChangeText={(text)=>{
                          this.setState({
                            cardnumber:text
                          })
                        }} />
            <TouchableOpacity style={base.item}>
                <Text>出生日期</Text>
                <DatePicker
                  date={birthDay}
                  mode="date"
                  placeholder="select date"
                  format="YYYY-MM-DD"
                  minDate='null'
                  maxDate={new Date()}
                  confirmBtnText="Confirm"
                  showIcon="false"
                  cancelBtnText="Cancel"
                  customStyles={{
                      dateIcon: {
                          display:'none'
                      },
                      dateInput: {
                          marginLeft: 36,
                          borderWidth:0
                      }
                  }}
                  onDateChange={(date) => {
                      this.setState({
                          birthDay:date
                      })
                  }}/>
            </TouchableOpacity>
            <DefaultInput placeholder={'请输入'} name={'邮政编码'} style={base.item} value={postcode}
					              onChangeText={(text)=>{
                          this.setState({
                            postcode:text
                          })
                        }} />
            <DefaultInput placeholder={'请输入'} name={'电子邮箱'} style={base.item} value={selfemail}
					              onChangeText={(text)=>{
                          this.setState({
                            selfemail:text
                          })
                        }} />
            {/* <DefaultInput placeholder={'vip'} name={'客户性质'} style={base.item}
					              onChangeText={()=>{}} /> */}
         
            <DefaultInput placeholder={'请输入通讯地址'} name={'通讯地址'} style={base.item} value={postaddress}
					              onChangeText={(text)=>{
                          this.setState({
                            postaddress:text
                          })
                        }} />           
             <DefaultInput  name={'客户授权人'} style={base.item} value={global.user.userData.fullname} disabled/>  
            <DefaultInput placeholder={'互融云'} name={'登记团队'} style={base.item}
					              onChangeText={()=>{}} /> 
            <View>
            <TouchableOpacity style={[base.btnbox,{marginTop:15,marginHorizontal:'12%'}]}>
              <Button title="保存" style={{width:100}} type="primary" color="#ddd" accessibilityLabel="下一步" onPress={this.saveFirst}/>
              <Button title="下一步"  style={{width:100}} accessibilityLabel="下一步"  onPress={()=>this.props.navigation.navigate('Investor')} />
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
    paddingVertical:10,
    flexDirection:'row',
    justifyContent:'space-between',
    borderBottomWidth:1,
    borderBottomColor:'#ddd',
    alignItems:'center'

  },
  btnbox:{
    flexDirection:'row',
    width:'80%',
    justifyContent:'space-between',

  }
  })