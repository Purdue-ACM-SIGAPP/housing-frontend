import { Image, StyleSheet, Text, View } from "react-native";
import * as React from "react";

const Info = ({ title, address, time, date, analysis, imageURL }) => {
  return (
    <View style={styles.card}>
      <View style={styles.cardtwo}>
        <Text
          style={{
            color: "white",
            fontSize: 30,
            fontWeight: "bold",
            textAlign: "center",
            marginTop: 70,
          }}
        >
          Campus News and Events
        </Text>

        <Image source={{ uri: imageURL }} style={styles.image} />

        <Text style={styles.title}>{title}</Text>

        <View style={styles.address_time}>
          <Text style={styles.address}>{address}</Text>
          <Text style={styles.time}>
            {time} {date}
          </Text>
        </View>
      </View>

      <View style={styles.background}>
        <View style={styles.circle} />

        <View style={styles.circle2} />

        <View style={styles.analysiscard}>
          <Text style={styles.analysis}>{analysis}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: "column", // To make image and text side by side
    //padding: 10, //space beween cards
    backgroundColor: "#ffffff", // White background for the card
    borderRadius: 10,

    shadowColor: "#000", // Shadow effect for elevation
    shadowOpacity: 0.1,
    shadowRadius: 4,
    //height:'100%',
  },
  cardtwo: {
    flexDirection: "column",
    backgroundColor: "#065758", // White background for the card
    width: "100%",

    justifyContent: "center",
  },
  address_time: {
    flexDirection: "row",
    marginLeft: 20,
    justifyContent: "center",
    marginBottom: 20,
  },
  image: {
    width: "100%", // Set image width
    height: 200, // Set image height
    borderRadius: 10, // Rounded corners for the image
    marginRight: 10, // Space between image and text
    marginTop: 30,
  },
  title: {
    flex: 1,
    fontSize: 36, // Equivalent to text-2xl
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 20,
    color: "white",
    height: "5%",
    width: "100%",
  },
  address: {
    color: "white",
    flex: 2,
    fontSize: 20, // Equivalent to text-2xl
    fontWeight: "bold",
  },
  time: {
    color: "white",
    flex: 2,
    fontSize: 20, // Equivalent to text-2xl
    fontWeight: "bold",
  },
  analysiscard: {
    marginTop: 30,
    flexDirection: "row",
    backgroundColor: "#CDDDDE",
    borderRadius: 10,
    marginRight: 30,
    marginLeft: 30,
    minHeight: 250,
    marginBottom: 50,
    zIndex: 1,
  },
  analysis: {
    fontSize: 20,
    margin: 10,
    zIndex: 2,
  },
  circle: {
    width: 300, // Size of the circle
    height: 300,
    borderRadius: 300 / 2, // Makes it a circle
    backgroundColor: "#A5C2C4",
    position: "absolute", // Remove the circle from normal flow
    bottom: -150, // Adjust this to position the circle behind the analysis card
    left: -100, // Adjust this to control horizontal position
    zIndex: 0, // Place it behind the analysis card
    opacity: 0.5,
  },
  circle2: {
    width: 500, // Size of the circle
    height: 500,
    borderRadius: 500 / 2, // Makes it a circle
    backgroundColor: "#A5C2C4",
    position: "absolute", // Remove the circle from normal flow
    bottom: -250, // Adjust this to position the circle behind the analysis card
    left: 100, // Adjust this to control horizontal position
    zIndex: 1, // Place it behind the analysis card
    opacity: 0.5,
  },
  background: {
    position: "relative",
    flexDirection: "column",
  },
});

export default Info;
