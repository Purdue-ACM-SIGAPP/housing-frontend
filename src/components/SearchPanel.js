// BottomNavbar.js
import React from "react";
import { View, Text, StyleSheet, TextInput, Image, TouchableOpacity } from "react-native";
import theme from "../utils/theme.js"
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const SearchPanel = () => {
    return (
        <View style={styles.searchPanel}>
            <View style={styles.searchBarContainer}>
                <TouchableOpacity style={styles.questionButton}>
                    <Icon name="help" size={36} color="#065758" />
                </TouchableOpacity>

                <TextInput
                    style={styles.searchBar}
                    placeholder="Building Name...">
                </TextInput>

                <TouchableOpacity style={styles.searchButton}><Icon name="magnify" size={40} color="#065758" /></TouchableOpacity>

                <TouchableOpacity><Image source={{ uri: "https://static2.bigstockphoto.com/1/1/3/large1500/311375767.jpg" }} style={styles.profilePicture} /></TouchableOpacity>
            </View>

            <View style={styles.moreFilters}><TouchableOpacity style={{ position: "absolute" }}><Text style={styles.moreFiltersText}>More search filters...</Text></TouchableOpacity></View>

            <View style={styles.filterButtonContainer}>
                <TouchableOpacity style={styles.filterButton}>
                    <Text style={styles.filterButtonText}>JButton</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.filterButton}>
                    <Text style={styles.filterButtonText}>JButton</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.filterButton}>
                    <Text style={styles.filterButtonText}>JButton</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.filterButton}>
                    <Text style={styles.filterButtonText}>JButton</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.filterButtonContainer}>
                <TouchableOpacity style={styles.filterButton}>
                    <Text style={styles.filterButtonText}>JButton</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.filterButton}>
                    <Text style={styles.filterButtonText}>JButton</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.filterButton}>
                    <Text style={styles.filterButtonText}>JButton</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.filterButton}>
                    <Text style={styles.filterButtonText}>JButton</Text>
                </TouchableOpacity>
            </View>
        </View >
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
        marginTop: 10,
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
    }
});

export default SearchPanel;
