import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';

const ListaForm = ({ onSubmit }) => {
  const [nome, setNome] = useState('');

  const handlePress = () => {
    onSubmit(nome);
    setNome('');
  }

  return (
    <View>
      <TextInput
        placeholder="Nome da Lista"
        value={nome}
        onChangeText={setNome}
      />
      <Button title="Adicionar Lista" onPress={handlePress} />
    </View>
  );
}

export default ListaForm;
