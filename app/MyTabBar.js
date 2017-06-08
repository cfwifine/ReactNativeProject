import React, {Component} from 'react';
import {
	TabBarIOS,
	NavigatorIOS,
} from 'react-native';
import HomePage from './HomePage';
import FavaritePage from './FavaritePage';

export default class MyTabBar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			selectedBarItem: 'home'
		};
	}
	render() {
		return(
			<TabBarIOS
				barTintColor = 'white'
				tintColor = 'green'
				unselectedItemTintColor = 'gray'
				translucent = {true}
			>
				<TabBarIOS.Item
					systemIcon = 'more'
					selected = {this.state.selectedBarItem === 'home'}
					onPress = {()=>{this.setState({selectedBarItem: 'home'})}}
				>
					<NavigatorIOS
						style={{flex: 1}}
						initialRoute={{
							component: HomePage,
							title: '首页'
						}}
						renderScene={(route, navigator)=>{
							let HomePageomePagee = route.component;
							return <HomePage navigator={navigator}></HomePage>
						}}
					/>
				</TabBarIOS.Item>

				<TabBarIOS.Item
					systemIcon = 'favorites'
					selected = {this.state.selectedBarItem==='favor'}
					onPress = {()=>{this.setState({selectedBarItem: 'favor'})}}
				>
					<NavigatorIOS 
						style={{flex: 1}}
						initialRoute={{
							component: FavaritePage,
							title: '收藏',
						}}
						renderScene={(route, navigator)=>{
							let FavaritePage = route.component;
							return <FavaritePage></FavaritePage>
						}}
					/>
				</TabBarIOS.Item>
			</TabBarIOS>
		);
	}
}