import React, { useState, useEffect, useRef } from "react";
import { useNavigation } from "@react-navigation/native";
import { Animated, View, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, Keyboard, Button, StyleSheet, Alert, Image, Touchable } from "react-native";
import HomePage from "./HomePage";

export default function VerificationPage() {
  const navigation = useNavigation();
  const [code, checkCode] = useState("");
  const [password, setPassword] = useState("");

  const handleVerify = () => {
    navigation.navigate("Home");
  };

  const [defaultMessage, resentMessage] = useState("Please enter the verification code sent to j*******@purdue.edu");
  const [defaultMessageStyle, resentMessageStyle] = useState(styles.defaultMessage);

  const handleResend = () => {
    resentMessage("The verification code has been resent to j*******@purdue.edu");
    resentMessageStyle(styles.resentMessage);
  }

  const titleSpacerHeight = useRef(new Animated.Value(110)).current;
  const buttonSpacerHeight = useRef(new Animated.Value(190)).current;
  const bottomSpacerHeight = useRef(new Animated.Value(50)).current;
  const animationDuration = 150;

  useEffect(() => {
    const keyboardWillShowListener = Keyboard.addListener('keyboardWillShow', handleKeyboardShow);
    const keyboardWillHideListener = Keyboard.addListener('keyboardWillHide', handleKeyboardHide);

    return () => {
      keyboardWillShowListener.remove();
      keyboardWillHideListener.remove();
    };
  }, []);

  const handleKeyboardShow = () => {
    Animated.timing(titleSpacerHeight, {
      toValue: 30,
      duration: animationDuration,
      useNativeDriver: false,
    }).start();
    Animated.timing(buttonSpacerHeight, {
      toValue: 30,
      duration: animationDuration,
      useNativeDriver: false,
    }).start();
    Animated.timing(bottomSpacerHeight, {
      toValue: 0,
      duration: animationDuration,
      useNativeDriver: false,
    }).start();
  };

  const handleKeyboardHide = () => {
    Animated.timing(titleSpacerHeight, {
      toValue: 110,
      duration: animationDuration,
      useNativeDriver: false,
    }).start();
    Animated.timing(buttonSpacerHeight, {
      toValue: 190,
      duration: animationDuration,
      useNativeDriver: false,
    }).start();
    Animated.timing(bottomSpacerHeight, {
      toValue: 50,
      duration: animationDuration,
      useNativeDriver: false,
    }).start();
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container}>
        <View style={styles.circle1} />
        <View style={styles.circle2} />
        <View style={styles.circle3} />

        <Text style={styles.title}>Verification</Text>
        <Image style={styles.icon} source={require('../../assets/verification-page-icon.png')} />

        <Animated.View style={[{ height: titleSpacerHeight }]} />

        <Text style={defaultMessageStyle}>{defaultMessage}</Text>
        <TextInput
          style={styles.input}
          placeholder="______"
          value={code}
          keyboardType="number-pad"
          onChangeText={checkCode}
          maxLength={6}
          placeholderTextColor="#555"
        />

        <TouchableOpacity onPress={handleResend} style={styles.resendButtonContainer}>
          <Text style={styles.resendButtonText}>Resend Code</Text>
        </TouchableOpacity>

        <Animated.View style={[{ height: buttonSpacerHeight }]} />

        <TouchableOpacity onPress={handleVerify} style={styles.verifyButtonContainer}>
          <Text style={styles.verifyButtonText}>Verify</Text>
        </TouchableOpacity>

        <Animated.View style={[{ height: bottomSpacerHeight }]} />

      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 16,
    textAlign: "left",
  },
  circle1: {
    position: "absolute",
    width: 420,
    height: 420,
    borderRadius: 420 / 2,
    backgroundColor: "#A5C2C480",
    left: -124,
    top: 543,
  },
  circle2: {
    position: "absolute",
    width: 300,
    height: 300,
    borderRadius: 300 / 2,
    backgroundColor: "#A5C2C480",
    left: 194,
    top: -158,
  },
  circle3: {
    position: "absolute",
    width: 300,
    height: 300,
    borderRadius: 300 / 2,
    backgroundColor: "#A5C2C480",
    left: 185,
    top: 665,
  },
  title: {
    fontSize: 40,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#065758",
    textShadowColor: '#00000040',
    textShadowOffset: { width: 0, height: 4 },
    textShadowRadius: 4,
  },
  icon: {
    maginTop: 20,
    width: 40,
    height: 52,
  },
  defaultMessage: {
    fontSize: 16,
    color: "#000",
    marginBottom: 20,
    textAlign: "center",
    textShadowColor: '#00000040',
    textShadowOffset: { width: 0, height: 4 },
    textShadowRadius: 4,
  },
  resentMessage: {
    fontSize: 16,
    color: "#BF6E65",
    marginBottom: 20,
    textAlign: "center",
    textShadowColor: '#00000040',
    textShadowOffset: { width: 0, height: 4 },
    textShadowRadius: 4,
  },
  input: {
    height: 90,
    borderColor: '#000',
    color: "#555",
    borderWidth: 1,
    borderRadius: 25,
    fontSize: 36,
    letterSpacing: 25,
    paddingLeft: '10%',
    width: '85%',
    marginBottom: 20,
  },
  resendButtonContainer: {
    backgroundColor: '#BF6E65',
    color: "#fff",
    paddingVertical: 4,
    paddingHorizontal: 0,
    alignItems: "center",
    justifyContent: "center",
    width: 120,
    height: 25,
    borderRadius: 25,
  },
  resendButtonText: {
    color: '#fff',
    fontSize: 14,
  },
  verifyButtonContainer: {
    backgroundColor: '#065758',
    paddingVertical: 20,
    paddingHorizontal: 25,
    alignItems: "center",
    justifyContent: "center",
    width: '85%',
    height: 70,
    borderRadius: 25,
  },
  verifyButtonText: {
    color: '#fff',
    fontSize: 24,
    textShadowColor: '#00000040',
    textShadowOffset: { width: 0, height: 4 },
    textShadowRadius: 4,
  }
});
