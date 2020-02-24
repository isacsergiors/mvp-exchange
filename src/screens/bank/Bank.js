import React, { Component } from 'react';
import { View, Text, TextInput, Dimensions, FlatList, ScrollView, TouchableWithoutFeedback, Image, TouchableOpacity } from 'react-native';
// # styles
import styles from './styles';
import { font } from '../../styles/fonts';
// # types 
// # imports
// # services
// # utils
// # actions
// # components 
import LinearGradient from 'react-native-linear-gradient';

const screen = Dimensions.get("window")

class NameClass extends Component {

  state = {
    accoutType: 0
  };

  render() {

    const { accoutType } = this.state;

    return (
      // <LinearGradient colors={["#7873ee", "#bc4cf7"]} start={{ x: 0, y: 0 }} end={{ x: 2, y: 1 }} style={{ height: Dimensions.get("window").height + 20 }}>
      <ScrollView style={styles.container}>

        <View style={{alignItems: "center", paddingVertical: 5}}>
          <Image source={require("../../assets/images/hand.png")} style={{
            width: 90, height: 90
          }} />
        </View>

        <View style={{}}>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Banco</Text>
            <TextInput placeholder="0000" style={styles.input} placeholderTextColor="rgb(220,220,220)" keyboardType="numeric" />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Número da conta</Text>
            <TextInput placeholder="0000" style={styles.input} placeholderTextColor="rgb(220,220,220)" keyboardType="numeric" />
          </View>


          <View style={styles.inputContainer}>
            <Text style={styles.label}>Agencia</Text>
            <TextInput placeholder="00000-0" style={styles.input} placeholderTextColor="rgb(220,220,220)" keyboardType="numeric"/>
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Tipo de conta</Text>

            <View style={{
              flexDirection: "row",
              justifyContent: "space-between", 
              alignItems: "center",
            }}>
              <TouchableWithoutFeedback onPress={() => this.setState({ accoutType: 0 })}>
                <View style={[styles.buttonTypeBank,
                accoutType === 0 ? { backgroundColor: "rgb(113, 89, 193)", elevation: 2, borderWidth: 0 } : {}
                ]}>
                  <Text style={[styles.buttonTextBankType, accoutType === 0 ? { color: "white" } : {}]}>Corrente</Text>
                </View>
              </TouchableWithoutFeedback>

              <TouchableWithoutFeedback onPress={() => this.setState({ accoutType: 1 })}>
                <View style={[styles.buttonTypeBank,
                accoutType === 1 ? { backgroundColor: "rgb(113, 89, 193)", elevation: 2, borderWidth: 0 } : {}
                ]}>
                  <Text style={[styles.buttonTextBankType, accoutType === 1 ? { color: "white" } : {}]}>Poupança</Text>
                </View>
              </TouchableWithoutFeedback>


            </View>

          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>CPF</Text>
            <TextInput placeholder="000000000-00" style={styles.input} placeholderTextColor="rgb(220,220,220)" keyboardType="numeric"/>
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Carteira de recebimento Bitcoin</Text>
            <TextInput placeholder="14fZ4KNPX7mKEvnDs7f4vRR6YmWFZjAJqH" style={styles.input} placeholderTextColor="rgb(220,220,220)" />
          </View>

        </View>

        <View style={{alignItems: "center", marginTop: 50}}>

          <TouchableOpacity style={styles.buttonSave}>
            <Text style={styles.buttonSaveText}>Salvar dados</Text>
          </TouchableOpacity>
          
        </View>

      </ScrollView>
      // </LinearGradient>
    );
  };
};

export default NameClass;