import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import MyList from './MyList';
class HomePage extends Component {
	pushAction(){
		this.props.navigator.push({
			title: 'MyList',
			component: MyList
		});
	}
	render() {
		return(
			<View style={{flex: 1, backgroundColor: 'red', justifyContent: 'center', alignItems: 'center'}}>
				<TouchableOpacity onPress={()=>this.pushAction()}>
					<Text style={{backgroundColor: 'white', fontSize: 40, paddingVertical: 10, paddingHorizontal: 20}}>push</Text>
				</TouchableOpacity>
			</View>
		);
	}
}
export default HomePage;