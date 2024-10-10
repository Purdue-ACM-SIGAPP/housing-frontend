import React, { useState } from 'react';
import { View, Text, Picker, StyleSheet } from 'react-native';

const DropdownBox = ({ question, answers }) => {
  const [selectedAnswer, setSelectedAnswer] = useState(answers[0]);

  return (
    <View style={styles.container}>
      <Text style={styles.question}>{question}</Text>
      <Picker
        selectedValue={selectedAnswer}
        onValueChange={(itemValue) => setSelectedAnswer(itemValue)}
      >
        {answers.map((answer, index) => (
          <Picker.Item key={index} label={answer} value={answer} />
        ))}
      </Picker>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  question: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
});

export default DropdownBox;
