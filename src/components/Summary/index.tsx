import React from "react";
import { View, Text } from "react-native";

import Income from "../../assets/income.svg";

import { styles } from "./styles";

export function Summary() {
  return (
    <View style={styles.container}>
      <Text style={styles.price}>R$ 1.000.400,00</Text>
      <Text style={styles.status}>Última entrada dia 13 de Abril</Text>
    </View>
  );
};