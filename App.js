import React from "react";
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import { StyleSheet, View } from "react-native";
import AuthScreen from './screens/AuthScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import MapScreen from './screens/MapScreen';
import DeckScreen from './screens/DeckScreen';
import SettingsScreen from './screens/SettingsScreen';
import ReviewScreen from './screens/ReviewScreen';

const Navigator = createBottomTabNavigator({
  auth: AuthScreen,
  welcome: WelcomeScreen,
  main: createBottomTabNavigator({
    map: MapScreen,
    deck: DeckScreen,
    review: createStackNavigator({
      settings: SettingsScreen,
      review: ReviewScreen
    })
  })
});

export default class App extends React.Component {
  render () {
    return (
      <View style={styles.container}>
        <Navigator />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});