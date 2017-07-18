import React, { Component } from 'react';
import {
	View,
	Text,
	StatusBar,
	TouchableOpacity
} from 'react-native';

import Components from '../components/index';

export default class Index extends Component {

	componentDidMount(){
	}

	render() {
		return(
			<View style={{flex:1}}>
				<Components />
			</View>
		);
	}
}