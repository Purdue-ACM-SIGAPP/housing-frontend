import React from "react";
import { SafeAreaView, Text, FlatList, StyleSheet, View } from "react-native";

const BuildingList = () => {
    // Sample building data
    const buildings = [
        { id: "1", name: "Building A" },
        { id: "2", name: "Building B" },
        { id: "3", name: "Building C" },
        { id: "4", name: "Building D" },
    ];

    // Render each building item
    const renderBuilding = ({ item }) => (
        <View style={styles.itemContainer}>
            <Text style={styles.itemText}>{item.name}</Text>
        </View>
    );

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Building List</Text>
            <FlatList
                data={buildings}
                renderItem={renderBuilding}
                keyExtractor={(item) => item.id}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: "#fff",
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 20,
        color: "#333",
    },
    itemContainer: {
        padding: 15,
        marginVertical: 8,
        backgroundColor: "#f4f4f4",
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "#ddd",
    },
    itemText: {
        fontSize: 18,
        color: "#555",
    },
});

export default BuildingList;