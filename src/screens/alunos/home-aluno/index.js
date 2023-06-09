
import { useNavigation } from '@react-navigation/native';
import { useContext, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet,} from 'react-native';
import Header from '../../../components/header';
import Button from '../../../components/button';
import { AlunoContext } from '../../../contexts/aluno/alunoContext';

export default function HomeAluno(){
    const navigation = useNavigation();
    const styles = styleModelo();
    const {
        idAluno, nomeAluno, raAluno, emailAluno,} = useContext(AlunoContext);

    return (
        <View style={styles.conteiner}>
            <Header nome={nomeAluno} titulo={'Aluno'}
                onPress={()=> navigation.reset({index: 0, routes: [{ name: 'LoginScreen' }],})}
            />
            <View style={styles.tabelaInfo}>
                <Text style={styles.tabelaText}>RA do Aluno: {raAluno}</Text>
                <Text style={styles.tabelaText}>Email do Aluno: {emailAluno}</Text>
                {/* <Text style={styles.tabelaText}>Professor: {nomeProfessor}</Text> */}
                {/* <Text style={styles.tabelaText}>Total de atividades acertadas: {totalAcertos}</Text> */}
            </View>
            <Button color={'#a60000'} onPress={()=>{}} text={'Buscar Atividades'}/>
        </View>
    );
}

const styleModelo = ()=>(StyleSheet.create({
    conteiner:{
        flex:1,
        backgroundColor:'#c7c7c7',
    },
    tabelaInfo:{
        margin:6,
        padding:12,
        backgroundColor:'#91a8cc',
        borderColor:'#10151f',
        borderWidth:3,
        borderRadius:20,
        marginBottom:15
    },
    tabelaText:{
        fontSize:16
    },
    
}));