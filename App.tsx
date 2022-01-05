import React from "react";
import { View } from "react-native";

import { Home } from "./src/Screens/Home";

import colors from "./src/styles/colors";

export default function App() {
  return (
    <View style={{ backgroundColor: colors.white_300, height: "100%" }}>
      <Home />
    </View>
  );
};