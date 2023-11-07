import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ListScreen from '/src/ListScreen';
import EditListScreen from '/src/EditListScreen';
import ItemListScreen from '/src/ItemListScreen';
import EditItemScreen from '/src/EditItemScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="List">
        <Stack.Screen name="List" component={ListScreen} />
        <Stack.Screen name="EditList" component={EditListScreen} />
        <Stack.Screen name="ItemList" component={ItemListScreen} />
        <Stack.Screen name="EditItem" component={EditItemScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
