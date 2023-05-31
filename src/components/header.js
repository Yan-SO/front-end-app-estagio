import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { AntDesign } from '@expo/vector-icons';

export default function Header({titulo, onPress, nome}){
    const styles = styleModelo();

    return (
        <View style={styles.header}>
            <TouchableOpacity style={styles.backButton} onPress={()=> onPress()}>
                <AntDesign name="arrowleft" size={30} color="black" />
            </TouchableOpacity>
            <Text style={styles.headerTitle}>{titulo} - {nome}</Text>
        </View>
    );
}

const styleModelo =()=>(StyleSheet.create({
    header:{
        flexDirection:"row",
        padding:10,
        backgroundColor:'#8a8a8a',
    },
    backButton:{
        alignItems:"center",
        justifyContent:"center",
        padding:10,
    },
    headerTitle:{
        fontSize: 24,
        fontWeight: 'bold',
        margin: 10,
    },
}));