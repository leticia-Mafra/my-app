import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';

const ListScreen = ({ navigation }) => {
  const [lists, setLists] = useState([]);

  const handleAddList = () => {
    const newList = {
      id: Math.random().toString(), // Gera um ID único
      name: 'Nova Lista',
      items: [],
      lastUpdated: new Date(),
    };
    setLists([...lists, newList]);
  };

  const handleEditList = (id) => {
    navigation.navigate('EditList', { id });
  };

  const handleDeleteList = (id) => {
    const updatedLists = lists.filter((list) => list.id !== id);
    setLists(updatedLists);
  };

  return (
    <View>
      <Text>Listas:</Text>
      <FlatList
        data={lists}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View>
            <TouchableOpacity onPress={() => handleEditList(item.id)}>
              <Text>{item.name}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleDeleteList(item.id)}>
              <Text>Excluir Lista</Text>
            </TouchableOpacity>
          </View>
        )}
      />
      <TouchableOpacity onPress={handleAddList}>
        <Text>Adicionar Lista</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ListScreen;
