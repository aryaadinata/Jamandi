import React, { Component } from 'react';
import {
  AppRegistry
} from 'react-native';

import Login from './Login';
import Index from './index';

class ReactNativeStormpath extends Component {

  state = {
    isLoggedIn: false
  }

  render() {

    if (this.state.isLoggedIn) 
      return <Index 
          onLogoutPress={() => this.setState({isLoggedIn: false})}
        />;
    else 
      return <Login 
          onLoginPress={() => this.setState({isLoggedIn: true})}
        />;
  }

}

AppRegistry.registerComponent("Jamandi" , () => ReactNativeStormpath );