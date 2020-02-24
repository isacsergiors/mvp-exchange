import { StyleSheet, Dimensions, Image } from 'react-native';
import {font} from '../../styles/fonts';

const screen = Dimensions.get("screen");

export default StyleSheet.create({
  container: {
    // justifyContent: "center", 
    // height: screen.height / 4
    paddingBottom: 40,
    paddingTop: 10
  },
  header: {
    backgroundColor: "rgb(113, 89, 193)",
    // justifyContent: "center", 
    paddingVertical: 0,
    elevation: 4
  },
  display: {
    alignItems: "center",
    justifyContent: "center",
  },
  balance: {
    color: "rgb(240,240,240)",
    fontSize: 36,
    // fontWeight: "bold",
    fontFamily: font.MontserratBold
  },
  simbol: {
    color: "rgba(220,220,220,0.8)",
    fontWeight: "normal",
    fontSize: 25,
    fontFamily: font.SulphurPointBold
  },
  button: {
    marginHorizontal: 8,
    paddingHorizontal: 35,
    paddingVertical: 10,
    borderWidth: 2, 
    borderColor: "rgba(255,255,255,0.95)", 
    borderRadius: 100,
  },
  buttonText: {
    color: "rgba(255,255,255,0.95)", 
    fontSize: 18, 
    fontFamily: font.SulphurPointBold,
  }

});