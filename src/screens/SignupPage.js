import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  View,
  Text,
  Image,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from "react-native";
//export default GoogleSignInButton;

//google button

export default function SignupPage() {
  const navigation = useNavigation();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  const handleLogin = () => {
    if (username === "admin" && password === "password") {
      Alert.alert("Login Successful");
      console.log("Going to Home Page...");
      navigation.navigate("Home");
    } else if (username.indexOf("@gmail.com") >= 0) {
      navigation.navigate("verification");
    } else {
      Alert.alert("Invalid Credentials");
    }
  };

  const handleCreate = () => {
    if (username === "" || email === "") {
      Alert.alert("Please enter a valid email/username!");
      console.log("Please enter a valid email/username!");
    } else {
      console.log(username + ": " + email);

      navigation.navigate("LogIn");
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("./purduepaths.png")} // Path to your image
        style={styles.image}
      />
      <Text style={styles.title}>Sign Up</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={email}
        onChangeText={setEmail}
      />
      <TouchableOpacity style={styles.loginButton} onPress={handleCreate}>
        <Text style={styles.buttonText}>Create Account</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 24,
    fontWeight: 600,
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
  loginButton: {
    backgroundColor: "#d06c64",
    width: "80%",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginTop: 10,
  },
  buttonText: {
    textAlign: "center",
    fontWeight: 500,
  },
  image: {
    width: 100, // Set the width
    height: 100, // Set the height
    resizeMode: "cover", // 'cover', 'contain', etc.
    marginTop: -124,
    marginBottom: 50,
  },
  row: {
    flexDirection: "row", // Puts text and button in a row
    alignItems: "center", // Vertically centers the text and button
  },
  text: {
    marginRight: 5,
  },
  sameText: {
    color: "blue",
  },
});
