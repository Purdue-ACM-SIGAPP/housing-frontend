import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import DropdownBox from "../components/DropdownBox";

export default function FAQPage() {
  const navigation = useNavigation();

  // Mock data for questions and answers
  const questions = [
    "How do I leave a review?",
    "How do I upload an image/video for a building?",
    "Is off-campus housing also included in the app?",
    "How do I make an account?",
    "How do I report errors?",
    "What is [Question 6]?",
  ];

  const answers = [
    "Answer 1: You can leave a review by...",
    "Answer 2: To upload an image or video...",
    "Answer 3: Yes, off-campus housing is...",
    "Answer 4: To make an account, follow these steps...",
    "Answer 5: Report errors by clicking on...",
    "Answer 6: Here is how you can find more details about [Question 6]...",
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>FAQ Page</Text>
      <View style={styles.buttonContainer}>
        {questions.map((question, index) => (
          <DropdownBox
            key={index}
            question={question}
            answer={answers[index]} // Link each answer with its respective question
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F0FDF4", // Equivalent to bg-green-50
    width: "100%",
    height: "100%",
  },
  title: {
    fontSize: 24, // Equivalent to text-2xl
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 16, // Equivalent to mt-4
  },
});
