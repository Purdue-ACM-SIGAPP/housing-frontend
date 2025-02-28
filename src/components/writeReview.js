import React, { useState } from "react";
import { 
  View, 
  Text, 
  Image, 
  TextInput, 
  Button, 
  StyleSheet 
} from "react-native";

const ReviewForm = () => {
  const [reviewTitle, setReviewTitle] = useState("");
  const [building, setBuilding] = useState("");
  const [review, setReview] = useState("");

  const handleSubmit = () => {
    console.log("Submitting Review:");
    console.log("Review Title:", reviewTitle);
    console.log("Building:", building);
    console.log("Review:", review);

    setReviewTitle("");
    setBuilding("");
    setReview("");
  };

  return (
    <View style={styles.container}>
      <Image 
        source={require("../../assets/purduepaths.png")} 
        style={styles.image} 
      />
      <Text style={styles.title}>Write Review</Text>

      <TextInput
        style={styles.input}
        placeholder="Review Title"
        value={reviewTitle}
        onChangeText={setReviewTitle}
      />
      <TextInput
        style={styles.input}
        placeholder="Building Name"
        value={building}
        onChangeText={setBuilding}
      />
      <TextInput
        style={[styles.input, styles.textArea]}
        placeholder="Write your review"
        value={review}
        onChangeText={setReview}
        multiline
      />

      <Button title="Submit Review" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 16,
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#020202",
    marginBottom: 16,
  },
  input: {
    width: "80%",
    padding: 10,
    borderWidth: 1,
    borderColor: "#020202",
    marginBottom: 12,
    borderRadius: 5,
  },
  textArea: {
    height: 100,
    textAlignVertical: "top",
  },
});

export default ReviewForm;