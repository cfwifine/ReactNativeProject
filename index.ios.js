/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
} from 'react-native';
import MyTabBar from './app/MyTabBar';

export default class AwesomeProject extends Component {
  render() {
    return (
        <MyTabBar></MyTabBar>
    );
  }
}

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
