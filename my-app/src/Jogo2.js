import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

export default function JogoForca(props) {
  const [palavra, setPalavra] = useState('');
  const [letra, setLetra] = useState('');
  const [tentativas, setTentativas] = useState(6);
  const [letrasUsadas, setLetrasUsadas] = useState([]);
  const [vencedor, setVencedor] = useState(null);
  const [inputVisivel, setInputVisivel] = useState(false);
  const [palavraEscolhida, setPalavraEscolhida] = useState('');

  useEffect(() => {
    if (vencedor === 'vitoria') {
      Alert.alert('Parabéns!', 'Você venceu o jogo!');
    } else if (vencedor === 'derrota') {
      Alert.alert('Fim de jogo', `A palavra era: ${palavra}`);
    }
  }, [vencedor, palavra]);

  const iniciarJogo = () => {
    setVencedor(null);
    setTentativas(6);
    setLetrasUsadas([]);
    setLetra('');
    setInputVisivel(true);
  };

  const tentarLetra = () => {
    if (letra && !letrasUsadas.includes(letra)) {
      setLetrasUsadas([...letrasUsadas, letra]);

      if (!palavra.includes(letra)) {
        setTentativas(tentativas - 1);
      }

      if (!palavra.split('').some((char) => !letrasUsadas.includes(char))) {
        setVencedor('vitoria');
      }

      if (tentativas === 1 && vencedor !== 'vitoria') {
        acabei();
      }
    }
  };

  const acabei = () => {
    if (palavra.split('').every(char => char === ' ' || letrasUsadas.includes(char))) {
      setVencedor('vitoria');
    } else {
      setVencedor('derrota');
    }
  };

  const escolherPalavra = () => {
    setPalavra(palavraEscolhida.toLowerCase());
    setInputVisivel(false);
    setPalavraEscolhida('');
  };

  return (
    <View style={styles.container}>
      <View style={styles.instrucoes}>
        <Text style={styles.Passos}>
          1- Digite uma palavra no espaço "Escolha uma palavra"
          {'\n'}
          2- Clique no botão "Escolher"
          {'\n'}
          3- Clique no botão "Iniciar Jogo"
          {'\n'}
          4- Durante o jogo você colocará uma letra na caixinha "Digite uma letra"
          {'\n'}
          5- Clique no botão "Tentar Letra", e assim vai seguindo o jogo
          {'\n'}
          6-Por fim, quando acertar todas as letra, clique no botao "Acabei".
        </Text>
      </View>

      <Text style={styles.status}>Tentativas restantes: {tentativas}</Text>
      <Text style={styles.palavraEscondida}>
        {palavra
          .split('')
          .map((char) => (letrasUsadas.includes(char) ? char : '_'))
          .join(' ')}
      </Text>

      {inputVisivel ? (
        <TextInput
          style={styles.input}
          placeholder="Digite uma letra"
          maxLength={1}
          onChangeText={(text) => setLetra(text.toLowerCase())}
          value={letra}
        />
      ) : (
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Escolha uma palavra"
            onChangeText={(text) => setPalavraEscolhida(text.toLowerCase())}
            value={palavraEscolhida}
          />
          <Button title="Escolher" onPress={escolherPalavra} style={styles.escolherBotao} />
        </View>
      )}

      <View style={styles.buttonsContainer}>
        <Button title="Tentar Letra" onPress={tentarLetra} />
        <Button title="Iniciar Jogo" onPress={iniciarJogo} />
        <Button title="Voltar" onPress={() => props.changeScreen("home")} />
        <Button title="Acabei" onPress={acabei} />
      </View>

      {vencedor === 'vitoria' && (
        <Text style={styles.acertou}>Vitória!</Text>
      )}
      {vencedor === 'derrota' && (
        <Text style={styles.acertou}>Derrota!</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  instrucoes: {
    backgroundColor: '#cacae2',
    padding: 10,
    borderRadius: 10,
    marginBottom: 20,
  },
  escolherBotao: {
    marginLeft: 10,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '100%',
    marginTop: 20,
  },
  Passos: {
    fontSize: 16,
  },
  status: {
    fontSize: 24,
    marginBottom: 20,
  },
  palavraEscondida: {
    fontSize: 36,
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
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
  acertou: {
    fontSize: 24,
    color: 'green',
  },
});