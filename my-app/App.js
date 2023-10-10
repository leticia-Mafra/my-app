import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet,View} from 'react-native';
import React, { useState } from 'react';
import Home from './src/Home';
import Jogo from './src/Jogo';
import Jogo2 from './src/Jogo2';
import EscolherPalavra from './EscolherPalavra';
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
      {!palavraEscolhida && (
        <EscolherPalavra onPalavraEscolhida={setPalavraEscolhida} />
      )}
      {palavraEscolhida && (
        <JogoForcaSimples palavra={palavraEscolhida} />
      )}
      <StatusBar style="auto" />
      {screen === "home" && <Home changeScreen={changeScreen} />}
      {screen === "jogo" && (
        
        <Jogo
          changeScreen={changeScreen}
          currentPlayer={currentPlayer}
          players={players}
          setCurrentPlayer={setCurrentPlayer}
        />
      )}
      {screen === "jogo2" && (
        <Jogo2
          changeScreen={changeScreen}
          currentPlayer={currentPlayer}
          players={players}
          setCurrentPlayer={setCurrentPlayer}
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
  input: {
    width :"80%",
    height: 20,
    borderStyle: "solid",
    borderColor: "black",
    borderWidth: 1,
  },

});
