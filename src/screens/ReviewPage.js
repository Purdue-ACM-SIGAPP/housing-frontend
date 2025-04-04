import React from "react";
import { Alert, Image, Switch, View, Text, StyleSheet, TextInput, ScrollView } from "react-native";
import BottomNavbar from "../components/BottomNavbar";
import ReviewPanel from "../components/ReviewPanel";
import { Link, useRoute } from "@react-navigation/native";
export default function ReviewPage() {
  const reviewTitle = "Terrible Building Terrible Building Terrible Building Terrible Building Terrible Building";
  const reviewText = "Worst building i have seen in my life!!!!!!!!\nThis building is not good.\nThis building should try again.";
  const reviewRating = 4;

  const route = useRoute();
  const { id, name, image, acronym } = route.params.data;
  const imgUrl = image ? `data:image/png;base64${image}` : "https://collections.lib.purdue.edu/campus/images/buildings/11-amelia-earhart-residence-hall.jpeg";
  const imgAltTxt = "Building";
  return <>
  <ScrollView styles={styles.scrollView}>
    <View style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.bldgImg} source={{ uri: imgUrl}} accessibilityLabel={imgAltTxt} />
      </View>
      <View style={styles.descView}>
        <Text style={styles.bldgTitle}>{name} ({acronym})</Text>
        {/* <Text style={styles.bldgDesc}>{bldgDesc}</Text> */}
      
      <ReviewPanel title={reviewTitle} text={reviewText} rating={reviewRating} pfp={imgUrl} />
      <View style={styles.linkView}>
        <Link style={styles.link} to="/ReviewPage">Write a Review</Link>
        <Link style={styles.link} to="/ReviewPage">See All Reviews</Link>
      </View>
      </View>
    </View>
    </ScrollView>
    <BottomNavbar />
  </>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    width: "100%",
    height: "100%",
  },

  scrollView: {
    padding: 0,
    width: "100%",
    backgroundColor: "#F0FDF4", // Equivalent to bg-green-50
  },

  header: {
    height: 275,
    backgroundColor: "#065758",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },

  bldgImg: {
    height: "90%",
    width: "80%",
    resizeMode: "cover",
    borderTopStartRadius: 8,
    borderTopRightRadius: 8,
  },
  descView: {
    width: "85%",
  },
  bldgTitle: {
    fontSize: 28, // Equivalent to text-2xl
    color: "#065758",
    paddingBottom: 5,
  },
  bldgDesc: {
    fontSize: 18,
    color: "#065758",
  },

  linkView: {
    flexDirection: "row",
    justifyContent: "space-around",
  },

  link: {
    color: "#065758",
    fontSize: 14,
    textDecorationLine: "underline",
  }
});
