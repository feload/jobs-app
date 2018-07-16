import React from "react";
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import { StyleSheet, View, Platform } from "react-native";
import { Provider } from "react-redux";
import store from "./store";

import AuthScreen from './screens/AuthScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import MapScreen from './screens/MapScreen';
import DeckScreen from './screens/DeckScreen';
import SettingsScreen from './screens/SettingsScreen';
import ReviewScreen from './screens/ReviewScreen';

const Navigator = createBottomTabNavigator({
  welcome: WelcomeScreen,
  auth: AuthScreen,
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
},
{
  tabBarOptions: {
    style: {
      display: 'none'
    }
  },
  lazy: true
});

export default class App extends React.Component {
  render () {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <Navigator />
        </View>
      </Provider>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});