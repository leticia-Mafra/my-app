import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ListasScreen from './src/ListaScreen/ListasScreen';
import ItensScreen from './src/ListaScreen/ItensScreen';
import HomeScreen from './src/HomeScreen';
import UserData from './src/UserData';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Listas" component={ListasScreen} />
        <Stack.Screen name="Itens" component={ItensScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="UserData" component={UserData} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
