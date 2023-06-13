import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";


export default function ItemAtividadesAFazer({item}){
    const styles = styleModelo();
    const atividade = item.item;
    const navigation = useNavigation();
    console.log(atividade);

    return (
        <TouchableOpacity style={styles.conteiner}>
            <Text  style={styles.texto}>titulo: {atividade.titulo}</Text>
            <Text style={styles.texto}>pergunta: {atividade.pergunta}</Text>
            
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