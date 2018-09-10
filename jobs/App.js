import React from 'react';
import { StyleSheet } from 'react-native';
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import { Provider } from 'react-redux';

import store from './store';
import AuthScreen from './screens/AuthScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import MapScreen from './screens/MapScreen';
import DeckScreen from './screens/DeckScreen';
import SettingsScreen from './screens/SettingsScreen';
import ReviewScreen from './screens/ReviewScreen';

const stackNav = createStackNavigator({
  Review: ReviewScreen,
  Settings: SettingsScreen
});

const mainTabs = createBottomTabNavigator({
  Map: MapScreen,
  Deck: DeckScreen,
  Review: stackNav
});


const MainBottomTabsNavigator = createBottomTabNavigator({
    Welcome:  WelcomeScreen,
    Auth: AuthScreen,
    main: mainTabs
},{
  navigationOptions: {
    tabBarVisible: false
  }
});

class App extends React.Component {
  render () {
    return (
      <Provider store={store}>
        <MainBottomTabsNavigator />
      </Provider>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;