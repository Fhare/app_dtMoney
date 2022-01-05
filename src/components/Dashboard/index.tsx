import React from "react";
import { ScrollView } from "react-native";

import { Summary } from "../Summary";

import { styles } from "./styles";

export function Dashboard() {
  return (
    <ScrollView
      style={styles.container}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
    >
      <Summary />
      <Summary />
      <Summary />
    </ScrollView>
  );
};