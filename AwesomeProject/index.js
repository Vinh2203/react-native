import {AppRegistry} from 'react-native';
import { StackNavigator } from 'react-navigation';
import Login from './Login';
import Home from './Home';

const Navigator = StackNavigator({
  Login: {
    screen: Login
  },
  Home: {
    screen: Home
  }
}, {initialRouteName: 'Login'});

AppRegistry.registerComponent('AwesomeProject', () => Navigator);
