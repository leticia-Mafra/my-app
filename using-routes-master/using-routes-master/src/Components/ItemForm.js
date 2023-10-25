import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';

const ItemForm = ({ onSubmit }) => {
  const [nome, setNome] = useState('');

  const handlePress = () => {
    onSubmit(nome);
    setNome('');
  }

  return (
    <View>
      <TextInput
        placeholder="Nome do Item"
        value={nome}
        onChangeText={setNome}
      />
      <Button title="Adicionar Item" onPress={handlePress} />
    </View>
  );
}

export default ItemForm;
