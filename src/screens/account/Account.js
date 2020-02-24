import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
// # styles
import styles from './styles';
import { font } from '../../styles/fonts';
import AsyncStorage from '@react-native-community/async-storage';
// # types
// # imports
// # services
// # utils
// # actions
// # components 

class Account extends Component {

  state = {
    user: {
      idHash: "---",
      wallet: "---"
    },
    bank: {
      number: "---",
      type: "---",
      account: "---",
      agency: "---",
      holder: "---"
    },
  };

  async componentDidMount() {

    let user = await AsyncStorage.getItem("user");
    user = JSON.parse(user);
    this.setState({user})

  }

  render() {

    const {account, number, type, agency, holder} = this.state.bank;

    return (
      <View style={styles.container}>

        <View style={{
          paddingVertical: 14, paddingHorizontal: 20
        }}>
          <Text style={{
            fontSize: 20,
            color: "rgb(120,100,120)",
            fontFamily: font.MontserratMedium,
          }}>ID Hash</Text>

          <View style={{ paddingVertical: 5, paddingLeft: 10 }}>
            <Text style={{ color: "rgb(100,100,120)" }}>{this.state.user.idHash}</Text>
          </View>
        </View>

        <View style={{
          paddingVertical: 14, paddingHorizontal: 20
        }}>
          <Text style={{
            fontSize: 20,
            color: "rgb(120,100,120)",
            fontFamily: font.MontserratMedium,
          }}>Carteira <Text style={{
            color: "#ffb034",
            fontFamily: font.SulphurPointBold,
          }}>
              BTC
            </Text>
          </Text>

          <View style={{ paddingVertical: 5, paddingLeft: 10 }}>
            <Text style={{ color: "rgb(100,100,120)" }}>{this.state.user.wallet}</Text>
          </View>
        </View>

        <View style={{ paddingVertical: 15 }}>
          <Text style={{ color: "rgba(255,255,255,0.95)", fontSize: 16, fontWeight: "bold" }}>
            DADOS BANCÁRIOS
        </Text>
        </View>

        <View style={styles.containerBank}>

          <View style={{}}>

            <View style={styles.bankData}>
              <Text style={styles.bankDataInfoName}>Banco</Text>
              <Text style={styles.bankDataInfoValue}>{number}</Text>
            </View>

            <View style={styles.bankData}>
              <Text style={styles.bankDataInfoName}>Agencia</Text>
              <Text style={styles.bankDataInfoValue}>{agency}</Text>
            </View>

            <View style={styles.bankData}>
              <Text style={styles.bankDataInfoName}>Cta. corrente</Text>
              <Text style={styles.bankDataInfoValue}>{account}</Text>
            </View>

            <View style={styles.bankData}>
              <Text style={styles.bankDataInfoName}>CPF</Text>
              <Text style={styles.bankDataInfoValue}>{holder}</Text>
            </View>

          </View>

        </View>

        <View style={{ alignItems: "center", marginTop: 30 }}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Editar dados</Text>
          </TouchableOpacity>
        </View>

      </View>
    );
  };
};

export default Account;

