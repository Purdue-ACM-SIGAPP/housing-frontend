import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  View,
  Text,
  Image,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from "react-native";

const ReviewForm = () => {

  const [reviewTitle, setReviewTitle] = useState('');
  const [building, setBuilding] = useState('');
  const [review, setReview] = useState('');
  const handleChange = (setter) => (event) => {
    setter(event.target.value);
  };


  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Submitting Review:');
    console.log('Review Title:', reviewTitle);
    console.log('Building:', building);
    console.log('Review:', review);
 
    setReviewTitle('');
    setBuilding('');
    setReview('');
  };

  return (
    <Pressable onPress={handlePress}>
      <Animated.View style={[styles.panel, { height: animatedHeight }]}>
        <Image source={{ uri: image }} style={styles.image} />
        <View style={styles.textSection}>
          <Text style={styles.title}>{title}</Text>
          <Text ellipsizeMode="tail" numberOfLines={isExpanded ? undefined : 3} style={styles.summary}>
            {summary}
          </Text>
        </View>
      </Animated.View>
    </Pressable>
  );
};
    <View style={styles.container}>
      <Image
        source={require("../../assets/purduepaths.png")} // Path to your image
        style={styles.image}
      />
      <Text style={styles.title}>Write Review</Text>
      <TextInput
        style={styles.input}
        placeholder="Write a title for your review"
        value={reviewTitle}
        onChangeText={setReviewTitle}
      />
      <TextInput
        style={styles.input}
        placeholder="Write your review"
        value={review}
        onChangeText={setReview}
      />
      

      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 24,
    fontWeight: 600,
    color: "#020202",
  },
  input: {
    width: "80%",
    padding: 10,
    borderWidth: 1,
    borderColor: "#020202",
    marginBottom: 12,
    borderRadius: 5,
  },

});
