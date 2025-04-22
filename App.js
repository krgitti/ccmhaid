import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import InicioScreen from './screens/InicioScreen';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import NovoCadastroScreen from './screens/NovoCadastroScreen';
import AtendimentoScreen from './screens/AtendimentosScreen';
import DoacoesScreen from './screens/DoacoesScreen';
import HistoricoScreen from './screens/HistoricoScreen';
import RelatoriosScreen from './screens/RelatoriosScreen';
import ConfiguracoesScreen from './screens/ConfiguracoesScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Inicio">
        <Stack.Screen name="Inicio" component={InicioScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="NovoCadastro" component={NovoCadastroScreen} />
        <Stack.Screen name="Atendimentos" component={AtendimentoScreen} />
        <Stack.Screen name="Doacoes" component={DoacoesScreen} />
        <Stack.Screen name="Historico" component={HistoricoScreen} />
        <Stack.Screen name="Relatorios" component={RelatoriosScreen} />
        <Stack.Screen name="Configuracoes" component={ConfiguracoesScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
