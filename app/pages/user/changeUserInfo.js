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
          disabled:true
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
    componentDidMount(){
      this.props.navigation.setParams({navigatePress:this.clickFinishButton})
    }
    clickFinishButton = ()=> {
      this.setState({
        disabled:false
      })

  }
      render(){
        let {userName,customPhone,customCardNumber,customSettime,customSex,customTeam}=this.state;
        return(
          <View style={{ backgroundColor:'#fff',}}>
            <ScrollView style={{marginBottom:matchsize(20)}}>
            <KeyboardAwareScrollView>
            <DefaultInput name={'客户姓名'} style={base.item}
            value={userName}
            
					  onChangeText={(text) => {
               this.setState({
                  userName: text
               })
            }} 
            />

             <DefaultSelect  
             placeholder={'请选择性别'} 
             name={'性别'} 
             value={customSex} 
             style={base.item}
             items={['男','女']} 
             editable
             onSelected={this.onSelectedmaritalStatus}
             />

            <DefaultInput placeholder={'请输入...'} name={'主联系电话'} style={base.item}
            disabled={this.state.disabled}
					              onChangeText={(text)=>{
                          this.setState({
                            mainPhone: text
                        })
                        }} />

             <DefaultInput placeholder={'请输入...'} name={'备用电话'} style={base.item}
             disabled={this.state.disabled}
					              onChangeText={(text)=>{
                          this.setState({
                            subPhone: text
                        })
                        }} />

            <DefaultSelect  placeholder={'请选择'} name={'证件类型'} value={this.state.cardType} style={base.item}
            editable="false"
					               items={['身份证','护照']} onSelected={this.onSelectedmaritalStatus}/>

            <DefaultInput 
            placeholder={'请输入...'} 
            name={'证件号码'} 
            style={base.item}
            disabled={this.state.disabled}
            value={customCardNumber}
					              onChangeText={(text)=>{
                          this.setState({
                            cardNumber: text
                        })
                        }} />

         <TouchableOpacity style={base.item}>
            <Text>出生日期</Text>
            <DatePicker
              date={this.state.date}
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
            disabled={this.state.disabled}
					              onChangeText={(text)=>{
                          this.setState({
                            userName1: text
                        })
                        Alert.alert(text)
                        }} />
             <DefaultInput placeholder={'请输入...'} name={'电子邮箱'} style={base.item}
             disabled={this.state.disabled}
					              onChangeText={(text)=>{
                          this.setState({
                            userEmail: text
                        })
                        }} />
             <DefaultInput placeholder={'请输入...'} name={'客户性质'} style={base.item}
             disabled={this.state.disabled}
					              onChangeText={(text)=>{
                          this.setState({
                            userNature: text
                        })
                        }} />
             <DefaultInput placeholder={'请输入...'} name={'通讯地址'} style={base.item}
             disabled={this.state.disabled}
					              onChangeText={(text)=>{
                          this.setState({
                            userAddress: text
                        })
                        }} />
            <DefaultInput placeholder={'请输入...'} name={'客户授权人'} style={base.item}
            disabled={this.state.disabled}
					              onChangeText={(text)=>{
                          this.setState({
                            userNature: text
                        })
                        }} />
            <DefaultInput 
            placeholder={'请输入...'} 
            name={'登记团队'} 
            style={base.item}
            value={customTeam}
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