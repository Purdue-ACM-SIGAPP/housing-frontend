import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Alert } from "react-native";
import CustomMap from "../components/CustomMap";
import BottomNavbar from "../components/BottomNavbar";
import { API_BASE_URL } from "@env";
import buildings from "../constants/buildings.json";
import { useNavigation } from "@react-navigation/native";

export default function MapPage({ initialLatitude, initialLongitude }) {
  const [markerPosition, setMarkerPosition] = useState({
    latitude: initialLatitude || 40.424925486930064,
    longitude: initialLongitude || -86.91358246116509,
  });
  const [buildingData, setBuildingData] = useState(null);
  const [highlightedBuildings, setHighlightedBuildings] = useState([]);
  const navigation = useNavigation();


  const fetchBuildings = async () => {
    try {
      // If there are no buildings, log and return early
      if (!buildings.list || buildings.list.length === 0) {
        console.warn("No buildings found");
        Alert.alert("No buildings found");
        return;
      }

      // For each building, fetch the outline
      const outlines = buildings.list.map((building) => {
        try {
          const coordinates = building.coordinates.map((coord) => ({
            latitude: coord.latitude,
            longitude: coord.longitude,
          }));

          return {
            buildingID: building.buildingID,
            coordinates: coordinates,
          };
        } catch (error) {
          console.error(
            `Error fetching outline for building ${building.id}:`,
            error
          );
          return null;
        }
      });

      const validOutlines = outlines.filter((outline) => outline !== null);

      // Set the polygons state with the fetched outlines
      // console.log(validOutlines);
      setHighlightedBuildings(validOutlines);
    } catch (error) {
      console.error("Error fetching building data:", error);
    }
  };

  // Use useEffect to call the fetchBuildings function when the component mounts
  useEffect(() => {
    fetchBuildings();
  }, []);

  const handleBuildingPress = async (building) => {
    setBuildingData(building); // Set building data on polygon press
    console.log("Building Pressed:", typeof building.buildingID);
    try {
      const response = await fetch(
        `${API_BASE_URL}/api/Building/${building.buildingID}`
      );
      const data = await response.json();
      
      navigation.navigate("ReviewPage", {data});
    } catch (error) {
      console.error("Error fetching building data:", error);
    }
  };

  const handleClosePopup = () => {
    setBuildingData(null);
  };

  return (
    <View style={styles.container}>
      <CustomMap
        markerPosition={markerPosition}
        onMapPress={(coordinate) => setMarkerPosition(coordinate)} // Simply update marker position
        // onMapPress={handleMapPress}
        highlightedBuildings={highlightedBuildings} // Pass the polygons to the CustomMap
        onBuildingPress={handleBuildingPress}
      />
      {buildingData && (
        <View style={styles.popup}>
          <TouchableOpacity
            onPress={handleClosePopup}
            style={styles.closeButton}
          >
            <Text style={styles.closeText}>x</Text>
          </TouchableOpacity>
          <View>
            <Text style={styles.buildingName}>{buildingData.id}</Text>
            <Text style={styles.buildingAddress}>Coordinates:</Text>
            {/* {buildingData.coordinates.map((coord, index) => (
              <Text key={index} style={styles.coordinateText}>
                Lat: {coord.latitude}, Lng: {coord.longitude}
              </Text>
            ))} */}
          </View>
        </View>
      )}
      <BottomNavbar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  popup: {
    position: "absolute",
    bottom: 16,
    left: "50%",
    transform: [{ translateX: -150 }],
    backgroundColor: "white",
    padding: 16,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    width: 300,
  },
  closeButton: {
    position: "absolute",
    top: 8,
    right: 8,
  },
  closeText: {
    color: "#EF4444", // Equivalent to text-red-500
    fontSize: 18,
    fontWeight: "bold",
  },
  buildingName: {
    color: "black",
    fontSize: 20,
    fontWeight: "bold",
  },
  buildingAddress: {
    color: "black",
    fontSize: 16,
  },
});
