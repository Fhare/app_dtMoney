import React from "react";
import { Text, View, TextInput, TouchableOpacity, Modal } from "react-native";

import { useTransaction } from "../../hooks/useTransaction";

import { styles } from "./styles";

interface TransactionModalProps {
  isVisible: boolean;
  setIsVisible: (visible: boolean) => void;
}

export function NewTransactionModal({ isVisible, setIsVisible }: TransactionModalProps) {

  const { setName, setPrice, addNewTransaction, setType } = useTransaction();

  return (
    <Modal
      visible={isVisible}
      onRequestClose={() => setIsVisible(false)}
      transparent
    >
      <View style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.heading}>Cadastrar transação</Text>

          <View>
            <TextInput
              placeholder="Trasação"
              onChangeText={value => setName(value)}
              style={styles.input}
            />

            <TextInput
              placeholder="Preço"
              onChangeText={value => setPrice(value)}
              keyboardType="numeric"
              style={styles.input}
            />

            <TextInput
              placeholder="Categoria"
              onChangeText={value => setType(value)}
              style={styles.input}
            />

            <TouchableOpacity
              style={styles.registerBtn}
              onPress={() => {
                addNewTransaction();
                setIsVisible(false);
              }}
            >
              <Text style={styles.textBtn}>Cadastrar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};