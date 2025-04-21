import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function NovoCadastroScreen({ navigation }) {
  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState('');
  const [tempoCrente, setTempoCrente] = useState('');

  const salvarCadastro = async () => {
    const novoCadastro = { nome, idade, tempoCrente, data: new Date().toLocaleString() };
    try {
      const cadastrosExistentes = await AsyncStorage.getItem('cadastros');
      const cadastros = cadastrosExistentes ? JSON.parse(cadastrosExistentes) : [];
      cadastros.push(novoCadastro);
      await AsyncStorage.setItem('cadastros', JSON.stringify(cadastros));
      Alert.alert('Sucesso', 'Cadastro salvo!');
      navigation.navigate('Home');
    } catch (e) {
      Alert.alert('Erro', 'Não foi possível salvar.');
    }
  };

  const validarEProsseguir = () => {
    if (!nome || !idade || !tempoCrente) {
      Alert.alert('Atenção', 'Preencha todos os campos obrigatórios.');
      return;
    }
    salvarCadastro();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Novo Cadastro de Atendido</Text>

      <Text>Nome Completo:</Text>
      <TextInput value={nome} onChangeText={setNome} style={styles.input} />

      <Text>Idade:</Text>
      <TextInput value={idade} onChangeText={setIdade} style={styles.input} keyboardType="numeric" />

      <Text>Tempo de Crente (anos):</Text>
      <TextInput value={tempoCrente} onChangeText={setTempoCrente} style={styles.input} keyboardType="numeric" />

      <Button title="Salvar" onPress={validarEProsseguir} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 22, marginBottom: 20 },
  input: { borderWidth: 1, borderColor: '#ccc', padding: 10, marginBottom: 10 }
});
