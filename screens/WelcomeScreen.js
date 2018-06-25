import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Slides from "../components/Slides";

const SLIDE_DATA = [
  { text: 'Welcome to JobApp', bgColor: '#FD6E8A' , textColor: '#ffffff'},
  { text: 'Use this to get a job', bgColor: '#55A7DF' , textColor: '#ffffff'},
  { text: 'Set your location, then swipe away', bgColor: '#250352', textColor: '#ffffff' }
];

class WelcomeScreen extends Component {
  onSlidesComplete () {
    this.props.navigation.navigate('auth');
  }

  render () {
    return (
      <Slides data={ SLIDE_DATA } onComplete={ this.onSlidesComplete.bind(this) }/>
    );
  }
}

export default WelcomeScreen;