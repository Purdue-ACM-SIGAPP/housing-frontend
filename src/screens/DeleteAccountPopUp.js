import React, { useState, useEffect, useRef } from "react";
import { useNavigation } from "@react-navigation/native";
import { Animated, View, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, Keyboard, Button, StyleSheet, Alert, Image, Touchable } from "react-native";
import HomePage from "./HomePage";

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
      <View style={styles.container}>

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

      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#99999999",
    padding: 16,
    justifyContent: "center",
  },
  popUp: {
    width: 300,
    height: 500,
    backgroundColor: "#fff",
    borderRadius: 25,
    paddingVertical: 40,
    paddingHorizontal: 20,
    alignItems: "center",
    textAlign: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 24,
    color: "#000",
    marginBottom: 28,
    textAlign: "center",
    textShadowColor: '#00000040',
    textShadowOffset: { width: 0, height: 4 },
    textShadowRadius: 4,
  },
  subText: {
    fontSize: 20,
    color: "#000",
    marginBottom: 28,
    textAlign: "center",
    textShadowColor: '#00000040',
    textShadowOffset: { width: 0, height: 4 },
    textShadowRadius: 4,
  },
  defaultMessage: {
    fontSize: 16,
    color: "#000",
    marginBottom: 20,
    textAlign: "center",
    textShadowColor: '#00000040',
    textShadowOffset: { width: 0, height: 4 },
    textShadowRadius: 4,
  },
  resentMessage: {
    fontSize: 16,
    color: "#BF6E65",
    marginBottom: 20,
    textAlign: "center",
    textShadowColor: '#00000040',
    textShadowOffset: { width: 0, height: 4 },
    textShadowRadius: 4,
  },
  input: {
    height: 90,
    borderColor: '#000',
    color: "#555",
    borderWidth: 1,
    borderRadius: 25,
    fontSize: 36,
    letterSpacing: 25,
    paddingLeft: '10%',
    width: '85%',
    marginBottom: 20,
  },
  cancelButtonContainer: {
    backgroundColor: '#86A0AD',
    color: "#fff",
    alignItems: "center",
    justifyContent: "center",
    width: 150,
    height: 50,
    borderRadius: 25,
    margin: 20,
  },
  cancelButtonText: {
    color: '#fff',
    fontSize: 20,
    textShadowColor: '#00000040',
    textShadowOffset: { width: 0, height: 4 },
    textShadowRadius: 4,
  },
  deleteButtonContainer: {
    backgroundColor: '#BF6E65',
    alignItems: "center",
    justifyContent: "center",
    width: 150,
    height: 50,
    borderRadius: 25,
    margin: 20,
  },
  deleteButtonText: {
    color: '#fff',
    fontSize: 20,
    textShadowColor: '#00000040',
    textShadowOffset: { width: 0, height: 4 },
    textShadowRadius: 4,
  }
});
