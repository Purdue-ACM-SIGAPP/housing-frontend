import React, { useRef, useEffect } from "react";
import { View, Text, Pressable, StyleSheet, Image, Animated } from "react-native";
import theme from "../utils/theme.js";

const NewsPanel = ({ id, image, title, summary, expandedPanelId, setExpandedPanelId }) => {
  const isExpanded = expandedPanelId === id;

  const animatedHeight = useRef(new Animated.Value(175)).current;

  useEffect(() => {
    Animated.timing(animatedHeight, {
      toValue: isExpanded ? 400 : 175,
      duration: 300,
      useNativeDriver: false,
    }).start();
  }, [isExpanded]);

  const handlePress = () => {
    setExpandedPanelId(isExpanded ? null : id);
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

const styles = StyleSheet.create({
  panel: {
    borderWidth: 5,
    borderColor: theme.color.secondary,
    backgroundColor: theme.color.primary,
    paddingBottom: 20,
    paddingHorizontal: 0,
    width: "100%",
    marginVertical: 10,
    marginHorizontal: 0,
    borderRadius: theme.borderRadius,
    overflow: "hidden",
  },
  textSection: {
    paddingTop: 10,
    paddingHorizontal: 15,
  },
  title: {
    fontSize: theme.text.text,
    fontWeight: "bold",
    color: theme.color.textLight,
    paddingBottom: 5,
  },
  summary: {
    fontSize: theme.text.detail,
    color: theme.color.secondary,
    overflow: "contain",
    height: "50%",
  },
  image: {
    width: "100%",
    height: "50%",
    objectFit: "cover",
    borderTopStartRadius: (3 * theme.borderRadius) / 4,
    borderTopRightRadius: (3 * theme.borderRadius) / 4,
  },
});

export default NewsPanel;
