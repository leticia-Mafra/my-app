import { useState } from 'react';
import { Text, View, Button, TextInput, StyleSheet } from 'react-native';

export default function ({
    changeScreen,
    mudarPalavra
}) {
    const handleClickJogar = () => {

        if (palavra.length != 0) {
            mudarPalavra(palavra)
            changeScreen("Jogo2")
        } else {
            alert("Digie um palavra para começar")
        }

    }

    const handleClickVoltar = () => {
        changeScreen("Home")
    }

    const [palavra, setPalavra] = useState("")

    return (
        <View style={styles.container}>
            <View style={styles.background}></View>
            <Text>
                Escolha uma palavra para a forca:
            </Text>
            <TextInput style={styles.input} placeholder='digite um palavra' onChangeText={setPalavra} />
            <Button title='Jogar' onPress={handleClickJogar} />
            <Button title='Voltar para o menu' onPress={handleClickVoltar} />

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 5
    },
    background: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: '#E6E6FA',
        zIndex: -1,
      },
    input: {
        borderWidth: 1, 
    borderColor: '#000',
        padding: 1,
        backgroundColor: '#fff',
    },

});