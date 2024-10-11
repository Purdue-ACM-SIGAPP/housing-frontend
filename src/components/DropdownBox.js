import React, { useState } from "react";
import { View, Text, Picker, StyleSheet } from "react-native";

const DropdownBox = ({ question, answers }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.question}>{question}</Text>
      <Text style={styles.answers}>{answers}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  question: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  answers: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
});

export default DropdownBox;
