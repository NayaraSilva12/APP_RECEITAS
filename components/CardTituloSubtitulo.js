import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function CardTituloSubtitulo({ title, subtitle }) {
    return (
        <View >
            <Text style={styles.title}>{title}
                <Text style={styles.titlesegundaparte}> Calculator</Text>
            </Text>
            <Text style={styles.subtitle}>{subtitle}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
   
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        color: "#FFA500",
        padding: 10,
        textAlign: 'center'
    },
    
    titlesegundaparte: {
        color:'green'
    }
    ,
    subtitle: {
        fontSize: 25,
        color: '#555',
        textAlign: 'center'
    },
});
