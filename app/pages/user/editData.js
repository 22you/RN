import React,{Component} from 'react';
import {Row,Col,Text,View,StyleSheet,Alert} from 'react-native';
import {Button,Input,Label} from 'teaset'
import matchsize from '../../components/matchsize';
export default class EditData extends Component{
    constructor(props){
        super(props);
        this.state = {
            username:'',
            password:''
           
          };
    }
    _save=()=>{
        Alert.alert('11')
    }
    render(){
        return(
            <View style={base.wrap}>
              <View style={base.item}>
               <Text>姓名</Text>
               <Input style={{
                    backgroundColor: 'transparent',
                     borderColor: 'transparent',
                     textAlign: 'right',
                     flex: 1,
                    paddingLeft: 0
                    }} value={global.user.userData.memberName}/>
              </View>
              <View style={base.item}>
               <Text>手机号</Text>
               <Input style={{
                    backgroundColor: 'transparent',
                     borderColor: 'transparent',
                     textAlign: 'right',
                     flex: 1,
                    paddingLeft: 0
                    }} value={global.user.userData.memberMobile}/>
              </View>
              <View style={base.item}>
               <Text>用户真实姓名</Text>
               <Input style={{
                    backgroundColor: 'transparent',
                     borderColor: 'transparent',
                     textAlign: 'right',
                     flex: 1,
                    paddingLeft: 0
                    }} value={global.user.userData.memberTruename}/>
              </View>
              <View style={{marginHorizontal:"3%",marginTop:matchsize(30)}}>
                  <Button type="primary" onPress={()=>this._save()}>
                      <Label style={{color:'#fff'}}>保存</Label>
                  </Button>
              </View>
            </View>
        )
    }
}
const base=StyleSheet.create({
    wrap:{
        backgroundColor:"#fff",
        flex:1,
        justifyContent:'flex-start',
        width:null,
        height:null,
    },
    item:{
        borderBottomWidth:1,
        borderBottomColor:'#ccc',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingHorizontal:'3%',
        paddingVertical:matchsize(15)

    }
})
