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
  Picker,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import { CheckBox } from 'react-native-elements';
import ModalDropdown from 'react-native-modal-dropdown';
import DatePicker from 'react-native-datepicker';

export default class SendAlert extends Component {

  constructor(props) {
    super(props)
    this.state = {
      date: '', 
      trade: ''
    }
  }

  updateTrade = (trade) => {
    this.setState({trade: trade})
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header_main} >
            <TouchableHighlight onPress={() => this.props.navigator.replace({id: 'welcome', userData: {userId: this.props.userData.userId, userName: this.props.userData.userName, userAvatar: this.props.userData.userAvatar}})}><Icon name="arrow-left" size={20} color="black" /></TouchableHighlight>
            <Image source={{uri: 'http://res.cloudinary.com/vowelweb/image/upload/v1498114115/Logo_mqzlgt.png'}}   style={styles.header_logo}/>
            <Icon name="list-ul" size={20} color="black" />
        </View>
        <ScrollView>
          <View style={styles.body_main}> 
            <Text style={styles.body_main_heading} >Send Subscriber Alert</Text>
            <Text style={{fontFamily: 'Montserrat-Medium', color: 'black', fontSize: 12, paddingLeft: 20, paddingTop: 0,}}>Send An Alert to your subscribers. Start with an existing open trade, or create a new one.</Text>
            <Text style={{fontFamily: 'Montserrat-Medium', color: 'black', fontSize: 14, paddingLeft: 20, paddingTop: 5,}}>Alert Open Trade</Text>
            <ModalDropdown style={{marginLeft:20, marginRight:20, width:370, borderWidth:1, backgroundColor: 'white', height:35, marginTop: 5,}} textStyle={{fontFamily: 'Montserrat-Medium', fontSize: 12, color:'black', paddingTop: 8, paddingLeft: 8,}} defaultValue={'Select Open Trade'} dropdownStyle={{width:370, height:250, borderWidth:1,}} dropdownTextStyle={{color:'black', fontSize: 14, fontFamily:'Montserrat-Medium', paddingLeft:10,}} options={['test', 'test1', 'test2']} />
            <Text style={{fontFamily: 'Montserrat-Medium', color: 'black', paddingTop: 10, fontSize: 16, textAlign: 'center'}}>- OR - </Text>
            <Text style={{fontFamily: 'Montserrat-Medium', color: 'black', fontSize: 14, paddingLeft: 20, paddingTop: 5,}}>Cryptocurrency</Text>
            <ModalDropdown style={{marginLeft:20, marginRight:20, width:370, borderWidth:1, backgroundColor: 'white', height:35, marginTop: 5,}} textStyle={{fontFamily: 'Montserrat-Medium', fontSize: 12, color:'black', paddingTop: 8, paddingLeft: 8,}} defaultValue={'Select Cryptocurrency'} options={['test', 'test1', 'test2']} />
            <Text style={{fontFamily: 'Montserrat-Medium', color: 'black', fontSize: 14, paddingLeft: 20, paddingTop: 10,}}>Entry Date</Text>
            <DatePicker 
              style={{width:200, paddingLeft: 20, paddingTop: 5,}}
              date={this.state.date}
              mode="date"
              placeholder=" /        / "
              format=" DD / MM / YYYY "
              customStyles={{
                dateInput: {
                  backgroundColor:'white',
                }
              }}
              onDateChange={(date) => {this.setState({date: date});}}
            />
            <Text style={{fontFamily: 'Montserrat-Medium', color: 'black', fontSize: 14, paddingLeft: 20, paddingTop: 10,}}>Entry Price</Text>            
            <TextInput
              style={{height:35, marginLeft: 20, marginRight:20, backgroundColor: 'white', width: 370, borderWidth: 1, marginTop:5,}}
            />
            <Text style={{fontFamily: 'Montserrat-Medium', color: 'black', fontSize: 14, paddingLeft: 20, paddingTop: 10,}}>Position Size</Text>            
            <TextInput
              style={{height:35, marginLeft: 20, marginRight:20, backgroundColor: 'white', width: 370, borderWidth: 1, marginTop:5,}}
            />
            <Text style={{fontFamily: 'Montserrat-Medium', color: 'black', fontSize: 14, paddingLeft: 20, paddingTop: 10,}}>Comments</Text>
            <TextInput
              multiline = {true}
              numberOfLines={5}
              style={{marginLeft: 20, marginRight:20, backgroundColor: 'white', width: 370, borderWidth: 1, marginTop:5,}}
            />
            <Text style={{fontFamily: 'Montserrat-Medium', color: 'black', fontSize: 14, paddingLeft: 20, paddingTop: 10,}}>Exchange</Text>
            <ModalDropdown style={{marginLeft:20, marginRight:20, width:370, borderWidth:1, backgroundColor: 'white', height:35, marginTop: 5,}} textStyle={{fontFamily: 'Montserrat-Medium', fontSize: 12, color:'black', paddingTop: 8, paddingLeft: 8,}} defaultValue={'Select Exchange'} options={['test', 'test1', 'test2']} />
            <Text style={{fontFamily: 'Montserrat-Medium', color: '#e56a64', fontSize: 10, paddingLeft: 20, paddingTop: 10,}}>This Trade alert will be sent to 286 subscribers via SMS.</Text>
            <TouchableHighlight style={styles.button} onPress={() => this._userLogin()} underlayColor='#99d9f4'>
              <Text style={styles.buttonText}>Send Alert</Text>
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