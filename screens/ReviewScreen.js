import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Button } from "react-native-elements";

class ReviewScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Review Jobs',
      headerRight: (
        <Button
          title="Settings"
          onPress={ navigation.getParam('navigateToSettings') }>
        </Button>
      )
    }
  }

  constructor () {
    super();
    this.navigateToSettings = this.navigateToSettings.bind(this);
  }

  componentDidMount () {
    this.props.navigation.setParams({ navigateToSettings: this.navigateToSettings });
  }

  navigateToSettings () {
    this.props.navigation.navigate('settings');
  }

  render () {
    return (
      <View>
        <Text>ReviewScreen</Text>
        <Text>ReviewScreen</Text>
        <Text>ReviewScreen</Text>
      </View>
    );
  }
}

export default ReviewScreen;