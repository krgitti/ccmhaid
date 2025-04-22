import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ajuda Humanitária</Text>
      <Button title="Novo Cadastro" onPress={() => navigation.navigate('NovoCadastro')} />
      <Button title="Atendimentos" onPress={() => navigation.navigate('Atendimentos')} />
      <Button title="Doações" onPress={() => navigation.navigate('Doacoes')} />
      <Button title="Histórico" onPress={() => navigation.navigate('Historico')} />
      <Button title="Relatórios" onPress={() => navigation.navigate('Relatorios')} />
      <Button title="Configurações" onPress={() => navigation.navigate('Configuracoes')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});
