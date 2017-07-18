/**
 * CoinTradePros.com React Native App
 * http://www.cointradepros.com/
 * @flow
 */

import React, { Component } from 'react';
import { 
	AppRegistry,
	StyleSheet,
	View,
	Image,
	TouchableOpacity,
	PixelRatio,
	Text,
	TouchableHighlight,
	ScrollView,
	TextInput,
	Picker,
} from 'react-native';

import ImagePicker from 'react-native-image-picker';
import Icon from 'react-native-vector-icons/FontAwesome';
import ModalDropdown from 'react-native-modal-dropdown';
import DatePicker from 'react-native-datepicker';

export default class CloseTrade extends Component {

	state = {
		avatarSource: null,
	}
	
	SelectPhotoTapped() {
		const options = {
			quality: 1.0,
			maxWidth: 500,
			maxHeight: 500,
			storageOptions: {
				skipBackup: true
			}
		};

		ImagePicker.showImagePicker(options, (response) => {
			console.log('Response = ', response);

			if (response.didCancel) {
				console.log('User cancelled image picker');
			}
			else if (response.error) {
				console.log('Image Picker Error: ', response.error);
			}
			else if (response.customButton) {
				console.log('User Tapped Cutom Button: ', response.customButton);
			}
			else {
				let source = { uri: respinse.uri };

				this.setState({
					avatarSource: source
				});
			}
		});
	}

