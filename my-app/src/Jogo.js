import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';

export default function JogoDaVelha({ changeScreen }) {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  const handleClick = (index) => {
    const squares = [...board];

    if (calculateWinner(squares) || squares[index]) {
      return;
    }

    squares[index] = xIsNext ? 'X' : 'O';

    setBoard(squares);
    setXIsNext(!xIsNext);
  };

  const renderSquare = (index) => {
    return (
      <TouchableOpacity
        style={styles.square}
        onPress={() => handleClick(index)}
      >
        <Text style={styles.squareText}>{board[index]}</Text>
      </TouchableOpacity>
    );
  };

  const winner = calculateWinner(board);
  let status;

  if (winner) {
    status = `Vencedor: ${winner}`;
    Alert.alert('Fim de Jogo', `O jogador ${winner} venceu!`);
  } else if (board.every((square) => square)) {
    status = 'Velha!';
    Alert.alert('Fim de Jogo', 'O jogo empatou!');
  } else {
    status = `Próximo jogador: ${xIsNext ? 'X' : 'O'}`;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.status}>{status}</Text>
      <View style={styles.board}>
        {Array.from({ length: 3 }, (_, i) => (
          <View key={i} style={styles.boardRow}>
            {Array.from({ length: 3 }, (_, j) =>
              renderSquare(i * 3 + j)
            )}
          </View>
        ))}
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => changeScreen('home')}
      >
        <Text style={styles.buttonText}>Voltar</Text>
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
  status: {
    fontSize: 24,
    marginBottom: 20,
  },
  board: {
    marginBottom: 20,
  },
  boardRow: {
    flexDirection: 'row',
  },
  square: {
    width: 60,
    height: 60,
    borderWidth: 1,
    borderColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  squareText: {
    fontSize: 24,
  },
  button: {
    backgroundColor: '#007BFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }

  return null;
}