
import {observable} from 'mobx'
import {observer} from 'mobx-react/native'
import React, {Component} from 'react'
import {
	View,
	Text,
	TouchableOpacity,
	StyleSheet,

} from 'react-native';

@observer
export default class CounterClass extends Component {
	@observable 
	count = 0;

	@observable
	counts = [];

	plus = ()=>{
		this.count+=1;

		
	}

	minus = ()=>{
		this.count-=1;
	}

	render() {
		return(
			<View style={styles.containView}>
				<LineItem plus={this.plus} minus={this.minus} count={this.count}></LineItem>
				<LineItem plus={this.plus} minus={this.minus} count={this.count}></LineItem>
			</View>
		);
	}
}

class LineItem extends Component {
	render() {
		return(
			<View style={styles.LineItemView}>

			{/*加一*/}
				<TouchableOpacity onPress={this.props.plus}>
					<Text>Add</Text>
				</TouchableOpacity>

			{/*结果*/}
				<Text>结果：{this.props.count}</Text>
				
			{/*减一*/}
				<TouchableOpacity onPress={this.props.minus}>
					<Text>Mins</Text>
				</TouchableOpacity>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	containView: {
		backgroundColor: 'red',
		height: 200,
		marginTop: 64,
	},
	LineItemView: {
		backgroundColor: 'white',
		height: 100-1,
		marginTop: 1,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	}
});

