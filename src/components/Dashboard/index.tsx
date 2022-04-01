import React from "react";
import { View } from "react-native";

import { Summary } from "../Summary";

import { styles } from "./styles";

export function Dashboard() {
  return (
    <View style={styles.container} >
      <Summary />
    </View>
  );
};