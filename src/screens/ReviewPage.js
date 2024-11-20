import React, { useState } from "react";
import { Alert, Image, Switch, View, Text, StyleSheet, TextInput, FlatList } from "react-native";

export default function ReviewPage() {
  const [bldgName, setBldgName] = useState("Building Name");  
  const [bldgDesc, setBldgDesc] = useState("No description available");
  const [imgUrl, setImgUrl] = useState("");
  const [imgAltTxt, setImgAltTxt] = useState("No Image Description");
  const [phrases, setPhrases] = useState([ { id: '1', txt: 'test1' }, { id: '2', txt: 'test2' }, { id: '3', txt: 'test3' }, ]);
  const arrPhrases = [ { id: '1', title: 'test1' }, { id: '2', title: 'test2' }, { id: '3', title: 'test3' }, ];
  const [reviewText, setReviewText] = useState('');
  const [isAnonymous, setIsAnonymous] = useState(true);
  const [starBoxes, setStarBoxes] = useState([true, true, true, true, true]);

  const handleSubmitForm = () => {
    if (!reviewText) {
      Alert.alert('Error', 'Enter all review information.');
      return;
    }
    Alert.alert('Review Submitted!');
  }

  return (
    <View style={styles.container}>
      {/* can wrap in SafeAreaView to adjust to phone dimensions?
       can wrap in ScrollView to scroll vertically (and set horizontal for horizontal scrolling) */}  
      <View style={styles.imgView}>
        <Image style={styles.bldgImg} source={imgUrl} alt={imgAltTxt} />
      </View>
      <View style={styles.descView}>
        <Text style={styles.bldgTitle}>{bldgName}</Text>
        <Text style={styles.bldgDesc}>{bldgDesc}</Text>
        {/* link to full description (info about building page link?) */}
      </View>
      <View style={styles.keywrdView}>
        <Text style={styles.keywrdHead}>Associated Phrases</Text>
        { arrPhrases != null ?
          <View style={styles.phraseList}>
            <Text>Placeholder</Text> {/* Delete later */}
            {/* <FlatList data={arrPhrases} keyExtractor={(phrase) => phrase.id}
              renderItem={({ item }) => <Text style={styles.phrase}>{item.title}</Text>} /> */}
          </View> : <View><Text style={styles.loadingPhrases}>Loading Keywords...</Text></View>
        }
        {/* link to all reviews? */}
      </View>
      <View style={styles.writeView}>
        <TextInput style={styles.reviewTextInput} value={reviewText} onChangeText={setReviewText}
          placeholder="Enter a written review..." /> {/* FORM text field */}
      </View>
      <View style={styles.anonView}>
        <Text style={styles.anonMsg}>Anonymous?</Text> {/* left side of view */}
        <Switch style={styles.anonBox} value={isAnonymous} onValueChange={setIsAnonymous} />
        {/* check box on right side (above), FORM boolean field */}
      </View>
      <View style={styles.checkView}>
        <View style={styles.reviewStars}>
          <Text>Placeholder</Text> {/* Delete later */}
          {/* Switch or maybe Pressable for stars, use mapping with index to access star in array */}
        </View>
        {/* five star shaped checkboxes, FORM boolean array field (above)
        sixth checkbox is check mark shaped, submits FORM (also above) */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F0FDF4", // Equivalent to bg-green-50
    width: "100%",
    height: "100%",
  },
  imgView: {

  },
  bldgImg: {

  },
  descView: {

  },
  bldgTitle: {

  },
  bldgDesc: {

  },
  keywrdView: {

  },
  keywrdHead: {

  },
  phraseList: {

  },
  phrase: {

  },
  loadingPhrases: {

  },
  writeView: {

  },
  reviewTextInput: {

  },
  anonView: {

  },
  anonMsg: {

  },
  anonBox: {

  },
  checkView: {

  },
  reviewStars: {

  }
});
