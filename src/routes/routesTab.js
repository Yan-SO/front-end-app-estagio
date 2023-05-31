import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginAluno from "../screens/alunos/login-aluno";
import CadastroAluno from "../screens/alunos/cadastro-aluno";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import LoginProfessor from "../screens/professor/login-professor";
import CadastroProfessor from "../screens/professor/cadastro-professor";


const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

 function AlunoScreens(){
    return(
        <Stack.Navigator>
            <Stack.Screen name="LoginAluno" component={LoginAluno} options={{headerShown:false}}/>
            <Stack.Screen name="CadastroAluno" component={CadastroAluno} options={{headerShown:true}}/>
            
        </Stack.Navigator>
    );
}

 function ProfessorScreens(){
    return(
        <Stack.Navigator>
            <Stack.Screen name="LoginProfessor" component={LoginProfessor} options={{headerShown:false}}/>
            <Stack.Screen name="CadastroProfessor" component={CadastroProfessor} options={{headerShown:true}}/>
        </Stack.Navigator>
    );
}

export default function LoginScreen(){
    return(
        <Tab.Navigator>
            <Tab.Screen name="Aluno" component={AlunoScreens} options={{headerShown:false}}/>
            <Tab.Screen name="Professor" component={ProfessorScreens} options={{headerShown:false}}/>
        </Tab.Navigator>
    );
}
