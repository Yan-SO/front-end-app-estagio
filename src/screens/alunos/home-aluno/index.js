
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet,} from 'react-native';
import Header from '../../../components/header';
import Button from '../../../components/button';

export default function HomeAluno(){
    const navigation = useNavigation();
    const styles = styleModelo();
    const nomeProfessor = 'Josefa Antonia Gonsauves de Lamar';
    const RA = '5128156845385555';
    const totalAcertos = 5;

    return (
        <View style={styles.conteiner}>
            <Header nome={'Porge Silva de Oliveira '} titulo={'Aluno'}
                onPress={()=> navigation.reset({index: 0, routes: [{ name: 'LoginScreen' }],})}
            />
            <View style={styles.tabelaInfo}>
                <Text style={styles.tabelaText}>RA do Aluno: {RA}</Text>
                <Text style={styles.tabelaText}>Professor: {nomeProfessor}</Text>
                <Text style={styles.tabelaText}>Total de atividades acertadas: {totalAcertos}</Text>
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