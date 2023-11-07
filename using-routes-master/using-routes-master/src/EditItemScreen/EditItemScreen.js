import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

const EditItemScreen = ({ route }) => {
  const { item } = route.params;
  const [itemName, setItemName] = useState(item.name);

  const handleSave = () => {
    const updatedItem = { ...item, name: itemName, lastUpdated: new Date() };
    // Atualiza o item com as alterações
  };

  return (
    <View>
      <TextInput
        value={itemName}
        onChangeText={setItemName}
        placeholder="Nome do Item"
      />
      <TouchableOpacity onPress={handleSave}>
        <Text>Salvar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default EditItemScreen;
