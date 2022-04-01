import React from "react";
import { Text, View, TextInput, TouchableOpacity, Modal } from "react-native";

import { useTransaction } from "../../hooks/useTransaction";

import { styles } from "./styles";

interface TransactionModalProps {
  isVisible: boolean;
  setIsVisible: (visible: boolean) => void;
}

export function NewTransactionModal({ isVisible, setIsVisible }: TransactionModalProps) {

  const { transaction, setName, setPrice, addNewTransaction } = useTransaction();

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

            {/* <View style={styles.buttonsContainer}>
              <TouchableOpacity
                style={[styles.typeBtn, { marginRight: 10 }]}
              >
                <Income />
                <Text style={styles.typeText}>Income</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.typeBtn}
              >
                <Outcome />
                <Text style={styles.typeText}>Outcome</Text>
              </TouchableOpacity>
            </View> */}

            {/* <TextInput
              placeholder="Categoria"
              style={styles.input}
            /> */}

            <TouchableOpacity
              style={styles.registerBtn}
              onPress={() => addNewTransaction()}
            >
              <Text style={styles.textBtn}>Cadastrar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};