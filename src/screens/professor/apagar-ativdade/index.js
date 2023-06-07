import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import deletarAtividade from "../../../services/deletar/deletar-atividade";
import { useNavigation } from "@react-navigation/native";

function formatarData(data) {
    const dataObj = new Date(data);
    const hora = dataObj.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const dia = dataObj.toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit', year: 'numeric' });
  
    return {
      hora,
      dia,
    };
}

export default function ApagarAtividade({route}){
    const navigation = useNavigation();
    const atividade = route.params.item;

    const styles = styleModelo();
    const data = formatarData(atividade.data);
    
    async function deletar(id){
        await deletarAtividade(id);

        navigation.goBack();
    }


    return(
        <ScrollView style={styles.conteiner}>
            <Text style={[styles.texto, styles.textoTitulo]}> Titulo: {atividade.titulo}</Text>

            <View style={styles.conteinerData}>

                <Text style={[styles.texto, styles.textoSubtitulo]}> A atividade foi criada</Text>
                <Text style={styles.texto}> {`dia: ${data.dia}`}</Text>
                <Text style={styles.texto}> {`hora: ${data.hora}`}</Text>
            </View>
            <Text style={[styles.texto, styles.textoPergunta]}> Pergunta: {atividade.pergunta}</Text>
            <Text style={[styles.texto, styles.textoResposta]}> Resposta: {atividade.resposta}</Text>
            <Text style={[styles.texto, styles.textoAlternativas]}> Alternativa errada: {atividade.alternativa1}</Text>
            <Text style={[styles.texto, styles.textoAlternativas]}> Alternativa errada: {atividade.alternativa2}</Text>
            <Text style={[styles.texto, styles.textoAlternativas]}> Alternativa errada: {atividade.alternativa3}</Text>

            <TouchableOpacity style={styles.botao} onPress={()=> deletar(atividade.id)}>
                <Text style={styles.botaoTexto}> Deletar Atividade </Text>
            </TouchableOpacity>
        </ScrollView>
    );
}

const styleModelo = ()=> (StyleSheet.create({
    conteiner:{},
    texto:{
        fontSize:16,
        marginHorizontal:6,
        marginVertical:6,
        textAlign:"justify",
    },
    textoTitulo:{
        textAlign:"center",
        fontSize:20,
    },
    textoSubtitulo:{
        textAlign:"center",
        fontSize:18,
    },
    textoPergunta:{
        textAlign:"justify",
        fontSize:18,
        marginTop:30,
        marginBottom:15,
    },
    textoResposta:{
        marginVertical:10,
        paddingVertical:10,
        paddingHorizontal:20,
        borderBottomWidth:2,
        borderTopWidth:2,
        borderRadius:20,
        borderColor:'#197d30',
    },
    textoAlternativas:{
        marginVertical:10,
        paddingVertical:10,
        paddingHorizontal:20,
        borderBottomWidth:2,
        borderTopWidth:2,
        borderRadius:20,
        borderColor:'#7d1919',
    },
    conteinerData:{
        borderBottomWidth:2,
        alignItems:"center",
        borderTopWidth:2,
        marginVertical:3,
        marginHorizontal:16,
        borderRadius:30,
        paddingBottom:6,
        paddingHorizontal:6
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