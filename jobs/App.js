import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';

import AuthScreen from './screens/AuthScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import MapScreen from './screens/MapScreen';
import DeckScreen from './screens/DeckScreen';
import SettingsScreen from './screens/SettingsScreen';
import ReviewScreen from './screens/ReviewScreen';

const stackNav = createStackNavigator({
  Review: ReviewScreen,
  Settings: SettingsScreen
})

const mainTabs = createBottomTabNavigator({
  Map: MapScreen,
  Deck: DeckScreen,
  Review: stackNav
});


export default createBottomTabNavigator({
    Welcome:  WelcomeScreen,
    Auth: AuthScreen,
    main: mainTabs
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
