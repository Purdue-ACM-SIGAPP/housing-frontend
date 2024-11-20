import * as React from "react";
import {Text, View, StyleSheet, ScrollView, Image} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import IndividualNewsPanel from "../components/IndividualNewsPanel";






export default function IndividualNewsPage() {
    const navigation = useNavigation();
    const handleSubmit = () => {
        console.log('Going to Home Page...');
        navigation.navigate('Home');
    };

    return (
        <ScrollView>
            <View>


                <IndividualNewsPanel title = "news headline"
                      address = "999 Anywhere St., Apt 555, Medford MA 02155"
                      time = "3:30PM"
                      date = "Oct 11, 2075"
                      analysis = "Ndafewf;aewfij;wej;ewjefiajew;fi"
                      imageURL = "https://media.istockphoto.com/id/1270059172/photo/purdue-welcome-center-at-purdue-university-purdue-university-is-a-public-research-university.jpg?s=612x612&w=0&k=20&c=0RK8E4Njaw6GTm56F7C2X2DIETGS_3Yt4g7WSDBGZi8="
                />
            </View>
        </ScrollView>
    );
}






