import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function ConfiguracoesScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Configurações</Text>
      <Text>Aqui o usuário poderá alterar preferências.</Text>

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
