import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// Pages
import HomePage from "./src/screens/HomePage";
import NotFoundPage from "./src/screens/NotFoundPage";
import MapPage from "./src/screens/MapPage";
import NewsAndEventsPage from "./src/screens/NewsAndEventsPage";
import SearchPage from "./src/screens/SearchPage";
import IndividualNewsPage from "./src/screens/IndividualNewsPage";
import IntroPage from "./src/screens/IntroPage";
import LoginPage from "./src/screens/LoginPage";
import VerificationPage from "./src/screens/VerificationPage";
import SignupPage from "./src/screens/SignupPage";

export default function App() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="LogIn"
        screenOptions={{
          headerShown: true, // Set to false to hide header
        }}
      >
        <Stack.Screen name="IntroPage" component={IntroPage} />
        <Stack.Screen name="LogIn" component={LoginPage} />
        <Stack.Screen name="Verification" component={VerificationPage} />
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="Signup" component={SignupPage} />
        <Stack.Screen name="Map" component={MapPage} />
        <Stack.Screen name="NotFound" component={NotFoundPage} />
        <Stack.Screen name="Search" component={SearchPage} />
        <Stack.Screen name="NewsAndEventsPage" component={NewsAndEventsPage} />
        <Stack.Screen
          name="IndividualNewsPage"
          component={IndividualNewsPage}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
