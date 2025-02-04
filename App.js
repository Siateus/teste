import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Background from './components/Global/Background';

import {
  TelaFuncionario,
  TelaLogin,
  TelaMensagem,
  TelaNotificacao,
  TelaPerfil,
} from './components/Telas/Index';

const Drawer = createDrawerNavigator();

const withBackground = (Component) => (props) => (
  <Background>
    <Component {...props} />
  </Background>
);

export default function App() {
  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <Drawer.Navigator
          screenOptions={{
            drawerActiveTintColor: 'blue',
            drawerInactiveTintColor: 'white',
            drawerStyle: {
              backgroundColor: '#00BFFF',
            },
          }}
        >
          <Drawer.Screen
            name="Perfil"
            component={withBackground(TelaPerfil)}
            options={{
              drawerIcon: ({ color, size }) => (
                <Icon name="user" size={size} color={color} />
              ),
            }}
          />
          <Drawer.Screen
            name="Notificações"
            component={withBackground(TelaNotificacao)}
            options={{
              drawerIcon: ({ color, size }) => (
                <Icon name="bell" size={size} color={color} />
              ),
            }}
          />
          <Drawer.Screen
            name="Funcionários"
            component={withBackground(TelaFuncionario)}
            options={{
              drawerIcon: ({ color, size }) => (
                <Icon name="people" size={size} color={color} />
              ),
            }}
          />
          <Drawer.Screen
            name="Mensagem"
            component={withBackground(TelaMensagem)}
            options={{
              drawerIcon: ({ color, size }) => (
                <Icon name="envelope" size={size} color={color} />
              ),
            }}
          />
          <Drawer.Screen
            name="Sair"
            component={TelaLogin}
            options={{
              drawerIcon: ({ color, size }) => (
                <Icon name="logout" size={size} color={color} />
              ),
            }}
          />
        </Drawer.Navigator>
      </SafeAreaProvider>
    </NavigationContainer>
  );
}

