import React, {Component} from 'react';
import {
	View,
	Text,
	StyleSheet,
	TouchableOpacity,
	LayoutAnimation,
} from 'react-native';


export default class LayAnimation extends Component {
	constructor(props) {
		super(props);
		this.state = {
			width: 100,
			heigt: 100,
			marginTop: 64,
		};
	}
	moveLayoutAnimaion() {
		LayoutAnimation.spring();
		// this.setState({w: this.state.w+10, h: this.state.h+10});
		this.setState({marginTop: this.state.marginTop+10});
	}
	render() {
		return(
			<View style={styles.syBgContainer}>
				<View style={[styles.syViewBox, {marginTop: this.state.marginTop}]}></View>
				<TouchableOpacity onPress={()=>this.moveLayoutAnimaion()}>
					<View style={styles.syMoveTouchable}>
						<Text style={{fontSize: 15, color: 'black'}}>点我移动</Text>
					</View>
				</TouchableOpacity>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	syBgContainer: {
		flex: 1,
		backgroundColor: '#f6f6f6',
	},
	syViewBox: {
		backgroundColor: 'red',
		width: 100,
		height: 100,
		marginTop: 64,
		alignSelf: 'center'
	},
	syMoveTouchable: {
		backgroundColor: 'orange',
		padding: 10,
		marginTop: 5,
	}
});