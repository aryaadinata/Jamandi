import React, { Component } from 'react';
import {
  View,
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  ListView,
  Button,
  ScrollView,
} from 'react-native';

var URL="http://mhs.rey1024.com/1415051006/index.php/lcd/tampilJson";

class Index extends Component {     

  static navigationOptions = {
    title: 'List LCD',
  };

  constructor(props){    
    super(props);
    var ds = new 
    ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state={
       dataSource: ds,
    };
  }

  DataLCD() {
    fetch(URL)
    .then((response) => response.json())
    .then((responseData) => {
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows
        (responseData),
      });
    }) .done();
  }
 
  renderRow(record) {    
    return (
      <View style={styles.row}>
        <View style={styles.iconContainer}>
          <Image source={{ uri:'http://mhs.rey1024.com/1415051006/Image/'+record.id_lcd+'.jpg' }} style={styles.icon} />
        </View>
        <View style={styles.info}>
          <Text style={styles.items}>{record.id_lcd}</Text>
          <Text style={styles.address}>Merk : {record.merk}, Kondisi : {record.kondisi}</Text>
        </View>                  
        <View style={styles.total}>
          <Text>Keterangan :</Text>   
          <View style={styles.button}>       
          <Text style={styles.price1}>
            {record.status}
          </Text>
          </View>
        </View>       
      </View>
    );
  }

  render() {    
    this.DataLCD();
    return (
      <View>        
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderRow}    
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  whiteText: {
    color: 'white',
  },
  button: {
    padding: 1,
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
  logo: {
    position: "absolute",
    top: 15,
    left : 10,
    height : 50,
    width : 50,
  },
  container: {
    margin: 10,
    height: 150,
    marginTop: 100,
    backgroundColor: '#BBDEFB',
    borderRadius: 5,
  },
  innerContainer: {
    backgroundColor: '#388E3C',
    height: 80,
  },
  title: {
    fontSize: 30,
    fontWeight: '200',
    color: '#fff',
    position: 'absolute',
    backgroundColor: 'transparent',
    top: 10,
    left: 80,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 18,
    bottom: 10,
    left: 80,
    fontWeight: '200',
    color: '#fff',
    position: 'absolute',
    backgroundColor: 'transparent',
  },
  isi: {
    fontSize: 20,
    color: '#0d47a1',
    fontWeight: 'bold', 
    textAlign:'center',
  },
  row: {
    borderColor: '#ccc',
    borderBottomWidth: 1,
    flexDirection: 'row',
    marginLeft: 10,
    marginRight: 10,
    paddingTop: 20,
    paddingBottom: 20,
  },
  iconContainer: {
    alignItems: 'center',
    backgroundColor: 'transparent',
    borderColor: '#388E3C',
    borderRadius: 25,
    borderWidth: 1,
    justifyContent: 'center',
    height: 50,
    width: 50,
  },
  icon: {
    height: 30,
    width: 30,
  },
  info: {
    flex: 1,
    paddingLeft: 25,
    paddingRight: 25,
  },
  items: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 5,
  },
  address: {    
    fontSize: 14,
  },
  total: {
    width: 80,
  },
  date: {
    fontSize: 12,
    marginBottom: 5,
  },
  price1: {
    color: 'green',
    fontSize: 15,
    fontWeight: 'bold',
  },
});

export default Index;
