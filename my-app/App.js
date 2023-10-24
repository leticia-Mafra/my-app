import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Home from './src/Home';
import Jogo from './src/Jogo';
import Jogo2 from './src/Jogo2';
import EscolherPalavra from './src/EscolherPalavra';
import JogoMemoria from './src/JogoMemoria';

export default function App() {
  const [players, setPlayers] = useState({ player1: "", player2: "" });
  const [currentPlayer, setCurrentPlayer] = useState("player1");
  const [screen, setScreen] = useState("home");
  const [palavraEscolhida, setPalavraEscolhida] = useState(null);

  const changeScreen = (newScreen, players) => {
    setPlayers(players);
    setCurrentPlayer("player1");
    setScreen(newScreen);
  };

  return (
    <View style={styles.container}>
      {screen === "home" && (
        <Home
          changeScreen={changeScreen}
          setPalavraEscolhida={setPalavraEscolhida}
        />
      )}
      {screen === "jogo" && (
        <Jogo
          changeScreen={changeScreen}
          currentPlayer={currentPlayer}
          players={players}
          setCurrentPlayer={setCurrentPlayer}
        />
      )}
      {screen === "Jogo2" && (
        <Jogo2
          changeScreen={changeScreen}
          currentPlayer={currentPlayer}
          players={players}
          setCurrentPlayer={setCurrentPlayer}
          palavra={palavraEscolhida}
        />
      )}
      {screen === "JogoMemoria" && (
        <JogoMemoria
          changeScreen={changeScreen}
          currentPlayer={currentPlayer}
          players={players}
          setCurrentPlayer={setCurrentPlayer}
        />
      )}
      {screen === "escolherPalavra" && (
        <EscolherPalavra
          onPalavraEscolhida={setPalavraEscolhida}
          changeScreen={changeScreen}
        />
      )}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});