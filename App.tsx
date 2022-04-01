import React from "react";
import { View } from "react-native";

import { Home } from "./src/Screens/Home";

import { NewTransactionProvider } from "./src/contexts/NewTransactionProvider";

import colors from "./src/styles/colors";

export default function App() {
  return (
    <NewTransactionProvider>
      <View style={{ backgroundColor: colors.white_300, height: "100%" }}>
        <Home />
      </View>
    </NewTransactionProvider>
  );
};