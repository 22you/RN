import { AppRegistry } from 'react-native';
<<<<<<< HEAD
import './app/storeUtils'
import App from './App';
import request from './app/common/request'
import config from './app/common/config'

=======
import App from './App';
import request from './app/common/request'
import config from './app/common/config'
>>>>>>> f9985f843589a513678c9b67bd7993b9fb3dcf4d
global.request = request;
global.config = config;
AppRegistry.registerComponent('myProject', () => App);
