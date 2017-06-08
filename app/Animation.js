import React, {
    Component,
} from 'react';
import {
     AppRegistry,
     Image,
     StyleSheet,
     Text,
     View,
     ListView,
     Animated,
     TouchableOpacity,
     LayoutAnimation,
 } from 'react-native';

import LayAnimation from './LayAnimation';
import TimingAnimation from './TimingAnimation';

 class Animation extends Component {
 	constructor(props) {
 		super(props);
 		this.state = {
            dataSource: this.getDataSource(),
 		};
 	}
    getDataSource() {
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2)=>{r1!==r2}});
        return ds.cloneWithRows(['LayoutAnimation', 'Timing']);
    }
    didSelectedCell(rowData,sectionID,rowID) {
        const components = [LayAnimation,TimingAnimation];
        this.props.navigator.push({
            title: rowData,
            component: LayAnimation,
        });
    }
    renderRow(rowData, rowID, sectionID) {
        return(
            <TouchableOpacity onPress={()=>this.didSelectedCell(rowData,sectionID,rowID)}>
                <View style={styles.syCellContainer}>
                    <Text style={styles.syCellText}>{rowData}</Text>
                </View>
            </TouchableOpacity>
        );
    }
    render() {
     	return(
     		<View style={styles.bgViewContainer}>
                <ListView 
                    dataSource= {this.state.dataSource}
                    renderRow= {this.renderRow.bind(this)}
                    style= {styles.syListView}
                />
     		</View>
     	);
    }
 };

export default Animation;

const styles = StyleSheet.create({
	bgViewContainer: {
		backgroundColor: '#f6f6f6',
		flexDirection: 'column',
		flex: 1,
		justifyContent: 'center'
	},
    syListView: {
        flex: 1,
    },
    syCellContainer: {
        backgroundColor: 'white',
        marginTop: 1,
        flexDirection: 'row',
        paddingVertical: 10,
        paddingHorizontal: 10,
    },
    syCellText: {
        fontSize: 20,
        color: 'black',
    }
});