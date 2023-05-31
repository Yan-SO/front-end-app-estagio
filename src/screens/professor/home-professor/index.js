import { Text, TouchableOpacity, View } from "react-native";
import Header from "../../../components/header";
import Button from "../../../components/button";
import { useNavigation } from "@react-navigation/native";


export default function HomeProfessor(){
    const navigation = useNavigation();

    return (
        <View>
            <Header nome={'Jorge Antoneo Gonsalves de Lamar'}  titulo={'Professor'}
                onPress={()=> navigation.reset({index: 0, routes: [{ name: 'LoginScreen' }],})}
            />
            <Button color={'#a60000'} text={'Listar meus alunos'} onPress={()=> navigation.navigate('ListaMeusAlunos')}/>
            <Button color={'#0600a6'} text={'Cria Atividade'} onPress={()=>{}}/>
        </View>
    );
}