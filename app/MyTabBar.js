import React, {Component} from 'react';
import {
	TabBarIOS,
	NavigatorIOS,
} from 'react-native';

import HomeClodePage  from './HomeClodePage';
import HomePartyPage  from './HomePartyPage';
import HomeComcatPage from './HomeComcatPage';
import HomeMePage     from './HomeMePage';
 
export default class MyTabBar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			selectedItemIndex: 0,
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
					selected = {this.state.selectedItemIndex === 0}
					onPress = {()=>{this.setState({selectedItemIndex: 0})}}
				>
					<NavigatorIOS
						style={{flex: 1}}
						initialRoute={{
							component: HomeClodePage,
							title: '云办公',
						}}
						renderScene={(route, navigator)=>{
							let HomeClodePage = route.component;
							return <HomeClodePage></HomeClodePage>
						}}
					/>
				</TabBarIOS.Item>

				<TabBarIOS.Item
					systemIcon = 'more'
					selected = {this.state.selectedItemIndex === 1}
					onPress = {()=>{this.setState({selectedItemIndex: 1})}}
				>
					<NavigatorIOS 
						style={{flex: 1}}
						initialRoute={{
							component: HomePartyPage,
							title: '党建',
						}}
						renderScene={(route, navigator)=>{
							let HomePartyPage = route.component;
							return <HomePartyPage></HomePartyPage>
						}}
					/>
				</TabBarIOS.Item>
					
				<TabBarIOS.Item
					systemIcon = 'more'
					selected = {this.state.selectedItemIndex === 2}
					onPress = {()=>{this.setState({selectedItemIndex: 2})}}
				>
					<NavigatorIOS
						style={{flex: 1}}
						initialRoute = {{
							component: HomeComcatPage,
							title: '通讯录',
						}}
						renderScene = {(route, navigator)=>{
							let HomeComcatPage = route.component;
							return <HomeComcatPage></HomeComcatPage>
						}}
					/>
				</TabBarIOS.Item>

				<TabBarIOS.Item
					systemIcon = 'more'
					selected = {this.state.selectedItemIndex === 3}
					onPress = {()=>{this.setState({selectedItemIndex: 3})}}
				>
					<NavigatorIOS
						style = {{flex: 1}}
						initialRoute = {{
							component: HomeMePage,
							title: '我的',
						}}
						renderScene = {(route, navigator)=>{
							let HomeMePage = route.component;
							return <HomeMePage></HomeMePage>
						}}
					/>
				</TabBarIOS.Item>
			</TabBarIOS>
		);
	}
}