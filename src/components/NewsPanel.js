import React, { useState } from "react";
import { View, Text, Pressable, StyleSheet, Image } from "react-native";
import theme from "../utils/theme.js"

const NewsPanel = ({ id, image, title, summary }) => {

  const [panelStyle, changeStyle] = useState(styles.panelCollapsed);
  const handlePress = () => {
    console.log("Pressed news item with id:", id);
    console.log(panelStyle);

    if (panelStyle == styles.panelCollapsed) {
      changeStyle(styles.panelExpanded);
    } else if (panelStyle == styles.panelExpanded) {
      changeStyle(styles.panelCollapsed);
    }
  };
  return (
    <Pressable style={panelStyle} onPress={handlePress}>
      <Image source={{ uri: image }} style={styles.image} />
      <View style={styles.textSection}>
        <Text style={styles.title}>{title}</Text>
        <Text numberOfLines={2} ellipsizeMode="tail" style={styles.summary}>
          {summary}
        </Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  panelCollapsed: {
    borderWidth: 5,
    borderColor: theme.color.secondary,
    backgroundColor: theme.color.primary,
    paddingBottom: 20,
    paddingHorizontal: 0,
    width: "100%",
    marginVertical: 10,
    marginHorizontal: 0,
    borderRadius: theme.borderRadius,
    height: 175,
  },
  textSection: {
    paddingTop: 10,
    paddingHorizontal: 15,
  },
  title: {
    fontSize: theme.text.text, // Equivalent to text-2xl
    fontWeight: "bold",
    color: theme.color.textLight,
    paddingBottom: 5,
  },
  summary: {
    fontSize: theme.text.detail,
    color: theme.color.secondary,
  },
  image: {
    width: "100%",
    height: "50%",
    objectFit: "cover",
    borderTopStartRadius: (3 * theme.borderRadius) / 4,
    borderTopRightRadius: (3 * theme.borderRadius) / 4,
  },
  panelExpanded: {
    borderWidth: 5,
    borderColor: theme.color.secondary,
    backgroundColor: theme.color.primary,
    paddingBottom: 20,
    paddingHorizontal: 0,
    width: "100%",
    marginVertical: 10,
    marginHorizontal: 0,
    borderRadius: theme.borderRadius,
    height: 275,
  },
});

export default NewsPanel;
