import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

import Axios from 'axios';

Axios.defaults.baseURL = "http://e5082537.ngrok.io";

AppRegistry.registerComponent(appName, () => App);
