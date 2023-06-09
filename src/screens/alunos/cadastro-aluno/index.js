import React, { useContext, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { cadastrarAluno } from '../../../services/cadastrar/cadastar-aluno';
import { AlunoContext } from '../../../contexts/aluno/alunoContext';
import { useNavigation } from '@react-navigation/native';

export default function CadastroAluno () {
  const navigation = useNavigation();
  const [erroRa, setErroRa] = useState({});
  const [erroNome, setErroNome] = useState({});
  const [erroSenha, setErroSenha] = useState({});
  const [erroEmail, setErroEmail] = useState({});
  const [menssagemErro, setMenssagemErro] = useState({});
  const [menssagemErroText, setMenssagemErroText] = useState('');
  const styles = styleModelo(erroRa, erroNome, erroEmail, erroSenha,menssagemErro);
  const erroStyle= {borderColor: '#940000', borderWidth: 3,};
  
  const [confSenha, setConfSenha] = useState('');
  const {
    setIdAluno,
    nomeAluno, setNomeAluno, 
    raAluno, setRaAluno,
    emailAluno, setEmailAluno,
    senhaAluno,setSenhaAluno
  } = useContext(AlunoContext);
   

  async function cadastrar(){ 
    let r = true
    let n = true;
    let e = true;
    let s = true;
    setErroRa({});
    setErroNome({});
    setErroEmail({});
    setErroSenha({});
    
    if(raAluno==''){
      setErroRa(erroStyle)
      r = false;
    }
    if(nomeAluno==''){
      setErroNome(erroStyle)
      n = false;
    }
    if(emailAluno==''){
      setErroEmail(erroStyle)
      e = false;
    }
    if(senhaAluno == '' || senhaAluno != confSenha){
      setErroSenha(erroStyle)
      s = false;
    }
    if(n && s && e && r){
      const resp = await cadastrarAluno(raAluno,nomeAluno,emailAluno,senhaAluno);
      setMenssagemErro({display:'none',fontSize:20,});

      if(resp.RA== 'err'){
        setErroRa(erroStyle);
        setMenssagemErro({display:'flex',fontSize:20,});
        setMenssagemErroText('O RA ja esta em uso')
        r = false;
      }
      if(resp.email =='err'){
        setErroEmail(erroStyle)
        setMenssagemErro({display:'flex',fontSize:20,});
        setMenssagemErroText('O email ja esta em uso')
        e = false;
      }
      if(r && e){
        setIdAluno(resp.id);
        navigation.reset({index: 0, routes: [{ name: 'HomeAluno' }],})
      }
    }

  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastro para Alunos</Text>

      <Text style={styles.menssagemErro}>{menssagemErroText}</Text>

      <TextInput
      style={[styles.input, styles.erroCampoRa]}
      placeholder="RA"
      value={raAluno}
      onChangeText={(text) => setRaAluno(text)}
    />

    <TextInput
      style={[styles.input, styles.erroCampoNome]}
      placeholder="Nome"
      value={nomeAluno}
      onChangeText={(text) => setNomeAluno(text)}
    />

    <TextInput
      style={[styles.input, styles.erroCampoEmail]}
      placeholder="Email"
      value={emailAluno}
      onChangeText={(text) => setEmailAluno(text)}
    />

    <TextInput
      style={[styles.input, styles.erroCampoSenha]}
      placeholder="Senha"
      value={senhaAluno}
      onChangeText={(text) => setSenhaAluno(text)}
    />

    <TextInput
      style={[styles.input, styles.erroCampoSenha]}
      placeholder="Confirmação da senha"
      value={confSenha}
      onChangeText={(text) => setConfSenha(text)}
    />


      <TouchableOpacity style={styles.button} onPress={()=> cadastrar()}>
        <Text style={styles.buttonText}>Cadastrar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styleModelo = (ra, nome, email, senha, menssagemErro) => (StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor:"#96a6ff"
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: '#808080',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    backgroundColor:'#D3D3D3',
  },
  button: {
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    backgroundColor: '#262b45',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  erroCampoRa:ra,
  erroCampoNome:nome,
  erroCampoEmail:email,
  erroCampoSenha:senha,
  menssagemErro:menssagemErro
}));