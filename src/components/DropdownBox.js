import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import SvgComponent from "../../assets/SvgComponent";

const DropdownBox = ({ question, answers }) => {
  const [showAnswers, setShowAnswers] = useState(false);

  const handleDrop = () => {
    setShowAnswers(!showAnswers);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleDrop}>
        <Text style={styles.question}>{question}</Text>
        <Image
          style={styles.image}
          source={require("../../assets/chevron.png")}
        />
      </TouchableOpacity>
      {showAnswers && <Text style={styles.answers}>{answers}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 16,
    marginBottom: 16,
    borderRadius: 6,
    backgroundColor: "rgba(134, 160, 173, 0.3)",
    padding: 8,
    marginRight: "5%",
    marginLeft: "5%",
  },
  image: {
    width: 28,
    height: 28,
    position: "absolute",
    right: 0,
    top: 0,
  },
  question: {
    fontSize: 18,
    fontWeight: "bold",
    position: "relative",
    paddingRight: 32,
  },
  answers: {
    fontSize: 18,
    marginTop: 8,
  },
});

export default DropdownBox;
