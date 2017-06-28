/*
	云办公首页
*/
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

import Counter from './Mobx/Counter';

export default class HomeClodePage extends Component {
	render() {
		return(
			<View style={{flex: 1, backgroundColor: 'orange'}}>
				<Counter></Counter>
				<Text>1</Text>
			</View>
		);
	}
}