import React, { useState } from 'react';
import { View, Text, Button, Picker, StyleSheet } from 'react-native';

export default function InicioScreen({ navigation }) {
  const [pais, setPais] = useState('');
  const [idioma, setIdioma] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Congregação Cristã Mundial</Text>
      <Text style={styles.title}>Bem-vindo ao Aplicativo de Ajuda Humanitária</Text>
      
      <Text>País:</Text>
      <Picker selectedValue={pais} onValueChange={(itemValue) => setPais(itemValue)} style={styles.picker}>
        <Picker.Item label="Selecione um país" value="" />
        <Picker.Item label="Brasil" value="Brasil" />
        <Picker.Item label="Indonésia" value="Indonésia" />
        <Picker.Item label="Turquia" value="Turquia" />
        <Picker.Item label="Ucrânia" value="Ucrânia" />
        <Picker.Item label="Timor-Leste" value="Timor-Leste" />
      </Picker>

      <Text>Idioma:</Text>
      <Picker selectedValue={idioma} onValueChange={(itemValue) => setIdioma(itemValue)} style={styles.picker}>
        <Picker.Item label="Selecione um idioma" value="" />
        <Picker.Item label="Português (Brasil)" value="Português" />
        <Picker.Item label="English" value="English" />
        <Picker.Item label="Bahasa Indonesia" value="Bahasa" />
        <Picker.Item label="Türkçe" value="Turco" />
        <Picker.Item label="Українська" value="Ucraniano" />
        <Picker.Item label="Tetum" value="Tetum" />
      </Picker>

      <Button title="Confirmar" onPress={() => navigation.navigate('Login')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center' },
  logo: { fontSize: 26, textAlign: 'center', marginBottom: 20 },
  title: { fontSize: 18, textAlign: 'center', marginBottom: 20 },
  picker: { height: 50, marginBottom: 20 }
});
