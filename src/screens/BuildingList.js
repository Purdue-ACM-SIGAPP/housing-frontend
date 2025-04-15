import React, { useEffect, useState } from "react";
import { SafeAreaView, Text, FlatList, StyleSheet, View, TouchableOpacity, Image, Dimensions, Alert } from "react-native";
const { width, height } = Dimensions.get("window");
import { useNavigation } from "@react-navigation/native";
import BottomNavbar from "../components/BottomNavbar";
import { API_BASE_URL } from "@env";
import SearchPanel from "../components/SearchPanel";
import theme from "../utils/theme.js";


const BuildingList = () => {
    const navigation = useNavigation();
    const [markerPosition, setMarkerPosition] = useState({
        latitude: 40.424925486930064,
        longitude: -86.91358246116509,
    });

    const [buildingData, setBuildingData] = useState(null);

    const [isInSearchBar, setIsInSearchBar] = useState(false);

    const fetchBuildings = async () => {
        try {
            const response = await fetch(`${API_BASE_URL}/api/Building/`, {
                method: "GET",
            });

            // Check if the response is successful (status code 200)
            if (!response.ok) {
                throw new Error(`Failed to fetch buildings: ${response.statusText}`);
            }

            const buildings = await response.json().catch((error) => {
                console.error("Error parsing JSON:", error);
                return null; // Return null if JSON parsing fails
            });

            if (!buildings) {
                console.error("Failed to parse buildings JSON:", response);
                return;
            }

            // If there are no buildings, log and return early
            if (!buildings || buildings.length === 0) {
                console.warn("No buildings found");
                Alert.alert("No buildings found");
                return;
            }

            setBuildingData(buildings);
        } catch (error) {
            console.error("Error fetching building data:", error);
        }
        await setTimeout(1000);
    };


    useEffect(() => {
        fetchBuildings();
    }, []);

    // Handle building name press
    const handleBuildingPress = async (id) => {
        // setBuildingData(building); // Set building data on polygon press
        try {
          const response = await fetch(
            `${API_BASE_URL}/api/Building/${id}`
          );
          const data = await response.json();
          navigation.navigate("ReviewPage", {data});
        } catch (error) {
          console.error("Error fetching building data:", error);
        }
        // await setTimeout(10);
      };

    // Handle directions press
    const handleDirectionsPress = (building) => {
        const longitude = building.longitude;
        const latitude = building.latitude;
        setMarkerPosition(latitude, longitude)
        navigation.navigate("Map", {
            initialLatitude: latitude,
            initialLongitude: longitude,
        });
    };


    // Render each building item
    const renderBuilding = ({ item }) => (
        <>
            <View style={styles.topCont}>
                <View style={styles.imageContainer}>
                    <Image source={'/Users/wmali1/RiderProjects/housing-frontend/src/screens/pmu.png'} style={styles.image} />
                </View>
                <View style={styles.itemContainer}>
                    <View style={styles.topCont}>
                        <View style={styles.columnTop}>
                            <View style={styles.textContainer}>
                                <TouchableOpacity onPress={() => handleBuildingPress(item.id)}>
                                    <Text style={styles.itemText}>{item.name + " (" + item.acronym + ")"}</Text>
                                </TouchableOpacity>
                            </View>
                            <Text style={styles.descriptionText}>{item.address}</Text>
                        </View>
                    </View>
                </View>
            </View>
            <View style={[styles.directionsContainer, styles.gold]}>
                <TouchableOpacity onPress={() => handleDirectionsPress(item)}>
                    <Text style={styles.directionsText}>{"Directions 📍"}</Text>
                </TouchableOpacity>
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
        <SafeAreaView style={styles.buildingList} edges={["top"]}>
            <SearchPanel
                isInSearchBar={isInSearchBar}
                setIsInSearchBar={setIsInSearchBar}
            />
            <View style={styles.container}>
                {/* Circles (if needed) */}
                <View style={styles.circle1} />
                {/* <View style={styles.circle2} /> */}
                <View style={styles.circle3} />

                {/* Header */}
                {/* <Image
                source={require("./listofbuildings.png")}
                style={styles.headerImage}
            /> */}

                {/* <View style={styles.header}>
                <TouchableOpacity style={styles.sortButton} onPress={handleSortButtonPress}>
                    <Text style={styles.mapButtonText}>Sort By</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.mapButton} onPress={handleMapButtonPress}>
                    <Text style={styles.mapButtonText}>Map</Text>
                </TouchableOpacity>
            </View> */}

                {/* FlatList with padding to avoid overlapping */}
                <View style={{ flex: 1, top: 65 }}>
                    <FlatList
                        data={buildingData}
                        markerPostition={markerPosition}
                        renderItem={renderBuilding}
                        keyExtractor={(item) => item.id}
                        contentContainerStyle={{ paddingBottom: 80 }} // Add padding for BottomNavbar
                    />
                </View>
            </View>

            {/* BottomNavbar positioned at the bottom */}
            <BottomNavbar />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    buildingList: {
        flex: 1,
        backgroundColor: "#fff",
    },
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: theme.background,
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
    imageContainer: {
        flexDirection: "column",
        padding: 7,
        marginVertical: 4,
        backgroundColor: "#065758",
        borderRadius: 15,
        borderWidth: 1,
        borderColor: "#0c3f3f",
        alignItems: "center",
        justifyContent: "space-between",
        marginLeft: 20,
        marginRight: 10,
    },
    searchPanel: {
        flex: 1,
        marginTop: 100,
    },
    itemContainer: {
        flexDirection: "column",
        padding: 15,
        marginVertical: 4,
        backgroundColor: "#0c3f3f",
        borderRadius: 15,
        borderWidth: 1,
        borderColor: "#ddd",
        //alignItems: "center",
        justifyContent: "space-between",
        width: width * 0.50,
    },
    directionsContainer: {
        flexDirection: "column",
        padding: 15,
        marginVertical: 4,
        backgroundColor: "#0c3f3f",
        borderRadius: 15,
        borderWidth: 1,
        borderColor: "#ddd",
        alignItems: "center",
        justifyContent: "space-between",
        textAlign: "center",
        width: "90%",
    },
    textContainer: {
        marginLeft: 10,
        width: "100%",
    },
    itemText: {
        fontSize: 15,
        color: "#ffffff",
        fontWeight: "bold",
        textAlign: "left",
        marginLeft: -15,
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
        width: 100,
        height: 100,
        borderRadius: 5,
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
        fontWeight: "lighter",
        textAlign: "left",
        marginLeft: -5,
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