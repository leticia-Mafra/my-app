import React, { useState } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity, StyleSheet } from 'react-native';

export default function Home({ changeScreen }) {
  const [player1, setPlayer1] = useState("");
  const [player2, setPlayer2] = useState("");

  function handleClick(gameType) {
    if (player1 && player2) {
      changeScreen(gameType, { player1, player2 });
    } else {
      alert("Por favor, insira o nome de ambos os jogadores.");
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.background}></View>
      <Text style={styles.header}>Bem-vindo ao Jogo Multiplayer</Text>

      <TextInput
        style={styles.input}
        placeholder="Player 1"
        onChangeText={setPlayer1}
      />
      <TextInput
        style={styles.input}
        placeholder="Player 2"
        onChangeText={setPlayer2}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={() => handleClick("jogo")}
      >
        <Text style={styles.buttonText}>Jogo da Velha</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => handleClick("jogo2")}
      >
        <Text style={styles.buttonText}>Jogo da Forca</Text>
      </TouchableOpacity>
      <TouchableOpacity
  style={styles.button}
  onPress={() => handleClick("JogoMemoria")}
>
  <Text style={styles.buttonText}>Jogo da Memória</Text>
</TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  background: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: '#E6E6FA', 
    zIndex: -1,
  },
  header: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold',
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
  button: {
    backgroundColor: '#4a148c',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});
