import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function Home({ changeScreen,setNextScreen }) {

  const handleClick = (gameType) => {
    if (gameType == "Jogo") {
      setNextScreen("Jogo");
      changeScreen("NomeJogador"); 
    }else if(gameType == "Jogo3"){
      setNextScreen("Jogo3");
      changeScreen("NomeJogador")
    }else{
      setNextScreen("Jogo2")
      changeScreen("EscolherPalavra")
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.background}></View>
      <Text style={styles.header}>Bem-vindo ao Jogo Multiplayer</Text>

      <TouchableOpacity
        style={styles.Button}
        onPress={() => handleClick("Jogo")}
      >
        <Text style={styles.ButtonText}>Jogo da Velha</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.Button}
        onPress={() => handleClick("Jogo2")}
      >
        <Text style={styles.ButtonText}>Jogo da Forca</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.Button}
        onPress={() => handleClick("Jogo3")}
      >
        <Text style={styles.ButtonText}>Jogo da Memória</Text>
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
  Button: {
    backgroundColor: '#4a148c',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 10,
  },
  ButtonText: {
    color: 'white',
    fontSize: 16,
  }
});
