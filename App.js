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
  main: {
    navigationOptions: {
      title: 'Main'
    },
    screen: createBottomTabNavigator({
      map: MapScreen,
      deck: DeckScreen,
      review: {
        navigationOptions: {
          title: 'Review Jobs'
        },
        screen: createStackNavigator({
          review: ReviewScreen,
          settings: SettingsScreen
        })
      }
    })
  }
});

/**
createStackNavigator({
  settings: SettingsScreen,
  review:  {
    screen: ReviewScreen,
    navigationOptions: () => ({
      title: `A`,
      headerBackTitle: null
    })
  }
})
*/

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