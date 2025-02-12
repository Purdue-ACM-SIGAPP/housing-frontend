import React from "react";
import { SafeAreaView, Text, FlatList, StyleSheet, View, TouchableOpacity, Image, Dimensions, Alert } from "react-native";
const { width, height } = Dimensions.get("window");
import { useNavigation } from "@react-navigation/native";
import BottomNavbar from "../components/BottomNavbar";


const BuildingList = () => {
    const navigation = useNavigation();

    // Sample building data
    const buildings = [
        {
            id: "1", name: "Purdue Memorial Union", directions: "Directions \u{1F4CD}", image: require("./pmu.png"),
            description: "Lorem Ipsum Dolor sit amet"
        },
        {
            id: "2",
            name: "Wilmeth Active Learning Center",
            directions: "Directions \u{1F4CD}",
            image: require("./walc.png"),
            description: "Lorem Ipsum Dolor sit amet"
        },
        {
            id: "3",
            name: "University Book Store",
            directions: "Directions \u{1F4CD}",
            image: require("./bookstore.png"),
            description: "Lorem Ipsum Dolor sit amet"
        },
        {
            id: "4",
            name: "Lawson Computer Science Building",
            directions: "Directions \u{1F4CD}",
            image: require("./lwsn.png"),
            description: "Lorem Ipsum Dolor sit amet"
        },
    ];

    // Handle building name press
    const handleBuildingPress = (buildingName) => {
        navigation.navigate("BuildingDetail", {buildingName});
    };

    // Handle directions press
    const handleDirectionsPress = (buildingName) => {
        navigation.navigate("Map", {buildingName});
    };

    // Render each building item
    const renderBuilding = ({item}) => (
        <>
            <View style={styles.itemContainer}>
                <View style={styles.topCont}>
                    <Image source={item.image} style={styles.image}/>
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
            <View style={[styles.itemContainer, styles.gold]}>
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
        <SafeAreaView style={{flex: 1}}>
            {/* Circles (if needed) */}
            <View style={styles.circle1}/>
            <View style={styles.circle2}/>
            <View style={styles.circle3}/>

            {/* Header */}
            <Image
                source={require("./listofbuildings.png")}
                style={styles.headerImage}
            />
            <View style={styles.header}>
                <TouchableOpacity style={styles.sortButton} onPress={handleSortButtonPress}>
                    <Text style={styles.mapButtonText}>Sort By</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.mapButton} onPress={handleMapButtonPress}>
                    <Text style={styles.mapButtonText}>Map</Text>
                </TouchableOpacity>
            </View>

            {/* FlatList with padding to avoid overlapping */}
            <View style={{flex: 1}}>
                <FlatList
                    data={buildings}
                    renderItem={renderBuilding}
                    keyExtractor={(item) => item.id}
                    contentContainerStyle={{paddingBottom: 80}} // Add padding for BottomNavbar
                />
            </View>

            {/* BottomNavbar positioned at the bottom */}
            <View style={styles.bottomNavbarContainer}>
                <BottomNavbar/>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: "#fff",
    },
    bottomNavbarContainer: {
        position: "absolute", 
        bottom: -9, 
        left: 0,
        right: 0,
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
        marginVertical: 4,
        backgroundColor: "#065758",
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "#ddd",
        alignItems: "center",
        justifyContent: "space-between",
        margin: 20,
    },
    textContainer: {
        marginLeft: 10,
    },
    itemText: {
        fontSize: 18,
        color: "#ffffff",
    },
    directionsText: {
        fontSize: 20, 
        fontWeight: "bold", 
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
        marginRight: 10
    },
    topCont: {
        flexDirection: "row",
    },
    gold: {
        backgroundColor: "#cbba96",
        textAlign: "center",
        paddingVertical: 3,
        paddingHorizontal: 25,
        margin: 20,
        marginBottom: 10,
    },
    columnTop: {
        flexDirection: "column",
    },
    descriptionText: {
        fontSize: 12,
        color: "#ffffff",
        marginTop: 5,
    },
    circle1: {
        position: "absolute",
        width: 420,
        height: 420,
        borderRadius: 420 / 2,
        backgroundColor: "#A5C2C480",
        left: -124,
        top: 543,
        zIndex: -1, // Render below other components
        pointerEvents: "none", // Make non-interactive
    },
    circle2: {
        position: "absolute",
        width: 300,
        height: 300,
        borderRadius: 300 / 2,
        backgroundColor: "#A5C2C480",
        left: 194,
        top: -158,
        zIndex: -1, // Render below other components
        pointerEvents: "none", // Make non-interactive
    },
    circle3: {
        position: "absolute",
        width: 300,
        height: 300,
        borderRadius: 300 / 2,
        backgroundColor: "#A5C2C480",
        left: 185,
        top: 665,
        zIndex: -1, // Render below other components
        pointerEvents: "none", // Make non-interactive
    },
});

export default BuildingList;