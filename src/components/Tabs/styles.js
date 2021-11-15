import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        height: 100,
        marginTop: 16
    },
    contentContainerStyle: {
        paddingLeft: 8,
        paddingRight: 8
    },
    tabItem: {
        height: 100,
        width: 100,
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        borderRadius: 3,
        marginLeft: 8,
        padding: 8,
        justifyContent: "space-between"
    },
    tabItemText: {
        color: "#FFF",
        fontSize: 13
    }
});