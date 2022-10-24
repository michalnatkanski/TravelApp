import React from "react";
import { View, Text } from "react-native";
import styles from './Title.styles';

const Title = ({ title, size, marginTop }) => {

    return (
        <View style={[styles.titleWrapper, {
            marginTop: marginTop ? marginTop : 20,
        }]}>
            <Text style={[styles.title, {
                fontSize: size ? size : 32
            }]}>{title}</Text>
        </View>
    )
}

export default Title;