import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, } from 'react-native';


export default function RespondendoAtividade({ route }){
    const atividade = route.params.atividade;
    const styles = styleModelo();
    const [alternativas, setAlternativas] = useState([]);
    const [selecionada, setSelecionada] = useState('');

    const selecionarAlternativa = (alternativa) => {
        setSelecionada(alternativa);
      };
    

    useEffect(()=>{
            const misturarAlternativas = () => {
                const opcoes = [atividade.resposta, atividade.alternativa1, atividade.alternativa2, atividade.alternativa3];
                for (let i = opcoes.length - 1; i > 0; i--) {
                    const j = Math.floor(Math.random() * (i + 1));
                    [opcoes[i], opcoes[j]] = [opcoes[j], opcoes[i]];
                }
                setAlternativas(opcoes);
            };
            misturarAlternativas()
        }
        ,[]
    );


    return (
        <ScrollView>
            <Text style={styles.titulo}>{atividade.titulo}</Text>
            <Text style={styles.pergunta}>Pergunta: {atividade.pergunta}</Text>
            {alternativas.map((alternativa, index) => (
                <TouchableOpacity
                key={index}
                style={[
                  styles.altendativaConteiner,
                  selecionada === alternativa && { borderColor: '#000' },
                ]}
                onPress={() => selecionarAlternativa(alternativa)}
              >
                    <Text style={styles.textoAlternativas}>{alternativa}</Text>
                </TouchableOpacity>
            ))}
            <TouchableOpacity style={styles.botaoConteiner}>
                <Text style={styles.textoBotao}> Enviar resposta </Text>
            </TouchableOpacity>
    </ScrollView>
  );
};

const styleModelo = ()=> (StyleSheet.create({
    titulo:{
        fontSize:25,
        margin:10,
        textAlign:'center',
        fontWeight:'bold',
    },
    pergunta:{
        fontSize:18,
        marginHorizontal:10,
        marginVertical:8,
        textAlign:'justify',
    },
    altendativaConteiner:{
        marginHorizontal:10,
        marginVertical:5,
        borderBottomWidth:2,
        borderTopWidth:2,
        borderRadius:15,
        paddingHorizontal:15,
        paddingVertical:10,
        borderColor:'#b3b3b3',
    },
    textoAlternativas:{
        fontSize:16,
    },
    botaoConteiner:{
        marginVertical:35,
        marginHorizontal:30,
        alignItems:'center',
        backgroundColor:'#b3b3b3',
        paddingVertical:15,
        borderRadius:15,
        borderWidth:2,
    },
    textoBotao:{
        fontSize:16,
        fontWeight:'bold',
    }
}));