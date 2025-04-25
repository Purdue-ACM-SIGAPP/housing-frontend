import React, { useEffect } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  Pressable,
  SafeAreaView,
} from "react-native";
import { API_BASE_URL } from "@env";

export default function Form() {
  const [form, setForm] = React.useState({
    username: "",
    email: "",
    phoneNumber: "",
    accountType: "",
  });

  const [id, setId] = React.useState("");

  const fetchProfile = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/User/67184182f4700e2853851496`, {
        method: "GET",
      });

      // Check if the response is successful (status code 200)
      if (!response.ok) {
        throw new Error(`Failed to fetch profile: ${response.statusText}`);
      }

      const profile = await response.json().catch((error) => {
        console.error("Error parsing JSON:", error);
        return null; // Return null if JSON parsing fails
      });

      if (!profile) {
        console.error("Failed to parse profile JSON:", response);
        return;
      }

      // If there are no buildings, log and return early
      if (!profile || profile.length === 0) {
        console.warn("No profile found");
        Alert.alert("No profile found");
        return;
      }
      setId(profile.id.toString());
      console.log(id);
      console.log(profile);
      setForm({ email: profile.id.toString(), username: profile.name.toString(), phoneNumber: profile.phoneNumber.toString(), accountType: profile.accountType.toString() });
    } catch (error) {
      console.error("Error fetching profile data:", error);
    }
    await setTimeout(10);
  };

  const editProfile = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/User`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: id,
          name: form.username,
          phoneNumber: form.phoneNumber,
          accountType: form.accountType
        })
      });

      // Check if the response is successful (status code 200)
      if (!response.ok) {
        throw new Error(`Failed to fetch profile: ${response.statusText}`);
      }
    } catch (error) {
      console.error("Error fetching profile data:", error);
    }
    await setTimeout(10);
  }

  useEffect(() => {
    fetchProfile();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.input}
        value={form.username}
        onChangeText={(e) => setForm({ ...form, username: e })}
        placeholder="Username"
      />
      <TextInput
        style={styles.input}
        value={form.email}
        onChangeText={(e) => setForm({ ...form, email: e })}
        placeholder="Email"
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        value={form.phoneNumber}
        onChangeText={(e) => setForm({ ...form, phoneNumber: e })}
        placeholder="Phone Number"
        keyboardType="phone-pad"
      />
      <TextInput
        style={styles.input}
        value={form.accountType}
        onChangeText={(e) => setForm({ ...form, accountType: e })}
        placeholder="Account Type"
      />
      <Pressable
        onPress={editProfile}
        style={styles.button}>
        <Text style={styles.buttonText}>Submit</Text>
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    top: 40,
    width: "80%",
  },
  input: {
    padding: 10,
    height: 40,
    marginBottom: 30,
    borderWidth: 1,
    borderRadius: 10,
    width: "100%",
  },
  button: {
    backgroundColor: "#BF6E65",
    width: "50%",
    height: 40,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontWeight: "500",
    color: "#ffffff",
  },
});
