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
        } else {
            Alert.alert('Invalid Credentials');
        }
    };

    const handleCreate = () => {
        //TODO
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Purdue Paths</Text>
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

            {/*<div> 
                <Text style = {styles.title}>Not registered yet? </Text>
                style={styles.input}
                <Button title="Create Account" onPress={handleCreate} />
            </div> */}
            
                
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
        color: '#4474ef',
    },
    input: {
        width: '80%',
        padding: 10,
        borderWidth: 1,
        borderColor: '#020202',
        marginBottom: 12,
        borderRadius: 5,
    },
});

