import React, { Component } from 'react';
import { AppLoading } from 'expo';
import { View, Text, AsyncStorage } from 'react-native';
import Slides from "../components/Slides";
import _ from 'lodash';

const SLIDE_DATA = [
  { text: 'Welcome to JobApp', bgColor: '#FD6E8A' , textColor: '#ffffff'},
  { text: 'Use this to get a job', bgColor: '#55A7DF' , textColor: '#ffffff'},
  { text: 'Set your location, then swipe away', bgColor: '#250352', textColor: '#ffffff' }
];

class WelcomeScreen extends Component {
  state = { token: null };

  async componentWillMount () {
    let token = await AsyncStorage.getItem('fb_token');
    if(token){
      this.setState({ token });
      this.props.navigation.navigate('map');
    } else {
      this.setState({ token: false });
    }
  }

  onSlidesComplete () {
    this.props.navigation.navigate('auth');
  }

  render() {
    if (_.isNull(this.state.token)) {
      return <AppLoading />;
    }

    return (
      <Slides
        data={ SLIDE_DATA }
        onComplete={ this.onSlidesComplete.bind(this) }/>
    );
  }
}

export default WelcomeScreen;