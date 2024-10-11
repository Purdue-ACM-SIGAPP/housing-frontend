import React, { useState } from 'react';
import { useNavigation } from "@react-navigation/native";
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
//export default GoogleSignInButton;

//google button
const GoogleSignInButton = () => {
    useEffect(() => {
        // Load the Google Sign-In script
        const script = document.createElement('script');
        script.src = "https://accounts.google.com/gsi/client";
        script.async = true;
        script.onload = () => {
            // Initialize Google Sign-In
            google.accounts.id.initialize({
                client_id: "YOUR_GOOGLE_CLIENT_ID", // Replace with your Google Client ID
                callback: handleCredentialResponse,
            });

            // Render the Google Sign-In button
            google.accounts.id.renderButton(
                document.getElementById('buttonDiv'),
                { theme: 'outline', size: 'large' }  // Customization attributes
            );

            // Optionally, show the One Tap dialog
            google.accounts.id.prompt();
        };

        document.body.appendChild(script);

        // Cleanup the script on component unmount
        return () => {
            document.body.removeChild(script);
        };
    }, []);

    // Function to handle the Google response
    const handleCredentialResponse = (response) => {
        console.log('Encoded JWT ID token: ' + response.credential);
    };

    return (
        <div>
            <div id="buttonDiv"></div>
        </div>
    );
};

//export default GoogleSignInButton;
//end of button

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