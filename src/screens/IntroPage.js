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
const GoogleSignInButton = () => {
  useEffect(() => {
    // Load the Google Sign-In script
    const script = document.createElement("script");
    script.src = "https://accounts.google.com/gsi/client";
    script.async = true;
    script.onload = () => {
      // Initialize Google Sign-In
      google.accounts.id.initialize({
        client_id: "YOUR_GOOGLE_CLIENT_ID", // Replace with your Google Client ID
        callback: handleCredentialResponse,
      });

      // Render the Google Sign-In button
      google.accounts.id.renderButton(
        document.getElementById("buttonDiv"),
        { theme: "outline", size: "large" } // Customization attributes
      );

      // Optionally, show the One Tap dialog
      google.accounts.id.prompt();
    };

    document.body.appendChild(script);

    // Cleanup the script on component unmount
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  // Function to handle the Google response
  const handleCredentialResponse = (response) => {
    console.log("Encoded JWT ID token: " + response.credential);
  };

  return (
    <div>
      <div id="buttonDiv"></div>
    </div>
  );
};

//export default GoogleSignInButton;
//end of button

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
      <Text style={styles.titleText}>
        <Text style={styles.Purdue}>Purdue</Text>
        <Text style={styles.Paths}>Paths</Text>
      </Text>

      {/* Image */}
      <Image
        source={require("./purduepaths.png")} // Path to your image
        style={styles.image}
      />

      {/* Buttons */}
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.signButton} onPress={handleSignUp}>
        <Text style={styles.buttonText}>Sign Up</Text>
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
  titleText: {
    marginBottom: 80,
    textAlign: "center",
  },
  Purdue: {
    color: "#0c3f3f",
    fontSize: 36,
    fontWeight: "bold",
  },
  Paths: {
    color: "#70c5c5",
    fontSize: 36,
    fontWeight: "bold",
  },
  image: {
    width: 300,
    height: 300,
    resizeMode: "contain",
    marginTop: 30,
    marginBottom: 50,
  },
  loginButton: {
    backgroundColor: "#ffffff",
    width: "80%",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    borderWidth: 1,
    marginBottom: 15,
  },
  signButton: {
    backgroundColor: "#d06c64",
    width: "80%",
    paddingVertical: 15,
    borderColor: "#020202",
    borderRadius: 10,
    paddingHorizontal: 30,
  },
  buttonText: {
    textAlign: "center",
    fontSize: 18,
  },
});
