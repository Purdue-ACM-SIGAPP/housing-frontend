import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView, TextInput } from "react-native-web";

export default function EditProfile() {
  

  return (
    <View style={styles.container}>
      {/* <Text style={styles.title}>Edit Profile</Text> */}
      <View style={styles.waveContainer}></View>
      <Image
        style={styles.profilePic}
        src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
      />
      <SafeAreaView>
      <TextInput
        style={styles.userSelect}
        
       
      />
      <TextInput
        style={styles.userSelect}
        
        
        placeholder="useless placeholder"
        keyboardType="numeric"
      />
    </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    // justifyContent: "center",
    backgroundColor: "#F0FDF4", // Equivalent to bg-green-50
    width: "100%",
    height: "100%",
  },
  title: {
    fontSize: 24, // Equivalent to text-2xl
    fontWeight: "bold",
    textAlign: "center",
  },
  waveContainer: {
    width: "100%",
    height: "20%",
    backgroundColor: "#38a169",
  },
  profilePic: {
    width: 200,
    height: 200,
    borderRadius: 100,
    position: "absolute",
    top: 90,
  },
  userSelect: {

    width: "80%",
    height: "5%",
    backgroundColor: "white",
    borderColor: "1D1D1D",
    borderRadius: 10,
    borderWidth: 1,
    top: 350,
    position: "absolute",
  },
});
