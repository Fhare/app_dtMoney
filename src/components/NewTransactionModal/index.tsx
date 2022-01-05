import React from "react";
import { Text, View, TextInput, TouchableOpacity } from "react-native";

import { styles } from "./styles";

import Income from "../../assets/income.svg";
import Outcome from "../../assets/outcome.svg";

export function NewTransactionModal() {
  return (
    <View style={styles.container}>
      <View style={styles.topBarModal}>
        <Text style={styles.heading}>Cadastrar transação</Text>
      </View>

      <View>
        <TextInput
          placeholder="Nome"
          style={styles.input}
        />
        <TextInput
          placeholder="Preço"
          style={styles.input}
        />

        <View style={styles.buttonsContainer}>
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
        </View>

        <TextInput
          placeholder="Categoria"
          style={styles.input}
        />

        <TouchableOpacity
          style={styles.registerBtn}
        >
          <Text style={styles.textBtn}>Cadastrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};