import React from "react";
import { View, Text } from "react-native";
import styles from './Categories.styles';
import { colors } from "../../../assets/styles";

const Categories = () => {

    return (
        <View style={styles.discoverCategoriesWrapper}>
            <Text style={[styles.discoverCategoryText, { color: colors.MAIN_COLORS.ORANGE }]}>All</Text>
            <Text style={styles.discoverCategoryText}>Destinations</Text>
            <Text style={styles.discoverCategoryText}>Cities</Text>
            <Text style={styles.discoverCategoryText}>Experiences</Text>
        </View>
    )
}

export default Categories;