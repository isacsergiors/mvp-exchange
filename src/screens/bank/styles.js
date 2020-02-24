import { StyleSheet, Dimensions, Image } from 'react-native';
import { font } from '../../styles/fonts';

const screen = Dimensions.get("screen");

export default StyleSheet.create({
  container: {
    paddingVertical: 25,
    paddingHorizontal: 40
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
    borderBottomColor: "rgba(113, 89, 193, 0.5)",
    borderBottomWidth: 1,
    paddingVertical: 5,
    paddingHorizontal: 20,
  },
  inputContainer: {
    marginTop: 10
  },
  buttonTypeBank: {
    marginTop: 15,
    paddingHorizontal: 30,
    paddingVertical: 8,
    borderColor: "rgb(113, 89, 193)",
    borderWidth: 1,
    borderRadius: 100
  },
  buttonTextBankType: {
    fontFamily: font.SulphurPointBold,
    fontSize: 15,
    color: "rgb(125,120,130)",
    textTransform: "uppercase"
  },
  buttonSave: {
    paddingHorizontal: 50,
    paddingVertical: 13,
    borderColor: "rgb(113, 89, 193)",
    backgroundColor: "rgb(113, 89, 193)",
    borderWidth: 1,
    borderRadius: 100
  },
  buttonSaveText: {
    fontFamily: font.SulphurPointBold,
    fontSize: 16,
    color: "white",
    textTransform: "uppercase"
  }
})