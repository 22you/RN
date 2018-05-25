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
  StatusBar
} from 'react-native'
import {Button,Toast,Overlay,Label} from 'teaset'
import matchsize from '../components/matchsize'
import Swiper from 'react-native-swiper'
import styles from '../styles/style-app'
import Header from '../components/header'
import Icon from 'react-native-vector-icons/FontAwesome';
export default class Home extends Component {
  static navigationOptions = {
    header:Header,
    headerStyle: {
      backgroundColor: '#f4511e',
    },
  };
  constructor(props) {
    super(props);
    this.state = {
      banklists:[{
        name:'招商银行',
        number:1730,
        type:'储蓄卡'
      },{
        name:'农业银行',
        number:1850,
        type:'储蓄卡'
      },{
        name:'jiayan',
        number:1850,
        type:'储蓄卡'
      }],
     index:0,
     banners:[
      require('../images/index/banner.jpg')
     ]
    };
}
setIndex=(index)=>{
  this.setState({
    index:index
  })
}
componentDidMount(){
  
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


  render() {
  let {banklists}=this.state;
   
   let banks=
   banklists.map((item,index)=>{
    console.log(this.state.index==index);
    return (<TouchableOpacity key={index} style={{borderBottomColor:'#ddd',borderBottomWidth:1,paddingHorizontal:20,paddingVertical:15,flexDirection:'row',justifyContent:'space-between'}}
      onPress={()=>{
        this.setIndex(index);
        this.overlayPullView.close()
        console.log('uuu',index);
      }}>
    <View>
      <Text>{item.name}</Text>
      <Text>尾号{item.number}{item.type}</Text>
    </View>
    {/* 判断当前index跟所存储的index值是否一致  */}
    {
      this.state.index==index?
      <Icon name="check" size={matchsize(29)} color={'#ddd'} style={{paddingHorizontal:matchsize(20)}}/>
      :
      <View/>
      
    }
  </TouchableOpacity> )
      
    })
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
    let overlayView = (
      <Overlay.PullView side='bottom' modal={false} ref={v => this.overlayPullView = v}>
      <ScrollView style={{backgroundColor: '#fff'}}>
      <View style={{height:300,justifyContent:'flex-start'}}>
        <View style={{paddingVertical:10,paddingLeft:15}}><Text>请选择您的银行卡</Text></View>
        {banks}
        </View>
      </ScrollView>
    </Overlay.PullView>
    );
    
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
           <Text style={styles.buyTitleTag}>随意宝</Text>
          </View>
          <View style={styles.indexBuyRate}>
            <Text style={styles.indexBuyRateHea}>年化益率</Text>
            <Text  style={styles.indexBuyRatesubHea}>5.65%</Text>
          </View>
          <View style={styles.indexBuyInfo}>
           <View style={styles.indexBuyInfoItem}>
             <Text  style={styles.BuyInfoDt}>常规产品</Text>
             <Text style={{color:'#acacac',marginTop:10}}>产品类型</Text>
           </View>
           <View style={styles.indexBuyInfoItem}>
            <Text  style={styles.BuyInfoDt}>12期</Text>
             <Text  style={{color:'#acacac',marginTop:10}}>投资期限</Text>
           </View>
           <View style={[styles.indexBuyInfoItem,{borderRightWidth:0}]}>
            <Text style={styles.BuyInfoDt}>个人</Text>
             <Text  style={{color:'#acacac',marginTop:10}}>授权范围</Text>
           </View>
          </View>
         <View style={{paddingVertical:matchsize(40),marginHorizontal:'3%'}}>
          <Button
            title="立即购买"
            accessibilityLabel="立即购买"
            onPress={()=>Overlay.show(overlayView)}
            type="primary"
            style={{height:matchsize(70)}}
          />
         </View>  
         </View>
        <View style={{flex:3,backgroundColor:'steelblue',alignItems:'center'}}>
      
        </View>
        <View style={{height:Platform.OS == 'ios' ? 0:matchsize(30),}}></View>
        </ScrollView>
     
    </View>);
  }
}

