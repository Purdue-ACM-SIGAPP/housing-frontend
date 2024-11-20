// BottomNavbar.js
import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/native";

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
        onPress={() => navigation.navigate("Search")}
        style={styles.navItem}
      >
        <Icon name="web" size={36} color="#000" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  navbarContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    paddingVertical: 8,
    paddingHorizontal: 20,
    marginBottom: 12,
    backgroundColor: "#fff",
    zIndex: 100,
  },
  navItem: {
    alignItems: "center",
  },
});

export default BottomNavbar;
