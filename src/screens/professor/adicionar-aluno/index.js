import { useContext, useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { ProfessorContext } from "../../../contexts/professor/professorContext";
import { adicionarAluno } from "../../../services/adicionar/adicionar-aluno";



export default function AdicionarAluno(){
    const styles = styleModelo();
    const {emailProfessor} = useContext(ProfessorContext);
    const [ra, setRa] = useState('');
    const [mensagemErro, setMensagemErro] = useState('');
    const [mensagem, setMensagem] = useState('');

    async function addAluno(ra,emailProfessor){
        const resp = await adicionarAluno(ra, emailProfessor);
        setMensagemErro('')
        setMensagem('')
        if(resp?.Ra == 'err'){
            setMensagemErro('O RA informado esta errado')
        }else if(resp?.email=='err'){
            setMensagemErro('Erro fatal demita o cara que fez o app, o email informado é invalido')
        }else if(resp?.Ra == 'err' && resp?.email=='err'){
            setMensagemErro('Erro fatal demita o cara que fez o app, o email e o ra informado são invalidos')
        }else if(resp?.Ra == 'full'){
            setMensagemErro('O aluno ja foi adicionado a você')
        }else{
            setMensagemErro('')
            setMensagem(`O aluno ${resp.Ra} foi adicionado a você, professor ${resp.email}`)
        }
        console.log(resp)
    }

    return (
        <View style={styles.container}>
            <Text style={styles.mensagemErro}> {mensagemErro} </Text>
            <TextInput
                style={styles.input}
                placeholder="RA"
                value={ra}
                onChangeText={(text)=>setRa(text)}
            />
            <Text style={styles.mensagem}> {mensagem} </Text>
            <TouchableOpacity style={styles.button} onPress={()=> addAluno(ra, emailProfessor)}>
                <Text style={styles.buttonText}>Adicionar</Text>
            </TouchableOpacity>
        </View>
    );
}

const styleModelo=()=>(StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
        backgroundColor:"#959cbf"
    },
    mensagemErro:{
        color:'#d40000',
        paddingBottom:16,
        fontSize:18,
        fontWeight:'bold',
    },
    mensagem:{
        fontSize:18,
        fontWeight:'bold',
    },
    input:{
        width: '100%',
    backgroundColor:'#D3D3D3',
    height: 40,
    borderColor: '#808080',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    },
    button: {
        backgroundColor: '#262b45',
        padding: 10,
        borderRadius: 5,
        marginTop: 30,
      },
      buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
      },
}));