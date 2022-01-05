import { StyleSheet } from "react-native";

import colors from "../../styles/colors";

export const styles = StyleSheet.create({
  container: {
    marginHorizontal: 12,
    backgroundColor: colors.white_100,
    width: 300,
    height: 200,
    borderRadius: 8,
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
    fontSize: 30,
    fontWeight: "bold",
    color: colors.gray_500
  },

  status: {
    color: colors.gray_200,
    fontSize: 13
  }
});