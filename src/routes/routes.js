import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeAluno from "../screens/alunos/home-aluno";
import LoginScreen from "./routesTab";
import HomeProfessor from "../screens/professor/home-professor";
import ListaMeusAlunos from "../screens/lista-alunos";
import AdicionarAluno from "../screens/professor/adicionar-aluno";



const Stack = createNativeStackNavigator();


export default function Routes(){
    return(
        <Stack.Navigator>
            <Stack.Screen name="LoginScreen" component={LoginScreen} options={{headerShown:false}}/>
            <Stack.Screen name="HomeAluno" component={HomeAluno} options={{headerShown:false}}/>
            <Stack.Screen name="HomeProfessor" component={HomeProfessor} options={{headerShown:false}}/>
            <Stack.Screen name="ListaMeusAlunos" component={ListaMeusAlunos} options={{headerShown:true, title:'Meus Alunos'}}/>
            <Stack.Screen name="AdicionarAluno" component={AdicionarAluno} options={{headerShown:true, title:'Adicionar Aluno'}}/>
        </Stack.Navigator>
    );
}

