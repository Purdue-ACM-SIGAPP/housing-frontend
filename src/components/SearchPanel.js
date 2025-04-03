import React, { useEffect } from "react";
import { View, Text, StyleSheet, TextInput, Image, FlatList, TouchableOpacity, Keyboard, TouchableWithoutFeedback, SafeAreaView } from "react-native";
import theme from "../utils/theme.js"
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { API_BASE_URL } from "@env";
import { useNavigation } from "@react-navigation/native";

const SearchPanel = ({ isInSearchBar, setIsInSearchBar }) => {
    const navigation = useNavigation();
    const [text, onChangeText] = React.useState("");
    const [searchResults, setSearchResults] = React.useState([]);
    const fetchSearchResults = async () => {
        console.log(text);
        try {
            const response = await fetch(`${API_BASE_URL}/api/Building?query=` + text, {
                method: "GET",
            });

            // Check if the response is successful (status code 200)
            if (!response.ok) {
                throw new Error(`Failed to fetch search results: ${response.statusText}`);
            }

            const data = await response.json();
            // console.log("Fetched data:", data);
            setSearchResults(data);
        } catch (error) {
            console.error("Error fetching search results:", error);
        }
    };

    const handleSelectItem = (item) => {
        console.log(item);
        onChangeText(item.name);
        setSearchResults([]);
        Keyboard.dismiss();
    }

    const dismissDropdown = () => {
        setSearchResults([]);
        Keyboard.dismiss();
    };

    const editProfile = () => {
        navigation.navigate("Edit Profile");
    }

    useEffect(() => {
        if (!isInSearchBar) {
            dismissDropdown();
        }
    }, [isInSearchBar]);

    return (
        <TouchableWithoutFeedback onPress={dismissDropdown} accessible={false}>
            <SafeAreaView style={styles.searchPanel}>
                <View style={styles.searchBarContainer}>
                    <TouchableOpacity style={styles.questionButton}>
                        <Icon name="help" size={36} color="#065758" />
                    </TouchableOpacity>

                    <TextInput
                        style={styles.searchBar}
                        onPress={() => setIsInSearchBar(true)}
                        onChangeText={onChangeText}
                        placeholder="Building Name..."
                        onSubmitEditing={fetchSearchResults}>
                    </TextInput>

                    <TouchableOpacity
                        onPress={fetchSearchResults}
                        style={styles.searchButton}
                    >
                        <Icon name="magnify" size={40} color="#065758" />
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={editProfile}
                    >
                        <Image source={{ uri: "https://static2.bigstockphoto.com/1/1/3/large1500/311375767.jpg" }} style={styles.profilePicture} />
                    </TouchableOpacity>

                    {searchResults.length > 0 && (
                        <View style={styles.dropdown}>
                            <FlatList
                                data={searchResults}
                                keyExtractor={(item) => item.id.toString()}
                                renderItem={({ item }) => (
                                    <TouchableOpacity style={styles.dropdownItem} onPress={() => handleSelectItem(item)}>
                                        <Text>{item.name}</Text>
                                    </TouchableOpacity>
                                )}
                            />
                        </View>
                    )}
                </View>

                <View style={styles.moreFilters}><TouchableOpacity style={{ position: "absolute" }}><Text style={styles.moreFiltersText}>More search filters...</Text></TouchableOpacity></View>

                <View style={styles.filterButtonContainer}>
                    <TouchableOpacity style={styles.filterButton}>
                        <Text style={styles.filterButtonText}>Academic</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.filterButton}>
                        <Text style={styles.filterButtonText}>Residential</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.filterButton}>
                        <Text style={styles.filterButtonText}>Dining Hall</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.filterButton}>
                        <Text style={styles.filterButtonText}>Facilities</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.filterButtonContainer}>
                    <TouchableOpacity style={styles.filterButton}>
                        <Text style={styles.filterButtonText}>Shopping</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.filterButton}>
                        <Text style={styles.filterButtonText}>Study</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.filterButton}>
                        <Text style={styles.filterButtonText}>Restaurants</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.filterButton}>
                        <Text style={styles.filterButtonText}>Health</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView >
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    searchPanel: {
        justifyContent: "space-around",
        position: "absolute",
        width: "100%",
        backgroundColor: theme.color.secondary,
        zIndex: 100,
        paddingTop: 15,
        display: "block",
        alignItems: "center",
        paddingBottom: 15,
    },
    searchBarContainer: {
        width: "100%",
        alignItems: "center",
        flexDirection: "row",
        display: "flex",
        gap: 10,
        justifyContent: "center"
    },
    searchBar: {
        borderColor: theme.color.primary,
        justifyContent: "right",
        alignItems: "right",
        display: "flex",
        flexDirection: "row",
        borderRadius: 50,
        width: "65%",
        height: 40,
        backgroundColor: "white",
        paddingLeft: 10,
        paddingRight: 50,
        justifyContent: "center"
    },
    profilePicture: {
        width: 40,
        height: 40,
        backgroundColor: "#fff",
        borderRadius: 20
    },
    searchButton: {
        position: "absolute",
        right: "20%",
        width: 40,
        height: 40,
        alignItems: "center",
    },
    questionButton: {
        width: 40,
        height: 40,
        alignItems: "center",
        color: theme.color.primary,
    },
    moreFilters: {
        width: "100%",
        height: 30,
        marginLeft: 60,
        marginTop: 10,
        justifyContent: "center",
    },
    moreFiltersText: {
        textDecorationLine: 'underline',
    },
    filterButtonContainer: {
        width: "100%",
        display: "flex",
        gap: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 10,
    },
    filterButton: {
        height: 30,
        width: 80,
        backgroundColor: theme.color.primary,
        borderRadius: 25,
        alignItems: "center",
        justifyContent: "center",
    },
    filterButtonText: {
        color: "#fff",
    },
    dropdown: {
        width: "65%",
        backgroundColor: "white",
        position: "absolute",
        top: 50,
        zIndex: 200,
        borderRadius: 5,
        maxHeight: 150,
        overflow: "hidden",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 5,
    },
    dropdownItem: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: "#ccc",
    }
});

export default SearchPanel;
