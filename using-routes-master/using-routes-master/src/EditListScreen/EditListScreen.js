import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

const EditListScreen = ({ navigation, route }) => {
  const { id } = route.params;
  const [list, setList] = useState({ id, name: '', items: [], lastUpdated: new Date() });

  const handleSave = () => {
    // Implemente a lógica para salvar as alterações na lista
    // Atualize a lista com setLists([...lists]) se necessário
  };

  return (
    <View>
      <TextInput
        value={list.name}
        onChangeText={(text) => setList({ ...list, name: text, lastUpdated: new Date() })}
        placeholder="Nome da Lista"
      />
      <TouchableOpacity onPress={handleSave}>
        <Text>Salvar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default EditListScreen;
