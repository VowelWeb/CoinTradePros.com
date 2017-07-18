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
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import Hr from '../modules/hr.dist';
import { CheckBox } from 'react-native-elements';

export default class AddProPackage extends Component {

  render() {
    return (
      <View style={{flex: 1}}>
        <ScrollView>
          <View style={styles.header_main} >
              <TouchableHighlight onPress={() => this.props.navigator.push({id: 'welcome', userData: {userId: this.props.userData.userId, userName: this.props.userData.userName, userAvatar: this.props.userData.userAvatar}})}><Icon name="arrow-left" size={20} color="black" /></TouchableHighlight>
              <Image source={{uri: 'http://res.cloudinary.com/vowelweb/image/upload/v1498114115/Logo_mqzlgt.png'}} style={styles.header_logo}/>
              <Icon name="list-ul" size={20} color="black" />
          </View>
          <View style={styles.body_main}> 
              <Text style={styles.body_main_heading} >Add Pro Package</Text>
              <Text style={{fontFamily: 'Montserrat-Medium', color: 'black', fontSize: 12, paddingLeft: 20, paddingTop: 5,}}>Package Title</Text>
              <TextInput 
                underlineColorAndroid='transparent'
                placeholder="CryptoNinja Alerts" 
                returnKeyLabel = {"next"} 
                onChangeText={(text) => this.setState({username:text})} 
                placeholderTextColor = "black"
                autoCorrect={false}
                style={{height: 50, backgroundColor: 'white', marginLeft: 20, marginRight: 20, marginTop: 0, borderWidth: 1, fontFamily: 'Montserrat-Medium', color: 'black', fontSize: 12, paddingLeft: 10,}} 
              />
              <Text style={{fontFamily: 'Montserrat-Medium', color: 'black', fontSize: 12, paddingLeft: 20, paddingTop: 10,}}>Package Description</Text>
              <TextInput 
                underlineColorAndroid='transparent'
                returnKeyLabel = {"next"} 
                onChangeText={(text) => this.setState({username:text})} 
                placeholderTextColor = "black"
                autoCorrect={false}
                multiline={true}
                numberOfLines={6}
                style={{ backgroundColor: 'white', marginLeft: 20, marginRight: 20, marginTop: 0, borderWidth: 1, fontFamily: 'Montserrat-Medium', color: 'black', fontSize: 12, paddingLeft: 10,}} 
              />              
              <Text style={{fontFamily: 'Montserrat-Medium', color: 'black', fontSize: 12, paddingLeft: 20, paddingTop: 10,}}>Monthly Price</Text>
              <TextInput 
                underlineColorAndroid='transparent'
                placeholder="99.00" 
                returnKeyLabel = {"next"} 
                onChangeText={(text) => this.setState({username:text})} 
                placeholderTextColor = "black"
                autoCorrect={false}
                style={{height: 50, backgroundColor: 'white', marginLeft: 20, marginRight: 20, marginTop: 0, borderWidth: 1, fontFamily: 'Montserrat-Medium', color: 'black', fontSize: 12, paddingLeft: 10,}} 
              />
              <Text style={{fontFamily: 'Montserrat-Medium', color: 'black', fontSize: 12, paddingLeft: 20, paddingTop: 10,}}>Annual Price</Text>
              <TextInput 
                underlineColorAndroid='transparent'
                placeholder="199.00" 
                returnKeyLabel = {"next"} 
                onChangeText={(text) => this.setState({username:text})} 
                placeholderTextColor = "black"
                autoCorrect={false}
                style={{height: 50, backgroundColor: 'white', marginLeft: 20, marginRight: 20, marginTop: 0, borderWidth: 1, fontFamily: 'Montserrat-Medium', color: 'black', fontSize: 12, paddingLeft: 10,}} 
              />
              <Text style={{fontFamily: 'Montserrat-Medium', color: 'black', fontSize: 12, paddingLeft: 20, paddingTop: 10,}}>Package Features</Text>
              <TouchableHighlight style={styles.button} onPress={() => this._userLogin()} underlayColor='#99d9f4'>
                <Text style={styles.buttonText}>Manage Features</Text>
              </TouchableHighlight>
              <CheckBox
                title='Chatroom Access'
                textStyle={{
                  color: 'black',
                }}
                fontFamily='Montserrat-Bold'
                checked='true'
                checkedColor='black'
                containerStyle = {{
                  backgroundColor: '#efeff2',
                  paddingBottom: 0,
                }}
              />
              <CheckBox
                title='Daily Cryoto Watchlist'
                textStyle={{
                  color: 'black',
                }}
                fontFamily='Montserrat-Bold'
                containerStyle = {{
                  backgroundColor: '#efeff2',
                  paddingTop: 0,
                  paddingBottom: 0,
                }}
              />
              <CheckBox
                title='Realtime Email/SMS Trade Alerts'
                fontFamily='Montserrat-Bold'
                textStyle={{
                  color: 'black',
                }}
                containerStyle = {{
                  backgroundColor: '#efeff2',
                  paddingTop: 0,
                  paddingBottom: 0,
                }}
              />
              <CheckBox
                title='Weekly Video Lessons'
                fontFamily='Montserrat-Bold'
                textStyle={{
                  color: 'black',
                }}
                containerStyle = {{
                  backgroundColor: '#efeff2',
                  paddingTop: 0,
                  paddingBottom: 0,
                }}
              />
              <CheckBox
                title='Video Lessons Library'
                fontFamily='Montserrat-Bold'
                textStyle={{
                  color: 'black',
                }}
                containerStyle = {{
                  backgroundColor: '#efeff2',
                  paddingTop: 0,
                }}
              />
              <TouchableHighlight style={styles.buttons} onPress={() => this._userLogin()} underlayColor='#99d9f4'>
                <Text style={styles.buttonText}>Save Package</Text>
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
    justifyContent: 'flex-start',
  },
  body_main_heading: {
    fontSize:24,
    fontFamily: 'Montserrat-Bold',
    color: '#217821',
    paddingLeft: 20,
  },

  body_main_view_image: {
    flex: 1,
    backgroundColor: '#efeff2',
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 0,
  },
  body_main_image: {
    width:150,
    height:150,
    resizeMode:'contain',
    paddingLeft: 50, 
    paddingRight:50,
    marginTop: 20,
  },
  body_main_input: {
  },
    buttonText: {
    fontSize: 12,
    color: 'white',
    alignSelf: 'center',
    fontFamily: 'Montserrat-Medium',
  },
  button: {
    height: 40,
    width: 160,
    backgroundColor: '#217821',
    borderColor: '#217821',
    borderWidth: 1,
    marginTop: 5,
    alignSelf: 'stretch',
    justifyContent: 'center',
    marginLeft: 20, 
    marginRight: 0,
  },
  buttons: {
    height: 40,
    width: 160,
    backgroundColor: '#217821',
    borderColor: '#217821',
    borderWidth: 1,
    marginTop: 5,
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 130,
  },
});