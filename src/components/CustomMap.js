import React from "react";
import { View, Text } from "react-native";
import MapView, { Marker, Polygon } from "react-native-maps";

const CustomMap = ({
  markerPosition,
  onMapPress,
  highlightedBuildings,
  onBuildingPress,
}) => {
  const handlePolygonPress = (building) => {
    onBuildingPress(building); // Pass building data to parent component
  };

  console.log("Highlighted Buildings:", highlightedBuildings); // Log to check structure

  return (
    <View style={{ flex: 1 }}>
      <MapView
        style={{ flex: 1 }}
        initialRegion={{
          latitude: markerPosition.latitude,
          longitude: markerPosition.longitude,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
        onPress={(e) => onMapPress(e.nativeEvent.coordinate)}
      >
        <Marker coordinate={markerPosition} />
        {/* Highlighted buildings using polygons */}
        {highlightedBuildings && highlightedBuildings.length > 0 ? (
          highlightedBuildings.map((building, index) => (
            <Polygon
              key={index}
              coordinates={building.coordinates} // Array of coordinates outlining the building
              fillColor="rgba(0, 128, 255, 0.3)" // Semi-transparent color to highlight the building
              strokeColor="rgba(0, 128, 255, 1)" // Border color of the polygon
              strokeWidth={2}
              tappable={true} // Allow tapping on the polygon
              onPress={() => handlePolygonPress(building)} // Handle polygon press
            />
          ))
        ) : (
          <Text>No buildings available</Text> // Fallback if no buildings to show
        )}
      </MapView>
    </View>
  );
};

export default CustomMap;
