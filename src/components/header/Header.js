import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import styles from './styles';
import { font } from '../../styles/fonts';
import AsyncStorage from '@react-native-community/async-storage';

export default function ({ navigation }) {

  const [balance, setBalance] = useState(2);

  const start = async () => {

    let user = await AsyncStorage.getItem('user');
    user = JSON.parse(user);

    setBalance(user.balance);
  }

  useEffect(() => {

    start();
  })

  return (
    <LinearGradient colors={["#bc4cf7", "rgb(113, 89, 193)"]} start={{ x: 0, y: 0 }} end={{ x: 2, y: 2 }} style={styles.header}>

      <View style={{alignItems: "flex-end", marginTop: 10, marginRight: 15}}>
        <TouchableOpacity onPress={() => navigation.navigate("Account")}>
          <FontAwesome5 name="user-circle" size={25} color="white" />
        </TouchableOpacity>
      </View>

      <View style={styles.container}>

        <View style={styles.display}>
          <Text style={styles.balance}>
            <Text style={styles.simbol}>R$</Text>
            {balance.toFixed(2).replace(".", ",")}
          </Text>
        </View>

        <View style={{
          flexDirection: "row",
          justifyContent: "center", alignItems: "flex-end", top: 15
        }}>

          <TouchableOpacity style={styles.button}
            onPress={() => navigation.navigate("Deposit")}>
            <Text style={styles.buttonText}>Depositar</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Sacar</Text>
          </TouchableOpacity>

        </View>


      </View>
    </LinearGradient>
  );
}