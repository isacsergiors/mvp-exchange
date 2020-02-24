import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
// # styles
import styles from './styles';
import LinearGradient from 'react-native-linear-gradient';
// # types
// # imports
// # services
// # utils
// # actions
// # components 

export default function (props) {

  return (
    <View style={styles.container}>

      <View style={{ paddingVertical: 15 }}>
        <Text style={{ color: "rgba(255,255,255,0.95)", fontSize: 16, fontWeight: "bold" }}>
          DADOS BANCÁRIOS
        </Text>
      </View>

      <View style={styles.containerBank}>

        <View style={{}}>

          <View style={styles.bankData}>
            <Text style={styles.bankDataInfoName}>Banco</Text>
            <Text style={styles.bankDataInfoValue}>237</Text>
          </View>

          <View style={styles.bankData}>
            <Text style={styles.bankDataInfoName}>Agencia</Text>
            <Text style={styles.bankDataInfoValue}>3750</Text>
          </View>

          <View style={styles.bankData}>
            <Text style={styles.bankDataInfoName}>Cta. corrente</Text>
            <Text style={styles.bankDataInfoValue}>709967-3</Text>
          </View>

          <View style={styles.bankData}>
            <Text style={styles.bankDataInfoName}>CPF</Text>
            <Text style={styles.bankDataInfoValue}>073.114.891-64</Text>
          </View>

        </View>

      </View>

      <View style={{ alignItems: "center", marginTop: 50 }}>
        <LinearGradient colors={["#bc4cf7f9", "#7873eef9"]} start={{ x: 0, y: 0 }} end={{ x: 2, y: 2 }} style={{borderRadius: 3,}}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Enviar comprovante</Text>
          </TouchableOpacity>
        </LinearGradient>
      </View>
    </View>
  );
}