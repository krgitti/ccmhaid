import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function DoacoesScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Doações</Text>
      <Text>Este mês: 45</Text>
      <Text>Total: 1245</Text>
      <Text>Valor médio: R$ 350,00</Text>

      <View style={{ marginTop: 20 }}>
        <Button title="Voltar" onPress={() => navigation.goBack()} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center' },
  title: { fontSize: 22, marginBottom: 20, textAlign: 'center' }
});
