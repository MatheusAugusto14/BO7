import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const EasterEggsScreen = () => {
    const easterEggs = [
        'Easter Egg 1: Do a dance!',
        'Easter Egg 2: Unlock a secret feature!',
        'Easter Egg 3: Surprise message!',
    ];

    return (
        <View style={styles.container}>
            {easterEggs.map((egg, index) => (
                <Text key={index} style={styles.egg}>{egg}</Text>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    egg: {
        fontSize: 20,
        margin: 10,
    },
});

export default EasterEggsScreen;