import { StyleSheet } from "react-native";

import colors from "../../styles/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  
  content: {
    backgroundColor: colors.white_100,
    marginBottom: 10,
    paddingVertical: 30,
    paddingHorizontal: 20,
    borderRadius: 14,
    width: "95%",
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
    padding: 16,
    marginBottom: 10,
    backgroundColor: colors.white_300,
    fontSize: 18,
    color: colors.gray_200
  },

  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 10
  },

  typeBtn: {
    flex: 1,
    backgroundColor: colors.white_300,
    padding: 16,
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
    backgroundColor: colors.income,
    padding: 20,
    borderRadius: 5,
  },

  textBtn: {
    fontSize: 18,
    color: colors.white_100,
    fontWeight: "bold",
    alignSelf: "center"
  }

});