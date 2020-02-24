import { StyleSheet, Dimensions } from 'react-native';
import { font } from '../../styles/fonts';

const screen = Dimensions.get("window");

export default StyleSheet.create({
  container: {
    padding: 15,
    // backgroundColor: "rgb(113, 89, 193)",
    height: screen.height + 50
  },
  containerBank: {
    padding: 20,
    borderRadius: 5,
    backgroundColor: "white",
    width: "100%",
    elevation: 2,
  },
  bankData: {
    flexDirection: "row", justifyContent: "space-between",
    paddingVertical: 3
  },
  bankDataInfoName: {
    fontSize: 19, color: "rgb(150,150,150)",
    fontFamily: font.SulphurPointRegular
  },
  bankDataInfoValue:{
    fontSize: 18, 
    color: "rgb(120,120,140)",
    fontFamily: font.MontserratSemiBold
  },
  button:{
    paddingHorizontal: 22,
    paddingVertical: 13,
    // backgroundColor: "rgba(255,255,255,0.9)"
  },
  buttonText:{
    fontSize: 17, 
    textTransform: "uppercase",
    color: "white",
    fontFamily: font.SulphurPointBold
  },
});