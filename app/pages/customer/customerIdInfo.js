import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    ScrollView,
    Alert,
    Image
  } from 'react-native';
  import {Button} from 'teaset'
  import matchsize from '../../components/matchsize'
  import ImagePicker from 'react-native-image-picker';
  import axios from 'axios';
  export default class Userbase extends Component {
   
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
          myIdcardFront:require('../../images/idcard-zh.png'),
          myIdcardReverse:require('../../images/idcard-fan.png'),
          userinfo:this.props.navigation.state.params.userinfo,
          investId:this.props.navigation.state.params.userinfo.investId
        };
    }
    componentDidMount(){
         //查询用户的身份证信息
         let idCardUrl=config.api.checkIdcard+'investId='+this.state.investId;
         axios.get(idCardUrl)
         .then((res)=>{
            this.setState({
                myIdcardReverse:{uri:config.imageUrl+res.data.data.personSFZFUrl},
                myIdcardFront:{uri:config.imageUrl+res.data.data.personSFZZUrl}
            })

         })
         //查询用户的身份证信息

    }
    uploadImage=(isFont)=>{
    
     let options = {
       title: '请选择',
          cancelButtonTitle: '取消',
          takePhotoButtonTitle: '拍照',
        chooseFromLibraryButtonTitle: '选择相册',
          quality: 0.2,
          allowsEditing: false,
          noData: false,
          storageOptions: {
              skipBackup: true,
              path: 'images'
          }
      };
      ImagePicker.showImagePicker(options, (response) => {
        console.log('Response = ', response);
  
        if (response.didCancel) {
          console.log('User cancelled image picker')
        }
        else if (response.error) {
  
            console.log('ImagePicker Error: ', response.error);
        }
        else if (response.customButton) {
  
            console.log('User tapped custom button: ', response.customButton);
        }
        else {
          let source = {uri: response.uri};
            
                if (isFont) {
                  this.setState({
                    myIdcardFront: {uri: response.uri},
                  })
              } else {
                  this.setState({
                    myIdcardReverse: {uri: response.uri},
                  })
              }
            //上传图片
             this.uploadIdcard(response.uri,isFont,response.fileName);
        }
    })
    }
 
    /**
     * 上传身份证图片
     */
    uploadIdcard = (uri, isFont,fileName) => {
      let formData = new FormData();
      const file = { uri: uri, type: 'multipart/form-data', name: 'image.jpg' };
      formData.append("fileUpload", file);
      let extendname = fileName.split(".");
      let url;
      if (isFont) {
          url = config.api.common.uploadFile + "?mark=cs_investmentperson_sfzz."+this.state.investId+"&extendname=."+extendname[1];
      } else {
          url = config.api.common.uploadFile + "?mark=cs_investmentperson_sfzf."+this.state.investId+"&extendname=."+extendname[1];
      }
  console.log(url);
  
    fetch(url,{
      method: 'POST',
      headers: {
          'Content-Type': 'multipart/form-data',
      },
      body: formData
  })
  .then(
    (response) =>console.log(response.json())    
  )//fileid 保存的时候传过去
  
  .catch(function (error) {
      console.log('获取用户登录数据报错信息: ' + error.message);
      Toast.message("请检查网络连接");
  })
   

  }

  _upload_card=()=>{
     this.props.navigation.navigate('BankList',{userinfo:this.state.userinfo})
  }
      render(){
      return(
          <View style={{backgroundColor:'#fff',paddingBottom:matchsize(20)}}>
            
            <View style={base.item} >
            <TouchableOpacity style={{flexDirection:'row',width:'100%',justifyContent:'center'}} onPress={() => this.uploadImage(true)} >
              <Image style={{width:matchsize(400),height:matchsize(260)}}  source={this.state.myIdcardFront} />
            </TouchableOpacity>
            <Text style={{marginTop:matchsize(15)}}>身份证正面</Text>
           
            </View>
            <View style={base.item}>
            <TouchableOpacity style={{flexDirection:'row',width:'100%',justifyContent:'center'}} onPress={() => this.uploadImage(false)} >
            <Image style={{width:matchsize(400),height:matchsize(260)}} source={this.state.myIdcardReverse}/>
            </TouchableOpacity>
            <Text  style={{marginTop:matchsize(15)}}>身份证反面</Text>
            
            </View>
            <TouchableOpacity style={{marginTop:matchsize(15),marginHorizontal:'5%'}}>
              <Button title="下一步" type="primary"
            accessibilityLabel="下一步" onPress={()=>this._upload_card() } />
           
            </TouchableOpacity>
           
          </View>
      )
      }
  }
  const base=StyleSheet.create({
  item:{
    marginTop:10,
    backgroundColor:'#fff',
    paddingHorizontal:'3%',
    paddingVertical:15,
    justifyContent:'space-between',
    alignItems:'center'

  }
  })