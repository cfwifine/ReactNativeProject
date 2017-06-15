/*
	党建首页
*/
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ListView,
  Dimensions,
  Image,
} from 'react-native';

export default class HomePartyPage extends Component {
	constructor(props) {
		super(props);
		var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
		this.state = {
			dataSource: ds.cloneWithRows(this.contens),
		};
	}
	contens = [
		{name: '通知公告', icon: require('../images/party_01.png')},
		{name: '上级精神', icon: require('../images/party_02.png')},
		{name: '两学一做', icon: require('../images/party_03.png')},
		{name: '三会一课', icon: require('../images/party_04.png')},
		{name: '民主生活', icon: require('../images/party_05.png')},
		{name: '党风廉政', icon: require('../images/party_06.png')},
		{name: '制度建设', icon: require('../images/party_07.png')},
		{name: '支部活动', icon: require('../images/party_08.png')},
		{name: '党员管理', icon: require('../images/party_09.png')},
	];
	renderRowItem(rowData, rowId) {
		return(	
			<TouchableOpacity style={styles.sy_items}>
				<Image source= {rowData.icon} style= {{width: 40, height: 40, margin: 15}} />
				<Text style= {{paddingBottom: 8, fontSize: 16}}>{rowData.name}</Text>
			</TouchableOpacity>
		);
	}
	render() {
		return(
			<View style={{flex: 1, backgroundColor: 'white'}}>
				<ListView 
					style = {styles.sy_list}
					dataSource = {this.state.dataSource}
					renderRow = {(rowData, rowId)=> this.renderRowItem(rowData, rowId)}
				/>
			</View>
		);
	}
}

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;
const ITEMWIDTH = WIDTH/3;
const styles = StyleSheet.create({
	sy_list: {
		flexDirection: 'column',
		flexWrap: 'wrap',
	},
	sy_items: {
		width: ITEMWIDTH,
		height: ITEMWIDTH,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'white'
	},
});