import { useState } from 'react';
import { StyleSheet, Text, View ,TextInput ,Button} from 'react-native';

export default function Home({mudarNomeJogadores, changeScreen}) {

  const[player1, setPlayer1]= useState("");
  const[player2, setPlayer2]= useState("");

  function handleClick() {
    alert(player1 + " x " + player2);
    mudarNomeJogadores(player1, player2);
    changeScreen("jogo");
  }
  function handleClick2() {
    alert(player1 + " x " + player2);
    mudarNomeJogadores(player1, player2);
    changeScreen("jogo2");
  }
  function handleClick3() {
    alert(player1 + " x " + player2);
    mudarNomeJogadores(player1, player2);
    changeScreen("JogoMemoria");
  }

  

  return (
    <View style={styles.container}>
     
      <Text>Nome Player 1: {player1}</Text>
      <TextInput
      placeholder="Player 1" 
       style={styles.input} 
      onChangeText={setPlayer1}/>

      <Text>Nome Player 2: {player2}</Text>
      <TextInput 
      style={styles.input} 
      placeholder="Player 2" 
      onChangeText={setPlayer2}/>

      <Button title="Jogo da Velha" onPress={handleClick}/>
      <Button title="Jogo da Forca" onPress={handleClick2}/>
      <Button title="Jogo da Memoria" onPress={handleClick3}/>
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