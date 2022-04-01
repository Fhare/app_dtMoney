import { StyleSheet } from "react-native";

import colors from "../../styles/colors";

export const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 14,
    width: "90%",
    height: 150,
    backgroundColor: colors.white_100,
    padding: 20,
  },

  summary: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 30
  },

  type: {
    fontSize: 16,
    color: colors.gray_500
  },

  price: {
    fontSize: 38,
    marginBottom: 4,
    fontWeight: "bold",
    color: colors.gray_500
  },

  status: {
    color: colors.gray_200,
    fontSize: 13
  }
});