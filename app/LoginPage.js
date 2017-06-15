/*
	登录
*/

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;
const SCALE = Dimensions.get('window').scale;
export default class Login extends Component {
	render() {
		return(
			<View style={{flex:1, backgroundColor: 'white'}}>
				<View>
					<View style={{backgroundColor: 'rgb(193,0,30)', width: WIDTH, height: 285/2}}></View>
					<Image style={{width: WIDTH, height: 100}} source={require('../images/aboutbg.png')} resizeMode='stretch'/>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	
});