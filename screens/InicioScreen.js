import React, { useState } from 'react';
import { Picker } from '@react-native-picker/picker';
import { View, Text, Image, Button, StyleSheet, Platform, SafeAreaView } from 'react-native';

export default function InicioScreen({ navigation }) {
  const [pais, setPais] = useState('');
  const [idioma, setIdioma] = useState('');

  // Usamos SafeAreaView apenas para iOS
  const Container = Platform.OS === 'ios' ? SafeAreaView : View;

  return (
    <Container style={styles.container}>
      {/* Substitua o Text do logo pela Image */}
      <Image 
        source={{ uri: 'snack-icon.png' }} 
        style={styles.logoImage}
        resizeMode="contain"
      />
      
      <Text style={styles.title}>Bem-vindo ao Aplicativo de Ajuda Humanitária</Text>
      
      <Text style={styles.label}>País:</Text>
      <Picker
        selectedValue={pais}
        onValueChange={setPais}
        style={styles.picker}
        mode={Platform.OS === 'ios' ? 'dropdown' : 'dialog'}
      >
        <Picker.Item label="Selecione um país" value="" />
        <Picker.Item label="Brasil" value="Brasil" />
        <Picker.Item label="Indonésia" value="Indonésia" />
        <Picker.Item label="Turquia" value="Turquia" />
        <Picker.Item label="Ucrânia" value="Ucrânia" />
        <Picker.Item label="Timor-Leste" value="Timor-Leste" />
      </Picker>

      <Text style={styles.label}>Idioma:</Text>
      <Picker
        selectedValue={idioma}
        onValueChange={setIdioma}
        style={styles.picker}
        mode={Platform.OS === 'ios' ? 'dropdown' : 'dialog'}
      >
        <Picker.Item label="Selecione um idioma" value="" />
        <Picker.Item label="Português (Brasil)" value="Português" />
        <Picker.Item label="English" value="English" />
        <Picker.Item label="Bahasa Indonesia" value="Bahasa" />
        <Picker.Item label="Türkçe" value="Turco" />
        <Picker.Item label="Українська" value="Ucraniano" />
        <Picker.Item label="Tetum" value="Tetum" />
      </Picker>

      <View style={styles.buttonContainer}>
        <Button 
          title="Confirmar" 
          onPress={() => navigation.navigate('Login')} 
          disabled={!pais || !idioma}
        />
      </View>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    ...Platform.select({
      ios: {
        paddingTop: 10,
        backgroundColor: '#ffffff'
      },
      android: {
        backgroundColor: '#f5f5f5'
      }
    })
  },
  logoImage: {
    width: 200,
    height: 100,
    alignSelf: 'center',
    marginBottom: 20
  },
  title: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 30,
    ...Platform.select({
      ios: {
        color: '#333333'
      }
    })
  },
  label: {
    marginLeft: Platform.OS === 'ios' ? 10 : 0,
    marginBottom: 5,
    fontSize: 16
  },
  picker: {
    marginBottom: 25,
    ...Platform.select({
      ios: {
        backgroundColor: '#f8f8f8',
        borderRadius: 10,
        marginHorizontal: 10,
        height: 120
      },
      android: {
        height: 50
      }
    })
  },
  buttonContainer: {
    marginTop: 20,
    ...Platform.select({
      ios: {
        marginHorizontal: 20
      }
    })
  }
});