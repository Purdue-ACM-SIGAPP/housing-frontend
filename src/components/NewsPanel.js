import React, { useState } from "react";
import { View, Text, Pressable, StyleSheet, Image } from "react-native";

const NewsPanel = ({ image, title, summary}) => {
    const handlePress = () => {
        console.log("I pressed this news");
    };

    return (
        <Pressable style={styles.panel} onPress={handlePress}>
            <Image
                source={{ uri: image }}
                style={styles.image}
            />
            <View style={styles.textSection}>
                <Text style={styles.title}>{title}</Text>
                <Text numberOfLines={2} ellipsizeMode="tail" style={styles.summary}>{summary}</Text>
            </View>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    panel: {
        borderWidth: 5,
        borderColor: '#CDDDDE',
        backgroundColor: "#065758",
        paddingBottom: 10,
        paddingHorizontal: 0,
        width: '100%',
        marginVertical: 10,
        marginHorizontal: 0,
        borderRadius: 15,
        height:175
    },
    textSection: {
        paddingTop: 10,
        paddingHorizontal: 15
    },
    title: {
        fontSize: 20, // Equivalent to text-2xl
        fontWeight: "bold",
        color: '#FFFFFF',
        paddingBottom: 5
    },
    summary: {
        fontSize: 12,
        color: '#CDDDDE',
    },
    image: {
        width: '100%',
        height: '50%',
        objectFit: 'cover',
        borderTopStartRadius:8,
        borderTopRightRadius:8
    }
});

export default NewsPanel;
