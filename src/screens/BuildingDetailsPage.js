import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, ActivityIndicator } from 'react-native';
import CustomButton from '../components/CustomButton';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function BuildingDetailsPage({ route, navigation }) {
  const { buildingId } = route.params;
  const [building, setBuilding] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBuildingDetails = async () => {
      // try {
      //   const response = await fetch(
      //     `https://aspdotnet.dev.sigapp.club/api/building/${buildingId}`,
      //     {
      //       method: "GET",
      //     }
      //   );
      //   if (!response.ok) {
      //     throw new Error('Network response was not ok');
      //   }
      //   const buildingsData = await response.json();
      //   setBuildings(buildingsData);
      // } catch (error) {
      //   console.error('Error fetching buildings data from API:', error);
      try {
        // If API fetch fails, load data from local JSON file
        const buildingsData = require('../data/buildings.json');
        setBuilding(buildingsData);
        setLoading(false);
        console.log('Loaded buildings data from local JSON file');
      } catch (localError) {
        console.error('Error loading buildings data from local file:', localError);
        setLoading(false);
      }
      // }
    };

    fetchBuildingDetails();
  }, []);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#4CAF50" />
      </View>
    );
  }

  if (!building) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>Failed to load building details.</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: building.imageUrl }} style={styles.buildingImage} />
      <View style={styles.contentContainer}>
        <Text style={styles.buildingName}>{building.name}</Text>
        <Text style={styles.buildingAcronym}>{building.acronym}</Text>
        <Text style={styles.buildingDescription}>{building.description}</Text>

        <View style={styles.directionsContainer}>
          <Icon name="directions" size={24} color="#4CAF50" />
          <Text style={styles.directionsText}>Get Directions</Text>
        </View>

        <CustomButton
          initialText="Go Back"
          updatedText="Loading..."
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0FDF4',
  },
  buildingImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  contentContainer: {
    padding: 16,
  },
  buildingName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  buildingAcronym: {
    fontSize: 18,
    color: '#666',
    marginBottom: 16,
  },
  buildingDescription: {
    fontSize: 16,
    marginBottom: 24,
  },
  directionsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
  },
  directionsText: {
    fontSize: 16,
    marginLeft: 8,
    color: '#4CAF50',
  },
  backButton: {
    alignSelf: 'center',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  errorText: {
    fontSize: 18,
    color: 'red',
    textAlign: 'center',
  },
});