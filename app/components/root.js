import React, { Component } from 'react';
import matchsize from '../components/matchsize'
import Icon from 'react-native-vector-icons/FontAwesome';
import common from '../styles/global'
import Home  from '../pages/home' //首页
import Mybusiness from '../pages/mybusiness'//我的业务
import MyTodo from '../pages/myTask'//待办任务
import Adduser from '../pages/adduser' //新增客户
import Mycustomer from '../pages/myCustomer'//我的客户
import Buypro from '../pages/buypro'//产品购买
import Userbase from '../pages/user/userBase'//新增客户-基本信息
import UploadId from '../pages/user/uploadId'//上传身份证证件
import Probase from '../pages/product/probase'//产品基本信息
import Apply from '../pages/product/apply'//产品购买申请
import Applybase from '../pages/product/applybase'//投资进件申请基本信息
import Investor from '../pages/product/investor'//投资人账户
import Other from '../pages/product/other'  //其他信息
import Buyinfo from '../pages/product/buyinfo' //购买信息
import Chaohe from  '../pages/product/chaohe' //朝禾优品
import Upload from '../pages/product/upload' //上传材料
import Suggest from '../pages/product/suggest'//意见与说明
import { TabNavigator,TabBarBottom,StackNavigator } from 'react-navigation'
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  StatusBar,
  TouchableOpacity,
  Alert
} from 'react-native';


const Navigator=TabNavigator({
  Home:{
    screen: Home,
    navigationOptions:{
      tabBarLabel:'首页',
      tabBarIcon:   ({tintColor})=>(<Icon name="home" size={matchsize(35)} color={tintColor}/>)

    }
  },
  mycustom:{
    screen: Mycustomer,
    navigationOptions:{
      title:'我的客户',
      tabBarIcon:   ({tintColor})=>(<Icon name="users" size={matchsize(35)} color={tintColor}/>)

    }
  },
  More:{
    screen:Mybusiness,
    navigationOptions:{
      title:'我的业务',
      tabBarIcon:  ({tintColor})=>(<Icon name="file" size={matchsize(35)} color={tintColor}/>)
    }
  },
  account:{
    screen:Adduser,
    navigationOptions:{
      title:'账户中心',
      tabBarIcon: ({tintColor})=> (<Icon name="user" size={matchsize(35)} color={tintColor} />)
      
    }
  }
},{
  
  tabBarComponent:TabBarBottom,
  tabBarPosition:'bottom',
  swipeEnabled:false,
  animationEnabled:false,
  tabBarOptions: {
    activeTintColor: '#1687D9',
    inactiveTintColor: 'gray',
    labelStyle: {
      fontSize: matchsize(25), // 文字大小
      paddingTop:0,
      marginTop:0,
  },
  tabStyle:{
    marginTop:matchsize(10),
     height: matchsize(180),
    paddingBottom:matchsize(20)
},
style: {
  // backgroundColor: '#ff6449', // TabBar 背景色
   height: matchsize(120),
},
  },
  
});
const Addnavigator=StackNavigator({
  Tab:{
    screen:Navigator,
  },
  Adduser:{
    screen:Adduser,
    navigationOptions:{
      headerTitle:'新增客户'
    }

  },
  Userbase:{
    screen:Userbase,
    navigationOptions:{
      headerTitle:'基本信息'
    }
  },
  Buypro:{
    screen:Buypro,
    navigationOptions:{
      headerTitle:'产品购买'
    }
  },
  Probase:{
    screen:Probase,
    navigationOptions:{
      headerTitle:'产品基本信息'
    }
  },
  Apply:{
    screen:Apply,
    navigationOptions:{
      headerTitle:'产品购买申请'
    }
  },
  Applybase:{
    screen:Applybase,
    navigationOptions:{
      headerTitle:'申请基本信息'
    }
  },
  Investor:{
    screen:Investor,
    navigationOptions:{
      headerTitle:'投资人账户'
    }
  },
  UploadId:{
    screen:UploadId,
    navigationOptions:{
      headerTitle:'上传身份证'
    }
  },
  MyTodo:{
    screen:MyTodo, 
    navigationOptions:{
      headerTitle:'待办任务'
    },
   
  },
  Other:{
    screen:Other, 
    navigationOptions:{
      headerTitle:'其他信息'
    },
    },
    Buyinfo:{
      screen:Buyinfo, 
    navigationOptions:{
      headerTitle:'购买信息'
    },
   
    },
    Chaohe:{
      screen:Chaohe, 
      navigationOptions:{
        headerTitle:'朝禾优品'
      }
    },
    Upload:{
      screen:Upload, 
      navigationOptions:{
        titheaderTitlele:'上传资料'
      }
    },
    Suggest:{
      screen:Suggest, 
      navigationOptions:{
        headerTitle:'意见与说明'
      } 
    }
},{
  tabBarPosition:'top',
  animationEnabled:true,
  swipeEnabled:true,
  tabBarOptions:{
    activeTintColor:'#ecd3d',
    inactiveTintColor:'#ecd3d',
    style:{
      backgroundColor:"#34a1ff"
    }
  },
  navigationOptions: {
  //   headerLeft:(
  //     <TouchableOpacity style={{flexDirection:'row',alignItems:'center'}} onPress={()=>{
  //       // navigation.goback();
  //       console.log(navigation)
  //     }
  //     }>
  //       <Icon name="angle-left" style={{color:'#fff',marginLeft:matchsize(30),fontSize: matchsize(54)}}/>
  //       <Text  style={{color:'#fff',fontSize: matchsize(30),marginLeft:matchsize(15)}}>返回</Text>
  //     </TouchableOpacity>
   
  // ),
  headerBackTitle:null,
  headerRight:(
   < Text></Text>
  ),
    headerStyle: {
      backgroundColor: '#34a1ff',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
      fontSize: matchsize(32),
      alignSelf:'center',
            
    },
  },
})
export default class FooterComponent extends Component {
  constructor(props){
    super(props);
    this.state={
      text:'',
      selectedTab: 'home'
    };
  }
  render() {
    return (
    
       <Addnavigator  />
   
       
     
     
    );
  }
}
