import React, {
    Component
} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    ProgressBarAndroid,
    ProgressViewIOS,
    ScrollView,
    Alert
} from 'react-native';

import axios from 'axios';
export default class Buypro extends Component {
    static navigationOptions = {
        headerRight: ( <
            View style = {
                {
                    height: 44,
                    width: 55,
                    justifyContent: 'center',
                    paddingRight: 15
                }
            }
            />
        )
    };
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            progress: .5,
            prolists: [],
            prolength:5
        };
    }
    _goProBase=()=>{
        // this.props.navigation.navigate('Probase')
        if(global.user.loginState){
            this.props.navigation.navigate('Probase')
        }else{
           Alert.alert('温馨提示','要购买产品请先登录',
            [
                {text:"我知道了", onPress:this.confirm},
                {text:"去登录", onPress:()=>this.props.navigation.navigate('Login')}
        ]
          );
        }
    }
    componentDidMount() {
        let url = config.api.prolist;
        axios.get(url)
            .then((res) => {
                let prolists = [];
                prolists=res.data.data;
                this.setState({
                    prolists: prolists,
                    prolength:res.data.totalCounts
                })

            })
            .catch((error) => {
                console.log(error)
            })
    }
    render() {
        let {
            prolists
        } = this.state;
        //  console.log(Array.isArray(prolists))
        return ( 
            <ScrollView style={{paddingBottom:20}}>
           {
               prolists.map((item, index) => (
                    <TouchableOpacity style={buy.column} key={index} onPress={this._goProBase}>
                    <View style={buy.item}>
                    <View style={buy.left}>
                     <View style={buy.bigtitle}><Text style={{color:'#ff5152',fontSize:35}}>{item.yeaRate}</Text><Text style={{fontSize:25,color:"#ddd"}}>%</Text></View>
                     <Text style={{fontSize:12,}}>{item.mmNumber}</Text>
                    </View>
                    <View style={buy.right}>
                     <View style={buy.proName}><Text style={{color:'#fff'}}>{item.mmName}</Text></View>
                    </View>
                    </View>
                    <View style={buy.rightItems}>
                          <View style={buy.rightItem}>
                              <Text style={{color:'#acacac',marginBottom:5}}>产品类型</Text>
                              <Text style={{color:'#000'}}>{item.proName}</Text>
                          </View>
                          <View style={buy.rightItem}>
                              <Text style={{color:'#acacac',marginBottom:5}}>投资期限</Text>
                              <Text style={{color:'#000'}}>{item.investlimit}<Text>期</Text></Text>
                          </View>
                          <View style={buy.rightItem}>
                              <Text style={{color:'#acacac',marginBottom:5}}>授权范围</Text>
                              <Text style={{color:'#000'}}>{item.useCompany}</Text>
                          </View>
                      </View>
                    </TouchableOpacity>
               ))
           } 
            </ScrollView>
        )
    }
}
const buy = StyleSheet.create({
    column: {
        backgroundColor: '#fff',
        paddingHorizontal: '5%',
        paddingVertical: 15,
        marginTop:10
    },
    item: {
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',

    },
    bigtitle: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    right: {
        width: '60%',
        justifyContent: 'center'
    },
    rightItems: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',

    },
    rightItem: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    proName: {
        backgroundColor: '#efaa11',
        alignItems: 'center',
        borderRadius: 25,
        paddingVertical: 3,
    },
    slider: {
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center'
    }
})