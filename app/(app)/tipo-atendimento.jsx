import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { router } from 'expo-router';

export default function TipoAtendimentoScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Qual o tipo de atendimento?</Text>
      
      
      
      
      <View style={styles.buttonContainer}>
        <Button
          title="Chamados"
          onPress={() => router.push('/adicionar-denuncia')}
          color="rgb(0, 26, 255)"
        />
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
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 40,
    textAlign: 'center',
    color: '#333',
  },
  buttonContainer: {
    marginBottom: 20,
    width: '80%',
  },
});