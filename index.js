import { AppRegistry } from 'react-native';
import App from './App';
import request from './app/common/request'
import config from './app/common/config'
global.request = request;
global.config = config;
AppRegistry.registerComponent('myProject', () => App);
