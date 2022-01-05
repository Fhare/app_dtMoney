import React from "react";
import { View, Text } from "react-native";

import { styles } from "./styles";

export function TransactionCard() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Desenvolvimento de site</Text>
      <Text style={styles.amount}>R$ 12.000,00</Text>

      <View style={styles.categoryAndDate}>
        <Text style={styles.category}>Vendas</Text>
        <Text style={styles.date}>13/04/2021</Text>
      </View>
    </View>
  );
};