import React, { useState, useEffect, useRef } from "react";
import { useNavigation } from "@react-navigation/native";
import { Animated, View, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, Keyboard, Button, StyleSheet, Alert, Image, Touchable } from "react-native";
import HomePage from "./HomePage";
import theme from "../utils/theme.js"

export default function DeleteAccountPopUp() {
  const navigation = useNavigation();
  const [code, checkCode] = useState("");
  const [password, setPassword] = useState("");

  const handleCancel = () => {
    navigation.navigate("Home");
  };

  const handleDelete = () => {
    navigation.navigate("Home");
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>

      <View style={styles.popUp}>

        <Text style={styles.text}>Are you sure?</Text>

        <Text style={styles.subText}>Your account will be gone forever!</Text>

        <TouchableOpacity onPress={handleCancel} style={styles.cancelButtonContainer}>
          <Text style={styles.cancelButtonText}>Cancel</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleDelete} style={styles.deleteButtonContainer}>
          <Text style={styles.deleteButtonText}>Delete</Text>
        </TouchableOpacity>

      </View>

    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  popUp: {
    width: 300,
    height: 500,
    backgroundColor: theme.color.background,
    borderRadius: 25,
    paddingVertical: 40,
    paddingHorizontal: 20,
    alignItems: "center",
    textAlign: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 24,
    color: theme.color.text,
    marginBottom: 28,
    textAlign: "center",
    textShadowColor: theme.color.shadow,
    textShadowOffset: { width: 0, height: 4 },
    textShadowRadius: 4,
  },
  subText: {
    fontSize: 20,
    color: theme.color.text,
    marginBottom: 28,
    textAlign: "center",
    textShadowColor: theme.color.shadow,
    textShadowOffset: { width: 0, height: 4 },
    textShadowRadius: 4,
  },
  cancelButtonContainer: {
    backgroundColor: theme.color.primary,
    color: theme.color.textLight,
    alignItems: "center",
    justifyContent: "center",
    width: 150,
    height: 50,
    borderRadius: 25,
    margin: 20,
  },
  cancelButtonText: {
    color: theme.color.textLight,
    fontSize: 20,
    textShadowColor: theme.color.shadow,
    textShadowOffset: { width: 0, height: 4 },
    textShadowRadius: 4,
  },
  deleteButtonContainer: {
    backgroundColor: theme.color.accent,
    alignItems: "center",
    justifyContent: "center",
    width: 150,
    height: 50,
    borderRadius: 25,
    margin: 20,
  },
  deleteButtonText: {
    color: theme.color.textLight,
    fontSize: 20,
    textShadowColor: theme.color.shadow,
    textShadowOffset: { width: 0, height: 4 },
    textShadowRadius: 4,
  }
});
