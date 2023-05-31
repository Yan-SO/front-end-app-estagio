import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AlunoScreens from "./routesStackAluno";
import ProfessorScreens from "./routesStackProfessor";


const Tab = createBottomTabNavigator();


export default function Routes(){
    return(
        <Tab.Navigator>
            <Tab.Screen name="Aluno" component={AlunoScreens} options={{headerShown:false}}/>
            <Tab.Screen name="Professor" component={ProfessorScreens} options={{headerShown:false}}/>
        </Tab.Navigator>
    );
}
