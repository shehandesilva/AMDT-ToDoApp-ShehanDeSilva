import React from 'react';
import { View, Text, StyleSheet, TextInput, Image,Button,Pressable } from 'react-native';
import Todos from "../Component/ToDo";
function MainScreen() {
    const todos = [
        {
            id: 1,
            description: 'I\'ve got a research paper on climate change. Gonna outline key points, find 5 sources, and draft the intro.',
            date: 'Aug 12,2023',
            profilePic: require('../assets/iconbig.png'), // Replace with your profile picture
        },
        {
            id: 2,
            description: 'Exams are coming, so I\'m reviewing class notes, making flashcards, and dedicating study time for each subject.',
            date: 'Aug 12,2023',
            profilePic: require('../assets/iconbig.png'), // Replace with another profile picture
        },
        {
            id: 3,
            description: 'Group project: coordinating meeting time, prepping agenda, and sharing research with the team.',
            date: 'Aug 12,2023',
            profilePic: require('../assets/iconbig.png'), // Replace with another profile picture
        },
        {
            id: 4,
            description: 'Summer internship hunt: updating resume, researching companies, and crafting personalized cover letters.',
            date: 'Aug 12,2023',
            profilePic: require('../assets/iconbig.png'), // Replace with another profile picture
        },

    ];
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
                <TextInput style={styles.inputContainer} placeholder="TO TO DO?" />
                <Pressable style={styles.button}>
                    <Text style={styles.buttonText}>+</Text>
                </Pressable>
            </View>
            <Text style={styles.listtext}>Today's To DO.</Text>
            <View style={styles.row}>
                <Todos
                    description={todos[0].description}
                    date={todos[0].date}
                    profilePic={todos[0].profilePic}
                />
                <Todos
                    description={todos[1].description}
                    date={todos[1].date}
                    profilePic={todos[1].profilePic}
                />
            </View>
            <View style={styles.row}>
                <Todos
                    description={todos[2].description}
                    date={todos[2].date}
                    profilePic={todos[2].profilePic}
                />
                <Todos
                    description={todos[3].description}
                    date={todos[3].date}
                    profilePic={todos[3].profilePic}
                />
            </View>
        </View>
    );
}

export default MainScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
    },
    textLine1: {
        marginTop:15,
        fontSize: 36,
        color: '#F5FCFF',
        textAlign: 'left',
        width: '100%',
    },
    textLine2: {
        fontSize: 36,
        color: '#F5FCFF',
        textAlign: 'left',
        width: '100%',
    },
    inputContainer: {
        borderRadius: 8,
        padding: 12,
        backgroundColor: '#3F3F3F',
        width: '80%',
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
        marginRight:3,
    },
    buttonText: {
        color: '#3F3F3F',
        textAlign: 'center',
        fontSize: 20,
    },
    listtext: {
        marginTop:14,
        marginBottom:10,
        color: '#F5FCFF',
        textAlign: 'left',
        fontSize: 24,
        marginLeft:5,
    },
});



