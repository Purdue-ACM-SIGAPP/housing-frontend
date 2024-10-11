import * as React from "react";
import { View, Text, TextInput, StyleSheet, Button, Alert } from "react-native";

export default function SignUpPage() {
  const [username, setUsername] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleSignUp = () => {
    if (username && email && password) {
      Alert.alert("Sign Up Successful", `Username: ${username}\nEmail: ${email}`);
    }else {
      Alert.alert("Error", "Please  all fields");
    }
  };

  

  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Purdue<Text style={styles.subtitleText}>Paths</Text></Text>
      
      <TextInput
        style={styles.input}
        placeholder="username"
        value={username}
        onChangeText={setUsername}
      />
      
      <TextInput
        style={styles.input}
        placeholder="email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      
      <TextInput
        style={styles.input}
        placeholder="password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
      />
      
      <View style={styles.buttonContainer}>
        <Button title="Sign Up" onPress={handleSignUp} color="#d7c4a1" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF", // Background color
  },
  titleText: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#455c48", // Dark green
  },
  subtitleText: {
    color: "#a1b7a6", // Light green
  },
  input: {
    width: 300,
    padding: 10,
    margin: 10,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    fontSize: 16,
  },
  buttonContainer: {
    marginTop: 20,
    width: 300,
    borderRadius: 6,
  },
});