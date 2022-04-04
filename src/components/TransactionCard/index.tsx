import React from "react";
import { View, Text } from "react-native";

import { styles } from "./styles";

interface TransactionCardProps {
  title: string;
  amount: number;
  type: string;
}

export function TransactionCard({ title, amount, type }: TransactionCardProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>{title}</Text>
      <Text style={styles.amount}>{amount}</Text>

      <View style={styles.categoryAndDate}>
        <Text style={styles.category}>{type}</Text>
        <Text style={styles.date}>13/04/2021</Text>
      </View>
    </View>
  );
};