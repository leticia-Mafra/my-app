import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet,View} from 'react-native';
import Home from './src/Home';
import Jogo from './src/Jogo';
import Jogo2 from './src/Jogo2';
import Jogo3 from './src/Jogo3';



export default function App() {

  const[player1, setPlayer1]= useState("");
  const[player2, setPlayer2]= useState("");
  const[screen, setScreen] = useState("home")
  

  const checkScreen = (checkScreen) => checkScreen === screen;

  const setPlayers = (nome1, nome2) => {
    setPlayer1(nome1);
    setPlayer2(nome2);
  }

 const changeScreen = (newScreen)=> setScreen(newScreen);
  

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {checkScreen("home") &&(
       <Home 
      mudarNomeJogadores={setPlayers}
      changeScreen={changeScreen}/>
    )}
      {checkScreen("jogo") &&(
      <Jogo changeScreen={changeScreen}/>
    )}
    {checkScreen("jogo2") &&(
      <Jogo2 changeScreen={changeScreen}/>
    )}
    {checkScreen("Jogo3") &&(
      <Jogo3 changeScreen={changeScreen}/>
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
