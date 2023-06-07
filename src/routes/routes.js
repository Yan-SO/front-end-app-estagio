import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeAluno from "../screens/alunos/home-aluno";
import LoginScreen from "./routesTab";
import HomeProfessor from "../screens/professor/home-professor";
import ListaMeus from "../screens/listas";
import AdicionarAluno from "../screens/professor/adicionar-aluno";
import CriarAtividade from "../screens/professor/criar-atividade";
import ApagarAtividade from "../screens/professor/apagar-ativdade";



const Stack = createNativeStackNavigator();


export default function Routes(){
    return(
        <Stack.Navigator>
            <Stack.Screen name="LoginScreen" component={LoginScreen} options={{headerShown:false}}/>
            <Stack.Screen name="HomeAluno" component={HomeAluno} options={{headerShown:false}}/>
            <Stack.Screen name="HomeProfessor" component={HomeProfessor} options={{headerShown:false}}/>
            <Stack.Screen name="ListaMeus" component={ListaMeus} options={({ route }) => ({ title: route.params.tipo,headerShown:true, })}/>
            <Stack.Screen name="AdicionarAluno" component={AdicionarAluno} options={{headerShown:true, title:'Adicionar Aluno'}}/>
            <Stack.Screen name="CriarAtividade" component={CriarAtividade} options={{headerShown:true, title:'Criar Atividade'}}/>
            <Stack.Screen name="ApagarAtividade" component={ApagarAtividade} options={{headerShown:true, title:'Apagar Atividade'}}/>
        </Stack.Navigator>
    );
}

