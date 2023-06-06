import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Header from "../../../components/header";
import Button from "../../../components/button";
import { useNavigation } from "@react-navigation/native";
import { useContext } from "react";
import { ProfessorContext } from "../../../contexts/professor/professorContext";


export default function HomeProfessor(){
    const style = styleModelo();
    const {nomeProfessor}= useContext(ProfessorContext);
    const navigation = useNavigation();

    return (
        <ScrollView>
            <Header nome={nomeProfessor}  titulo={'Professor'}
                onPress={()=> navigation.reset({index: 0, routes: [{ name: 'LoginScreen' }],})}
            />
            <View style={style.conteinerTexto}>
                <Text style={style.textoTitulo}> Atividades </Text>
            </View>
            <Button color={'#0600a6'} text={'Cria Atividade'} onPress={()=>{}}/>
            <Button color={'#026600'} text={'Minhas Atividades'} onPress={()=>{}}/>
            <Button color={'#a60000'} text={'Remover Atividades'} onPress={()=>{}}/>
            <View style={style.conteinerTexto}>
                <Text style={style.textoTitulo}> Alunos </Text>
            </View>
            <Button color={'#026600'} text={'Listar meus alunos'} onPress={()=> navigation.navigate('ListaMeusAlunos')}/>
            <Button color={'#a60000'} text={'Remover aluno'} onPress={()=> {}}/>
            <Button color={'#5c3700'} text={'Adicionar Aluno'} onPress={()=>navigation.navigate('AdicionarAluno')}/>
        </ScrollView>
    );
}

const styleModelo=()=>(StyleSheet.create({
    conteinerTexto:{
        marginTop:16,
        borderBottomWidth:2,
        borderColor:'#454545',
        marginHorizontal:6,
        borderRadius:6
    },
    textoTitulo:{
        fontSize:20,
        marginLeft:10,
    },
}));