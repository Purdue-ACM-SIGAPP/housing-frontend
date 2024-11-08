import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import DropdownBox from "../components/DropdownBox";

//scrollable function?
//boxes resize based on how big the description is - is that what we want? Or set box width?
//potential thing on bottom for people to submit questions

export default function FAQPage() {
  const navigation = useNavigation();

  // Mock data for questions and answers
  const questions = [
    "How do I leave a review?",
    "How do I upload an image/video for a building?",
    "Is off-campus housing also included in the app?",
    "How do I make an account?",
    "How do I report errors?",
    "Test Question",
  ];

  const answers = [
    "Answer 1: To start a review...",
    "Answer 2: To upload an image/video...",
    "Answer 3: Yes, select off-campus housing is displayed in this app!",
    "Answer 4: To make an account, follow these steps...",
    "Answer 5: Report errors by clicking on...",
    "let's see how long I can make this, does it autoformat?\n I wonder if backslash N works how long can I make this lalalalallalalalalala \n fjdsfjdhsakjfsdfjdkas \n",
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>FAQ Page</Text>
      <View style={styles.dropdownContainer}>
        {questions.map((question, index) => (
          <DropdownBox
            key={index}
            question={question}
            answers={answers[index]} // Link each answer with its respective question
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
    justifyContent: "flex-start",
    paddingTop: 32,
    backgroundColor: "#F0FDF4", // Equivalent to bg-green-50
    width: "100%",
    height: "100%",
  },
  title: {
    fontSize: 24, // Equivalent to text-2xl
    fontWeight: "bold",
    textAlign: "center",
  },
  dropdownContainer: {
    marginBottom: 10, // Equivalent to mt-4
  },
});
