import { StyleSheet, Dimensions } from 'react-native';
import { font } from '../../styles/fonts';

const screen = Dimensions.get("window");

export default StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingVertical: 15
  },
  containerBank: {
    padding: 20,
    borderRadius: 5,
    backgroundColor: "rgb(248,248,248)",
    width: "100%",
    elevation: 1,
  },
  bankData: {
    flexDirection: "row", justifyContent: "space-between",
    paddingVertical: 3
  },
  bankDataInfoName: {
    fontSize: 17, color: "rgb(150,150,150)",
    fontFamily: font.SulphurPointBold
  },
  bankDataInfoValue:{
    fontSize: 18, 
    color: "rgb(120,100,130)",
    fontFamily: font.MontserratMedium,
  },
  button:{
    paddingHorizontal: 22,
    paddingVertical: 13,
    borderRadius: 4,
    backgroundColor: "rgba(255,255,255,0.9)"
  },
  buttonText:{
    fontSize: 18, 
    textTransform: "uppercase",
    color: "rgb(100,100,120)",
    fontFamily: font.SulphurPointBold,
  },
})