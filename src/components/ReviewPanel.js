import { useState } from "react";
import { Image, View, Text, StyleSheet } from "react-native"
import { MaterialIcons } from '@expo/vector-icons';

const ReviewPanel = ({title, text, rating, pfp}) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [overflows, setOverflows] = useState(false);
    const TITLE_LENGTH = 2;
    const TEXT_LENGTH = 5;
    return <View style={styles.panel}>
            <View style={styles.topContainer}>
                <View style={styles.starContainer}>
                    {(() => {
                        let stars = [];
                        for (let i = 0; i < rating; i++) {
                            stars.push(<MaterialIcons name="star" key={i} style={styles.star}/>);
                        }
                        if (!Number.isInteger(rating)) {
                            stars.push(<MaterialIcons name="star-half" key={rating} style={styles.star}/>);
                        }
                        while (stars.length < 5) {
                            stars.push(<MaterialIcons name="star-border" key={stars.length} style={styles.star}/>);
                        }
                        return stars;
                    })()}
                </View>
                <Image source={{ uri: pfp }} style={styles.pfp} />
            </View>
            <View style={styles.textSection}>
                <Text onTextLayout={(e) => {
                    if (e.nativeEvent.lines.length >= TITLE_LENGTH) {
                        setOverflows(true);
                    }
                }}
                    numberOfLines={isExpanded ? 8 : TITLE_LENGTH} style={styles.title} ellipsizeMode="tail">{title}</Text>
                <Text onTextLayout={(e) => {
                    if (e.nativeEvent.lines.length >= TEXT_LENGTH) {
                        setOverflows(true);
                    }
                }} numberOfLines={isExpanded ? 20 : TEXT_LENGTH}style={styles.text}>{text}</Text>
                {overflows ? <Text style={styles.text} onPress={() => {
                    setIsExpanded(!isExpanded);
                    console.log("hi")
                }}>{isExpanded ? "Show less" : "Show more"}</Text> : null}
            </View>
        </View>
}
const styles = StyleSheet.create({
    panel: {
        borderWidth: 5,
        borderColor: "#CDDDDE",
        backgroundColor: "#065758",
        width: "80%",
        borderRadius: 15,
        minHeight: 250,
    },

    topContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginHorizontal: 15,
        marginTop: 15,
    },

    starContainer: {
        flexDirection: "row",
        justifyContent: "flex-start",
    },
    
    textSection: {
        paddingTop: 10,
        paddingHorizontal: 15,
    },

    title: {
        fontSize: 20, 
        fontWeight: "bold",
        color: "#FFFFFF",
        paddingBottom: 5,
      },
    text: {
        fontSize: 12,
        color: "#CDDDDE",
    },
    pfp: {
        borderRadius: 50,
        width: 40,
        height: 40,
        objectFit: "cover",
    },
    star: {
        color: "#FFD700",
        fontSize: 30,
    },
})

export default ReviewPanel;