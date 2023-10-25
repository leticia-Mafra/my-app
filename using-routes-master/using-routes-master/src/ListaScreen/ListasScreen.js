import React, { useState, useEffect } from 'react';
import { View, FlatList, Button, Alert } from 'react-native';
import ListaForm from '../components/ListaForm';

const ListasScreen = () => {
  const [listas, setListas] = useState([]);
  const [editingLista, setEditingLista] = useState(null);

  const adicionarLista = (nome) => {
    const novaLista = { id: Date.now(), nome, itens: [], ultimaAlteracao: Date.now() };
    setListas([...listas, novaLista]);
  }

  const editarLista = (lista) => {
    setEditingLista(lista);
  }

  const salvarEdicao = (nome) => {
    setListas(listas.map(item => (item.id === editingLista.id ? { ...item, nome, ultimaAlteracao: Date.now() } : item)));
    setEditingLista(null);
  }

  const excluirLista = (id) => {
    Alert.alert(
      'Confirmar Exclusão',
      'Tem certeza que deseja excluir esta lista?',
      [
        {
          text: 'Cancelar',
          style: 'cancel',
        },
        {
          text: 'Confirmar',
          onPress: () => {
            const novasListas = listas.filter(lista => lista.id !== id);
            setListas(novasListas);
          },
        },
      ],
      { cancelable: true }
    );
  }

  useEffect(() => {
    // Ordena a lista por data de última alteração
    setListas(listas.sort((a, b) => b.ultimaAlteracao - a.ultimaAlteracao));
  }, [listas]);

  return (
    <View>
      <FlatList
        data={listas}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 10 }}>
            {editingLista && editingLista.id === item.id ? (
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
                <Button title="Editar" onPress={() => editarLista(item)} />
              </>
            )}
            <Button title="Excluir" onPress={() => excluirLista(item.id)} />
          </View>
        )}
      />
      <ListaForm onSubmit={adicionarLista} />
    </View>
  );
}

export default ListasScreen;
