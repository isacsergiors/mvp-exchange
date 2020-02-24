import { StyleSheet, Dimensions, Image } from 'react-native';
import { font } from '../../styles/fonts';

const screen = Dimensions.get("screen");

export default StyleSheet.create({
  container: {
    marginTop: 20,
    marginHorizontal: 7,
  },
  containerCoin: {
    // backgroundColor: "rgba(75,72,110,0.99)",
    borderRadius: 4,
    paddingHorizontal: 10,
    paddingTop: 2,
    paddingBottom: 15,
    elevation: 1,
    backgroundColor: "white",
  },
  button: {
    paddingHorizontal: 28,
    paddingVertical: 12,
    borderRadius: 5,
    marginHorizontal: 12
  },
  buttonText: {
    color: "white",
    fontFamily: font.UbuntuBold,
    textTransform: "uppercase"
  },
  coinPrice: {
    color: "rgb(150,150,160)",
    fontFamily: font.UbuntuBold,
    fontSize: 14
  },
  coinTotal: {
    color: "rgb(255, 179, 29)", fontSize: 25, fontFamily: font.SulphurPointBold
  },
  coinName: {
    color: "rgb(255, 179, 29)",
    fontSize: 18,
    fontFamily: font.UbuntuBold
  },
  modalContainer: {
    paddingBottom: 15,
    backgroundColor: "white",
    borderRadius: 5,
    paddingHorizontal: 15,
  },
  modalHeader: {
    borderBottomWidth: 1,
    borderBottomColor: "rgb(240,240,240)",
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 20
  },
  modalBody: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    alignItems: "center"
  }

});