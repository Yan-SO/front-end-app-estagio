import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginAluno from "../screens/alunos/login-aluno";
import CadastroAluno from "../screens/alunos/cadastro-aluno";



const Stack = createNativeStackNavigator();

export default function AlunoScreens(){
    return(
        <Stack.Navigator>
            <Stack.Screen name="LoginAluno" component={LoginAluno} options={{headerShown:false}}/>
            <Stack.Screen name="CadastroAluno" component={CadastroAluno} options={{headerShown:true}}/>
        </Stack.Navigator>
    );
}