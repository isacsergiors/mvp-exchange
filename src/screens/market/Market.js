import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
// # styles
import styles from './styles';
// # types
// # imports
// # services
// # utils
// # actions
// # components 

export default function (props) {

  return (
    <View style={styles.container}>
      <View style={{}}>
        <View style={{flexDirection: "row", justifyContent: "center"}}>
          <TouchableOpacity style={styles.buttonOrder}>
            <Text>Comprar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonOrder}>
            <Text>Vender</Text>
          </TouchableOpacity>
        </View>

      </View>
    </View>
  );
}