import React from 'react';
import {
  AppRegistry,
  Text,
  View,
  Button,
} from 'react-native';
import { TabNavigator } from "react-navigation";

import Login from "./Login"
import Index from "./index";
import Peminjaman from "./Peminjaman";
import Pinjam from "./Pinjam";
import About from "./About";

const MainApp = TabNavigator({
  Index: { screen: Index },
  Peminjaman: {screen: Peminjaman },
  Pinjam: {screen: Pinjam },
  About: { screen: About },
});

export default MainApp;