import React, { Component } from 'react';
import {DefaultInput}  from '../../components/defaultFormgroup' 
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
  import matchsize from '../../components/matchsize';
  import {Button} from 'teaset';
  import DatePicker from 'react-native-datepicker';
  import Icon from 'react-native-vector-icons/FontAwesome';
  export default class ChangeUserInfo extends Component {
    static navigationOptions =({navigation})=>( {
      headerRight: (
       
        <TouchableOpacity onPress={()=>navigation.state.params.navigatePress()}> 
          <Icon style={{marginRight:20}} name="edit" size={20} color="#fff" />
        </TouchableOpacity>
    )
    });
    constructor(props) {
        super(props);
        this.state = {
          maritalStatusValue:'男',
          cardType:'身份证',
          userName:"",
          disabled:true,
          userinfo:null
        };
        if(false){
           this.state={
             userName:props.navigation.state.params.customName,
           } 
        }
    }

    
    onSelectedmaritalStatus=(item, index) => {
      this.setState({maritalStatusValue: item})
    }
    componentWillMount(){
      this.setState({
        userinfo:this.props.navigation.state.params.userinfo
      })
      
      
      this.props.navigation.setParams({navigatePress:this.clickFinishButton})
    }
    clickFinishButton = ()=> {
      this.setState({
        disabled:false
      })

  }
      render(){
        console.log(this.state.userinfo);
       let {investName,cellphone,alternatePhone,cardnumber,belongedName,cardtypevalue,postcode,selfemail,birthDay,customSettime,sexvalue,shopName,postaddress,customerNature}=this.state.userinfo;
        return(
          <View style={{ backgroundColor:'#fff',}}>
            <ScrollView style={{marginBottom:matchsize(20)}}>
            <KeyboardAwareScrollView>
            <DefaultInput name={'客户姓名'} style={base.item}
            value={investName}
            disabled
            />
           <DefaultInput name={'性别'} style={base.item} value={sexvalue} disabled/>

            <DefaultInput placeholder={'请输入...'} name={'主联系电话'} style={base.item}
            value={cellphone}
            disabled={this.state.disabled}
					              onChangeText={(text)=>{
                          this.setState({
                            cellphone: text
                        })
                        }} />

             <DefaultInput placeholder={'请输入...'} name={'备用电话'} style={base.item}
             value={alternatePhone}
             disabled={this.state.disabled}
					              onChangeText={(text)=>{
                          this.setState({
                            subPhone: text
                        })
                        }} />

        <DefaultInput  name={'证件类型'} style={base.item}  disabled   value={cardtypevalue}/>             

        <DefaultInput name={'证件号码'} style={base.item}  disabled   value={cardnumber}/>

         <TouchableOpacity style={base.item}>
            <Text>出生日期</Text>
            <DatePicker
              date={birthDay}
              mode="date"
              placeholder="请选择日期"
              format="YYYY-MM-DD"
              minDate=""
              disabled={true}
              maxDate={new Date()}
              confirmBtnText="确定"
              showIcon="false"
              cancelBtnText="取消"
              customStyles={{
                dateIcon: {
                  display:'none'
                 
                },
                dateInput: {
                  marginLeft: 36,
                  borderWidth:0
                }
          
        }}
        onDateChange={(date) => {this.setState({date: date})}}
      />
            </TouchableOpacity>
      
            <DefaultInput placeholder={'请输入...'} name={'邮政编码'} style={base.item}
            value={postcode}
            disabled={this.state.disabled}
					              onChangeText={(text)=>{
                          this.setState({
                            userName1: text
                        })
                        Alert.alert(text)
                        }} />
             <DefaultInput placeholder={'请输入...'} name={'电子邮箱'} style={base.item}
             value={selfemail}
             disabled={this.state.disabled}
					              onChangeText={(text)=>{
                          this.setState({
                            userEmail: text
                        })
                        }} />
             <DefaultInput name={'客户性质'} style={base.item}
             value={customerNature==="1"?'员工':'客户'}
             disabled />
             <DefaultInput placeholder={'请输入...'} name={'通讯地址'} style={base.item}
             value={postaddress}
             disabled={this.state.disabled}
					              onChangeText={(text)=>{
                          this.setState({
                            userAddress: text
                        })
                        }} />
            <DefaultInput  name={'客户授权人'} style={base.item}
            value={belongedName}
            disabled/>
            <DefaultInput 
            placeholder={'请输入...'} 
            name={'登记团队'} 
            style={base.item}
            value={shopName}
            disabled={this.state.disabled}
					  onChangeText={(text)=>{
                          this.setState({
                            userTeam: text
                        })
                        }} />
         {
           this.state.disabled
           ?
           null
           :
           <TouchableOpacity style={{marginTop:15,marginHorizontal:'5%'}}>
              <Button title="保存" type="primary"
            accessibilityLabel="保存" onPress={()=>this.setState({disabled:true})} />
            </TouchableOpacity>
          } 
            

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
    borderBottomColor:'#ddd',
    alignItems:'center'

  }
  })