	render() {
		return(
			<View style={styles.container}>
				<View style={styles.header_main} >
					<TouchableHighlight onPress={() => this.props.navigator.push({id: 'welcome', userData: {userId: this.props.userData.userId, userName: this.props.userData.userName, userAvatar: this.props.userData.userAvatar}})}><Icon name="arrow-left" size={20} color="black" /></TouchableHighlight>
					<Image source={{uri: 'http://res.cloudinary.com/vowelweb/image/upload/v1498114115/Logo_mqzlgt.png'}} style={styles.header_logo}/>
					<Icon name="list-ul" size={20} color="black" />
				</View>
				<ScrollView>
			        <View style={styles.body_main}>
			            <Text style={styles.body_main_heading} >Post a Closed Trade</Text>
						<Text style={{fontFamily: 'Montserrat-Medium', color: 'black', fontSize: 12, paddingLeft: 20, paddingTop: 10,}}>Cryptocurrency</Text>
						<ModalDropdown style={{marginLeft:20, marginRight:20, width:370, borderWidth:1, backgroundColor: 'white', height:35, marginTop: 5,}} textStyle={{fontFamily: 'Montserrat-Medium', fontSize: 10, color:'black', paddingTop: 8, paddingLeft: 8,}} defaultValue={'Select Cryptocurrency'} dropdownStyle={{width:370, height:250, borderWidth:1,}} dropdownTextStyle={{color:'black', fontSize: 14, fontFamily:'Montserrat-Medium', paddingLeft:10,}} options={['test', 'test1', 'test2']} /> 
			            <Text style={{fontFamily: 'Montserrat-Medium', color: 'black', fontSize: 12, paddingLeft: 20, paddingTop: 10,}}>Chart</Text>
						<TouchableOpacity onPress={this.SelectPhotoTapped.bind(this)}>
							<View style={[styles.avatar, styles.avatarContainer, {marginBottom: 20}]}>
								<Text style={{color: 'black', fontFamily: 'Montserrat-Medium',}}>Browse...</Text> 
							</View>
						</TouchableOpacity>
			            <Text style={{fontFamily: 'Montserrat-Medium', color: 'black', fontSize: 12, paddingLeft: 20, paddingTop: 5,}}>Entry Date</Text>
			            <DatePicker 
			              style={{width:200, paddingLeft: 20, paddingTop: 5,}}
			              date={this.state.date}
			              placeholder=" /        / "
			              format="DD/MM/YYYY"
			              customStyles={{
			                dateInput: {
			                  backgroundColor:'white',
			                }
			              }}
			              onDateChange={(date) => {this.setState(date: date)}}
			            />
			            <Text style={{fontFamily: 'Montserrat-Medium', color: 'black', fontSize: 12, paddingLeft: 20, paddingTop: 5,}}>Exit Date</Text>
			            <DatePicker 
			              style={{width:200, paddingLeft: 20, paddingTop: 5,}}
			              date={this.state.date}
			              placeholder=" /        / "
			              format="DD/MM/YYYY"
			              customStyles={{
			                dateInput: {
			                  backgroundColor:'white',
			                }
			              }}
			              onDateChange={(date) => {this.setState(date: date)}}
			            />
			            <Text style={{fontFamily: 'Montserrat-Medium', color: 'black', fontSize: 12, paddingLeft: 20, paddingTop: 10,}}>Entry Price</Text>            
			            <TextInput
			              style={{height:35, marginLeft: 20, marginRight:20, backgroundColor: 'white', width: 370, borderWidth: 1, marginTop:5,}}
			            />
			            <Text style={{fontFamily: 'Montserrat-Medium', color: 'black', fontSize: 12, paddingLeft: 20, paddingTop: 10,}}>Exit Price</Text>
			            <TextInput
			              style={{height:35, marginLeft: 20, marginRight:20, backgroundColor: 'white', width: 370, borderWidth: 1, marginTop:5,}}
			            />
			            <Text style={{fontFamily: 'Montserrat-Medium', color: 'black', fontSize: 12, paddingLeft: 20, paddingTop: 10,}}>Position Size</Text>            
			            <TextInput
			              style={{height:35, marginLeft: 20, marginRight:20, backgroundColor: 'white', width: 370, borderWidth: 1, marginTop:5,}}
			            />
						<TouchableHighlight style={styles.button} onPress={() => this.props.navigator.push({id: 'closetradenext', userData: {userId: this.props.userData.userId, userName: this.props.userData.userName, userAvatar: this.props.userData.userAvatar}})} underlayColor='#99d9f4'>
              				<Text style={styles.buttonText}>Next</Text>
           				</TouchableHighlight>
			        </View>
				</ScrollView>
			</View>
		);
	}	
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'flex-start',
		backgroundColor: '#efeff2'
	},
	avatarContainer: {
		borderColor: '#9B9B9B',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'white',
		marginTop: 5,
		marginLeft: 20,
	},
	avatar: {
		width: 371,
		height: 40,
		borderWidth: 1,
		borderColor: 'black'
	},
	header_main: {
	    flex: 0.15, 
	    paddingLeft: 30, 
	    paddingRight:30, 
    	backgroundColor: 'white',
    	justifyContent: 'center',
    	flexDirection: 'row',
    	borderBottomWidth:1,
	    alignItems: 'center',
	},
    header_logo: { 
	    width:300,
		height:100,
		resizeMode:'contain',
		marginRight: 12,
		marginLeft: 12,
	},
	body_main: {
	    flex: 5, 
	    backgroundColor: '#efeff2',
	    justifyContent: 'flex-start',
	},
	body_main_heading: {
	    fontSize:24,
	    fontFamily: 'Montserrat-Bold',
	    color: '#217821',
	    paddingLeft: 20,
	    paddingTop: 8,
	},
	cover: {
		flex: 1,
		alignItems: 'center'
	},
	button: {
	    height: 35,
	    backgroundColor: '#006837',
	    borderColor: '#006837',
	    borderWidth: 1,
	    borderRadius: 10,
	    alignSelf: 'stretch',
	    justifyContent: 'center',
	    marginLeft: 80, 
	    marginRight: 80,
	    marginTop: 10,
	    marginBottom: 10,
	},
		buttonText: {
	    justifyContent: 'center',
	    textAlign: 'center',
	    fontFamily: 'Montserrat-Bold',
	    color: 'white'
	},
});