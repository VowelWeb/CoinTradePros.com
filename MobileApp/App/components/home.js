'use strict';

import React, {
  Component
} from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  Dimensions,
  TouchableHighlight,
  ScrollView,
  AsyncStorage,
} from 'react-native';


const {width, height} = Dimensions.get('window');

import Video from 'react-native-video';
import {responsiveHeight, responsiveWidth} from 'react-native-responsive-dimensions';

export default class Home extends Component {

  componentDidMount() {
    this.getData();
    this.randomUsers();
  }

  getData() {
    AsyncStorage.multiGet(['userId', 'userName', 'userAvatar']).then((data) => {
      console.log(data)
      let userName = data[1][1];
      let userId = data[0][1];
      let userAvatar = data[2][1];
      if (userId != null) {
        this.props.navigator.replace({id: 'welcome'});
      }
    }).done();
  }

  randomUsers() {
    fetch("http://www.amkwebsolutions.com/trades/random-protraders/", {
      method: "GET",
    }).then((response) => response.json())
    .then((responseData) => {
      this.state.user1 = responseData.randomusers_image[0],
      this.state.user2 = responseData.randomusers_image[1],
      this.state.user3 = responseData.randomusers_image[2],
      this.state.user4 = responseData.randomusers_image[3]
    }).done();
  }

  state = {
    rate: 1,
    volume: 1,
    muted: false,
    resizeMode: 'contain',
    duration: 0.0,
    currentTime: 0.0,
    paused: true,
  };

  video: Video;

  onLoad = (data) => {
    this.setState({ duration: data.duration });
  };

  onProgress = (data) => {
    this.setState({ currentTime: data.currentTime });
  };

  onEnd = () => {
    this.setState({ paused: true })
    this.video.seek(0)
  };

  onAudioBecomingNoisy = () => {
    this.setState({ paused: true })
  };

  onAudioFocusChanged = (event: { hasAudioFocus: boolean }) => {
    this.setState({ paused: !event.hasAudioFocus })
  };

  getCurrentTimePercentage() {
    if (this.state.currentTime > 0) {
      return parseFloat(this.state.currentTime) / parseFloat(this.state.duration);
    }
    return 0;
  };

  renderRateControl(rate) {
    const isSelected = (this.state.rate === rate);

    return (
      <TouchableOpacity onPress={() => { this.setState({ rate }) }}>
        <Text style={[styles.controlOption, { fontWeight: isSelected ? 'bold' : 'normal' }]}>
          {rate}x
        </Text>
      </TouchableOpacity>
    );
  }

  renderResizeModeControl(resizeMode) {
    const isSelected = (this.state.resizeMode === resizeMode);

    return (
      <TouchableOpacity onPress={() => { this.setState({ resizeMode }) }}>
        <Text style={[styles.controlOption, { fontWeight: isSelected ? 'bold' : 'normal' }]}>
          {resizeMode}
        </Text>
      </TouchableOpacity>
    )
  }

  renderVolumeControl(volume) {
    const isSelected = (this.state.volume === volume);

    return (
      <TouchableOpacity onPress={() => { this.setState({ volume }) }}>
        <Text style={[styles.controlOption, { fontWeight: isSelected ? 'bold' : 'normal' }]}>
          {volume * 100}%
        </Text>
      </TouchableOpacity>
    )
  }

