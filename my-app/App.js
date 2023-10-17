import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet,View} from 'react-native';
import Home from './src/Home';
import NomeJogador from './src/NomeJogador';
import Jogo from './src/Jogo';
import Jogo2 from './src/Jogo2';
import Jogo3 from './src/Jogo3';
import EscolherPalavra from './src/EscolherPalavra';



export default function App() {

  const [player1, setPlayer1] = useState("");
  const [player2, setPlayer2] = useState("");
  const [screen, setScreen] = useState("Home");
  const [nextScreen, setNextScreen] = useState("");
  const [palavra, setPalavra] = useState("");

  const checkScreen = (screenName) => screenName === screen;
  

  const setJogadores = (nome1, nome2) => {
    setPlayer1(nome1);
    setPlayer2(nome2);
  }

  const mudarPalavra = (palavra1) => {
    setPalavra(palavra1)
  }
  {checkScreen("Jogo") && (<Jogo
    changeScreen={changeScreen}
    player1={player1}
    player2={player2}
    nextScreen="Home" 
  />)}

  const changeScreen = (newScreen) => setScreen(newScreen)

  

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {checkScreen("NomeJogador") &&
        (<NomeJogador
          mudarNomeJogadores={setJogadores}
          nextScreen={nextScreen}
          changeScreen={changeScreen}
        />
        )}
      {checkScreen("EscolherPalavra") && (<EscolherPalavra
        changeScreen={changeScreen}
        mudarPalavra={mudarPalavra}
      />)}
      {checkScreen("Jogo") && (<Jogo
        changeScreen={changeScreen}
        nextScreen={nextScreen}
        player1={player1}
        player2={player2}
      />)}
      {checkScreen("Home") && (<Home
        changeScreen={changeScreen}
        setNextScreen={setNextScreen}
      />)}
      {checkScreen("Jogo3") && (<Jogo3
        changeScreen={changeScreen}
        newScreen={nextScreen}
        player1={player1}
        player2={player2}
      />)}
      {checkScreen("Jogo2") && (<Jogo2
        changeScreen={changeScreen}
        palavra={palavra}
      />)}
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
    width: "80%",
    height: 20,
    borderStyle: "solid",
    boderColor: "black",
    borderWidth: 1,
  },
});