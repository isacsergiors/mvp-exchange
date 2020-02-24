import { StyleSheet, Dimensions } from 'react-native';

const screen = Dimensions.get("window");

export default StyleSheet.create({
  container: {
    paddingVertical: 20
  },
  buttonOrder: {
    paddingHorizontal: 25,
    paddingVertical: 13,
    backgroundColor: "rgb(230,230,235)",
    borderRadius: 2
  }
})