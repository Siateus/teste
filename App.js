import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Background from './components/Global/Background';

import {
  TelaFuncionario,
  TelaLogin,
  TelaMensagem,
  TelaNotificacao,
  TelaPerfil,
  TelaCadFun,
  TelaNotiDef,
} from './components/Telas/Index';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();


const withBackground = (Component) => (props) => (
  <Background>
    <Component {...props} />
  </Background>
);

const PerfilStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="PerfilPrincipal" component={TelaPerfil} />
    <Stack.Screen name="CadastroFuncionario" component={TelaCadFun} />
  </Stack.Navigator>
);

const NotificacaoStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="NotificacoesPrincipais" component={TelaNotificacao} />
    <Stack.Screen name="DefinicoesNotificacao" component={TelaNotiDef} />
  </Stack.Navigator>
);

const FuncionarioStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="CadastroFuncionario" component={TelaCadFun} />
    <Stack.Screen name="HistoricoFuncionario" component={TelaHistorico} />
  </Stack.Navigator>
);



const DrawerNavigator = ({ navigation, setIsAuthenticated }) => (
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
      component={TelaPerfil}
      options={{
        drawerIcon: ({ color, size }) => <Icon name="user" size={size} color={color} />,
      }}
    />
    <Drawer.Screen
      name="Notificações"
      component={TelaNotificacao}
      options={{
        drawerIcon: ({ color, size }) => <Icon name="bell" size={size} color={color} />,
      }}
    />
    <Drawer.Screen
      name="Funcionários"
      component={TelaFuncionario}
      options={{
        drawerIcon: ({ color, size }) => <Icon name="people" size={size} color={color} />,
      }}
    />
    <Drawer.Screen
      name="Mensagem"
      component={TelaMensagem}
      options={{
        drawerIcon: ({ color, size }) => <Icon name="envelope" size={size} color={color} />,
      }}
    />
    <Drawer.Screen
      name="Sair"
      component={TelaLogin}
      listeners={{
        focus: () => {
          setIsAuthenticated(false); 
        },
      }}
      options={{
        drawerIcon: ({ color, size }) => <Icon name="logout" size={size} color={color} />,
      }}
    />
  </Drawer.Navigator>
);


export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          {!isAuthenticated ? (
            <Stack.Screen name="Login">
              {(props) => <TelaLogin {...props} onLogin={() => setIsAuthenticated(true)} />}
            </Stack.Screen>
          ) : (
            <Stack.Screen name="Drawer">
              {(props) => <DrawerNavigator {...props} setIsAuthenticated={setIsAuthenticated} />}
            </Stack.Screen>
          )}
        </Stack.Navigator>
      </SafeAreaProvider>
    </NavigationContainer>
  );
}


