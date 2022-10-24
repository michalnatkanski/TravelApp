import React from "react";
import { View, FlatList, TouchableOpacity, ImageBackground, Text } from "react-native";
import styles from './Discover.styles';
import { colors } from "../../../assets/styles";
import Entypo from 'react-native-vector-icons/Entypo';

Entypo.loadFont();

const Discover = ({ data, navigation }) => {

    const renderDiscoverItem = ({ item }) => {
        return (
            <TouchableOpacity onPress={() => navigation.navigate('Details', {
                item: item,
            })}>
                <ImageBackground
                    source={item.image}
                    style={[styles.discoverItem, { marginLeft: item.id === 'discover-1' ? 20 : 0 }]}
                    imageStyle={styles.discoverItemImage}
                >
                    <Text style={styles.discoverItemTitle}>{item.title}</Text>
                    <View style={styles.discoverItemLocationWrapper}>
                        <Entypo name="location" size={18} color={colors.MAIN_COLORS.WHITE} />
                        <Text style={styles.discoverItemLocationText}>{item.location}</Text>
                    </View>
                </ImageBackground>
            </TouchableOpacity>
        )
    }

    return (
        <View style={styles.discoverItemsWrapper}>
            <FlatList
                data={data}
                renderItem={renderDiscoverItem}
                keyExtractor={item => item.id}
                horizontal
                showsHorizontalScrollIndicator={false}
            />
        </View>
    )
}

export default Discover;