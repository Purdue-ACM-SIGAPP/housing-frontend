import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// Pages
import HomePage from "./src/screens/HomePage";
import NotFoundPage from "./src/screens/NotFoundPage";
//import MapPage from "./src/screens/MapPage";
import ReviewPage from "./src/screens/ReviewPage";
import NewsAndEventsPage from "./src/screens/NewsAndEventsPage";
import SearchPage from "./src/screens/SearchPage";
import IndividualNewsPage from "./src/screens/IndividualNewsPage";

export default function App() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="ReviewPage" // set to ReviewPage to debug this branch, normally 'LogIn'
        screenOptions={{
          headerShown: true, // Set to false to hide header
        }}
      >
        <Stack.Screen name="Home" component={HomePage} />
        {/* <Stack.Screen name="Map" component={MapPage} /> */}
        <Stack.Screen name="NotFound" component={NotFoundPage} />
        <Stack.Screen name="Search" component={SearchPage} />
        <Stack.Screen name="NewsAndEventsPage" component={NewsAndEventsPage} />
        <Stack.Screen
          name="IndividualNewsPage"
          component={IndividualNewsPage}
        />
        <Stack.Screen name="ReviewPage" component={
          ()=><ReviewPage
            bldgName="Cool Building"
            bldgDesc="Lorem ipsum dolor sit amet, consectetur adipiscing elit,"
            imgUrl="https://collections.lib.purdue.edu/campus/images/buildings/11-amelia-earhart-residence-hall.jpeg"
            ></ReviewPage>} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
