import  React,  { Component, Proptypes } from  'react';  
import  { 
Alert,  
ScrollView,
StyleSheet,
Text,
TextInput,
TouchableOpacity,
View,
Image,
} from  'react-native'; 

import Peminjaman from './Peminjaman';
import { StackNavigator } from "react-navigation";

var url = 'http://mhs.rey1024.com/1415051006/index.php/Transaksi/prosesPinjam/'; 
  
class Pinjam extends Component { 

static navigationOptions = {
  title: 'Pinjam LCD',
};

constructor(props) {
    super(props);
    this.state = {
      id_lcd: "",
      nim: "",
      kondisi: "",
    };
  }

  onSave() {
    fetch(url + '?id_lcd=' + this.state.id_lcd + '&nim=' + this.state.nim + '&kondisi=' + this.state.kondisi)
      .then((response) => response.json())
      .then((responseData) => {
        var id = responseData;
        if (id != 1) {
          Alert.alert(
            'Error',
            'Input Data Failed !',            
          );
         }
         else 
       {
          const { navigate } = this.props.navigation;                 
          Alert.alert(
            'Success',
            'Data Has Been Successfuly Added !',
            [    
              {text: 'OK', onPress: () => navigate('Peminjaman')},
            ],
              { cancelable: false }
          );
        }  
      })
      .done();
  }

  
  render () {
    return (
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Text style={styles.title}>Pinjam LCD</Text>
        </View>
        <View style={styles.formContainer}>
          <TextInput 
            onChangeText={(u) => this.setState({id_lcd: u})}
            placeholder="ID LCD"
            underlineColorAndroid="transparent"
            placeholderTextColor="rgba(255,255,255,0.7)"
            style={styles.input}
          />
          <TextInput 
            onChangeText={(p) => this.setState({nim: p})}
            placeholder="Masukkan NIM"
            underlineColorAndroid="transparent"
            placeholderTextColor="rgba(255,255,255,0.7)"
            style={styles.input}
          />
          <TextInput 
            onChangeText={(k) => this.setState({kondisi: k})}
            placeholder="Masukkan Kondisi"
            underlineColorAndroid="transparent"
            placeholderTextColor="rgba(255,255,255,0.7)"
            style={styles.input}
          />
          <TouchableOpacity style={styles.buttonContainer}
          onPress={this.onSave.bind(this)}>
            <Text style={styles.buttonText}>Pinjam</Text>
          </TouchableOpacity>
        </View>
      </View> 
    );
  }
}

const NavigasiPinjam = StackNavigator({
  Pinjam: {screen: Pinjam},
  Peminjaman: {screen: Peminjaman},
}, {
  headerMode: 'none'
});

const styles  = StyleSheet.create({ 
  container: {
    flex: 1,
    backgroundColor: '#3498db',
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: 10,
    flexGrow: 1,
    justifyContent: 'center',
  },
  formContainer: {
    padding: 20,
    marginTop: 10,
  },
  logo: {
    width: 100,
    height: 100,
  },
  title:{
    color: '#fff',
    fontSize: 25,
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

export  default Pinjam;