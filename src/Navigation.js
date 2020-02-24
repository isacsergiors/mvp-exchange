import React from 'react';
import {Text} from 'react-native';
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack';

import Auth from './screens/Auth';
import Home from "./screens/home/Home";
import Deposit from "./screens/deposit/Deposit";
import Withdraw from "./screens/withdraw/Withdraw";
import Market from "./screens/market/Market";
import Account from "./screens/account/Account";
import Bank from './screens/bank/Bank';
import Header from "./components/header/Header";

const routes = createStackNavigator({
  Home: {
    screen: Home
  },
  Deposit: {
    screen: Deposit,
  },
  Withdraw: {
    screen: Withdraw
  },
  Market: {
    screen: Market
  },
  Account: {
    screen: Account,
    navigationOptions: {
      header: null
    }
  },
  Bank: {
    screen: Bank,
    navigationOptions: {
      header: null
    }
  },
  Auth: {
    screen: Auth,
    navigationOptions: {
      header: null
    }
  }
}, {
  initialRouteName: "Auth",
  navigationOptions: {
    
  },
  defaultNavigationOptions: {
    header: (props) => <Header {...props} />,
  },
});

export default createAppContainer(routes);

