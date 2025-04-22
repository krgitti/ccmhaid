import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ajuda Humanitária</Text>

      <View style={styles.buttonContainer}>
        <Button title="Novo Cadastro" onPress={() => navigation.navigate('NovoCadastro')} />
      </View>

      <View style={styles.buttonContainer}>
        <Button title="Atendimentos" onPress={() => navigation.navigate('Atendimentos')} />
      </View>

      <View style={styles.buttonContainer}>
        <Button title="Doações" onPress={() => navigation.navigate('Doacoes')} />
      </View>

      <View style={styles.buttonContainer}>
        <Button title="Histórico" onPress={() => navigation.navigate('Historico')} />
      </View>

      <View style={styles.buttonContainer}>
        <Button title="Relatórios" onPress={() => navigation.navigate('Relatorios')} />
      </View>

      <View style={styles.buttonContainer}>
        <Button title="Configurações" onPress={() => navigation.navigate('Configuracoes')} />
      </View>
      
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
  buttonContainer: {
    marginBottom: 12, // espaço de 12 entre botões
    width: '80%', // opcional pra deixar os botões mais largos
  },
});
