import React, { useRef, useState, useEffect } from "react";

import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
} from "react-native";

import { api } from "../../services/api";

import { TransactionCard } from "../../components/TransactionCard";
import { Dashboard } from "../../components/Dashboard";

import { NewTransactionModal } from "../../components/NewTransactionModal";

import { Modalize } from "react-native-modalize"; 

import Logo from "../../assets/logo.svg";

import { styles } from "./styles";

type TransactionsProps = {
  id: number;
  title: string;
  amount: number;
  type: string;
};

export function Home() {

  const openModalRef = useRef<Modalize>(null);

  const [transactions, setTransactions] = useState<TransactionsProps[]>([]);

  const handleOpenModal = () => {
    openModalRef.current?.open();
  };

  async function getTransactions() {
    try {
      const { data } = await api.get("/transactions");

      console.log(data);
    } catch(err) {
      console.log(`Algo deu errado ai carinha, ${err}`);
    };
  };

  useEffect(() => {
    getTransactions();
  }, [])

  return (
    <>
      <ScrollView>
        <View style={styles.container}>
          <Logo />

          <TouchableOpacity
            style={styles.button}
            onPress={handleOpenModal}
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
          <TransactionCard />
          <TransactionCard />
          <TransactionCard />
        </View>
      </ScrollView>

      <Modalize
        ref={openModalRef}
        modalHeight={500}
      >
        <NewTransactionModal />
      </Modalize>
    </>
  );
};