  render() {
    const flexCompleted = this.getCurrentTimePercentage() * 100;
    const flexRemaining = (1 - this.getCurrentTimePercentage()) * 100;

    return (
      <View style={styles.container}>
        <View style={styles.header_main} >
            <Image source={{uri: 'http://res.cloudinary.com/vowelweb/image/upload/v1498114115/Logo_mqzlgt.png'}}   style={styles.header_logo}/>
        </View>
        <TouchableOpacity
          style={styles.fullScreen}
          onPress={() => this.setState({ paused: !this.state.paused })}
        >
          <Video
            ref={(ref: Video) => { this.video = ref }}
            source={require('../video/mov_bbb.mp4')}
            style={{width: width, height: width / (16/9)}}
            rate={this.state.rate}
            paused={this.state.paused}
            volume={this.state.volume}
            muted={this.state.muted}
            resizeMode={this.state.resizeMode}
            onLoad={this.onLoad}
            onProgress={this.onProgress}
            onEnd={this.onEnd}
            onAudioBecomingNoisy={this.onAudioBecomingNoisy}
            onAudioFocusChanged={this.onAudioFocusChanged}
            repeat={false}
          />
        </TouchableOpacity>
        <ScrollView>
        <View style={{flex: 0.5, flexDirection: 'row', paddingBottom: 10, paddingTop: 5,}}>
            <TouchableHighlight style={styles.buttonLogin} onPress={() => this.props.navigator.push({id: 'login'})} underlayColor='#99d9f4'>
              <Text style={styles.buttonTextLogin}>LOGIN</Text>
            </TouchableHighlight>
            <TouchableHighlight style={styles.buttonRegister} onPress={() => this.props.navigator.push({id: 'register'})} underlayColor='#99d9f4'>
              <Text style={styles.buttonTextRegister}>REGISTER</Text>
            </TouchableHighlight>
        </View>
        <View style={{flex: 0.2, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', paddingBottom: 10,}}>
          <Text style={styles.heading}>The Coin TradePros Traders</Text>
          <Text style={styles.heading}>Here Can Help!</Text>
        </View>
        <View style={{flex: 0.5, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>        
          <Image source={{uri: this.state.user1 }} style={{width: 120, height: 120, marginRight: 50, marginBottom: 10, borderRadius: 150,}} />
          <Image source={{uri: this.state.user2 }} style={{width: 120, height: 120, marginBottom: 10, borderRadius: 150,}} />
        </View>
        <View style={{flex: 0.5, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>        
          <Image source={{uri: this.state.user3 }} style={{width: 120, height: 120, marginRight: 50, marginBottom: 10, borderRadius: 150,}} />
          <Image source={{uri: this.state.user4 }} style={{width: 120, height: 120, marginBottom: 10, borderRadius: 150,}} />
        </View>
        </ScrollView>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#efeff2',
  },
  fullScreen: {
    flex: 0.6, 
    backgroundColor: 'black',
    justifyContent: 'center',
    borderBottomWidth:2,
    borderColor: 'black',
  },
  header_main: {
    flex: 0.25, 
    backgroundColor: 'white',
    justifyContent: 'center',
    flexDirection: 'row',
    paddingLeft: 30,
    paddingRight: 30,
    borderBottomWidth:1,
  },
  header_logo: { 
    flex:1,
    width:null,
    height:null,
    resizeMode:'contain'
  },
    buttonTextLogin: {
    fontSize: 18,
    color: '#d40000',
    alignSelf: 'center',
    fontFamily: 'Montserrat-SemiBold',
  },
  buttonLogin: {
    height: 40,
    backgroundColor: '#fff',
    borderColor: '#d40000',
    borderWidth: 2,
    marginTop: 10,
    marginBottom: 0,
    alignSelf: 'stretch',
    justifyContent: 'center',
    marginLeft: 20,
    marginRight: 10,
    width: responsiveWidth(41.5),
  },
    buttonTextRegister: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center',
    fontFamily: 'Montserrat-SemiBold',
  },
  buttonRegister: {
    height: 40,
    backgroundColor: '#217821',
    borderColor: '#217821',
    borderWidth: 2,
    marginTop: 10,
    marginBottom: 0,
    alignSelf: 'stretch',
    justifyContent: 'center',
    marginLeft: 10,
    marginRight: 20,
    width: responsiveWidth(41.5),
  },
  heading: {
    fontFamily: 'Montserrat-SemiBold',
    color: 'black',
    fontSize: 22,
  }
});