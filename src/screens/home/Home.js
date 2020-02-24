import React, { useState, useEffect } from 'react';
import { View, Image, TouchableOpacity, Text, Dimensions, TextInput } from 'react-native';
// # styles
import styles from './styles';
// # types
// # imports
// # services
// # utils
// # actions
// # components 
import Modal from 'react-native-modal';
import { font } from '../../styles/fonts';
import Axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';

export default function ({ navigation }) {

  const [openBuy, setOpenBuy] = useState(false);
  const [openSell, setOpenSell] = useState(false);
  const [value, setValue] = useState("");
  const [totalCoins, setTotalCoins] = useState(0);
  const [user, setUser] = useState({});

  const start = async () => {

    let user = await AsyncStorage.getItem("user");
    user = JSON.parse(user);
    setUser(user);
  }

  useEffect(() => {
    start()
  })

  return (
    <View style={styles.container}>

      <View style={{
        paddingBottom: 20,
        marginLeft: 20
      }}>
        <Text style={{
          fontFamily: font.SulphurPointBold,
          fontSize: 20,
          color: "rgba(75,72,100,0.75)"
        }}>Marketplace</Text>
      </View>

      <View style={styles.containerCoin}>

        <View style={{
          padding: 10,
          flexDirection: "row",
          width: "100%",
          alignItems: "center",
        }}>

          <Image source={require("./bitcoin-icon.png")}
            style={{ width: 50, height: 56 }} />

          <View style={{
            flexDirection: "row",
            marginHorizontal: 9,
          }}>
            <View style={{
              flex: 1,
              justifyContent: 'flex-end'
            }}>
              <Text style={styles.coinName}>
                1 BTC
            </Text>
              <Text
                style={styles.coinPrice}>
                R$17.587,04
            </Text>
            </View>

            <View style={{
              flex: 2,
              alignItems: "center"
            }}>
              <Text style={[styles.coinTotal]}>
                {"0.02467000"}
              </Text>
              <Text style={styles.coinPrice}>R$57,45</Text>
            </View>
          </View>

        </View>

        <View style={{
          flexDirection: "row", justifyContent: "center", marginTop: 20
        }}>
          <TouchableOpacity style={[styles.button, {
            backgroundColor: "rgb(240,240,243)"
          }]} onPress={() => setOpenSell(true)}>
            <Text style={[styles.buttonText, { color: "rgba(75,72,100,0.65)" }]}>VENDER</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.button, {
            backgroundColor: "rgb(255, 179, 29)",
          }]} onPress={() => {
            setOpenBuy(true)
          }}>
            <Text style={styles.buttonText}>COMPRAR</Text>
          </TouchableOpacity>
        </View>

      </View>

      <Modal isVisible={openSell}
        deviceHeight={Dimensions.get("window").height + 100}
        onSwipeComplete={() => setOpenSell(false)}
        swipeDirection="right">

        <View style={styles.modalContainer}>

          <View style={styles.modalHeader}>
            <Image source={require("../../assets/images/BTC.png")} style={{
              height: 25, width: 25, marginRight: 5
            }} />
            <Text style={{ color: "rgb(120,120,130)", fontFamily: font.SulphurPointBold, fontSize: 17 }}>VENDER BITCOIN</Text>
          </View>

          <View style={styles.modalBody}>

            <View>
              <Text style={{
                textAlign: "center",
                color: "rgb(130,125,130)", fontFamily: font.MontserratMedium,
                fontSize: 15
              }}>
                Envie suas moedas e aguarde a venda ser realiza,
                seu saldo será atualizado em alguns minutos
              </Text>
            </View>

            <View>
              <Image source={require("../../assets/images/5e4d84dbe9fb8.png")} />
            </View>
            <View style={{
              alignItems: "center",
              backgroundColor: "rgb(245,245,245)",
              paddingVertical: 10, borderRadius: 3
            }}>
              <Text style={{
                textAlign: "center",
                fontFamily: font.MontserratMedium,
                color: "rgb(95,90,110)",
                fontSize: 14
              }}>
                14fZ4KNPX7mKEvnDs7f4vRR6YmWFZjAJqH
              </Text>
            </View>
          </View>

        </View>

      </Modal>

      <Modal isVisible={openBuy}
        deviceHeight={Dimensions.get("window").height + 100}
        onSwipeComplete={() => setOpenBuy(false)}
        swipeDirection="right">

        <View style={styles.modalContainer}>

          <View style={styles.modalHeader}>
            <Image source={require("../../assets/images/BTC.png")} style={{
              height: 25, width: 25, marginRight: 5
            }} />
            <Text style={{ color: "rgb(120,120,130)", fontFamily: font.SulphurPointBold, fontSize: 17 }}>COMPRAR BITCOIN</Text>
          </View>

          <View style={styles.modalBody}>

            <View style={{ alignItems: "center", justifyContent: "center" }}>
              <Text style={{
                textAlign: "center",
                color: "rgb(130,125,130)", fontFamily: font.MontserratMedium,
                fontSize: 15
              }}>
              </Text>

              <TextInput keyboardType="numeric" placeholder="R$" style={{
                fontSize: 22,
                fontFamily: font.UbuntuBold,
                color: "rgb(150,150,150)",
              }} value={value} onChangeText={
                async (text) => {
                  setValue(text)
                  const { data } = await Axios.get("https://blockchain.info/tobtc?currency=BRL&value=" + text)
                  setTotalCoins(data)
                }
              }
              />

              <View>
                <Text style={{
                  fontFamily: font.SulphurPointBold,
                  fontSize: 20,
                  color: "rgb(255, 179, 29)"
                }}>{totalCoins}</Text>
              </View>

              <TouchableOpacity style={[styles.button, {
                backgroundColor: "rgb(255, 179, 29)",
              }]} onPress={() => {
                Axios.post("/buy", {
                  idHash: user.idHash,
                  value: value
                }).then((res) => {
                  setOpenBuy(false)
                })
              }}>
                <Text style={styles.buttonText}>Solicitar compra</Text>
              </TouchableOpacity>

            </View>

          </View>

        </View>

      </Modal>
    </View>
  );
}