import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function Jogo3() {
  const [cards, setCards] = useState([]);
  const [selectedCards, setSelectedCards] = useState([]);
  const [matchedPairs, setMatchedPairs] = useState(0);

  useEffect(() => {
    const animais = [
      'Cachorro', 'Gato', 'Pato', 'Leão', 'Elefante',
      'Girafa', 'Cavalo', 'Gorila', 'Panda', 'Tigre',
      'Baleia', 'Pinguim', 'Canguru', 'Coala', 'Macaco',
      'Esquilo', 'Rato', 'Urso', 'Rinoceronte', 'Camelo',
      'Zebra', 'Crocodilo', 'Guepardo', 'Hipopótamo', 'PandaVermelho'
    ];

    let allCards = animais.concat([...animais]);
    allCards.sort(() => Math.random() - 0.5);

    allCards = allCards.map((animal, index) => ({
      id: index,
      name: animal,
      flipped: false,
    }));

    setCards(allCards);
  }, []);

  const handleCardPress = (card) => {
    if (selectedCards.length < 2 && !selectedCards.includes(card) && !card.flipped) {
      const updatedCards = cards.map((c) =>
        c.id === card.id ? { ...c, flipped: true } : c
      );

      setCards(updatedCards);
      setSelectedCards([...selectedCards, card]);
    }
  };

  useEffect(() => {
    if (selectedCards.length === 2) {
      setTimeout(() => {
        const [firstCard, secondCard] = selectedCards;

        if (firstCard.name === secondCard.name) {
          setMatchedPairs(matchedPairs + 1);
        } else {
          const updatedCards = cards.map((c) =>
            c.id === firstCard.id || c.id === secondCard.id ? { ...c, flipped: false } : c
          );
          setCards(updatedCards);
        }

        setSelectedCards([]);
      }, 1000);
    }
  }, [selectedCards, cards, matchedPairs]);

  return (
    <View style={styles.container}>
      <View style={styles.grid}>
        {cards.map((card) => (
          <TouchableOpacity
            key={card.id}
            style={[
              styles.card,
              card.flipped && styles.flippedCard,
              selectedCards.includes(card) && styles.selectedCard,
            ]}
            onPress={() => handleCardPress(card)}
            disabled={card.flipped || selectedCards.length === 2}
          >
            <Text style={styles.cardText}>{card.flipped ? card.name : '👀'}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <Text style={styles.score}>Pares encontrados: {matchedPairs}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  card: {
    width: 80,
    height: 80,
    margin: 5,
    backgroundColor: '#3498db',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  flippedCard: {
    backgroundColor: '#2ecc71',
  },
  selectedCard: {
    backgroundColor: '#e74c3c',
  },
  cardText: {
    fontSize: 16,
  },
  score: {
    fontSize: 20,
    marginTop: 20,
  },
});
