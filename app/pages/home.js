import React, {Component} from 'react'
import {
  Text, 
  View, 
  StyleSheet,
  ScrollView,
  FlatList,
  SectionList,
  Image,
  Platform,
  TouchableOpacity,
  Alert,
  StatusBar,
  
} from 'react-native'
import {Button,Toast} from 'teaset'
import matchsize from '../components/matchsize'
import Swiper from 'react-native-swiper'
import styles from '../styles/style-app'
import Header from '../components/header'
import Icon from 'react-native-vector-icons/FontAwesome';
import config from '../common/config';
import axios from 'axios'
export default class Home extends Component {
  static navigationOptions =({navigation})=>({
    //header:Header,
    headerStyle: {
      backgroundColor: '#f4511e',
    },
  });
  constructor(props) {
    super(props);
    this.state = {
     index:0,
     banners:[
      require('../images/index/banner.jpg')
     ],
     mmName:'',
     yeaRate:'',
     useCompany:'',
     investlimit:'',
     item:[]

    };
}
setIndex=(index)=>{
  this.setState({
    index:index
  })
}
componentDidMount(){
 //首页中的产品查询
 
 let proUrl=config.api.prolist+'?start=0&limit=1';
 axios.get(proUrl)
 .then((res)=>{
   if(res.data.success){
     this.setState({
      mmName:res.data.data[0].mmName,
      yeaRate:res.data.data[0].yeaRate,
      useCompany:res.data.data[0].useCompany,
      investlimit:res.data.data[0].investlimit,
      item:res.data.data[0]

     })
    //console.log(res.data.data[0]);
   }
 })
 .catch((error)=>{
console.log(error);

 })
}

addUserMethod=()=>{
  if(!global.user.loginState){
    Toast.info('请先登录！')
  }else{
    this.props.navigation.navigate('Userbase', {
      titleName: '增加用户',
      ...this.props
      
  })
  }
}

_goProBase=(item)=>{
  if(global.user.loginState){
     // console.log(this.props.navigation)
      this.props.navigation.navigate('Probase',{item:item})
  }else{
     Alert.alert('温馨提示','要购买产品请先登录',
      [
          {text:"我知道了", onPress:this.confirm},
          {text:"去登录", onPress:()=>this.props.navigation.navigate('Login')}
  ]
    );
  }
}



  render() {
    const {banners}=this.state;
    const bannerlist=banners.length?
    banners.map((item,index)=>(
    
      <View style={styles.slide1} key={index}>
        <Image source={item} style={{width:'100%',height:'100%'}}/>
      </View>
    ))
    :
    <View style={{justifyContent:'center',alignItems:'center',flex:1}}>
      <Text style={{flexDirection:'row',justifyContent:'center'}}>loading...</Text>
    </View>;
    let {mmName,yeaRate,useCompany,investlimit}=this.state;
   // console.log();
    
    return (
    <View style={[styles.indexBox,{flex: 1}]}>
     <StatusBar
          backgroundColor='transparent'
          translucent={true}
          hidden={false}
          animated={true}  
          barStyle="light-content"    
        />
      <ScrollView showsVerticalScrollIndicator={false}>
      <View>
      <Swiper style={{height:200,backgroundColor:'red'}} showsButtons={false}>
        {bannerlist}
      </Swiper>
      </View>
        <View style={styles.indexCenterBox}>
        <TouchableOpacity style={styles.indexItem} onPress={()=>this.addUserMethod()}>
           <Image source={require('../images/index/add-cu.png')} style={{width:matchsize(55),height:matchsize(55),marginRight:matchsize(8)}}/>
           <Text>新增客户</Text>
         </TouchableOpacity>
         <TouchableOpacity  style={styles.indexItem} onPress={() => this.props.navigation.navigate('Buypro')}>
         <Image source={require('../images/index/buy-pro.png')}  style={{width:matchsize(55),height:matchsize(55),marginRight:matchsize(8)}}/>
         <Text>产品购买</Text>
         </TouchableOpacity>
         <TouchableOpacity  style={styles.indexItem} onPress={() =>  this.props.navigation.navigate('MyTodo')}>
         <Image source={require('../images/index/todo.png')}  style={{width:matchsize(55),height:matchsize(55),marginRight:matchsize(8)}}/>
         <Text>待办任务</Text>
         </TouchableOpacity>
         <TouchableOpacity style={styles.indexItem} onPress={() => this.props.navigation.navigate('Buypro')}>
         <Image source={require('../images/index/new-pro.png')}  style={{width:matchsize(55),height:matchsize(55),marginRight:matchsize(8)}}/>
         <Text>最新产品</Text>
         </TouchableOpacity>
        </View>
         {/* 购买栗子 */}
         <View style={styles.indexBuy}>
          <View style={styles.indexBuyTitle}>
           <Text style={{fontSize:matchsize(28)}}>20180403001</Text>
           <Text style={styles.buyTitleTag}>{mmName}</Text>
          </View>
          <View style={styles.indexBuyRate}>
            <Text style={styles.indexBuyRateHea}>年化益率</Text>
            <Text  style={styles.indexBuyRatesubHea}>{`${yeaRate}%`}</Text>
          </View>
          <View style={styles.indexBuyInfo}>
           <View style={styles.indexBuyInfoItem}>
             <Text  style={styles.BuyInfoDt}>常规产品</Text>
             <Text style={{color:'#acacac',marginTop:10}}>产品类型</Text>
           </View>
           <View style={styles.indexBuyInfoItem}>
            <Text  style={styles.BuyInfoDt}>{`${investlimit}期`}</Text>
             <Text  style={{color:'#acacac',marginTop:10}}>投资期限</Text>
           </View>
           <View style={[styles.indexBuyInfoItem,{borderRightWidth:0}]}>
            <Text style={styles.BuyInfoDt}>{useCompany}</Text>
             <Text  style={{color:'#acacac',marginTop:10}}>授权范围</Text>
           </View>
          </View>
         <View style={{paddingVertical:matchsize(40),marginHorizontal:'3%'}}>
          <Button  title="立即购买" type="primary"  style={{height:matchsize(70)}} onPress={()=>{
              this._goProBase(this.state.item)
            }} />
         </View>  
         </View>
        <View style={{flex:3,backgroundColor:'steelblue',alignItems:'center'}}>
      
        </View>
        <View style={{height:Platform.OS == 'ios' ? 0:matchsize(30),}}></View>
        </ScrollView>
     
    </View>);
  }
}

