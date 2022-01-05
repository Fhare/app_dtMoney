import React from "react";
import { View, Text } from "react-native";

import Income from "../../assets/income.svg";

import { styles } from "./styles";

export function Summary() {
  return (
    <View style={styles.container}>
      <View style={styles.summary}>
        <Text style={styles.type}>Entradas</Text>
        <Income />
      </View>

      <View>
        <Text style={styles.price}>R$ 17.400,00</Text>
        <Text style={styles.status}>Última entrada dia 13 de Abril</Text>
      </View>
    </View>
  );
};