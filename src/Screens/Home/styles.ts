import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

    header:{
        backgroundColor: '#0D0D0D',
        flex: 0.15,
        padding: 34,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row"
    },
    iconHeader:{
        color: "#4EA8DE",
    },
    textHeader:{
        color: "#5E60CE",
        fontSize: 40,
        fontWeight: "800"
    },

    container:{
        flex: 0.85,
        padding: 34,
        backgroundColor: "#242424"
    },

    form: {
        flexDirection: 'row'
        
    },
    input:{
        flex:1,
        marginRight: 12,
        height: 56,
        backgroundColor: "#333333",
        borderRadius: 5,
        color: "#FDFCFE",
        padding: 16,
        fontSize: 15
    },

    button:{
        backgroundColor: "#1E6F9F",
        height: 56,
        width: 56,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5,
        
    },

    circleButton: {
        borderWidth: 1,
        borderRadius: 20,
        borderColor: "white",
        width: 23,
        height: 23,
        justifyContent: "center",
        alignItems: "center"

    },

    textButton: {
        color:  "#FDFCFE",
        textAlign: 'center'
    },

    containerRegisters: {
        borderBottomWidth: 1,
        borderColor: "#808080"
    },

    registers: {
        marginTop: 15,
        flexDirection:"row",
        justifyContent:'space-between',
        marginBottom: 25
    },

    textRegisters: {
        color: "#4EA8DE",
        fontWeight: "400",
    },

    textRegisters2: {
        color: "#8284FA",
        fontWeight: "400"
    },

    viewEmpty: {
        alignItems: "center"
    },

    listEmptyText: {
        color:"#FDFCFE",
        textAlign: "center",
        fontSize: 14
    },

    viewList: {
        marginTop: 16
    }
})