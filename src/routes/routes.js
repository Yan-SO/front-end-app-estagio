import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeAluno from "../screens/alunos/home-aluno";
import LoginScreen from "./routesTab";
import HomeProfessor from "../screens/professor/home-professor";
import ListaMeus from "../screens/professor/listas-professor";
import AdicionarAluno from "../screens/professor/adicionar-aluno";
import CriarAtividade from "../screens/professor/criar-atividade";
import ApagarAtividade from "../screens/professor/apagar-ativdade";
import ApagarAlunoProfessor from "../screens/professor/apagar-aluno";
import ListaAtividadeAlunos from "../screens/alunos/listas-atividade-aluno";
import AtividadeAFazer from "../screens/alunos/atividades-a-fazer";
import RespondendoAtividade from "../screens/alunos/respondendo-atividade";
import AtividadesFeitas from "../screens/alunos/atividade-feitas";



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
            <Stack.Screen name="TodasAtividadesAluno" component={ListaAtividadeAlunos} options={{headerShown:true, title:'Todas as atividades'}}/>
            <Stack.Screen name="AtividadeAFazer" component={AtividadeAFazer} options={{headerShown:true, title:'Atividades a fazer'}}/>
            <Stack.Screen name="ApagarAtividade" component={ApagarAtividade} options={{headerShown:true, title:'Apagar Atividade'}}/>
            <Stack.Screen name="AtividadesFeitas" component={AtividadesFeitas} options={{headerShown:true, title:'Atividades feitas'}}/>
            <Stack.Screen name="ApagarAlunoProfessor" component={ApagarAlunoProfessor} options={{headerShown:true, title:'Remover o aluno das atividades'}}/>
            <Stack.Screen name="RespondendoAtividade" component={RespondendoAtividade} options={{headerShown:false}}/>
        </Stack.Navigator>
    );
}

