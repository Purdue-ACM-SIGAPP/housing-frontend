import React from "react";
import { SafeAreaView, Text, FlatList, StyleSheet, View, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";


const BuildingList = () => {
    const navigation = useNavigation();

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

    // Handle map button press
    const handleMapButtonPress = () => {
        navigation.navigate("Map");
    };

    return (
        <SafeAreaView style={styles.container}>
            {/* Header with title and map button */}
            <View style={styles.header}>
                <Text style={styles.title}>Building List</Text>
                <TouchableOpacity style={styles.mapButton} onPress={handleMapButtonPress}>
                    <Text style={styles.mapButtonText}>Map</Text>
                </TouchableOpacity>
            </View>

            {/* List of buildings */}
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
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
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
    mapButton: {
        backgroundColor: "#007AFF", // Blue color
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
    },
    mapButtonText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
    },
});

export default BuildingList;