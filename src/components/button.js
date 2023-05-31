import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";


export default function Button({text, onPress, color}){
    const styles = styleModelo(color);
    return(
        <TouchableOpacity style={styles.Button} onPress={()=> onPress()}>
            <Text style={styles.buttonText}>{text}</Text>
        </TouchableOpacity>
    );
}

const styleModelo = (color)=>(StyleSheet.create({
    Button:{
        margin:16,
        padding:16,
        alignItems:'center',
        backgroundColor:color,
        borderColor:'#000',
        borderWidth:2,
        borderRadius:20
    },
    buttonText:{
        color:'#fff',
        fontSize:18,
        fontWeight:'bold',
    },
}));