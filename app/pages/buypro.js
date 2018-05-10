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
    ProgressViewIOS
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
            prolists: []
        };
    }
    componentDidMount() {
        let url = config.api.prolist + '?start=1&limit=2&userIds=1';
        axios.get(url)
            .then((res) => {
                console.log(res.data.data)
                let prolists = [];
                // prolists = eval("(" + res.data + ")").result;
                prolists=res.data.data;
                this.setState({
                    prolists: prolists
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
           <View> 
           {
               prolists.map((item, index) => (
                    <TouchableOpacity style={buy.column} onPress={()=>this.props.navigation.navigate('Probase')}>
                    <View style={buy.item}>
                    <View style={buy.left}>
                     <View style={buy.bigtitle}><Text style={{color:'#ff5152',fontSize:35}}>5.65</Text><Text style={{fontSize:25,color:"#ddd"}}>%</Text></View>
                     <Text style={{fontSize:12,}}>20180402001</Text>
                    </View>
                    <View style={buy.right}>
                     <View style={buy.proName}><Text style={{color:'#fff'}}>随意宝</Text></View>
                    </View>
                    </View>
                    <View style={buy.rightItems}>
                          <View style={buy.rightItem}>
                              <Text style={{color:'#acacac',marginBottom:5}}>产品类型</Text>
                              <Text style={{color:'#000'}}>常规产品</Text>
                          </View>
                          <View style={buy.rightItem}>
                              <Text style={{color:'#acacac',marginBottom:5}}>投资期限</Text>
                              <Text style={{color:'#000'}}>12<Text>期</Text></Text>
                          </View>
                          <View style={buy.rightItem}>
                              <Text style={{color:'#acacac',marginBottom:5}}>授权范围</Text>
                              <Text style={{color:'#000'}}>企业</Text>
                          </View>
                      </View>
                    </TouchableOpacity>
               ))
           } 
            </View>
        )
    }
}
const buy = StyleSheet.create({
    column: {
        backgroundColor: '#fff',
        paddingHorizontal: '5%',
        paddingVertical: 15,
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