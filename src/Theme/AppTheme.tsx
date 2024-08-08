import { StyleSheet } from "react-native";
import { INPUT_COLOR, SECUNDARY_COLOR } from "../commons/constant";



//Gestionar los estilos
export const styles = StyleSheet.create({
    globalTitle: {
        color: SECUNDARY_COLOR,
        fontSize: 40,
        fontWeight: 'bold',
        paddingHorizontal: 25,
        paddingVertical: 15
    },
    titleHeaderBody: {
        fontSize: 27,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
    },
    textBody: {
        fontSize: 15
    },
    inputText: {
        backgroundColor: INPUT_COLOR,
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 10,
    },
    contentInput: {
        marginTop: 20,
        gap: 10,
        justifyContent: 'center'
    },
    button: {
        backgroundColor: '#007BFF',
        padding: 10,
        borderRadius: 5,
        margin: 5,
        alignItems: 'center',
    },
    text: {
        color: '#FFFFFF',
        fontSize: 16,
    },
    avatar1: {
        width: 200,
        height: 200,
    },
    avatar2: {
        width: 350,
        height: 200,
    }        
})