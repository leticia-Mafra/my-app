import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function NomeJogador({ mudarNomeJogadores, changeScreen, nextScreen }) {

  const [player1, setPlayer1] = useState("");
  const [player2, setPlayer2] = useState("");

  
  const handleClickJogar = (event) => {

    if (!player1 && !player2) {
      alert("Digite os nomes dos players para seguir");
    }
    else if (!player1) {
      alert("Digite o nome do player 1");
    } else if (!player2) {
      alert("Digite o nome do player 2");
    } else {
      alert(player1 + " X " + player2);
      if (mudarNomeJogadores && nextScreen) {
        mudarNomeJogadores(player1, player2);
        changeScreen(nextScreen);
      }
    }
  }

  const handleClickVoltar = () => {
    changeScreen("Home");
  }

  return (
    <View style={styles.container}>
        <View style={styles.background}></View>
      <Text>Nome: {player1} </Text>
      <TextInput style={styles.input} placeholder='Player 1' onChangeText={setPlayer1} />

      <Text>Nome: {player2} </Text>
      <TextInput style={styles.input} placeholder='Player 2' onChangeText={setPlayer2} />

      <Button title='Jogar' onPress={handleClickJogar} 
      style={styles.Button}/>

      <Button title='Voltar para o menu' onPress={handleClickVoltar} 
      style={styles.Button}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 5
  },
  input: {
    borderWidth: 1, 
    borderColor: '#000', 
    padding: 1,
    backgroundColor: '#fff',
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
  Button: {
    backgroundColor: '#4a148c',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 10,
  },

});