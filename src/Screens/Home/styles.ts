import { StyleSheet } from "react-native";

import colors from "../../styles/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 12,
    height: 375,
    marginTop: -80,
    backgroundColor: colors.purple_500
  },

  logo: {
    fontSize: 34,
    fontWeight: "bold",
    color: colors.white_150
  },

  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: colors.white_100
  },

  button: {
    backgroundColor: colors.purple_300,
    padding: 15,
    borderRadius: 8
  },

  buttonTitle: {
    fontSize: 15,
    fontWeight: "bold",
    color: colors.white_100
  },

  cardContainer: {
    padding: 12,
    marginTop: 40,
  },
  
  itens: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 32
  },

  heading: {
    fontSize: 24,
    color: colors.gray_500
  },

  amount: {
    color: colors.gray_200,
    fontWeight: "normal"
  }
});