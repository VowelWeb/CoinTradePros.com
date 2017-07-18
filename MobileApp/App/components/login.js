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
  Dimensions,
  AsyncStorage,
} from 'react-native';

// import hr from 'react-native-hr';
import Icon from 'react-native-vector-icons/FontAwesome';
import Hr from '../modules/hr.dist';
// import AndroidBackButton from 'react-native-android-back-button';
import SharedPreferences from 'react-native-shared-preferences';
import {responsiveHeight, responsiveWidth} from 'react-native-responsive-dimensions';

export default class Login extends Component {

  constructor(props) {
    super(props)

    this.state = {
      username: '',
      password: '',
    }
  }

  _userLogin() { 
    var pass = this.state.password;
    var user = this.state.username;
    if (pass && user) {
      fetch("http://www.amkwebsolutions.com/trades/rest_login/", {
        method: "POST", 
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          'username': user, 
          'password': pass
        })
      }).then((response) => response.json())
      .then((responseData) => {
        if (responseData.status==1) {
          AsyncStorage.setItem('userId', ''+responseData.user_id);
          AsyncStorage.setItem('userName', responseData.display_name);
          AsyncStorage.setItem('userAvatar', responseData.user_avtar);
          this.props.navigator.replace({id: 'welcome', userData: {userId: responseData.user_id, userName: responseData.display_name, userAvatar: responseData.user_avtar} })
        } else {
          alert("Incorrect Username or Password")
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
              <Text style={styles.body_main_heading} >LOGIN</Text>
              <View style={styles.body_main_view_image}>
                <Image source={require("../images/Login.png")} style={styles.body_main_image}/>
              </View>

              <View style={styles.body_main_form}>
                 <TextInput 
                  underlineColorAndroid='transparent'
                  placeholder="Username" 
                  returnKeyLabel = {"next"} 
                  onChangeText={(text) => this.setState({username:text})} 
                  placeholderTextColor = "white"
                  style={{height: 50, borderRadius: 45, marginLeft: 20, marginRight: 20, marginTop: 0, backgroundColor: '#a6a6a8', fontFamily: 'Montserrat-SemiBold', color: 'white', fontSize: 18, paddingLeft: 65,}} 
                 />
                 <TextInput 
                  underlineColorAndroid='transparent'
                  secureTextEntry = {true}
                  placeholder="Password"  
                  placeholderTextColor = "white"
                  returnKeyLabel = {"go"}
                  onChangeText={(password) => this.setState({password:password})} 
                  style={{height: 50, borderRadius: 45, marginLeft: 20, marginRight: 20, marginTop: 20, backgroundColor: '#a6a6a8', fontFamily: 'Montserrat-SemiBold', color: 'white', fontSize: 18, paddingLeft: 65,}} 
                 />
              </View>

            </View>
            <View style={{flex: 1, backgroundColor: '#efeff2',}}>
            <TouchableHighlight style={styles.button} onPress={() => this._userLogin()} underlayColor='#99d9f4'>
              <Text style={styles.buttonText}>Sign in</Text>
            </TouchableHighlight>
            </View>
            <View style={{flex: 0.6, backgroundColor: '#efeff2', flexDirection: 'row', paddingTop: 5, paddingLeft: 20, paddingRight: 20, width: responsiveWidth(100)}}>
              <TouchableHighlight style={{width: responsiveWidth(52),}} onPress={() => this.props.navigator.push({id: 'register'})}><Text style={{fontFamily: 'Montserrat-SemiBold', color: 'black', fontSize: 16,}}>Create Account</Text></TouchableHighlight>
              <TouchableHighlight style={{width: responsiveWidth(52),}} onPress={() => this.props.navigator.push({id: 'forgetpassword'})}><Text style={{fontFamily: 'Montserrat-SemiBold', color: 'black', fontSize: 16,}}>Forgot Password ?</Text></TouchableHighlight>
            </View>
            <View style={{flex: 0.4, paddingLeft: 10, paddingRight:10, backgroundColor: '#efeff2', alignItems: 'center', flexDirection: 'row',}}>
                <Hr lineStyle={{backgroundColor: "#a6a6a8"}} text='or' textStyle={{color: 'black', fontFamily: 'Montserrat-SemiBold', fontSize: 16,}}/>
            </View>
            <View style={{flex: 1, flexDirection: 'row', paddingLeft: 20, alignItems: 'center', backgroundColor: '#efeff2', paddingRight: 20}}>
              <Text style={{color: 'black', fontFamily: 'Montserrat-SemiBold', fontSize: 16, width: responsiveWidth(46)}}>Connect with us</Text>
              <View style={{width: responsiveWidth(15)}}>
                <Image source={require("../images/Facebook.png")} style={{width: 50, height: 50,}} />
              </View>
              <View style={{width: responsiveWidth(15)}}>
                <Image source={require("../images/Tumblr.png")} style={{width: 50, height: 50,}} />
              </View>
              <View style={{width: responsiveWidth(15)}}>
                <Image source={require("../images/Google.png")} style={{width: 50, height: 50,}} />
              </View>
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
    flex: 1.3, 
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
    justifyContent: 'center'

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
    marginTop: 20,
    alignSelf: 'stretch',
    justifyContent: 'center',
    marginLeft: 20, 
    marginRight: 20,
  },
});