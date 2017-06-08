import React, {Component} from 'react';
import {
	View,
	Text,
	ListView,
	Image,
	StyleSheet,
	TouchableOpacity,
} from 'react-native';
import Network from './Network';
import Layout from './Layout';
import Actions from './Actions';
import Animation from './Animation';
import ComponentItems from './ComponentItems';

class MyList extends Component {
	constructor(props){
		super(props);
		const ds = new ListView.DataSource({rowHasChanged:(r1,r2)=>{r1!==r2}});
		this.state = {
			dataSource: ds.cloneWithRows(this.getDataSource()),
		};
	}
	getDataSource() {
		return ['网络加载', '布局', '事件', '动画', '各种控件'];
	}
	cellItemOneAction(rowData, sectionID, rowID) {
		const components = [Network, Layout, Actions, Animation, ComponentItems];
		this.props.navigator.push({
			title: rowData,
			component: components[rowID],
		});
	}
	renderRow(rowData, sectionID, rowID) {
		return(
			<TouchableOpacity onPress={()=>this.cellItemOneAction(rowData, sectionID, rowID)}>
				<MyListCellItemOne rowData={rowData} rowID={rowID}></MyListCellItemOne>
			</TouchableOpacity>
		);
	}
	render() {
		return(
			<View style={{flex:1, backgroundColor: '#d3d3d3'}}>
				<ListView 
					dataSource={this.state.dataSource} 
					renderRow={this.renderRow.bind(this)}>
				</ListView>
			</View>
		);
	}
}
export default MyList;

class MyListCellItemOne extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return(
			<View style={styles.cellOneContainer}>
				<Image source={require('../images/sy_index_34.png')} style={styles.cellOneImage}/>
				<Text style={styles.cellOneTitle}>{this.props.rowData}</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({

	cellOneContainer: {
		flex: 1,
		backgroundColor: 'white',
		marginTop: 0.5,
		paddingVertical: 10,
		flexDirection: 'row',
		alignItems: 'center',
	},
	cellOneImage: {
		width: 40, 
		height: 40, 
		marginLeft: 10,
	},
	cellOneTitle: {
		color: '#999',
		fontSize: 20,
		left: 20,
	},
	cellOneSubTitle: {
		color: '#999',
		fontSize: 25,
		left: 30,
	}

});

