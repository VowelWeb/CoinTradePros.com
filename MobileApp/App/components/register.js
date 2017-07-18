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
} from 'react-native';

// import hr from 'react-native-hr';
import Icon from 'react-native-vector-icons/FontAwesome';
import Hr from '../modules/hr.dist';

export default class Register extends Component {

  constructor(props) {
    super(props)

    this.state = {
      name: '',
      email: '',
      password: '',
      mobile: '',
    }
  }

  componentDidMount() {
    this._userRegister();
  }

  _userRegister() { 
    var user = this.state.name;
    var email = this.state.email;
    var pass = this.state.password;
    var mobile = this.state.mobile;
    if (pass && user && email && mobile) {
      fetch("http://www.amkwebsolutions.com/trades/rest_registeration/", {
        method: "POST", 
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          'display_name': user, 
          'email': email,
          'password': pass,
          'mobile': mobile
        })
      }).then((response) => response.json())
      .then((responseData) => {
        if (responseData.status==1) {
          this.props.navigator.replace({id: 'login'})
        } else {
          alert("Registeration Error, Please Try Again")
        }
      }).done(); 
    }
  }

  render() {
    return (
      <View style={{flex: 1}}>
          <View style={styles.header_main} >
              <TouchableHighlight onPress={() => this.props.navigator.push({id: 'home'})}><Icon name="arrow-left" size={20} color="black" /></TouchableHighlight>
              <Image source={{uri: 'http://res.cloudinary.com/vowelweb/image/upload/v1498114115/Logo_mqzlgt.png'}}   style={styles.header_logo}/>
              <Icon name="list-ul" size={20} color="black" />
          </View>
          <View style={styles.body_main}> 
            <Text style={styles.body_main_heading} >REGISTER</Text>
            <View style={styles.body_main_view_image}>
              <Image source={require("../images/Register.png")} style={styles.body_main_image}/>
            </View>

            <View style={styles.body_main_form}>
               <TextInput 
                underlineColorAndroid='transparent'
               	placeholder="Name" 
               	returnKeyLabel = {"next"} 
               	onChangeText={(name) => this.setState({name:name})} 
                placeholderTextColor = "white"
               	style={{height: 50, borderRadius: 45, marginLeft: 20, marginRight: 20, marginTop: 15, backgroundColor: '#a6a6a8', fontFamily: 'Montserrat-SemiBold', color: 'white', fontSize: 18, paddingLeft: 65,}} 
               />
               <TextInput 
                underlineColorAndroid='transparent'
                placeholder="Email" 
                returnKeyLabel = {"next"} 
                onChangeText={(email) => this.setState({email:email})} 
                placeholderTextColor = "white"
                style={{height: 50, borderRadius: 45, marginLeft: 20, marginRight: 20, marginTop: 10, backgroundColor: '#a6a6a8', fontFamily: 'Montserrat-SemiBold', color: 'white', fontSize: 18, paddingLeft: 65,}} 
               />
               <TextInput 
                underlineColorAndroid='transparent'
                secureTextEntry = {true}
               	placeholder="Password"  
                placeholderTextColor = "white"
               	returnKeyLabel = {"go"}
               	onChangeText={(password) => this.setState({password:password})} 
               	style={{height: 50, borderRadius: 45, marginLeft: 20, marginRight: 20, marginTop: 10, backgroundColor: '#a6a6a8', fontFamily: 'Montserrat-SemiBold', color: 'white', fontSize: 18, paddingLeft: 65,}} 
               />
               <TextInput 
                underlineColorAndroid='transparent'
                placeholder="Mobile Number" 
                returnKeyLabel = {"next"} 
                onChangeText={(mobile) => this.setState({mobile:mobile})} 
                placeholderTextColor = "white"
                style={{height: 50, borderRadius: 45, marginLeft: 20, marginRight: 20, marginTop: 10, backgroundColor: '#a6a6a8', fontFamily: 'Montserrat-SemiBold', color: 'white', fontSize: 18, paddingLeft: 65,}} 
               />
            </View>

          </View>
          <View style={{flex: 0.7, backgroundColor: '#efeff2',}}>
	        <TouchableHighlight style={styles.button} onPress={() => this._userRegister()} underlayColor='#99d9f4'>
	          <Text style={styles.buttonText}>Continue</Text>
	        </TouchableHighlight>
          </View>
          <View style={{flex: 0.4, backgroundColor: '#efeff2', flexDirection: 'row', justifyContent: 'center',}}>
          	<Text style={{fontFamily: 'Montserrat-SemiBold', color: 'black', fontSize: 16,}}>Already have an Account ? </Text>
            <TouchableHighlight onPress={() => this.props.navigator.replace({id: 'login'})}><Text style={{fontFamily: 'Montserrat-SemiBold', fontSize: 16, color: '#217821'}}> Sign in</Text></TouchableHighlight>
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
    flex:1,
    width:350,
    height:100,
    resizeMode:'contain',
    marginRight: 12,
    marginLeft: 12,
  },

  body_main: {
    flex: 4, 
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
    flex: 1,
    backgroundColor: '#efeff2',
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 0,
  },
  body_main_image: {
    width:null,
    height:null,
    resizeMode:'contain',
    paddingLeft: 50, 
    paddingRight:50
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
    height: 50,
    backgroundColor: '#217821',
    borderColor: '#217821',
    borderWidth: 1,
    borderRadius: 45,
    marginTop: 12,
    alignSelf: 'stretch',
    justifyContent: 'center',
    marginLeft: 20, 
    marginRight: 20,
  },
});