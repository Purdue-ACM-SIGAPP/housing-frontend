import React from "react";
import { SafeAreaView, Text, FlatList, StyleSheet, View, TouchableOpacity, Image, Dimensions, Alert } from "react-native";
const { width, height } = Dimensions.get("window");
import { useNavigation } from "@react-navigation/native";

const BuildingList = () => {
    const navigation = useNavigation();

    // Sample building data
    const buildings = [
        { id: "1", name: "Purdue Memorial Union", directions: "Directions", image: require("./pmu.png"),
            description: "Lorem Ipsum Dolor sit amet" },
        { id: "2", name: "Wilmeth Active Learning Center", directions: "Directions", image: require("./walc.png"),
            description: "Lorem Ipsum Dolor sit amet" },
        { id: "3", name: "University Book Store", directions: "Directions", image: require("./bookstore.png"),
            description: "Lorem Ipsum Dolor sit amet" },
        { id: "4", name: "Lawson Computer Science Building", directions: "Directions", image: require("./lwsn.png"),
            description: "Lorem Ipsum Dolor sit amet" },
    ];

    // Handle building name press
    const handleBuildingPress = (buildingName) => {
        navigation.navigate("BuildingDetail", { buildingName });
    };

    // Handle directions press
    const handleDirectionsPress = (buildingName) => {
        navigation.navigate("Directions", { buildingName });
    };

    // Render each building item
    const renderBuilding = ({ item }) => (
        <>
            <View style={styles.itemContainer}>
                <View style={styles.topCont}>
                    <Image source={item.image} style={styles.image} />
                    <View style={styles.columnTop}>
                        <View style={styles.textContainer}>
                            <TouchableOpacity onPress={() => handleBuildingPress(item.name)}>
                                <Text style={styles.itemText}>{item.name}</Text>
                            </TouchableOpacity>
                        </View>
                        <Text style={styles.descriptionText}>{item.description}</Text>
                    </View>
                </View>
            </View>
            <View style={styles.itemContainer}>
                <View style={styles.textContainer}>
                    <TouchableOpacity onPress={() => handleDirectionsPress(item.name)}>
                        <Text style={styles.directionsText}>{item.directions}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </>
    );

    // Handle map button press
    const handleMapButtonPress = () => {
        navigation.navigate("Map");
    };

    const handleSortButtonPress = () => {
        Alert.alert("Sort By");
    };

    return (
        <SafeAreaView style={styles.container}>
            <Image
                source={require("./listofbuildings.png")} // Path to your image
                style={styles.headerImage}
            />
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
    headerImage: {
        width: width,
        height: height * 0.1,
        resizeMode: "cover",
        alignItems: "center",
        justifyContent: "center",
    },
    itemContainer: {
        flexDirection: "column",
        padding: 15,
        marginVertical: 8,
        backgroundColor: "#065758",
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "#ddd",
        alignItems: "center",
    },
    textContainer: {
        marginLeft: 10,
    },
    itemText: {
        fontSize: 18,
        color: "#ffffff",
    },
    directionsText: {
        fontSize: 16,
        color: "#ffffff",
        marginTop: 5,
    },
    mapButton: {
        backgroundColor: "#065758",
        paddingVertical: 10,
        paddingHorizontal: 25,
        borderRadius: 5,
        alignSelf: "flex-end",
        marginRight: width * 0.05,
        marginTop: height * 0.015,
    },
    sortButton: {
        backgroundColor: "#065758",
        paddingVertical: 10,
        paddingHorizontal: 25,
        borderRadius: 5,
        marginLeft: width * 0.05,
        marginTop: height * 0.015,
    },
    mapButtonText: {
        color: '#fff',
        fontSize: 24,
        textShadowColor: '#00000040',
        textShadowOffset: { width: 0, height: 4 },
        textShadowRadius: 4,
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 5,
    },
    topCont: {
        flexDirection: "row",
    },
    columnTop: {
        flexDirection: "column",
    },
    descriptionText: {
        fontSize: 12,
        color: "#ffffff",
        marginTop: 5,
    },
});

export default BuildingList;