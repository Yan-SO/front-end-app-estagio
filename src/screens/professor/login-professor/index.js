
import { useNavigation } from '@react-navigation/native';
import { useContext, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { verificaPraLoginProfessor } from '../../../services/login-api/login';
import { ProfessorContext } from '../../../contexts/professor/professorContext';

export default function LoginProfessor() {
  const navigation = useNavigation();
  const { setIdProfessor,setNomeProfessor, 
    emailProfessor, setEmailProfessor,
    senhaProfessor,setSenhaProfessor} = useContext(ProfessorContext);
  const [emailMensagem,setEmailMensagem] = useState('');
  const [senhaMensagem,setSenhaMensagem] = useState('');
  
  async function login (){
    const resp = await verificaPraLoginProfessor(emailProfessor, senhaProfessor);
    setEmailMensagem('');
    setSenhaMensagem('');
    let r;
    let s;
    if(emailProfessor == ''){
      setEmailMensagem('Por favor coloque o Email')
    }else if(resp?.email == 'err'){
      setEmailMensagem('O Email apresentado não existe')
    }else{
      setEmailMensagem('');
      r = true;
    }
    console.log(resp)
    if(senhaProfessor == ''){
      setSenhaMensagem('Por favor coloque a senha')
    }else if(resp?.senha == 'err'){
      setSenhaMensagem('A senha apresentado esta errada')
    }else{
      setSenhaMensagem('');
      s= true;
    } 
    if(r && s){
      setIdProfessor(resp.id);
      setNomeProfessor(resp.nome);
      setEmailProfessor(resp.email);
      setSenhaProfessor(resp.senha);
      navigation.reset({index: 0, routes: [{ name: 'HomeProfessor' }],})
    }


  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Professor</Text>

      <Text style={styles.erroTextNull}>{emailMensagem}</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={emailProfessor}
        onChangeText={(text)=>setEmailProfessor(text)}
        keyboardType='email-address'
      />
      <Text style={styles.erroTextNull}>{senhaMensagem}</Text>
      <TextInput
        style={styles.input}
        placeholder="Senha"
        value={senhaProfessor}
        onChangeText={(text)=>setSenhaProfessor(text)}
        //secureTextEntry
      />

      <TouchableOpacity style={styles.button} onPress={login}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate('CadastroProfessor')}>
        <Text style={styles.buttonText}>Cadastrar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
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
  erroTextNull:{
    fontSize:16,
    fontWeight:'bold',
    color:'#d40000',
    paddingBottom:16,
  },
});