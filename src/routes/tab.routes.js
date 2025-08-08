import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";


import TelaAuxilio from '.screens/Auxilio';
import TelaComunidade from '.screens/Comunidade';
import TelaConteudo from '.screens/Conteudos';
import TelaCuidados from '.screens/Cuidados';
import TelaGuia from '.screens/Guia';
import TelaInicial from '.screens/Home';

const Tab = createBottomTabNavigator();

export default function TabRoutes() {
    return(
        <Tab.Navigator screenOptions={{ headerShown: false}}>
            <Tab.Screen
            name="telaInicial"
            component={TelaInicial}
            options={{
                tabBarIcon: ({color, size}) => <Feather name='home' color={color} size={size} />,
                tabBarLabel: 'Início'
            }}
            />
            <Tab.Screen
            name="telaGuia"
            component={TelaGuia}
            options={{
                tabBarIcon: ({color, size}) => <Feather name='home' color={color} size={size} />,
                tabBarLabel: 'Guia'
            }}
            />
            <Tab.Screen
            name="TelaAuxilio"
            component={TelaInicial}
            options={{
                tabBarIcon: ({color, size}) => <Feather name='home' color={color} size={size} />,
                tabBarLabel: 'Início'
            }}
            />
            <Tab.Screen
            name="TelaAuxilio"
            component={TelaInicial}
            options={{
                tabBarIcon: ({color, size}) => <Feather name='home' color={color} size={size} />,
                tabBarLabel: 'Início'
            }}
            />
            <Tab.Screen
            name="TelaAuxilio"
            component={TelaInicial}
            options={{
                tabBarIcon: ({color, size}) => <Feather name='home' color={color} size={size} />,
                tabBarLabel: 'Início'
            }}
            />
            <Tab.Screen
            name="TelaAuxilio"
            component={TelaInicial}
            options={{
                tabBarIcon: ({color, size}) => <Feather name='home' color={color} size={size} />,
                tabBarLabel: 'Início'
            }}
            />
        </Tab.Navigator>
    )
}