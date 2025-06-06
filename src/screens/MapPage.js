import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Alert,
  SafeAreaView,
} from "react-native";
import SearchPanel from "../components/SearchPanel";
import CustomMap from "../components/CustomMap";
import BottomNavbar from "../components/BottomNavbar";
import { API_BASE_URL } from "@env";
import buildings from "../constants/buildings.json";
import { useNavigation, useRoute } from "@react-navigation/native";

export default function MapPage() {
  const route = useRoute();
  const { initialLatitude, initialLongitude } = route.params || {};

  const [markerPosition, setMarkerPosition] = useState({
    latitude: initialLatitude || 40.424925486930064,
    longitude: initialLongitude || -86.91358246116509,
  });
  const [buildingData, setBuildingData] = useState(null);
  const [highlightedBuildings, setHighlightedBuildings] = useState([]);
  const navigation = useNavigation();

  const [isInSearchBar, setIsInSearchBar] = useState(false);

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
    if (initialLatitude && initialLongitude) {
      setMarkerPosition({
        latitude: initialLatitude,
        longitude: initialLongitude,
      });
    }
    fetchBuildings();
  }, [initialLatitude, initialLongitude]);

  const handleBuildingPress = async (building) => {
    setBuildingData(building); // Set building data on polygon press
    try {
      const response = await fetch(
        `${API_BASE_URL}/api/Building/${building.buildingID}`
      );
      const data = await response.json();
      navigation.navigate("ReviewPage", { data });
    } catch (error) {
      console.error("Error fetching building data:", error);
    }
    // await setTimeout(10);
  };

  const handleClosePopup = () => {
    setBuildingData(null);
  };

  return (
    <SafeAreaView style={styles.container}>
      <SearchPanel
        isInSearchBar={isInSearchBar}
        setIsInSearchBar={setIsInSearchBar}
      />
      <CustomMap
        markerPosition={markerPosition}
        onMapPress={(coordinate) => {
          setIsInSearchBar(false);
          setMarkerPosition(coordinate);
        }} // Simply update marker position
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
        </View>
      )}
      <BottomNavbar />
    </SafeAreaView>
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
