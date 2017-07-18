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
  ScrollView,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class ForgetPassword extends Component {

  constructor(props) {
    super(props)

    this.state = {
      email: '',
    }
  }

  _userForgetPassword() { 
    var email = this.state.email;
    if (email) {
      fetch("http://www.amkwebsolutions.com/trades/forget-password/", {
        method: "POST", 
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          'email': email
        })
      }).then((response) => response.json())
      .then((responseData) => {
        if (responseData.status==1) {
          alert("Password Send");
        } else {
          alert("Email doesn't exist");
        }
      }).done();
    }
  }

  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#efeff2'}}>
        <ScrollView>
          <View style={styles.header_main} >
              <TouchableHighlight onPress={() => this.props.navigator.push({id: 'login',})}><Icon name="arrow-left" size={20} color="black" /></TouchableHighlight>
              <Image source={{uri: 'http://res.cloudinary.com/vowelweb/image/upload/v1498114115/Logo_mqzlgt.png'}} style={styles.header_logo}/>
              <Icon name="list-ul" size={20} color="black" />
          </View>
          <View style={styles.body_main}> 
            <Text style={styles.body_main_heading} >FORGOT PASSWORD</Text>
            <TextInput 
              underlineColorAndroid='transparent'
              placeholder="Your Email" 
              returnKeyLabel = {"next"} 
              onChangeText={(email) => this.setState({email:email})} 
              placeholderTextColor = "white"
              style={{height: 50, borderRadius: 45, marginLeft: 20, marginRight: 20, marginTop: 10, backgroundColor: '#a6a6a8', fontFamily: 'Montserrat-SemiBold', color: 'white', fontSize: 18, justifyContent:'center', textAlign:'center'}} 
            />
            <Text style={styles.body_main_descript} >We will send a link to your registered email or mobile {"\n"} using which you will be able to create a new {"\n"} password.</Text>
            <TouchableHighlight style={styles.button} onPress={() => this._userForgetPassword()} underlayColor='#99d9f4'>
              <Text style={styles.buttonText}>Proceed</Text>
            </TouchableHighlight>
          </View>
        </ScrollView>
      </View>
    );
  }

}

var styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header_main: {
    flex: 1, 
    paddingLeft: 20, 
    paddingRight:20, 
    backgroundColor: 'white',
    justifyContent: 'center',
    flexDirection: 'row',
    borderBottomWidth:1,
    alignItems: 'center',
  },
    
  header_logo: { 
    width:300,
    height:90,
    resizeMode:'contain',
    marginRight: 15,
    marginLeft: 15,
  },
  body_main: {
    flex: 2, 
    backgroundColor: '#efeff2',
    justifyContent: 'center'

  },
  body_main_heading: {
    textAlign:'center',
    fontSize:24,
    paddingTop:20,
    fontFamily: 'Montserrat-SemiBold',
    color: 'black',
  },
  body_main_descript: {
    fontFamily: 'Montserrat-SemiBold',
    textAlign:'center',
    justifyContent: 'center',
    paddingTop: 20,
    paddingLeft: 10,
    paddingRight: 10,
    fontSize: 12,
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center',
    fontFamily: 'Montserrat-SemiBold',
  },
  button: {
    height: 50,
    backgroundColor: '#217821',
    borderColor: '#217821',
    borderWidth: 1,
    borderRadius: 45,
    marginTop: 20,
    alignSelf: 'stretch',
    justifyContent: 'center',
    marginLeft: 20, 
    marginRight: 20,
  },
});