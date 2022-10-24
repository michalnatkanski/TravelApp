import React from "react";
import { View, FlatList, ImageBackground, Text } from "react-native";
import styles from './LearnMore.styles';

const LearnMore = ({ data }) => {

    const renderLearnMoreItem = ({ item }) => {
        return (
            <ImageBackground 
                source={item.image}
                style={[styles.learnMoreItem, {
                    marginLeft: item.id === 'learnMore-1' ? 20 : 0,
                }]}
                imageStyle={styles.learnMoreItemImage}
            >
                <Text style={styles.learnMoreItemText}>{item.title}</Text>
            </ImageBackground>
        )
    }

    return (
        <View style={styles.learnMoreItemsWrapper}>
            <FlatList
                data={data}
                renderItem={renderLearnMoreItem}
                keyExtractor={item => item.id}
                horizontal
                showsHorizontalScrollIndicator={false}
            />
        </View>
    )
}

export default LearnMore;