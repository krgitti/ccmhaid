import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const validarLogin = () => {
    if (email === 'admin@congregacao.org' && senha === '123456') {
      navigation.navigate('Home');
    } else {
      Alert.alert('Erro', 'E-mail ou senha inválidos.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <Text>E-mail:</Text>
      <TextInput value={email} onChangeText={setEmail} style={styles.input} />

      <Text>Senha:</Text>
      <TextInput value={senha} onChangeText={setSenha} style={styles.input} secureTextEntry />

      <Button title="Entrar" onPress={validarLogin} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20 },
  title: { fontSize: 22, marginBottom: 20 },
  input: { borderWidth: 1, borderColor: '#ccc', padding: 10, marginBottom: 10 }
});
