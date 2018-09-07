import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Slides from '../components/Slides';

const SLIDE_DATA = [
  {
    text: 'Welcome to JobApp',
    color: '#03A9F4'
  },
  {
    text: 'Test slide',
    color: '#009688'
  },
  {
    text: 'Set your location, then swipe away',
    color: '#03A9F4'
  }
];

class WelcomeScreen extends Component {
  onSlidesComplete = () => {
    this.props.navigation.navigate('Auth');
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <Slides
          data={SLIDE_DATA}
          onComplete={this.onSlidesComplete}
        />
      </View>
    );
  }
}

export default WelcomeScreen;