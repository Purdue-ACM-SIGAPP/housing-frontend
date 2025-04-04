// BottomNavbar.js
import React from "react";
import { View, TouchableOpacity, Text, StyleSheet, SafeAreaView } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/native";
import theme from "../utils/theme.js";

const BottomNavbar = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.navbarContainer}>
      <TouchableOpacity
        onPress={() => navigation.navigate("NewsAndEventsPage")}
        style={styles.navItem}
      >
        <Icon name="format-list-bulleted" size={36} color="#000" />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("Map")}
        style={styles.navItem}
      >
        <Icon name="map-marker" size={36} color="#000" />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("BuildingList")}
        style={styles.navItem}
      >
        <Icon name="web" size={36} color="#000" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  navbarContainer: {
    position: "absolute",
    flexDirection: "row",
    bottom: -10,
    justifyContent: "space-around",
    width: "100%",
    paddingVertical: 8,
    paddingHorizontal: 20,
    marginBottom: 12,
    backgroundColor: theme.color.background,
    zIndex: 100,
    paddingBottom: 50,
  },
  navItem: {
    alignItems: "center",
  }
});

export default BottomNavbar;
