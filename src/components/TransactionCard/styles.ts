import { StyleSheet } from "react-native";

import colors from "../../styles/colors";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white_100,
    margin: 4,
    borderRadius: 12,
    paddingHorizontal: 25,
    paddingVertical: 14
  },

  heading: {
    fontSize: 20,
    fontWeight: "300",
    color: colors.gray_500,
    marginBottom: 6
  },

  amount: {
    fontSize: 18,
    color: colors.income,
    marginBottom: 40
  },
  
  categoryAndDate: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },

  category: {
    fontSize: 16,
    fontWeight: "300",
    color: colors.gray_200
  },

  date: {
    fontSize: 16,
    fontWeight: "300",
    color: colors.gray_200
  }
});