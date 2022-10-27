import React from "react";
import { View, Text, FlatList } from "react-native";
import styles from './Categories.styles';
import { colors } from "../../../assets/styles";

const Categories = ({ data }) => {

    const renderCategoriesItem = ({ item }) => {
        return (
            <Text style={[styles.discoverCategoryText, {
                color: item.id === 'discover-categories-1' ? 
                colors.MAIN_COLORS.ORANGE : 
                styles.discoverCategoryText,
                marginLeft: item.id === 'discover-categories-1' ?
                20 : 0 }]
            }>
                {item.text}
            </Text>
        )
    }

    return (
        <View style={styles.discoverCategoriesWrapper}>
            <FlatList
                data={data}
                renderItem={renderCategoriesItem}
                keyExtractor={item => item.id}
                horizontal
                showsHorizontalScrollIndicator={false}
            />
        </View>
    )
}

export default Categories;