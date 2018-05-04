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
import {Button} from 'teaset'
import matchsize from '../components/matchsize'
import Swiper from 'react-native-swiper'
import styles from '../styles/style-app'
import Header from '../components/header'

export default class Home extends Component {
  static navigationOptions = {
    header:Header,
    headerStyle: {
      backgroundColor: '#f4511e',
    },
<<<<<<< HEAD
    
=======
>>>>>>> f9985f843589a513678c9b67bd7993b9fb3dcf4d
  };
  constructor(props) {
    super(props);
    this.state = {
     banners:''
    };
}
componentWillMount(){
  // var myFetchOptions={
  //   method:'GET'
  // };
  // fetch('http://newsapi.gugujiankong.com/Handler.ashx?action=getnews&type=top&count=10')
  // .then(response=>response.json())
  // .then(json=>this.setState({banners:json}));
  let url=config.api.banner;
  request.get(url).then(responseText=>{
    
    let arr=[];
    if (responseText.success) {
        arr=responseText.data.map((item)=>{return item.author.avatar_url})
    //  this.setState({banners:responseText.data.slice(0,3)})
       this.setState({banners:arr.slice(0,3)})
  }
  })
}
  render() {
    const {banners}=this.state;
    const bannerlist=banners.length?
    banners.map((item,index)=>(
      <View style={styles.slide1} key={index}>
        <Image source={{uri: item}} style={{width:'100%',height:'100%'}}/>
      </View>
    ))
    :
    <View style={{justifyContent:'center',alignItems:'center',flex:1}}>
      <Text style={{flexDirection:'row',justifyContent:'center'}}>loading...</Text>
    </View>;
    return (
      
      <View style={[styles.indexBox,{flex: 1}]}>
     <StatusBar
<<<<<<< HEAD
          backgroundColor='transparent'
=======
          backgroundColor='#ff0000'
>>>>>>> f9985f843589a513678c9b67bd7993b9fb3dcf4d
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
        <TouchableOpacity style={styles.indexItem} onPress={() => this.props.navigation.navigate('Adduser', {
                                                titleName: '增加用户',
                                                ...this.props
                                                
                                            })}>
           <Image source={require('../images/index/add-cu.png')} style={{width:matchsize(55),height:matchsize(55),marginRight:matchsize(8)}}/>
           <Text>新增客户</Text>
         </TouchableOpacity>
         <TouchableOpacity  style={styles.indexItem} onPress={() => this.props.navigation.navigate('Buypro')}>
         <Image source={require('../images/index/buy-pro.png')}  style={{width:matchsize(55),height:matchsize(55),marginRight:matchsize(8)}}/>
         <Text>产品购买</Text>
         </TouchableOpacity>
         <TouchableOpacity  style={styles.indexItem} onPress={() =>  this.props.navigation.navigate(' MyTodo')}>
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
             <Text>产品类型</Text>
           </View>
           <View style={styles.indexBuyInfoItem}>
            <Text  style={styles.BuyInfoDt}>12期</Text>
             <Text>投资期限</Text>
           </View>
           <View style={[styles.indexBuyInfoItem,{borderRightWidth:0}]}>
            <Text style={styles.BuyInfoDt}>个人</Text>
             <Text>授权范围</Text>
           </View>
          </View>
         <View style={{paddingVertical:matchsize(40),marginHorizontal:'3%'}}>
          <Button
            title="立即购买"
            accessibilityLabel="立即购买"
            onPress={()=>Alert.alert('aaa')}
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

