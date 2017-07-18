/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Form,
  TouchableHighlight,
  AsyncStorage,
} from 'react-native';

// import hr from 'react-native-hr';
import Icon from 'react-native-vector-icons/FontAwesome';
import Hr from '../modules/hr.dist';

export default class Welcome extends Component {

  constructor(props) {
    super(props)

    this.state = {
      userId: '',
      userAvatar: '',
    }
  }

  _logout() {
    AsyncStorage.removeItem("userName");
    AsyncStorage.removeItem("userId");
    AsyncStorage.removeItem("userAvatar");
    this.props.navigator.replace({id: 'home'});
  }

  componentDidMount() {
    this.getData();
    this.getData1();
  }

  getData() {
    AsyncStorage.getItem("userName").then((value) => {
      this.setState({"userName": value});
    }).done();
  }

  getData1() {
    AsyncStorage.getItem("userAvatar").then((value) => {
      this.setState({"userAvatar": value});
    }).done();
  }

  render() {
    return (
      <View style={{flex: 1}}>

          <View style={styles.header_main} >
              <Image source={{uri: 'http://res.cloudinary.com/vowelweb/image/upload/v1498114115/Logo_mqzlgt.png'}}   style={styles.header_logo}/>
              <Icon name="list-ul" size={20} color="black" />
          </View>
          <View style={styles.body_main}>
            <View style={styles.body_main_view_image}>
              <Image source={{uri: this.state.userAvatar }} style={styles.body_main_image}/>
            </View>
              <Text style={styles.body_main_heading} >Welcome {this.state.userName}</Text>
          </View>
          <View style={{flex: 1.5, backgroundColor: '#efeff2', flexDirection: 'row',}}>
  	        <TouchableHighlight style={styles.button} underlayColor='#99d9f4'>
  	          <Text style={styles.buttonText}>         View{"\n"}Subscriptions</Text>
  	        </TouchableHighlight>
            <TouchableHighlight style={styles.button} onPress={() => this.props.navigator.push({id: 'sendalert', userData: {userId: this.props.userData.userId, userName: this.props.userData.userName, userAvatar: this.props.userData.userAvatar}})} underlayColor='#99d9f4'>
              <Text style={styles.buttonText}>Send Alert</Text>
            </TouchableHighlight>
          </View>
          <View style={{flex: 1.5, backgroundColor: '#efeff2', flexDirection: 'row',}}>
            <TouchableHighlight style={styles.button} onPress={() => this.props.navigator.push({id: 'addpropackage', userData: {userId: this.props.userData.userId, userName: this.props.userData.userName, userAvatar: this.props.userData.userAvatar}})} underlayColor='#99d9f4'>
              <Text style={styles.buttonText}>Add Pro{"\n"}Package</Text>
            </TouchableHighlight>
            <TouchableHighlight style={styles.button} onPress={() => this.props.navigator.push({id: 'closetrade', userData: {userId: this.props.userData.userId, userName: this.props.userData.userName, userAvatar: this.props.userData.userAvatar}})} underlayColor='#99d9f4'>
              <Text style={styles.buttonText}>Post A Trade</Text>
            </TouchableHighlight>
            <TouchableHighlight onPress={() => this._logout()} underlayColor='#99d9f4'>
              <Text>Logout</Text>
            </TouchableHighlight>
          </View>
      </View>
    );
  }
}


var styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header_main: {
    flex: 0.8, 
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
    flex: 2, 
    backgroundColor: '#efeff2',
    justifyContent: 'center',
  },
  body_main_heading: {
    textAlign:'center',
    fontSize:24,
    paddingTop:10,
    fontFamily: 'Montserrat-SemiBold',
    color: 'black',
  },

  body_main_view_image: {
    flex: 2,
    backgroundColor: '#efeff2',
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 0,
  },
  body_main_image: {
    width:150,
    height:150,
    borderRadius: 150,
    paddingLeft: 50, 
    paddingRight:50,
    marginTop: 20,
  },
  body_main_input: {
  },
    buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center',
    fontFamily: 'Montserrat-SemiBold',
  },
  button: {
    height: 140,
    width: 175,
    backgroundColor: '#217821',
    borderColor: '#217821',
    borderWidth: 1,
    marginTop: 12,
    alignSelf: 'stretch',
    justifyContent: 'center',
    marginLeft: 20, 
    marginRight: 0,
    borderWidth: 2,
    borderColor: 'black',
  },
});