import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo ao Aplicativo de Ajuda Humanitária</Text>
      <Button title="Novo Cadastro" onPress={() => navigation.navigate('NovoCadastro')} />
      <Button title="Histórico de Atendimentos" onPress={() => navigation.navigate('Historico')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 22, marginBottom: 20 }
});
