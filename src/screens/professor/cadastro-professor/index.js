import React, { useContext, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { ProfessorContext } from '../../../contexts/professor/professorContext';
import { cadastrarProfessor } from '../../../services/cadastrar/cadastrar-professor';
import { useNavigation } from '@react-navigation/native';

export default function CadastroProfessor () {
  const navigation = useNavigation();
  const [erroNome, setErroNome] = useState({});
  const [erroSenha, setErroSenha] = useState({});
  const [erroEmail, setErroEmail] = useState({});
  const styles = styleModelo(erroNome, erroEmail, erroSenha);

  const [confSenha, setConfSenha] = useState('');
  const {
    setIdProfessor,
    nomeProfessor, setNomeProfessor, 
    emailProfessor, setEmailProfessor,
    senhaProfessor,setSenhaProfessor
  } = useContext(ProfessorContext);

  function cadastrar(){
    let n = true;
    let e = true;
    let s = true;
    setErroNome({});
    setErroEmail({});
    setErroSenha({});
    
    if(nomeProfessor==''){
      setErroNome({borderColor: '#940000', borderWidth: 3,})
      n = false;
    }
    if(emailProfessor==''){
      setErroEmail({borderColor: '#940000', borderWidth: 3,})
      e = false;
    }
    if(senhaProfessor == '' || senhaProfessor != confSenha){
      setErroSenha({borderColor: '#940000', borderWidth: 3,})
      s = false;
    }
    if(n && s && e){
      const resp = cadastrarProfessor(nomeProfessor,emailProfessor,senhaProfessor);
      setIdProfessor(resp.id);
      navigation.reset({index: 0, routes: [{ name: 'HomeProfessor' }],})
    }

  }
  
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastro para Professor</Text>

      <TextInput
      style={[styles.input, styles.erroCampoNome]}
      placeholder="Nome"
      value={nomeProfessor}
      onChangeText={(text) => setNomeProfessor(text)}
    />

      <TextInput
        style={[styles.input, styles.erroCampoEmail]}
        placeholder="Email do professor"
        value={emailProfessor}
        onChangeText={(text) => setEmailProfessor(text)}
      />
    <TextInput
      style={[styles.input, styles.erroCampoSenha]}
      placeholder="Senha"
      value={senhaProfessor}
      onChangeText={(text) => setSenhaProfessor(text)}
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

const styleModelo =(nome, email, senha)=> StyleSheet.create({
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
  erroCampoNome:nome,
  erroCampoEmail:email,
  erroCampoSenha:senha,
});