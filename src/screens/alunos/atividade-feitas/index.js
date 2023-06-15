import { useContext, useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { AlunoContext } from "../../../contexts/aluno/alunoContext";
import { AntDesign } from '@expo/vector-icons';
import ItemAtividadesFeitas from "../../../components/itemAtividadeFeitas";
import { atividadesFeitas } from "../../../services/listar/atividades_feitas";


export default function AtividadesFeitas(){
    const styles = styleModelo();
    const [lista, setLista]= useState([]);
    const {idAluno} = useContext(AlunoContext);
    

    useEffect(()=>{
        async function listarAtividades(id){
            const resp = await atividadesFeitas(id);
            setLista(resp.content);
        }
        listarAtividades(idAluno);
    },[]);
    

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


    
    return (
        <View>
            <FlatList 
                data={lista}
                keyExtractor={(item)=> item.id}
                renderItem={( item ) => <ItemAtividadesFeitas item={item} />}
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