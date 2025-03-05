import React, { useState, useEffect, useRef } from "react";
import { useNavigation } from "@react-navigation/native";
import { Animated, View, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, Keyboard, Button, StyleSheet, Alert, Image, Touchable } from "react-native";
import HomePage from "./HomePage";
import theme from "../utils/theme.js"

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
    backgroundColor: theme.color.background,
    padding: 16,
    textAlign: "left",
  },
  circle1: {
    position: "absolute",
    width: 420,
    height: 420,
    borderRadius: 420 / 2,
    backgroundColor: theme.color.secondaryDark,
    left: -124,
    top: 543,
  },
  circle2: {
    position: "absolute",
    width: 300,
    height: 300,
    borderRadius: 300 / 2,
    backgroundColor: theme.color.secondaryDark,
    left: 194,
    top: -158,
  },
  circle3: {
    position: "absolute",
    width: 300,
    height: 300,
    borderRadius: 300 / 2,
    backgroundColor: theme.color.secondaryDark,
    left: 185,
    top: 665,
  },
  title: {
    fontSize: 40,
    fontWeight: "bold",
    marginBottom: 10,
    color: theme.color.primary,
    textShadowColor: theme.color.shadow,
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
    color: theme.color.text,
    marginBottom: 20,
    textAlign: "center",
    textShadowColor: theme.color.shadow,
    textShadowOffset: { width: 0, height: 4 },
    textShadowRadius: 4,
  },
  resentMessage: {
    fontSize: 16,
    color: theme.color.accent,
    marginBottom: 20,
    textAlign: "center",
    textShadowColor: theme.color.shadow,
    textShadowOffset: { width: 0, height: 4 },
    textShadowRadius: 4,
  },
  input: {
    height: 90,
    borderColor: theme.color.text,
    color: theme.color.text,
    borderWidth: 1,
    borderRadius: theme.borderRadius,
    fontSize: theme.text.input,
    letterSpacing: 25,
    paddingLeft: '10%',
    width: 300,
    marginBottom: 20,
  },
  resendButtonContainer: {
    backgroundColor: theme.color.accent,
    color: theme.color.textLight,
    paddingVertical: 4,
    paddingHorizontal: 0,
    alignItems: "center",
    justifyContent: "center",
    width: 120,
    height: 25,
    borderRadius: theme.borderRadius,
  },
  resendButtonText: {
    color: theme.color.textLight,
    fontSize: 14,
  },
  verifyButtonContainer: {
    backgroundColor: theme.color.primary,
    paddingVertical: 20,
    paddingHorizontal: 25,
    alignItems: "center",
    justifyContent: "center",
    width: 300,
    height: 70,
    borderRadius: theme.borderRadius,
  },
  verifyButtonText: {
    color: theme.color.textLight,
    fontSize: 24,
    textShadowColor: theme.color.shadow,
    textShadowOffset: { width: 0, height: 4 },
    textShadowRadius: 4,
  }
});
