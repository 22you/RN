import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    ScrollView,
    Modal
  } from 'react-native';
import {Button,Select,Input} from 'teaset'
import config from '../../common/config';
import ImageViewer from 'react-native-image-zoom-viewer';
export default class Progress extends Component{
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            plManageMoneyPlanBuyinfo:this.props.navigation.state.params.plManageMoneyPlanBuyinfo,
            progressUrl:''
        };
    }
    componentDidMount(){
        let runId=this.state.plManageMoneyPlanBuyinfo.runId;
        let progressUrl=config.api.Progress+'runId='+runId+'&rand=898989';
        console.log("progressUrl",progressUrl);
        // this.setState({
        //     progressUrl:progressUrl
        // })
        
    }
    render(){
        // const images=[{url:this.state.progressUrl}]
        return(
            <View style={{flex: 1}}>
                <ImageViewer imageUrls={[{url: config.api.Progress+'runId='+this.state.plManageMoneyPlanBuyinfo.runId+'&rand=898989'}]}/>
            </View>
        )
    }
}