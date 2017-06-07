import React, { Component } from 'react';
import { WebView } from 'react-native';

class About extends Component {
  static navigationOptions = {
    title: 'About',
  };
  render() {
    return (
      <WebView
        source={{uri: 'http://mhs.rey1024.com/1415051006/'}}
      />
    );
  }
}

export default About;
