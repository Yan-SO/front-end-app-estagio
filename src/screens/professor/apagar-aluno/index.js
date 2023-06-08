import { useContext } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { ProfessorContext } from "../../../contexts/professor/professorContext";
import { useNavigation } from "@react-navigation/native";
import deletarRelacionamentoAlunoProf from "../../../services/deletar/deletar-relacionamento-aluno-prof";


export default function ApagarAlunoProfessor({route}){
    const navigation = useNavigation();
    const aluno = route.params.aluno;
    const {emailProfessor} = useContext(ProfessorContext);
    const styles = styleModelo(); 
    async function deletar(ra, emailProfessor){
        await deletarRelacionamentoAlunoProf(ra, emailProfessor);
        navigation.goBack();
    }


    return(
        <View>
            <Text style={styles.texto}>RA: {aluno.RA}</Text>
            <Text style={styles.texto}>Aluno: {aluno.nome}</Text>
            <Text style={styles.texto}>Email do aluno: {aluno.email}</Text>
            <TouchableOpacity style={styles.botao} onPress={()=> deletar(aluno.RA,emailProfessor)}>
                <Text style={styles.botaoTexto}> Remover aluno das atividades </Text>
            </TouchableOpacity>
        </View>
    );
}

const styleModelo = ()=> (StyleSheet.create({
    texto:{
        fontSize:16,
        textAlign:"justify",
        marginHorizontal:10,
        marginVertical:10,
        paddingVertical:10,
        paddingHorizontal:10,
        borderBottomWidth:2,
        borderTopWidth:2,
        borderRadius:15,
    },
    botao:{
        marginVertical:20,
        marginHorizontal:32,
        alignItems:"center",
        backgroundColor:'#d90000',
        paddingVertical:20,
        borderColor:'#000',
        borderWidth:4,
        borderRadius:32,
    },
    botaoTexto:{
        color:'#fff',
        fontSize:20,
        fontWeight:"bold",
    },
}));