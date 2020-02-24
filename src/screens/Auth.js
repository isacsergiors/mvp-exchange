import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { View, StyleSheet, Dimensions, TextInput, Text, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import { font } from '../styles/fonts';
import Axios from 'axios';
// # styles
// # types
// # imports
// # services
// # utils
// # actions
// # components 

const screen = Dimensions.get("window")

export default function ({ navigation }) {

  const [uid, setUid] = useState("");
  const [loginError, setLoginError] = useState(false);

  const isAuthentication = async () => {

    let user = await AsyncStorage.getItem("user")

    if (user)
      navigation.navigate("Home", { user: JSON.parse(user) })
  }

  const login = async () => {

    const { data } = await Axios.get("/user/" + uid);

    if (data) {
      console.log(data);
      await AsyncStorage.setItem("user", JSON.stringify(data));
      navigation.navigate("Home", { user: data });
    } else {
      setLoginError(true);
    }

  }

  useEffect(() => {

    isAuthentication();
  })

  return (
    // <LinearGradient colors={["#bc4cf7", "rgb(113, 89, 193)"]} start={{ x: 0, y: 0 }} end={{ x: 2, y: 2 }}>
    <View style={styles.container}>

      <View style={{ marginTop: 40, alignItems: "center" }}>
        <FontAwesome name="user-secret"
          size={121} color="rgb(100,100,120)" />
      </View>

      <View style={{ alignItems: "center", marginTop: 50, marginBottom: 2 }}>

        <View style={styles.inputContainer}>
          {/* <Text style={styles.label}>Banco</Text> */}
          <TextInput placeholder="UID" style={styles.input} placeholderTextColor="rgb(220,220,220)" onChangeText={(text) => setUid(text)} />
        </View>

        <View style={styles.inputContainer}>
          {/* <Text style={styles.label}>Banco</Text> */}
          <TextInput placeholder="PIN" style={styles.input} placeholderTextColor="rgb(220,220,220)" keyboardType="numeric" />
        </View>

      </View>

      <View style={{ alignItems: "center", marginTop: 50 }}>
        <LinearGradient colors={["#bc4cf7f9", "#7873eef9"]} start={{ x: 0, y: 0 }} end={{ x: 2, y: 2 }} style={{ borderRadius: 2, }}>
          <TouchableOpacity style={styles.button}
            onPress={() => login()}
          >
            <Text style={styles.buttonText}>Entrar</Text>
          </TouchableOpacity>
        </LinearGradient>
      </View>

      {
        loginError ? <View style={{ alignItems: "center", marginTop: 50 }}>
          <Text style={{
            color: "rgb(100,100,120)",
            fontFamily: font.SulphurPointBold,
            fontSize: 16
          }}>
            <Text style={{ color: "rgb(255,80,80)" }}>ERRO </Text>
            UID não encontrado
       </Text>
        </View> : null
      }

    </View>
    // </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get("window").height + 20
  },
  inputContainer: {
    marginTop: 50
  },
  label: {
    fontFamily: font.SulphurPointBold,
    color: "rgb(110,100,120)",
    fontSize: 15,
    marginVertical: 10,
    textTransform: "uppercase"
  },
  input: {
    fontFamily: font.SulphurPointBold,
    fontSize: 22,
    color: "rgb(60,60,75)",
    borderBottomColor: "rgba(113, 89, 193, 0.2)",
    borderBottomWidth: 1,
    paddingVertical: 5,
    paddingHorizontal: 20,
    width: screen.width / 1.15
  },
  inputContainer: {
    marginTop: 30
  },
  button: {
    paddingHorizontal: 60,
    paddingVertical: 13,
    // backgroundColor: "rgba(255,255,255,0.9)"
  },
  buttonText: {
    fontSize: 17,
    textTransform: "uppercase",
    color: "white",
    fontFamily: font.SulphurPointBold
  },
})