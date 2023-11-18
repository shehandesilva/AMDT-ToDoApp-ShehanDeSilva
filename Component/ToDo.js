import { View, Text, StyleSheet, Image } from "react-native";

function Todos({ description, date, profilePic }) {
    return (
        <View style={styles.screen}>
            <View style={styles.container}>
                <Text style={styles.description}>{description}</Text>
                <Text style={styles.date}>{date}</Text>
                <Image source={profilePic} style={styles.profilePic} />
            </View>
        </View>
    );
}

export default Todos;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
    },
    container: {
        justifyContent: "center",
        marginTop: 7,
        marginLeft: 7,
        marginRight: 7,
        marginBottom: 7,
        borderRadius: 7,
        backgroundColor: "#1BBD5B",
        height: 270,
        width: 160,
        margin: 15,

    },
    description: {
        marginLeft:10,
        fontSize: 15,
        color: 'white',
        textAlign:'left',
    },
    date: {
        marginTop:80,
        marginLeft:10,
        fontSize: 12,
        textAlign: "left",
        color: '#0A5829',
    },
    profilePic: {
        width: 40,
        height: 40,
        resizeMode: "cover",
        marginTop: 10,
        marginLeft:10,
    },
});
