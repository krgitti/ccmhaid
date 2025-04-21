import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function HistoricoScreen() {
  const [cadastros, setCadastros] = useState([]);

  useEffect(() => {
    const carregarCadastros = async () => {
      const dados = await AsyncStorage.getItem('cadastros');
      if (dados) {
        setCadastros(JSON.parse(dados));
      }
    };
    carregarCadastros();
  }, []);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Histórico de Atendimentos</Text>
      {cadastros.length === 0 ? (
        <Text>Nenhum atendimento registrado.</Text>
      ) : (
        cadastros.map((item, index) => (
          <View key={index} style={styles.item}>
            <Text>Nome: {item.nome}</Text>
            <Text>Idade: {item.idade}</Text>
            <Text>Crente há: {item.tempoCrente} anos</Text>
            <Text>Data: {item.data}</Text>
          </View>
        ))
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  title: { fontSize: 22, marginBottom: 20 },
  item: { borderWidth: 1, padding: 10, marginBottom: 10, borderColor: '#ccc' }
});
