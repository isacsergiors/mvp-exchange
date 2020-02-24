import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity } from 'react-native';
// # styles
import styles from './styles';
// # types
// # imports
// # services
// # utils
// # actions
// # components 

export default function (props) {

  const [value, setValue] = useState("");

  return (
    <View style={styles.container}>
      <View style={{ paddingHorizontal: 10, paddingVertical: 10, alignItems: "center" }}>
        <View style={{
          paddingHorizontal: 10, paddingVertical: 12, width: "50%",
          borderRadius: 3, 
          // borderColor: "rgb(200,200,200)", borderWidth: 2,
          alignItems: "center", justifyContent: "center"
        }}>
          <TextInput placeholder="R$" style={{ fontSize: 30, color: "rgb(200,200,200)" }} keyboardType="numeric" value={value} onChangeText={(text) => setValue(text)} />
        </View>

        <TouchableOpacity style={{marginTop: 30, paddingHorizontal: 70, paddingVertical: 9, backgroundColor: "#70db70f1", borderRadius: 2, elevation: 2}}>
          <Text style={{color: "white", fontSize: 17, fontWeight:"bold"}}>Solicitar</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}