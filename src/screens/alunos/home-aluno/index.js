
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
                
                {/* <Text style={styles.tabelaText}>Total de atividades acertadas: {totalAcertos}</Text> */}
            </View>
            <Button color={'#0013b5'} onPress={()=>navigation.navigate('TodasAtividadesAluno')} text={'Todas as Atividades'}/>
            <Button color={'#007d0f'} onPress={()=>navigation.navigate('AtividadesFeitas')} text={'Atividades feitas'}/>
            <Button color={'#bd8700'} onPress={()=>navigation.navigate('AtividadeAFazer')} text={'Atividades para fazer'}/>
            {/* <Button color={'#b50202'} onPress={()=>{}} text={'Meus Professores'}/> */}
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