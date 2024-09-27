import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// Pages
import HomePage from "./src/screens/HomePage";
import NotFoundPage from "./src/screens/NotFoundPage";
import MapPage from "./src/screens/MapPage";
import AccountSettings from "./src/screens/AccountSettings"

export default function App() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="AccountSettings"
        screenOptions={{
          headerShown: true, // Set to false to hide header
        }}
      >
        <Stack.Screen name="AccountSettings" component={AccountSettings} />
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="React Native Maps" component={MapPage} />
        <Stack.Screen name="NotFound" component={NotFoundPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
