import { StyleSheet } from "react-native";
import { myColors } from "./Colors";

export const Styles = StyleSheet.create({
    btnBlue: {
        width: 65,
        height: 65,
        borderRadius: 18,
        justifyContent: "center",
        alignItems: "center",
        margin: 8,
        backgroundColor: myColors.blue
    },
    btnDark: {
        width: 65,
        height: 65,
        borderRadius: 18,
        justifyContent: "center",
        alignItems: "center",
        margin: 8,
        backgroundColor: myColors.dark
    },
    btnLight: {
        width: 65,
        height: 65,
        borderRadius: 18,
        justifyContent: "center",
        alignItems: "center",
        margin: 8,
        backgroundColor: myColors.light
    },
    btnGray: {
        width: 65,
        height: 65,
        borderRadius: 18,
        justifyContent: "center",
        alignItems: "center",
        margin: 8,
        backgroundColor: myColors.gray
    },
    smallTextLight: {
        fontSize: 32,
        color: myColors.white
    },
    smallTextDark: {
        fontSize: 32,
        color: myColors.black
    },
    row: {
        maxWidth: '100%',
        flexDirection: "row"
    },
    viewBottom: {
        position: "absolute",
        bottom: 10
    },
    screenFirstNumber: {
        fontSize: 96,
        color: myColors.gray,
        fontWeight: '200',
        alignSelf: "flex-end"
    },
    screenSecondNumber: {
        fontSize: 40,
        color: myColors.gray,
        fontWeight: '200',
        alignSelf: "flex-end"
    }
})