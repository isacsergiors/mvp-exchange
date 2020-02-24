import React from 'react';
import { View, Text, Dimensions } from 'react-native';
import Header from './src/components/header/Header';
import Navigation from './src/Navigation';
import LinearGradient from 'react-native-linear-gradient';
// # styles
// # types
// # imports
// # services
// # utils
// # actions
// # components 

export default class App extends React.Component {

  render() {

    return (
      <LinearGradient colors={["#bc4cf7", "#7873ee"]} start={{ x: 0, y: 0 }} end={{ x: 0, y: 2 }} style={{
        height: Dimensions.get("window").height + 25,
      }}>
        <Navigation />
      </LinearGradient>
    );
  }
}