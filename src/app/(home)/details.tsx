import React, {useState} from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function DetailsScreen(){
    const[modalVisible, setModalVisible] = useState(false);

    return(
        <View style={StyleSheet.container}>
            <Text style={StyleSheet.title}>Digital ID Card</Text>
            
        </View>
    );
}