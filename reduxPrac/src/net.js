import NetInfo from "@react-native-community/netinfo";
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {
  View,
  StyleSheet,
  FlatList,
  Image,
  Text,
  Dimensions,
  SafeAreaView,
} from 'react-native';


NetInfo.addEventListener(networkState => {
    console.log("Connection type - ", networkState.type);
    console.log("Is connected? - ", networkState.isConnected);
  });
