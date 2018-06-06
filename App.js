import React, { Component } from 'react';

import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView
} from 'react-native';
// "react-navigation": "^1.5.11",
 import FooterComponent from './app/components/root'

console.disableYellowBox = true;
console.warn('YellowBox is disabled.');

export default class App extends Component {
  render() {
    return (
      
      
       <FooterComponent/>
      
    );
  }
}
