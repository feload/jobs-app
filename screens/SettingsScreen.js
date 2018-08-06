import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Button } from "react-native-elements";
import * as actions from '../actions';
import { connect } from "react-redux";

class SettingsScreen extends Component {
  static navigationOptions = {
    title: 'Settings'
  }

  render () {
    return (
      <View>
        <Button
          title="Reset liked Jobs"
          large
          icon={{ name: 'delete-forever' }}
          backgroundColor="#F44336"
          onPress={this.props.clearLikedJobs} />
      </View>
    );
  }
}

export default connect(null, actions)(SettingsScreen);