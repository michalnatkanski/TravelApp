import { StyleSheet } from "react-native";
import { colors } from "../../../assets/styles";

export default StyleSheet.create({
    discoverCategoriesWrapper: {
        flexDirection: 'row',
        marginTop: 20,
    },
    discoverCategoryText: {
        marginRight: 30,
        fontFamily: 'Lato-Regular',
        fontSize: 16,
        color: colors.MAIN_COLORS.GRAY
    },
})