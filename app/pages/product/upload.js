import React, { Component } from 'react';
import {Button} from 'teaset';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Alert,
    NativeModules,
    Image
  } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import axios from 'axios'
import Toast from 'teaset/components/Toast/Toast';
var DataModule = require('react-native').NativeModules.getFileName;
 export default class Upload extends Component {
    static navigationOptions =({navigation})=>({
        headerRight: (
          <TouchableOpacity onPress={()=>navigation.state.params.navigatePress()}> 
          {/* <Icon style={{marginRight:20, width:20, height:20}} name="plus-circle" color="#fff" /> */}
          <Text style={{fontSize:30, marginRight:20, marginBottom:10, color:'#fff'}}>+</Text>
         </TouchableOpacity>
        )
      });
    constructor(props) {

        super(props);
        // 初始状态
        this.state={
          taskId:this.props.navigation.state.params.taskId,
          projectId:this.props.navigation.state.params.projectId,
          files:[],
          avatarSource:null,
        }
         
    }
     checkFiles=()=>{
      //查看已上传的资料的列表
      let fileListUrl=config.api.fileList+'mark=dataUploads.'+this.state.projectId+'&typeisfile=typeisonlyfile';
            
      axios.get(fileListUrl)
      .then((res)=>{
        if(res.data.totalProperty){
          this.setState({
            files:res.data.topics
          })
        }
        
        
      })
     }
    componentDidMount(){
      this.props.navigation.setParams({navigatePress:this.getFlie});
      this.checkFiles();
    }

  

    getFlie = ()=>{
      Platform.OS === 'ios' ? DataModule.getFileName().then((data) => {
        //console.log(url);
        this.setState({
          avatarSource:{uri:data}
          
        })
        
        // let fileNames=url.split('/');
        // let fileName=fileNames[fileNames.length-1];
        // let getFile=config.api.uploadFile+'projId='+this.state.projectId+'&typeisfile=typeisonlyfile&businessType=FinancingBusiness&mark=dataUploads.'
        //             +this.state.projectId+'&setname='+fileName+'&filename='+fileName+'&creatorId='+global.user.userData.userIds+'&creator='+global.user.userData.fullname;
        // console.log(getFile);
        
        // axios.post(getFile)
        // .then((res)=>{
        //  console.log(res.data);
         
        // })
    }).catch((err) => {
        console.log(err)
    }) :  NativeModules.OpenFile.getFileName((url)=>{
         let fileNames=url.split('/');
         let fileName=fileNames[fileNames.length-1];
         let getFile=config.api.uploadFile+'projId='+this.state.projectId+'&typeisfile=typeisonlyfile&businessType=FinancingBusiness&mark=dataUploads.'
                     +this.state.projectId+'&setname='+fileName+'&filename='+fileName+'&creatorId='+global.user.userData.userIds+'&creator='+global.user.userData.fullname;
         
         axios.post(getFile)
         .then((res)=>{
          //this.state.files.push(target.index,1)
          this.setState({
            files:this.state.files
          })
          
          Alert.alert('上传成功！')
          
         })
         this.checkFiles();
                 
       });
    
    }
    //删除资料
    deleteFile=(option,index)=>{
      Alert.alert('温馨提醒', '确定要删除吗?', [
        {text: '取消'},
        {
            text: '确定', onPress: () =>{
              let deleteUrl=config.api.deleteFile+'fileid='+option.fileid;   
              // console.log(deleteUrl);
              axios.post(deleteUrl)
              .then((res)=>{
                if(res.data.success){
                  let target=this.state.files.find(item=>item.fileid===option.fileid)
                  if(target){
                    this.state.files.splice(target.index,1)
                    this.setState({
                      files:this.state.files
                    })
                    Toast.success('删除成功！')
                  }
                 
                }
            
              })
            }
            
        }
    ])
     
    }
   
      render(){        
      return(
          <View>
            {this.state.files.map((item,index)=>{
              return (<TouchableOpacity style={add.item}>
                        <Text>{item.filename}</Text>
                        <Icon name="trash" onPress={()=>{this.deleteFile(item)}} size={15}/>
                      </TouchableOpacity>)
            })}
            <Image source={this.state.avatarSource ? this.state.avatarSource : require('../../images/idcard-fan.png')}
               style={{width:80,height:80}}/>
            <View style={{marginTop:15,marginHorizontal:'3%'}}>
            <Button title="下一步"
          accessibilityLabel="下一步" type="primary"
            onPress={()=>this.props.navigation.navigate('Suggest',{taskId:this.state.taskId})}/>
            </View>
          </View>
      )
      }
  }
  const add=StyleSheet.create({
  item:{
    marginTop:10,
    backgroundColor:'#fff',
    paddingHorizontal:'3%',
    paddingVertical:15,
    flexDirection:'row',
    justifyContent:'space-between',

  }
  })