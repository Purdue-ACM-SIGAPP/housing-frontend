import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import CustomButton from "../components/CustomButton";
import BottomNavbar from "../components/BottomNavbar";

export default function SearchPage() {
  const navigation = useNavigation();

  const handleSubmit = () => {
    console.log("Going to Map Page...");
    navigation.navigate("Map");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Search Page</Text>
      <View style={styles.buttonContainer}>
        <CustomButton
          initialText="Go to Maps"
          updatedText="Loading..."
          onPress={handleSubmit}
        />
      </View>
      <View style={styles.navbarContainer}>
        <BottomNavbar />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
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
  navbarContainer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
  },
});
