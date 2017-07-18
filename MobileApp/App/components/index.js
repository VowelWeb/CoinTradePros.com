import React, { Component } from 'react';
import {
	StyleSheet,
	Image,
	Text,
	TouchableOpacity,
	View,
	BackHandler
} from 'react-native';

import { Navigator } from 'react-native-deprecated-custom-components';

import Login from './login';
import Register from './register';
import Welcome from './welcome';
import AddProPackage from './addpropackage';
import SendAlert from './sendalert';
import Home from './home';
import CloseTradeNext from './closetradenext';
import CloseTrade from './closetrade';
import ForgetPassword from './forgetpassword';

export default class Index extends Component { 

	constructor(props){
		super(props)
		this.navigator = null;
    
    	this.handleBack = (() => {
	    	if (this.navigator && this.navigator.getCurrentRoutes().length > 1){
	        	this.navigator.pop();
	    		return true;
	    	}
	      	return false;
    	}).bind(this)
	}

	componentDidMount() {
    	BackHandler.addEventListener('hardwareBackPress', this.handleBack);
  	}

	componentWillUnmount() {
		BackHandler.removeEventListener('hardwareBackPress', this.handleBack);
	}

	renderScene(route, navigator) {
		var {state,actions} = this.props;
		var routeId = route.id;

		if (routeId === 'home') {
			return (
				<Home 
				{...this.props}
				userData = {route.userData}
				navigator = {navigator} 
			/>
			);
		}

		if (routeId === 'login') {
			return (
				<Login 
				{...this.props}
				userData = {route.userData}
				navigator = {navigator} 
			/>
			);
		}
		
		if (routeId === 'register') {
			return (
				<Register 
				{...this.props}
				userData = {route.userData}
				navigator = {navigator} 
			/>
			);
		}

		if (routeId === 'welcome') {
			return (
				<Welcome 
				{...this.props}
				userData = {route.userData}
				navigator = {navigator} 
			/>
			);
		}

		if (routeId === 'addpropackage') {
			return (
				<AddProPackage 
				{...this.props}
				userData = {route.userData}
				navigator = {navigator} 
			/>
			);
		}

		if (routeId === 'sendalert') {
			return (
				<SendAlert 
				{...this.props}
				userData = {route.userData}
				navigator = {navigator} 
			/>
			);
		}

		if (routeId === 'closetrade') {
			return (
				<CloseTrade 
				{...this.props}
				userData = {route.userData}
				navigator = {navigator} 
			/>
			);
		}

		if (routeId === 'closetradenext') {
			return (
				<CloseTradeNext 
				{...this.props}
				userData = {route.userData}
				navigator = {navigator} 
			/>
			);
		}

		if (routeId === 'forgetpassword') {
			return (
				<ForgetPassword 
				{...this.props}
				userData = {route.userData}
				navigator = {navigator} 
			/>
			);
		}

	}



	render() {
		return (
			<View style = {{flex: 1}}>
				<Navigator
					style={{flex:1}}
					ref={navigator => {this.navigator = navigator}}
					initialRoute = {{id: 'home', name: 'home'}}
					renderScene = {this.renderScene.bind(this)}
				/>
			</View>
		)
	}
}