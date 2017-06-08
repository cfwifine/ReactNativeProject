import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from 'react-native';

class Layout extends Component {
	pushAction(){
		this.props.navigator.push({
			title: 'MyList',
			component: MyList
		});
	}
	bannerItemClicked() {
		alert('点击了...');
	}
	scrollEnd(e) {
		var offSetX = e.nativeEvent.contentOffset.x;
		var index = offSetX/sWIDH;
		alert('当前页面: '+(index+1));
	}
	renderItems() {
		var itemArray = [];
		var colorArray = ['gray','green','blue','orange','purple'];
		for(var i=0; i<colorArray.length; i++) {
			itemArray.push(
				<TouchableOpacity key={i} onPress={()=>this.bannerItemClicked()}>
					<View style={[styles.sy_item, {backgroundColor: colorArray[i]}]}>
						<Text style={{fontSize:40, color: 'black'}}>{i+1}</Text>
					</View>
				</TouchableOpacity>
			);
		}  
		return itemArray;
	}
	render() {
		return(
			<View style={styles.sy_bgContainerView}>
				<ScrollView 
					style={styles.sy_scollView}
					horizontal={true}
					automaticallyAdjustContentInsets={false}
					pagingEnabled={true}
					onMomentumScrollEnd={this.scrollEnd}
					>
					{this.renderItems()}
				</ScrollView>
			</View>
		);
	}
}
export default Layout;

var sWIDH = Dimensions.get('window').width;
const styles = StyleSheet.create({
	sy_bgContainerView: {
		flex: 1,
		backgroundColor: '#f6f6f6',
		justifyContent: 'center',
		alignItems: 'center'
	},
	sy_scollView: {
		marginTop: 64,
	},
	sy_item: {
		backgroundColor: 'red',
		width: sWIDH,
		height: 200,
		justifyContent: 'center',
		alignItems: 'center'
	}
});