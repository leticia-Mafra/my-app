import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';

const ItemListScreen = ({ route, navigation }) => {
  const { list } = route.params;

  const handleEditItem = (item) => {
    navigation.navigate('EditItem', { item });
  };

  const handleDeleteItem = (itemId) => {
    const updatedItems = list.items.filter((item) => item.id !== itemId);
    const updatedList = { ...list, items: updatedItems, lastUpdated: new Date() };
    // Atualiza a lista com as alterações
  };

  return (
    <View>
      <Text>Itens da Lista:</Text>
      <FlatList
        data={list.items}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View>
            <TouchableOpacity onPress={() => handleEditItem(item)}>
              <Text>{item.name}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleDeleteItem(item.id)}>
              <Text>Excluir Item</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

export default ItemListScreen;
