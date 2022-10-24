import { StyleSheet } from "react-native";
import { colors } from "../../../assets/styles";

export default StyleSheet.create({
    learnMoreItemsWrapper: {
        paddingVertical: 20,
    },
    learnMoreItem: {
        width: 170,
        height: 180,
        justifyContent: 'flex-end',
        marginRight: 20,
    },
    learnMoreItemImage: {
        borderRadius: 20,
    },
    learnMoreItemText: {
        fontFamily: 'Lato-Bold',
        fontSize: 18,
        color: colors.MAIN_COLORS.WHITE,
        marginHorizontal: 10,
        marginVertical: 20,
    },
})