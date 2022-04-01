import React, { useState } from "react";

import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
} from "react-native";

import { TransactionCard } from "../../components/TransactionCard";
import { Dashboard } from "../../components/Dashboard";
import { NewTransactionModal } from "../../components/NewTransactionModal";

import { styles } from "./styles";

export function Home() {

  const [modalVisibility, setModalVisibility] = useState(false);

  return (
    <>
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.logo}>Ynvest 💰</Text>

          <TouchableOpacity
            style={styles.button}
            onPress={() => setModalVisibility(true)}
          >
            <Text style={styles.buttonTitle}>Nova transação</Text>
          </TouchableOpacity>
        </View>

        <Dashboard />

        <View style={styles.cardContainer}>
          <View style={styles.itens}>
            <Text style={styles.heading}>Listagem</Text>
            <Text style={styles.amount}>4 Itens</Text>
          </View>

          <TransactionCard />
        </View>
      </ScrollView>

      <NewTransactionModal
        isVisible={modalVisibility}
        setIsVisible={setModalVisibility}
      />
    </>
  );
};