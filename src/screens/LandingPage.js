import React, { useState, useEffect } from "react";
import { useCustomAuth } from "../providers/CustomAuthProvider";
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
  const { user, expoGoLogin, expoGoLogout, isExpoGo, setUser } = useCustomAuth();
  const navigation = useNavigation();

  // Redirect user to HomePage after login
  useEffect(() => {
    if (user) {
      navigation.replace("Home"); // Navigates to HomePage
    }
  }, [user, navigation]);

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
        source={require("./purduepaths.png")}
        style={styles.image}
      />

      {/* Buttons */}
      <View style={styles.ButtonSpace}>
        <TouchableOpacity style={styles.signButton}>
          <Text style={styles.signText}>Sign Up</Text>
        </TouchableOpacity>
        {user ? (
          <View style={styles.navButtons}>
            <Text style={styles.title}>Redirecting...</Text>
            {/* <ActivityIndicator size="large" color="#007BFF" /> */}
          </View>
        ) : isExpoGo ? (
          <TouchableOpacity style={styles.loginButton} onPress={expoGoLogin}>
            <Text style={styles.loginText}>Log in</Text>
           </TouchableOpacity>
        ) : (
          <LoginButton setUser={setUser} />
        )}
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
