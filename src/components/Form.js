import * as React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  Pressable,
  SafeAreaView,
} from "react-native";

export default function Form() { 
  const [form, setForm] = React.useState({
    username: "",
    email: "",
    phoneNumber: "",
    accountType: "",
  });
  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.input}
        value={form.username}
        onChangeText={(e) => setForm({ ...form, username: e })}
        placeholder="Username"
      />
      <TextInput
        style={styles.input}
        value={form.email}
        onChangeText={(e) => setForm({ ...form, email: e })}
        placeholder="Email"
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        value={form.phoneNumber}
        onChangeText={(e) => setForm({ ...form, phoneNumber: e })}
        placeholder="Phone Number"
        keyboardType="phone-pad"
      />
      <TextInput
        style={styles.input}
        value={form.accountType}
        onChangeText={(e) => setForm({ ...form, accountType: e })}
        placeholder="Account Type"
      />
      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>Submit</Text>
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    top: 40,
    width: "80%",
  },
  input: {
    padding: 10,
    height: 40,
    marginBottom: 30,
    borderWidth: 1,
    borderRadius: 10,
    width: "100%",
  },
  button: {
    backgroundColor: "#BF6E65",
    width: "50%",
    height: 40,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontWeight: "500",
    color: "#ffffff",
  },
});
