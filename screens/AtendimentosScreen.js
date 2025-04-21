import React from 'react';
import { View, Text, Button, StyleSheet, ScrollView } from 'react-native';

export default function AtendimentosScreen({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Atendimentos</Text>

      <Text>Pendentes: 12</Text>
      <Text>Em andamento: 8</Text>
      <Text>Concluídos este mês: 45</Text>

      <View style={{ marginTop: 20 }}>
        <Button title="Voltar" onPress={() => navigation.goBack()} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  title: { fontSize: 22, marginBottom: 20, textAlign: 'center' }
});
