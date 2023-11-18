import {View,Text,StyleSheet} from "react-native";
function Todos() {
    return(
        <View style={styles.screen}>
            <View style={styles.container}>
                <Text>Testing</Text>
            </View>
        </View>
    )
}

export default Todos;

const styles = StyleSheet.create({
    screen: {
      flex:1,
    },
    container:{
        justifyContent:'center',
        marginTop:7,
        marginLeft:7,
        marginRight:7,
        marginBottom:7,
        borderRadius: 7,
        backgroundColor: '#1BBD5B',
        height:250,
        width:160,
        margin:15,
    }
})