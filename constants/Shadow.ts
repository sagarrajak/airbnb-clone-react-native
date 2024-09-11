import { StyleSheet } from "react-native";

const defaultShadows = StyleSheet.create({
    basicShadow: {
        elevation: 5,
        shadowColor: "#000",
        shadowOpacity: 0.12,
        shadowRadius: 8,
        shadowOffset: {
            width:  1,
            height: 1
        }
    }
})

export default defaultShadows;