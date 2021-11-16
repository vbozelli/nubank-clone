import { StyleSheet } from "react-native";

export default StyleSheet.create({
    qrCode: {
        alignSelf: "center",
        backgroundColor: "#FFF",
        overflow: "hidden",
        padding: 12,
    },
    navigation: {
        marginLeft: 16,
        marginRight: 16,
        marginTop: 32,
        borderTopWidth: StyleSheet.hairlineWidth,
        borderTopColor: "rgba(255, 255, 255, 0.8)"
    },
    navigationItem: {
        alignItems: "center",
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: "rgba(255, 255, 255, 0.8)",
        flexDirection: "row",
        padding: 16
    },
    navigationItemText: {
        color: "#FFF",
        fontSize: 15,
        marginLeft: 16
    },
    signoutButton: {
        alignItems: "center",
        borderColor: "rgba(255, 255, 255, 0.8)",
        borderRadius: 4,
        borderWidth: StyleSheet.hairlineWidth,
        justifyContent: "center",
        marginLeft: 16,
        marginRight: 16,
        marginTop: 16,
        padding: 12
    },
    signoutButtonText: {
        color: "#FFF",
        fontSize: 13,
        fontWeight: "bold"
    }
});