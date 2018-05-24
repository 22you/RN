import React,{Component} from 'react';
import {View,Text} from 'react-native';
export default class selectBank extends  Component{
    constructor(props) {
        super(props);
        this.state = {
         banners:[
          require('../images/index/banner.jpg')
         ]
        };
    }

    render(){
        return(
            <Text/>
        )
    }
}