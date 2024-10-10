import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import DropdownBox from "../components/DropdownBox";

export default function FAQPage() {
  const navigation = useNavigation();

  // const handleSubmit = () => {
  //   console.log("Going to Map Page..."); //telling console what's going on 
  //   navigation.navigate("React Native Maps");  //sending person to wherever/causing change
  // };

  const handleDropDown = () => {
    console.log("Opening question...");
    //TODO: add thing here that changes the state of the drop down from closed to open
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>FAQ Page</Text>
      <View style={styles.buttonContainer}>
      <DropdownBox
          question="On campus housing included?"
          answer = "yes"
          onPress={handleDropDown}
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
    height: "100%",
  },
  title: {
    fontSize: 24, // Equivalent to text-2xl
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 16, // Equivalent to mt-4
  },
});
