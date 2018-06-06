import React, { Component } from 'react';
import {Button} from 'teaset';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Alert,
    NativeModules
  } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import axios from 'axios'
import Toast from 'teaset/components/Toast/Toast';
 export default class Upload extends Component {
    static navigationOptions =({navigation})=>({
        headerRight: (
          <TouchableOpacity onPress={()=>navigation.state.params.navigatePress()}> 
          <Icon style={{marginRight:20}} name="plus-circle" size={20} color="#fff" />
         </TouchableOpacity>
        )
      });
    constructor(props) {

        super(props);
        // 初始状态
        this.state={
          taskId:this.props.navigation.state.params.taskId,
          projectId:this.props.navigation.state.params.projectId,
          files:[]
        }
         
    }

    componentDidMount(){
      this.props.navigation.setParams({navigatePress:this.getFlie});
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

  

    getFlie = ()=>{
      // Platform.OS === 'ios' ? NativeModules.getFileName.getFileName(() => {

      //   console.log('fjienlksdnfuwehflefoiewfslj')

      // }) :  NativeModules.OpenFile.getFileName((url)=>{
      //    let fileNames=url.split('/');
      //    let fileName=fileNames[fileNames.length-1];
      //    let getFile=config.api.uploadFile+'projId='+this.state.projectId+'&typeisfile=typeisonlyfile&businessType=FinancingBusiness&mark=dataUploads.'
      //                +this.state.projectId+'&setname='+fileName+'&filename='+fileName+'&creatorId='+global.user.userData.userIds+'&creator='+global.user.userData.fullname;
         
      //    axios.post(getFile)
      //    .then((res)=>{
      //     console.log(res.data);
          
      //    })
                 
      //  });
    
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
        console.log('files',this.state.files);
        
      return(
          <View>
            {this.state.files.map((item,index)=>{
              return (<TouchableOpacity style={add.item}>
                        <Text>{item.filename}</Text>
                        <Icon name="trash" onPress={()=>{this.deleteFile(item)}} size={15}/>
                      </TouchableOpacity>)
            })}
            
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