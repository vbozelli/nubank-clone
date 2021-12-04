import { StyleSheet } from "react-native";

export default StyleSheet.create({
    balanceTitle: {
        color: "#999",
        fontSize: 14
    },
    balance: {
        color: "#333",
        fontSize: 32,
        marginTop: 4
    },
    container: {
        backgroundColor: "#FFF",
        borderRadius: 4,
        flex: 1,
        height: '100%',
        justifyContent: "center",
        left: 0,
        maxHeight: 400,
        marginLeft: 16,
        marginRight: 16,
        position: "absolute",
        right: 0,
        top: 0,
        zIndex: 1
    },
    content: {
        flex: 1,
        justifyContent: "center",
        marginLeft: 32
    },
    header: {
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 32
    },
    footer: {
        backgroundColor: "#EEE",
        borderRadius: 4,
        padding: 32
    },
    transfer: {
        color: "#333",
        fontSize: 12
    }
});