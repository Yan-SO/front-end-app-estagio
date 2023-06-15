import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
//import { formatarData } from "../services/formater/date-formater";

function formatarData(data) {
    const dataObj = new Date(data);
    const hora = dataObj.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const dia = dataObj.toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit', year: 'numeric' });
  
    return {
      hora,
      dia,
    };
}

export default function ItemAtividadesFeitas({item}){
    const styles = styleModelo();
    const atividade = item.item;
    





    return (
        <TouchableOpacity style={styles.conteiner}>
            <Text  style={styles.texto}>titulo: {atividade.titulo}</Text>
            <Text style={styles.texto}>pergunta: {atividade.resposta ? "Acertou":"Errou"}</Text>
            <Text style={styles.texto}>Professor: {atividade.nome}</Text>
        </TouchableOpacity>
    );
}

const styleModelo = ()=> (StyleSheet.create({
    conteiner:{
        marginHorizontal:5,
        marginTop:15,
        paddingBottom:5,
        borderBottomColor:'#1f1f1f',
        borderBottomWidth:1,
        borderRadius:5
    },
    texto:{
        fontSize:16,
        marginHorizontal:10
    },
}));