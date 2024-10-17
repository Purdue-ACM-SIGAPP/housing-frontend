import * as React from "react";
import {
  View,
  StyleSheet,
  Image,
  ScrollView,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import Form from "../components/Form";

export default function EditProfile() {
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.keyboardAvoidingView}
      >
        <ScrollView contentContainerStyle={styles.scrollView}>
          <View style={styles.waveContainer}>
            <Image
              style={styles.waves}
              source={require("../../assets/stacked-waves.png")}
            />
          </View>
          <View style={styles.profilePicContainer}>
            <Image
              style={styles.profilePic}
              src="https://i.pinimg.com/474x/65/25/a0/6525a08f1df98a2e3a545fe2ace4be47.jpg"
            />
            <View style={styles.uploadPhoto}>
              <Image
                style={styles.camera}
                source={require("../../assets/camera.png")}
              />
            </View>
          </View>
          <Form />
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  keyboardAvoidingView: { flex: 1 },
  scrollView: {
    flexGrow: 1,
    alignItems: "center",
    paddingBottom: 20,
  },
  waveContainer: {
    width: "100%",
    height: "25%",
    backgroundColor: "#38a169",
  },
  waves: {
    width: "100%",
    height: "100%",
  },
  profilePicContainer: {
    marginTop: -100, // Moves the profile pic up into the wave
    alignItems: "center", // Centers the profile pic horizontally
  },
  profilePic: {
    width: 220,
    height: 220,
    borderRadius: 110,
    borderColor: "#EEEEEE",
    borderWidth: 2,
  },
  uploadPhoto: {
    width: 60,
    height: 60,
    borderRadius: 35,
    backgroundColor: "#CFB99185",
    position: "absolute",
    right: 10,
    bottom: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  camera: {
    width: "50%",
    height: "50%",
  },
});
