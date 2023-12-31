import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Button } from 'react-native';


const nomesAnimais = [
  'Leão', 'Tigre', 'Elefante', 'Rinoceronte', 'Gorila',
  'Zebra', 'Girafa', 'Crocodilo', 'Hipopótamo', 'Jacaré',
  'Urso', 'Raposa', 'Lobo', 'Guaxinim', 'Coala',
  'Canguru', 'Ornitorrinco', 'Tartaruga', 'Golfinho', 'Baleia',
  'Panda', 'Hiena', 'Camelo', 'Foca', 'Pinguim'
];

export default function Jogo3({ changeScreen, player1, player2 } ) {
  const [cards, setCards] = useState([]);
  const [selectedCards, setSelectedCards] = useState([]);
  const [matches, setMatches] = useState(0);

  useEffect(() => {
    const shuffledNomesAnimais = shuffleArray(nomesAnimais);
    const cardPairs = shuffledNomesAnimais.concat(shuffledNomesAnimais);
    const shuffledCards = shuffleArray(cardPairs.map((nome, index) => ({ id: index, nome, flipped: false })));
    setCards(shuffledCards);
  }, []);

  useEffect(() => {
    if (selectedCards.length === 2) {
      const [firstCard, secondCard] = selectedCards;
      if (firstCard.nome === secondCard.nome) {
        setMatches(matches + 1);
        setSelectedCards([]);
      } else {
        setTimeout(() => {
          setCards(cards.map((card) => {
            if (card.id === firstCard.id || card.id === secondCard.id) {
              return { ...card, flipped: false };
            }
            return card;
          }));
          setSelectedCards([]);
        }, 1000);
      }
    }
  }, [selectedCards, matches, cards]);

  const handleCardClick = (card) => {
    if (selectedCards.length < 2 && !card.flipped) {
      setSelectedCards([...selectedCards, card]);
      setCards(cards.map((c) => (c.id === card.id) ? { ...c, flipped: true } : c));
    }
  };

  const shuffleArray = (array) => {
    const shuffledArray = array.slice();
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
  };

  return (
    <View style={styles.container}>
      <View style={styles.background}></View>
      <Text style={styles.matchesText}>Acertos: {matches}</Text>
      <View style={styles.cardContainer}>
        {cards.map((card) => (
          <TouchableOpacity
            key={card.id}
            style={[
              styles.card,
              { backgroundColor: card.flipped ? '#8e44ad' : '#4a148c' },
            ]}
            onPress={() => handleCardClick(card)}
          >
            {card.flipped ? (
              <Text style={styles.cardText}>{card.nome}</Text>
            ) : (
              <Text style={styles.cardBack}>🐾</Text>
            )}
          </TouchableOpacity>
        ))}
      </View>
      
      <Button title="Voltar" onPress={() => changeScreen("Home")}
      style={styles.voltarButton} />
      <Text style={styles.Button}></Text>
      <Text>Jogadores: {player1} x {player2}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  matchesText: {
    fontSize: 20,
    marginBottom: 10,
    color: '#8e44ad',
  },
  Button: {
    backgroundColor: '#4a148c',
   
  },
  background: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: ' #30BA4E ',
    zIndex: -1,
  },
  voltarButton: {
    backgroundColor: '#165524 ', 
    marginTop: 10, 
  },
  cardContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  card: {
    width: 100,
    height: 100,
    margin: 5,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: '#8e44ad',
  },
  cardText: {
    fontSize: 18,
    color: '#ffffff',
  },
  cardBack: {
    fontSize: 40,
  },
});