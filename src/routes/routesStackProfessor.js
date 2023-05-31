import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginProfessor from "../screens/professor/login-professor";
import CadastroProfessor from "../screens/professor/cadastro-professor";



const Stack = createNativeStackNavigator();

export default function ProfessorScreens(){
    return(
        <Stack.Navigator>
            <Stack.Screen name="LoginProfessor" component={LoginProfessor} options={{headerShown:false}}/>
            <Stack.Screen name="CadastroProfessor" component={CadastroProfessor} options={{headerShown:true}}/>
        </Stack.Navigator>
    );
}