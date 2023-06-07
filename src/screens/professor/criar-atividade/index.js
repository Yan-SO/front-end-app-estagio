import { useContext, useState } from "react";
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { ProfessorContext } from "../../../contexts/professor/professorContext";
import { adicionarAtividade } from "../../../services/adicionar/adicionar-atividades";



export default function CriarAtividade(){
    const styles = styleModelo();
    const {idProfessor} = useContext(ProfessorContext);
    const [titulo,setTitulo] = useState('');
    const [pergunta,setPergunta] = useState('');
    const [resposta, setResposta] = useState('');
    const [alternativa1, setAlternativa1] = useState('');
    const [alternativa2, setAlternativa2] = useState('');
    const [alternativa3,setAlternativa3] = useState('');
    const [mensagem,setMensagem] = useState('');

    async function enviar(titulo, pergunta,resposta,alternativa1,alternativa2, alternativa3, idProfessor){
        if(titulo==''){
            setMensagem('Coloque um titulo');
        }else if(pergunta==''){
            setMensagem('Coloque uma pergunta');
        }else if(resposta==''){
            setMensagem('Coloque um resposta');
        }else if(alternativa2=='' || alternativa1=='' || alternativa3==''){
            setMensagem('Coloque as alternativas erradas');
        }else{
            const resp =
               await adicionarAtividade(titulo, pergunta,resposta,alternativa1,alternativa2, alternativa3, idProfessor);
            setMensagem(`A atividade "${resp.titulo}" foi criada com sucesso!`);
        }
        setTitulo('');
        setPergunta('');
        setResposta('');
        setAlternativa1('');
        setAlternativa2('');
        setAlternativa3('');
        setTimeout(()=> setMensagem('') ,10000);
    }

    return(
        <ScrollView style={styles.conteiner}>
            <Text style={styles.mensagem}>{mensagem}</Text>
            <Text style={styles.titulos}> Titulo da pergunta </Text>
            <TextInput placeholder='Titulo' maxLength={252} style={styles.textInput}
                value={titulo} onChangeText={(text)=> setTitulo(text)}
             />

            <Text style={styles.titulos}> Pergunta </Text>
            <TextInput placeholder='Pergunta' maxLength={512}  
                aria-expanded={true} multiline={true} style={styles.textInput} value={pergunta} 
                onChangeText={(text)=> setPergunta(text)}
            />

            <Text style={styles.titulos}> Resposta certa </Text>
            <TextInput placeholder='Resposta certa' maxLength={252}
                aria-expanded={true} multiline={true} style={styles.textInput} value={resposta} 
                onChangeText={(text)=> setResposta(text)}
             />

            <Text style={styles.titulos}> Alternativas erradas </Text>
            <TextInput placeholder='Alternativa errada' maxLength={252} 
                aria-expanded={true} multiline={true} style={styles.textInput} value={alternativa1} 
                onChangeText={(text)=> setAlternativa1(text)}
            />
            <TextInput placeholder='Alternativa errada' maxLength={252} 
                aria-expanded={true} multiline={true} style={styles.textInput} value={alternativa2} 
                onChangeText={(text)=> setAlternativa2(text)}
            />
            <TextInput placeholder='Alternativa errada' maxLength={252} 
                aria-expanded={true} multiline={true} style={styles.textInput} value={alternativa3} 
                onChangeText={(text)=> setAlternativa3(text)}
            />
            <TouchableOpacity style={styles.botao} onPress={()=> enviar(titulo, pergunta,resposta,alternativa1,alternativa2, alternativa3, idProfessor)}>
                <Text style={styles.botaoTexto}> Enviar a Atividade </Text>
            </TouchableOpacity>
        </ScrollView>
    );
}

const styleModelo = ()=>(StyleSheet.create({
    conteiner:{},
    titulos:{
        marginLeft:16,
        marginTop:20,
        fontSize:16,
    },
    textInput:{
        borderColor:'#000',
        borderWidth:2,
        marginHorizontal:8,
        marginTop:10,
        paddingVertical:6,
        fontSize:16,
        paddingHorizontal:16,
    },
    botao:{
        alignItems:"center",
        justifyContent:"center",
        marginVertical:30,
        backgroundColor:'#000',
        paddingVertical:16,
        marginHorizontal:32,
        borderRadius:32,
        borderColor:'#7d7d7d',
        borderWidth:2,
    },
    botaoTexto:{
        color:'#fff',
        fontSize:16
    },
    mensagem:{
        fontSize:16,
        marginHorizontal:20,
        marginTop:6,
    },
}));