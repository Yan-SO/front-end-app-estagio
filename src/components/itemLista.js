import { StyleSheet, Text, TouchableOpacity, View } from "react-native";


export default function ItemListaAlunos({item}){
    const styles = styleModelo();
    const aluno = item.item

    return (
        <TouchableOpacity style={styles.conteiner}>
            <Text  style={styles.texto}>Nome: {aluno.nome}</Text>
            <Text style={styles.texto}>RA: {aluno.RA}</Text>
            <Text style={styles.texto}>Email: {aluno.email}</Text>
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