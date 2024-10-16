import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const DropdownBox = ({ question, answers }) => {
  const [showAnswers, setShowAnswers] = useState(false);

  const handleDrop = () => {
    setShowAnswers(!showAnswers);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleDrop}>
        <Text style={styles.question}>{question}</Text>
      </TouchableOpacity>
      {showAnswers && <Text style={styles.answers}>{answers}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 16,
    marginBottom: 16,
  },
  question: {
    fontSize: 18,
    fontWeight: "bold",
  },
  answers: {
    fontSize: 18,
    marginTop: 8, // Add some space between the question and answers
  },
});

export default DropdownBox;
