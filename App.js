import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

//Fetch serve para fazer requisições para servidores, APIs ou bancos de dados pela internet. da pra pegar e lançar dados, ja que o snack não suporta firebase nem ele em si 

//importa as telas
import TelaInicial from './screens/index.js';
import TelaGuia from './screens/guia.js';
import TelaCuidados from './screens/cuidados.js';
import TelaAuxilio from './screens/auxilio.js';
import TelaComunidade from './screens/comunidade.js';
import TelaConteudo from './screens/conteudos.js';
import TelaFontes from './screens/fontes.js';


//cria o objeto de navegação tipo drawer
const Drawer = createDrawerNavigator();

//componente principal da navegação
export default function App() {
  return (
    //envolve toda a navegação do app
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Guia"
        screenOptions={{
          drawerActiveTintColor: '#0C090D',
          drawerStyle: {
            backgroundColor: '#F9D049',
          },
          headerStyle: {
      backgroundColor: '#F9D049',
    },
        }}>
        <Drawer.Screen name="Home" component={TelaInicial} />

        <Drawer.Screen name="Guia" component={TelaGuia} />
        <Drawer.Screen name="Cuidados básicos" component={TelaCuidados} />
        <Drawer.Screen name="Auxílio" component={TelaAuxilio} />
        <Drawer.Screen name="Comunidade" component={TelaComunidade} />
        <Drawer.Screen name="Conteúdos" component={TelaConteudo} />
        <Drawer.Screen name="Fontes" component={TelaFontes} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

