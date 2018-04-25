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
  import ImagePicker from 'react-native-image-picker'
  export default class Userbase extends Component {
   
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
          myIdcardFront:require('../../images/idcard-zh.png'),
          myIdcardReverse:require('../../images/idcard-fan.png'),
        };
    }
    componentDidMount(){
      this.setState(
        this.props.navigation.state.params
      )
    }
    uploadImage=(isFont)=>{
     console.log('有效');  
         
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
                let tempImgArr = [];
                tempImgArr.push(source);
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
            //  this.uploadIdcard(response.uri,isFont);
        }
    })
    }
  //   /**
  //    * 上传身份证图片
  //    */
  //   uploadIdcard = (uri, isFont) => {
  //     console.log("11111111")
  //     let formData = new FormData();
  //     let file = {uri: uri, type: 'application/octet-stream', name: 'image.jpg'};
  //     console.log("uri", uri)
  //     formData.append("myUpload", file);
  //     let url;
  //     if (isFont) {
  //         url = config.api.common.uploadImg + "?myUploadFileName=myBlogImage1.jpg&myBlogImage=myBlogImage1";
  //     } else {
  //         url = config.api.common.uploadImg + "?myUploadFileName=myBlogImage2.jpg&myBlogImage=myBlogImage2";
  //     }

  //     request.upImage(url, formData).then((responseText) => {

  //         console.log('上传的身份证的返回的数据内容=====>', responseText, config.imageUrl + responseText.map[0].photoSrc)
  //         this.setState({
  //             visible: false
  //         })
  //         if (responseText.result === 1) {
  //             if (isFont) {
  //                 this.setState({
  //                     idFontImage: config.imageUrl + responseText.map[0].photoSrc,
  //                     name: responseText.map[0].name,
  //                     cardnumber: responseText.map[0].cardnumber,
  //                     sex: responseText.map[0].sex
  //                 })
  //             } else {
  //                 this.setState({
  //                     idBackImage: config.imageUrl + responseText.map[0].photoSrc,
  //                     validityEnd: responseText.map[0].validityEnd,
  //                     validityStart: responseText.map[0].validityStart,

  //                 })
  //             }
  //         } else {
  //             return Alert.alert(responseText.map[0].msg);


  //         }

  //     }).catch((error) => {
  //         this.setState({
  //             visible: false
  //         })
  //         return Alert.alert('上传失败');


  //     });

  // }
      render(){
      return(
          <View style={{backgroundColor:'#fff',paddingBottom:matchsize(20)}}>
            
            <View style={base.item} >
            <TouchableOpacity style={{flexDirection:'row',width:'100%',justifyContent:'center'}} onPress={() => this.uploadImage(true)} >
              <Image style={{width:matchsize(400),height:matchsize(260)}}  source={this.state.myIdcardFront} />
            </TouchableOpacity>
            <Text style={{marginTop:matchsize(15)}}  >身份证正面</Text>
           
            </View>
            <View style={base.item}>
            <TouchableOpacity style={{flexDirection:'row',width:'100%',justifyContent:'center'}} onPress={() => this.uploadImage(false)} >
            <Image style={{width:matchsize(400),height:matchsize(260)}} source={this.state.myIdcardReverse}/>
            </TouchableOpacity>
            <Text  style={{marginTop:matchsize(15)}}>身份证反面</Text>
            
            </View>
            <TouchableOpacity style={{marginTop:matchsize(15),marginHorizontal:'5%'}}>
              <Button title="下一步" type="primary"
            accessibilityLabel="下一步" onPress={()=>{
              this.props.navigation.navigate('BankList')
              console.log(this.state)
            }
              } />
           
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