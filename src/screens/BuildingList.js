import React from "react";
import {SafeAreaView, Text, FlatList, StyleSheet, View, TouchableOpacity, Image, Dimensions, Alert} from "react-native";
const { width, height } = Dimensions.get("window");
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

    const handleSortButtonPress = () => {
        Alert.alert("./karthikeyan.png");
    };

    return (
        <SafeAreaView style={styles.container}>
            <Image
                source={require("./listofbuildings.png")} // Path to your image
                style={styles.image}
            /><Image/>
            {/* Header with title and map button */}
            <View style={styles.header}>
                <TouchableOpacity style={styles.sortButton} onPress={handleSortButtonPress}>
                    <Text style={styles.mapButtonText}>Sort By</Text>
                </TouchableOpacity>
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
    mapButton: {
        backgroundColor: "#065758", // Button color
        paddingVertical: 10,
        paddingHorizontal: 25,
        borderRadius: 5,
        alignSelf: "flex-end", // Align button to the right
        marginRight: width * 0.05, // Add space on the right
        marginTop: height * 0.015
    },
    sortButton: {
        backgroundColor: "#065758", // Button color
        paddingVertical: 10,
        paddingHorizontal: 25,
        borderRadius: 5,
        marginLeft: width * 0.05,
        marginTop: height * 0.015
    },
    mapButtonText: {
        color: '#fff',
        fontSize: 24,
        textShadowColor: '#00000040',
        textShadowOffset: { width: 0, height: 4 },
        textShadowRadius: 4,
    },
    image: {
        width: width, 
        height: height * 0.1, 
        resizeMode: "cover",
        alignItems: "center",
        justifyContent: "center",
    },
});

export default BuildingList;