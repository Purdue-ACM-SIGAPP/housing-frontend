import * as React from "react";
import { ScrollView, View, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import NewsPanel from "../components/NewsPanel";
import CustomButton from "../components/CustomButton";

export default function NewsAndEventsPage() {
    const navigation = useNavigation();


    const handleSubmit = () => {
        console.log("Going to Home Page...");
        navigation.navigate("Home");
    };

    return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.title}>
                        <Text style={{color: '#CDDDDE'}}>Campus </Text>
                        <Text style={{color: '#CFB991'}}>News and Events</Text></Text>
                </View>
                <ScrollView style={styles.contentBox}>
                    <NewsPanel 
                        title = "Rohit is bad!!!!!!" 
                        summary = "He is not understanding what iim doing" 
                        image = "https://static2.bigstockphoto.com/1/1/3/large1500/311375767.jpg">
                    </NewsPanel>
                    <NewsPanel 
                        title = "Rohit's Birthday Party" 
                        summary = "10:27AM | Ross Ade Stadium | Be there or be square! As in I will pick you up and shove you into a CoRec cubicle if you do not show up and give Rohit the attention he deserves!!!!" 
                        image = "https://www.orangeville.ca/en/things-to-do/resources/Images/Facility%20and%20Parks%20Rentals/Birthday%20Party%20Kids.jpg">
                    </NewsPanel>
                    <NewsPanel 
                        title = "Rohit is evil!!!!!!" 
                        summary = "He burned down my crop harvest!!! What the heck man? You and your cs180 midterm grade will be cursed for several generations!!!" 
                        image = "https://img.freepik.com/premium-photo/sad-indian-farmer-sitting-dry-soil-patiently-waiting-rain_846334-2675.jpg">
                    </NewsPanel>
                    <NewsPanel 
                        title = "Rohit is nice :)" 
                        summary = "He gave my grandmother one THOUSAND dollars???" 
                        image = "https://www.shutterstock.com/shutterstock/videos/20390998/thumb/1.jpg?ip=x480://media.tenor.com/dtmNkhiWbe4AAAAe/granny-grandma-cash-counting.png">
                    </NewsPanel>
                </ScrollView>
            </View>
        
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "top",
        backgroundColor: "#FFFFFF", // Equivalent to bg-green-50
        width: "100%",
        height: "100%",
    },
    header: {
        paddingTop: 36,
        paddingHorizontal: 20,
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: '#065758'
    },
    buttonOverride: {
        flex: 1,
        width: 50
    },
    title: {
        flex: 1,
        fontSize: 36, // Equivalent to text-2xl
        fontWeight: "bold",
        textAlign: "center",
        marginVertical: 20
    },
    contentBox: {
        paddingVertical: 10,
        paddingHorizontal: 15,
        width: '100%'
    }
});
