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



export default function IntroPage() {
  const navigation = useNavigation();
  const handleLogin = () => {
    navigation.navigate("LogIn");
  };

  const handleSignUp = () => {
    navigation.navigate("signup");
  };

  return (
    <View style={styles.container}>
      {/* Text Purdue Paths */}
      <View style={styles.titleSpace}>
        <View class="circle" style={styles.circle}>
        </View>
        <Text style={styles.titleText}>
          <Text style={styles.Purdue}>Purdue</Text>
          <Text style={styles.Paths}>Paths</Text>
        </Text>
      </View>

      {/* Image */}
      <Image
        source={require("./purduepaths.png")} // Path to your image
        style={styles.image}
      />

      {/* Buttons */}
      {/* place two buttons side by side */}
      <View style={styles.ButtonSpace}>
        <TouchableOpacity style={styles.signButton} onPress={handleSignUp}>
          <Text style={styles.signText}>Sign Up</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>
        
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    // padding: 16,
    // marginTop: "10%",
    // marginBottom: "5.5%",
  },
  titleSpace: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: 39,
    marginTop: 77,
    marginBottom: 128,
  },
  circle: {
    width: 38,
    height: 38,
    borderRadius: 50 / 2,
    backgroundColor: "#CFB991",
    marginRight: 20,
  },
  titleText: {
    textAlign: "center",
  },
  Purdue: {
    color: "#065758",
    fontSize: 24,
    fontWeight: "bold",
  },
  Paths: {
    color: "#A5C2C4",
    fontSize: 24,
    fontWeight: "bold",
  },
  image: {
    width: 249,
    height: 249,
    resizeMode: "contain",
    // marginTop: 30,
    marginBottom: 150,
  },
  ButtonSpace: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    height: 38,
    marginBottom: 100,
  },
  signButton: {
    backgroundColor: "#d06c64",
    width: "37%",
    paddingVertical: 10,
    borderColor: "#020202",
    borderRadius: 10,
    paddingHorizontal: 50,
    marginLeft: "8%",
  },
  loginButton: {
    backgroundColor: "#ffffff",
    width: "37%",
    paddingVertical: 10,
    paddingHorizontal: 50,
    borderRadius: 10,
    borderWidth: 1,
    marginRight: "8%",
  },
  signText: {
    textAlign: "center",
    fontSize: 12,
    color: "#ffffff",
  },
  loginText: {
    textAlign: "center",
    fontSize: 12,
  },
});
