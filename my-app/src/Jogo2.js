import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

<<<<<<< Updated upstream
export default function Jogo2({ palavra }) {
=======
export default function Jogo2(props) {
  const [palavra, setPalavra] = useState('');
>>>>>>> Stashed changes
  const [letra, setLetra] = useState('');
  const [tentativas, setTentativas] = useState(6);
  const [letrasUsadas, setLetrasUsadas] = useState([]);
  const [vencedor, setVencedor] = useState(null);

  useEffect(() => {
    if (vencedor === 'vitoria') {
      Alert.alert('Parabéns!', 'Você venceu o jogo!');
    } else if (vencedor === 'derrota') {
      Alert.alert('Fim de jogo', `A palavra era: ${palavra}`);
    }
  }, [vencedor, palavra]);

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

  return (
    <View style={styles.container}>
      <Text style={styles.status}>Tentativas restantes: {tentativas}</Text>
      <Text style={styles.palavraEscondida}>
        {palavra
          .split('')
          .map((char) => (letrasUsadas.includes(char) ? char : '_'))
          .join(' ')}
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Digite uma letra"
        maxLength={1}
        onChangeText={(text) => setLetra(text.toLowerCase())}
        value={letra}
      />

      <Button title="Tentar Letra" onPress={tentarLetra} />

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
  status: {
    fontSize: 24,
    marginBottom: 20,
  },
  palavraEscondida: {
    fontSize: 36,
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