import React, { useState, useEffect } from 'react';
import { View, FlatList, Button, Alert } from 'react-native';
import ItemForm from '../components/ItemForm';

const ItensScreen = ({ route }) => {
  const { lista } = route.params;
  const [itens, setItens] = useState([]);
  const [editingItem, setEditingItem] = useState(null);

  const adicionarItem = (nome) => {
    const novoItem = { id: Date.now(), nome, ultimaAlteracao: Date.now() };
    setItens([...itens, novoItem]);
  }

  const editarItem = (item) => {
    setEditingItem(item);
  }

  const salvarEdicao = (nome) => {
    setItens(itens.map(item => (item.id === editingItem.id ? { ...item, nome, ultimaAlteracao: Date.now() } : item)));
    setEditingItem(null);
  }

  const excluirItem = (id) => {
    Alert.alert(
      'Confirmar Exclusão',
      'Tem certeza que deseja excluir este item?',
      [
        {
          text: 'Cancelar',
          style: 'cancel',
        },
        {
          text: 'Confirmar',
          onPress: () => {
            const novosItens = itens.filter(item => item.id !== id);
            setItens(novosItens);
          },
        },
      ],
      { cancelable: true }
    );
  }

  useEffect(() => {
    // Ordena os itens por data de última alteração
    setItens(itens.sort((a, b) => b.ultimaAlteracao - a.ultimaAlteracao));
  }, [itens]);

  return (
    <View>
      <FlatList
        data={itens}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 10 }}>
            {editingItem && editingItem.id === item.id ? (
              <>
                <TextInput
                  value={item.nome}
                  onChangeText={setNome}
                />
                <Button title="Salvar" onPress={() => salvarEdicao(item.nome)} />
              </>
            ) : (
              <>
                <Text>{item.nome}</Text>
                <Button title="Editar" onPress={() => editarItem(item)} />
              </>
            )}
            <Button title="Excluir" onPress={() => excluirItem(item.id)} />
          </View>
        )}
      />
      <ItemForm onSubmit={adicionarItem} />
    </View>
  );
}

export default ItensScreen;
