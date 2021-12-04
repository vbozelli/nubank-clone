import { Platform, StatusBar, StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        alignItems: "center",
        paddingTop: 32,
        paddingHorizontal: 0,
        paddingBottom: 32,
        backgroundColor: "#8B10AE"
    },
    title: {
        color: "#FFF",
        fontSize: 18,
        fontWeight: "bold",
        marginLeft: 8
    },
    top: {
        alignItems: "center",
        flexDirection: "row",
        marginBottom: 10
    },
    androidSafeArea: {
        backgroundColor: "#8B10AE",
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    }
});