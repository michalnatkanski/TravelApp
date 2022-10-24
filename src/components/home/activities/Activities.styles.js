import { StyleSheet } from "react-native";
import { colors } from "../../../assets/styles";

export default StyleSheet.create({
    activitiesItemsWrapper: {
        paddingVertical: 20,
    },
    activityItemWrapper: {
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginRight: 20,
    },
    activityItemImage: {
        width: 36,
    },
    activityItemText: {
        marginTop: 5,
        fontFamily: 'Lato-Bold',
        fontSize: 14,
        color: colors.MAIN_COLORS.GRAY
    },
})