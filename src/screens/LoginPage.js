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

export default function LoginPage() {
  const navigation = useNavigation();
  //const [username, setUsername] = useState('');
  //const [password, setPassword] = useState('');

  const handleLoginEmail = () => {
    Alert.alert("Waiting for verification...");
  };

  const handleLoginPhone = () => {
    console.log("Going to Verification Page...");
    navigation.navigate("Verification");
  };

  const handleCreate = () => {
    navigation.navigate("Signup");
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("./purduepaths.png")} // Path to your image
        style={styles.image}
      />
      <Text style={styles.title}>Login With Email or Phone Number</Text>
      <TouchableOpacity style={styles.emailButton} onPress={handleLoginEmail}>
        <Text style={styles.buttonText}>Login With Email</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.phoneButton} onPress={handleLoginPhone}>
        <Text style={styles.buttonText}>Login With Phone Number</Text>
      </TouchableOpacity>

      <View style={styles.row}>
        <Text style={styles.text}>Not registered yet?</Text>
        <TouchableOpacity onPress={handleCreate}>
          <Text style={styles.sameText}>Create an Account</Text>
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
    padding: 16,
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
  emailButton: {
    backgroundColor: "#d06c64",
    width: "80%",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginBottom: 10,
  },
  phoneButton: {
    backgroundColor: "#d06c64",
    width: "80%",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
  },
  buttonText: {
    textAlign: "center",
  },
  image: {
    width: 100, // Set the width
    height: 100, // Set the height
    resizeMode: "cover", // 'cover', 'contain', etc.
    marginTop: -100,
    marginBottom: 70,
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
