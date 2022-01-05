import { StyleSheet } from "react-native";

import colors from "../../styles/colors";

export const styles = StyleSheet.create({
  container: {
    padding: 15,
    marginTop: 20,
  },

  topBarModal: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between"
  },

  heading: {
    marginBottom: 20,
    fontSize: 24,
    fontWeight: "bold",
    color: colors.gray_500
  },

  input: {
    width: "100%",
    borderWidth: 2,
    borderColor: colors.white_300,
    borderRadius: 5,
    padding: 10,
    paddingVertical: 18,
    marginBottom: 10,
    backgroundColor: colors.white_300,
    fontSize: 18,
    color: colors.gray_200
  },

  buttonsContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 10
  },

  typeBtn: {
    flex: 1,
    backgroundColor: colors.white_300,
    padding: 18,
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },

  typeText: {
    marginLeft: 15,
    fontSize: 17,
    color: colors.gray_500
  },

  registerBtn: {
    flex: 1,
    backgroundColor: colors.income,
    padding: 20,
    borderRadius: 5,
  },

  textBtn: {
    fontSize: 21,
    color: colors.white_100,
    fontWeight: "bold",
    alignSelf: "center"
  }

});