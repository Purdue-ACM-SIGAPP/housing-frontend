import React from "react";
import { Alert, Image, Switch, View, Text, StyleSheet, TextInput, FlatList } from "react-native";
import BottomNavbar from "../components/BottomNavbar";
import ReviewPanel from "../components/ReviewPanel";
import { Link, useNavigation, useRoute } from "@react-navigation/native";

export default function ReviewPage(props) {
  const bldgName = "Cool Building";
  const bldgDesc = "Lorem ipsum dolor sit amet, consectetur adipiscing elit";
  const imgUrl = "https://collections.lib.purdue.edu/campus/images/buildings/11-amelia-earhart-residence-hall.jpeg";
  const imgAltTxt = "Building";

  const reviewTitle = "Terrible Building Terrible Building Terrible Building Terrible Building Terrible Building";
  const reviewText = "Worst building i have seen in my life!!!!!!!!\nThis building is not good.\nThis building should try again.";
  const reviewRating = 4;

  const route = useRoute();
  const buildingData = route.params.data;

  return <>
    <View style={styles.container}>
      <View style={styles.header}>
      {/* can wrap in SafeAreaView to adjust to phone dimensions?
       can wrap in ScrollView to scroll vertically (and set horizontal for horizontal scrolling) */}  
        <Image style={styles.bldgImg} source={{ uri: imgUrl }} accessibilityLabel={imgAltTxt} />
      </View>
      <View style={styles.checkView}>
        <View style={styles.reviewStars}>
          {/* Switch or maybe Pressable for stars, use mapping with index to access star in array */}
        </View>
          {/* five star shaped checkboxes, FORM boolean array field (above)
        sixth checkbox is check mark shaped, submits FORM (also above) */}
      </View>
      <View style={styles.descView}>
        <Text style={styles.bldgTitle}>{bldgName}</Text>
        <Text style={styles.bldgDesc}>{bldgDesc}</Text>
        {/* link to full description (info about building page link?) */}
      </View>
      <ReviewPanel title={reviewTitle} text={reviewText} rating={reviewRating} pfp={imgUrl} />
      <View style={styles.linkView}>
        <Link style={styles.link} to="/ReviewPage">Write a Review</Link>
        <Link style={styles.link} to="/ReviewPage">See All Reviews</Link>
      </View>
    </View>
    <BottomNavbar />
  </>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: "#F0FDF4", // Equivalent to bg-green-50
    width: "100%",
    height: "100%",
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
    width: "80%",
  },
  bldgTitle: {
    fontSize: 30, // Equivalent to text-2xl
    color: "#065758",
    paddingBottom: 5,
  },
  bldgDesc: {
    fontSize: 18,
    color: "#065758",
  },

  linkView: {
    width: "80%",
    flexDirection: "row",
    justifyContent: "space-around",
  },

  link: {
    color: "#065758",
    fontSize: 14,
    textDecorationLine: "underline",
  }
});
