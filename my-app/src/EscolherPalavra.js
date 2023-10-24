import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

export default function EscolherPalavra({ onPalavraEscolhida }) {
  const [palavra, setPalavra] = useState('');

  const handleEscolherPalavra = () => {
    if (palavra.trim() !== '') {
      onPalavraEscolhida(palavra.toLowerCase());
    }
  };

  return (
    <View style={styles.container}>
    

      <TextInput
        style={styles.input}
        placeholder="Digite uma palavra"
        onChangeText={setPalavra}
      />
      <Button title="Escolher Palavra" onPress={handleEscolherPalavra} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    marginBottom: 20,
    fontSize: 18,
    paddingHorizontal: 10,
  },
});