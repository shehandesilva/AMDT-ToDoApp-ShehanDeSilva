import React from 'react';
import { View, Text, StyleSheet, TextInput, Image,Button,Pressable } from 'react-native';

function MainScreen() {
    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <View style={{ flex: 1 }}>
                    <Text style={styles.textLine1}>Good Morning,</Text>
                    <Text style={styles.textLine2}>Shehan</Text>
                </View>
                <Image source={require('../assets/iconbig.png')} style={styles.image} />
            </View>
            <View style={styles.buttonContainer}>
                <TextInput style={styles.inputContainer} placeholder="TO DO?" />
                <Pressable style={styles.button}>
                    <Text style={styles.buttonText}>+</Text>
                </Pressable>
            </View>
        </View>
    );
}

export default MainScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 26,
    },
    textLine1: {
        marginTop:15,
        fontSize: 38,
        color: '#F5FCFF',
        textAlign: 'left',
        width: '100%',
    },
    textLine2: {
        fontSize: 38,
        color: '#F5FCFF',
        textAlign: 'left',
        width: '100%',
    },
    inputContainer: {
        borderRadius: 8,
        padding: 12,
        backgroundColor: '#3F3F3F',
        width: '90%',
        marginRight: 10,
        justifyContent: 'flex-start',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 15,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    image: {
        width: 70,
        height: 70,
        resizeMode: 'contain',
        marginTop: 15,
    },
    button: {
        marginTop:0,
        borderRadius:8,
        backgroundColor: '#F5FCFF',
        paddingHorizontal:16,
        paddingVertical:9,
    },
    buttonText: {
        color: '#3F3F3F',
        textAlign: 'center',
        fontSize: 20,
    },
});



