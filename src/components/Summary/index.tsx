import React from "react";
import { View, Text } from "react-native";

import { styles } from "./styles";

export function Summary() {
  return (
    <View style={styles.container}>
      <Text style={styles.status}>Meta para investir</Text>
      <Text style={styles.price}>R$ 000,00</Text>
    </View>
  );
};