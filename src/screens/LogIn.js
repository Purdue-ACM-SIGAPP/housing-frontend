import React, { useState } from 'react';
import { useNavigation } from "@react-navigation/native";
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

export default function App() {
    const navigation = useNavigation();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        if (username === 'admin' && password === 'password') {
            Alert.alert('Login Successful');
            console.log("Going to Home Page...");
            navigation.navigate("Home");
        } else if (username.indexOf("@gmail.com") >= 0) {
            navigation.navigate("verification")
        }
        else {
            Alert.alert('Invalid Credentials');
        }
    };

    const handleCreate = () => {
        Alert.alert("Karthikeyan")
    };

    return (
        <View style={styles.container}>
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
                secureTextEntry
            />
            <Button title="Login" onPress={handleLogin} />

            <Text style = {styles.input}>Not registered yet? </Text>
            <Button title="Create Account" onPress={handleCreate} />

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 16,
    },
    title: {
        fontSize: 24,
        marginBottom: 24,
        color: '#020202',
    },
    input: {
        width: '80%',
        padding: 10,
        borderWidth: 1,
        borderColor: '#020202',
        marginBottom: 12,
        borderRadius: 5,
    },
    Button: {
        color: '#ec9a9a'
    }
});