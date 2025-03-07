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
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLoginEmail = async () => {
    Alert.alert("Waiting for verification...");

    const response = await fetch("https://dev-2gowyyl3kin685ua.us.auth0.com/authorize", {
      method: "GET",
    });
    
    // body: JSON.stringify({ username: "test2@gmail.com", password: "x>9?Q!dC#p~3r}%" }),
    
    console.log(response.json());

    if (response.status == 200) {
      navigation.navigate("HomePage");
    }

  };

  // const handleLoginPhone = () => {
  //   console.log("Going to Verification Page...");
  //   navigation.navigate("Verification");
  // };

  const handleCreate = () => {
    navigation.navigate("Signup");
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/purduepaths.png")}
        style={styles.image}
      />
      <Text style={styles.title}>Login or Sign Up</Text>
      <TextInput
                style={styles.input}
                placeholder="Username"
                value={username}
                onChangeText={setUsername}
      />
      <TextInput
                style={styles.input}
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
      />
      <TouchableOpacity style={styles.loginButton} onPress={handleLoginEmail}>  
        <Text style={styles.buttonText}>Login</Text>
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
    fontWeight: 600,
    color: "#020202",
  },
  input: {
    width: "80%",
    padding: 10,
    borderWidth: 1,
    borderColor: "#020202",
    marginBottom: 12,
    borderRadius: 10,
  },
  loginButton: {
    backgroundColor: "#d06c64",
    width: "80%",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginBottom: 10,
  },
  buttonText: {
    textAlign: "center",
    fontWeight: 500,
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
