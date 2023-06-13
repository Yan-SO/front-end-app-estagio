import { FlatList, TouchableOpacity } from "react-native";
import { StyleSheet, Text, View } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import React, { useContext, useEffect, useState } from "react";
import { AlunoContext } from "../../../contexts/aluno/alunoContext";
import { useFocusEffect } from "@react-navigation/native";
import ItemAtividadesAFazer from "../../../components/itemAtividadeParaFazer";
import { atividadesAFazer } from "../../../services/listar/atividades_a_fazer";



export default function AtividadeAFazer(){
    const styles = styleModelo();
    const [lista, setLista]= useState([]);
    const {idAluno} = useContext(AlunoContext);
    const [contador, setContador]= useState(0);

    const Footer =()=>{
        return <View style={styles.footerConteiner}>
            <TouchableOpacity style={styles.button}>
                <AntDesign name="caretleft" size={24} color="white" />
                <Text style={styles.text}> Voltar </Text>
            </TouchableOpacity >
            <TouchableOpacity style={styles.button}>
                <Text style={styles.text}> Proximo </Text>
                <AntDesign name="caretright" size={24} color="white" />
            </TouchableOpacity>
        </View>
    };


    useEffect(() => {
        async function buscarInfo(idAluno) {
            const resp = await atividadesAFazer(idAluno);
            setLista(resp.content);
        }
        
        buscarInfo(idAluno);
      }, [contador]);

    useFocusEffect(React.useCallback(()=>{setContador((prevContador) => prevContador + 1)},[]));
    
    return (
        <View>
            <FlatList 
                data={lista}
                keyExtractor={(item)=> item.id}
                renderItem={(item)=> <ItemAtividadesAFazer item={item}/>}
                ListFooterComponent={<Footer />}
            />
        </View>
    );
}

const styleModelo =()=> (StyleSheet.create({
    footerConteiner:{
        marginVertical:30,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-evenly",
    },
    button:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center",
        paddingVertical:20,
        width:150,
        backgroundColor:'#000',
        borderColor:'#919191',
        borderWidth:2,
        borderRadius:30
    },
    text:{
        color:'#fff',
        fontSize:16,
    },
}));