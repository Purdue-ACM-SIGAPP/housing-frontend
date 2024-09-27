import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import CustomButton from "../components/CustomButton";

export default function AccountSettings() {
  const navigation = useNavigation();

  const handleSubmit = () => {
    console.log("Going to Map Page...");
    navigation.navigate("React Native Maps");
  };

  return (
    <View style={styles.container}>
      {/* Title */}
      <Text style={styles.title}>Edit Your Account Settings:</Text>

      {/* Email and Phone */}
      <Text style={styles.infoText}>Email: user@example.com</Text>
      <Text style={styles.infoText}>Phone: (123) 456-7890</Text>
      <View style={styles.buttonContainer}>
        <CustomButton
          initialText="Reset Password"
          updatedText="Loading..."
          onPress={handleSubmit}
          style={styles.button} // Adding button style
        />
        <CustomButton
          initialText="Set Up 2FA"
          updatedText="Loading..."
          onPress={handleSubmit}
          style={styles.button} // Adding button style
        />
        <CustomButton
          initialText="Delete Account"
          updatedText="Loading..."
          onPress={handleSubmit}
          style={styles.deleteButton} // Style for delete button
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F0FDF4", // Equivalent to bg-green-50
    width: "100%",
    height: "00%",
  },
  title: {
    fontSize: 25, // Equivalent to text-2xl
    fontWeight: "bold",
    textAlign: "center",
  },
  infoText: {
    fontSize: 20, // Slightly smaller text size for email/phone
    textAlign: "center",
    marginBottom: 3, // Space between email, phone, and buttons
  },
  buttonContainer: {
    alignItems: "center",
    justifyContent: "space-between", // Space buttons vertically
    marginTop: 16, // Equivalent to mt-4
    height: "60%", // Adjust for better distribution of buttons
  },
  button: {
    marginBottom: 20, // Adds spacing between first two buttons
  },
  deleteButton: {
    backgroundColor: "#FF5C5C", // Red color for Delete Account
    marginTop: "auto", // Push the button towards the bottom
  },
});
