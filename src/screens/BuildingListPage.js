import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CustomButton from '../components/CustomButton';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function BuildingListPage() {
  const navigation = useNavigation();
  const [buildings, setBuildings] = useState([]);

  // const buildingId = "66ba8693354b31489f8e95b6";

  useEffect(() => {
    const loadBuildings = async () => {
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
        setBuildings(buildingsData);
        console.log('Loaded buildings data from local JSON file');
      } catch (localError) {
        console.error('Error loading buildings data from local file:', localError);
      }
      // }
    };

    loadBuildings();
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Image source={{ uri: item.imageUrl }} style={styles.buildingImage} />
      <View style={styles.directionsContainer}>
        <Icon name="directions" size={24} color="#4CAF50" />
      </View>
      <TouchableOpacity 
        style={styles.buildingCard}
        onPress={() => navigation.navigate('Building Details', { building: item })}
      >
        <Text style={styles.buildingName}>{item.name}</Text>
        <Text style={styles.buildingAcronym}>{item.acronym}</Text>
        <Text style={styles.buildingDescription}>{item.description}</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Buildings at Purdue</Text>
      <FlatList
        data={buildings}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        style={styles.list}
      />
      <View style={styles.buttonContainer}>
        <CustomButton
          initialText="Go Back"
          updatedText="Loading..."
          onPress={() => navigation.goBack()}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F0FDF4',
    width: '100%',
    height: '100%',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 16,
  },
  list: {
    width: '100%',
    paddingHorizontal: 16,
  },
  itemContainer: {
    flexDirection: 'row',
    backgroundColor: '#D1FAE5',
    padding: 16,
    marginVertical: 8,
    borderRadius: 8,
  },
  buildingImage: {
    width: 80,
    height: 80,
    borderRadius: 4,
  },
  directionsContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  buildingCard: {
    flex: 1,
    marginLeft: 16,
  },
  buildingName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  buildingAcronym: {
    fontSize: 14,
    color: '#666',
  },
  buildingDescription: {
    fontSize: 14,
    marginTop: 4,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginVertical: 16,
  },
  filterButton: {
    marginRight: 8,
  },
  sortButton: {
    marginLeft: 8,
  },
});