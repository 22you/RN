'use strict';
import React, {Component} from 'react';
import matchsize from '../components/matchsize'
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Platform,
    StatusBar
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
export default class Header extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        // const {goBack} = this.props.navigation;
        return (
            <View style={Platform.OS == 'ios' ? {paddingTop:matchsize(40),paddingBottom:matchsize(20)}:{paddingTop:0}}>
                <StatusBar barstyle="light-content" backgroundColor="transparent" translusent/>
           
            <View style={[styles.header, {
                flexDirection: 'row',
                backgroundColor: this.props.backgroundColor ? this.props.backgroundColor : 'transparent',
            }]}>
                <TouchableOpacity style={{flex:1}} onPress={() =>{} }>
                    {this.props.canBack == true ?
                        <Icon name="ios-arrow-back-outline" size={matchsize(29)}
                              color={'#ddd'}
                              style={{paddingHorizontal:matchsize(20)}}/>
                        :
                        <View/>}
                </TouchableOpacity>
                <Text style={[styles.headerTitle, {
                    flex: 1,
                    textAlign: 'center',
                    color: this.props.titleNameColor ? this.props.titleNameColor : '#fff'
                }]}>{this.props.titleName}</Text>
                {this.props.rightBtn ? this.props.rightBtn : <View style={{flex:1}}/>}
            </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    back: {
        width: matchsize(22),
        height: matchsize(22),
        marginLeft: '3%'
    },
    header: {
        paddingTop: Platform.OS == 'android' ? matchsize(0) : matchsize(14),
        backgroundColor: '#1687D0',
        alignItems: 'center',
    },
    headerTitle: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: '400'
    },
    goBack: {
        borderColor: '#313840',
        transform: [{rotate: '45deg'}],
    }

});