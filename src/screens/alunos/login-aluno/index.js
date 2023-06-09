
import { useNavigation } from '@react-navigation/native';
import { useContext, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { verificaPraLoginAluno } from '../../../services/login-api/login';
import { AlunoContext } from '../../../contexts/aluno/alunoContext';

export default function LoginAluno() {
  const styles = styleMetodos();
  const navigation = useNavigation();
  const [senhaMensagem,setSenhaMensagem] = useState('');
  const [raMensagem,setRaMensagem] = useState('');
  const {
    setIdAluno, setNomeAluno, 
    raAluno, setRaAluno, setEmailAluno,
    senhaAluno,setSenhaAluno
  } = useContext(AlunoContext);


  async function login (){
    const resp = await verificaPraLoginAluno(raAluno, senhaAluno);
    
    setRaMensagem('');
    setSenhaMensagem('');
    let r;
    let s;
    if(raAluno == ''){
      setRaMensagem('Por favor coloque o RA')
    }else if(resp?.RA == 'err'){
      setRaMensagem('O RA apresentado não existe')
    }else{
      setRaMensagem('');
      r = true;
    }
    if(senhaAluno == ''){
      setSenhaMensagem('Por favor coloque a senha')
    }else if(resp?.senha == 'err'){
      setSenhaMensagem('A senha apresentado esta errada')
    }else{
      setSenhaMensagem('');
      s= true;
    } 
    if(r && s){
      setIdAluno(resp?.id);
      setNomeAluno(resp?.nome);
      setEmailAluno(resp?.email);
      navigation.reset({index: 0, routes: [{ name: 'HomeAluno' }],})
    }


  }
  

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Aluno</Text>
      <Text style={styles.erroTextNull}>{raMensagem}</Text>
      <TextInput
        style={styles.input}
        placeholder="RA"
        value={raAluno}
        onChangeText={(text)=>setRaAluno(text)}
        />

      <Text>{senhaMensagem}</Text>
      <TextInput
        style={styles.input}
        placeholder="Senha"
        value={senhaAluno}
        onChangeText={(text)=>setSenhaAluno(text)}
      />

      <TouchableOpacity style={styles.button} 
        onPress={login}
      >
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('CadastroAluno')}>
        <Text style={styles.buttonText}>Cadastrar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styleMetodos = (preenchido) => (StyleSheet.create({
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
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  erroTextNull:{
    display:preenchido
  },
  erroText:{},
}));