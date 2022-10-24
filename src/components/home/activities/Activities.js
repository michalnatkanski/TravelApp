import React from "react";
import { View, FlatList, Text, Image } from "react-native";
import styles from './Activities.styles';

const Activities = ({ data }) => {

    const renderActivitiesItem = ({ item }) => {
        return (
            <View style={[styles.activityItemWrapper, { marginLeft: item.id === 'activities-1' ? 20 : 0 }]}>
                <Image source={item.image} style={styles.activityItemImage} />
                <Text style={styles.activityItemText}>{item.title}</Text>
            </View>
        )
    }

    return (
        <View style={styles.activitiesItemsWrapper}>
            <FlatList
                data={data}
                renderItem={renderActivitiesItem}
                keyExtractor={item => item.id}
                horizontal
                showsHorizontalScrollIndicator={false}
            />
        </View>
    )
}

export default Activities;