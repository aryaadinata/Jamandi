import React, {Component} from 'react';
import {AppRegistry, StyleSheet, View, Image, Text, TextInput, TouchableOpacity, Alert,} from 'react-native';

import MainApp from './MainApp';

import { StackNavigator } from "react-navigation";

var SERVER_LOGIN_URL = 'http://mhs.rey1024.com/1415051006/index.php/user/Login';

export default class Login extends Component {

  static navigationOptions = {
    title: 'Login',
  };

  render () {        
    return (
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image 
            style={styles.logo}
            source={require('./Image/pti.png')}
          />

          <Text style={styles.title}>Jamandi Login</Text>
        </View>
        <View style={styles.formContainer}>
          <TextInput 
            onChangeText={(u) => this.setState({username: u})}
            placeholder="Username"
            underlineColorAndroid="transparent"
            placeholderTextColor="rgba(255,255,255,0.7)"
            style={styles.input}
          />
          <TextInput 
            onChangeText={(p) => this.setState({password: p})}
            placeholder="Password"
            underlineColorAndroid="transparent"
            placeholderTextColor="rgba(255,255,255,0.7)"
            secureTextEntry
            style={styles.input}
          />
          <TouchableOpacity style={styles.buttonContainer}
          onPress={this.ProsesLogin.bind(this)}>
            <Text style={styles.buttonText}>LOGIN</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  componentDidMount() {
     fetch('http://mhs.rey1024.com/1415051006/index.php/user/jsonUser')
        .then((response) => response.json())
        .then((responseJson) => {this.setState({lcd: responseJson.id_lcd});})
        .catch((error) => {
            console.error(error);
        })
  }

  ProsesLogin() {    
    if (this.state.username == '') {
      Alert.alert(
            'Error',
            'Username Cannot Be Empty!',
      );
      return;
    }
    if (this.state.password == '') {
      Alert.alert(
            'Error',
            'Password Cannot be Empty!',
      );
      return;
    }
    
    fetch("http://mhs.rey1024.com/1415051006/index.php/user/Login?username="+this.state.username+"&password="+this.state.password+"")
      .then((response) => response.json())
      .then((responseData) => {
        var id = responseData;
        if (id != 1) {
          Alert.alert(
            'Error',
            'Invalid Username or Password!',
          );
        }
        else {          
          const { navigate } = this.props.navigation;       
          navigate('MainApp');
        }
      })
      .done();
  }  
}

const NavigasiLogin = StackNavigator({
  Login: {screen: Login},
  MainApp: { screen: MainApp },
}, {
  headerMode: 'none'
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3498db',
  },
  logoContainer: {
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center',
  },
  formContainer: {
    padding: 20,
  },
  logo: {
    width: 100,
    height: 100,
  },
  title:{
    color: '#fff',
    marginTop: 10,
    width: 160,
    textAlign: 'center',
    opacity: 0.9,
  },
  input : {
    height: 40,
    backgroundColor: 'rgba(255,255,255,0.2)',
    marginBottom: 20,
    color: '#fff',
    paddingHorizontal: 10,    
  },
  buttonContainer: {
    backgroundColor: '#2980b9',
    paddingVertical: 15,
  },
  buttonText: {
    textAlign: 'center',
    color: '#fff',
    fontWeight: '700',
  }
});

AppRegistry.registerComponent('Jamandi', () => NavigasiLogin);