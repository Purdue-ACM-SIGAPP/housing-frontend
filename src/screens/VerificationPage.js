import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, TextInput, Button, StyleSheet, Alert } from "react-native";
import HomePage from "./HomePage";

export default function VerificationPage() {
  const navigation = useNavigation();
  const [code, checkCode] = useState("");
  const [password, setPassword] = useState("");

  const handleVerify = () => {
    navigation.navigate("Home");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Verify Account</Text>
      <Text>Enter the security code sent to your phone number</Text>
      <TextInput
        style={styles.input}
        placeholder="XXX-XXX"
        value={code}
        onChangeText={checkCode}
      />

      <Button title="Verify" onPress={handleVerify} />

      <Text>Resend Code</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#fff",
    padding: 16,
    textAlign: "left",
  },
  title: {
    fontSize: 24,
    marginBottom: 24,
    color: "#020202",
  },
  input: {
    width: "80%",
    padding: 10,
    borderWidth: 1,
    borderColor: "#020202",
    marginBottom: 12,
    borderRadius: 5,
  },
  Button: {
    color: "#ec9a9a",
  },
});
