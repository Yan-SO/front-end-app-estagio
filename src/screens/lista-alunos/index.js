import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import ItemListaAlunos from "../../components/itemLista";
import { AntDesign } from '@expo/vector-icons';
import { meusAlunos } from "../../services/listar/meus_alunos";
import { useContext, useEffect, useState } from "react";
import { ProfessorContext } from "../../contexts/professor/professorContext";



export default function ListaMeusAlunos(){
    const styles = styleModelo();
    const { idProfessor } = useContext(ProfessorContext);
    const [lista, setLista]= useState([]);
    const [resp, setResp]= useState({});

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


    async function buscarInfo(idProfessor){
        const resp= await meusAlunos(idProfessor)
        setLista(resp.content)
        setResp(resp);
    }
    useEffect(()=>buscarInfo(idProfessor),[])

    return (
        <View>
            <FlatList 
                data={lista}

                keyExtractor={(item)=> item.id}
                renderItem={(item)=> <ItemListaAlunos item={item}/>}
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