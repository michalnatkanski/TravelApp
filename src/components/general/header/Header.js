import React from "react";
import { View, SafeAreaView, Image } from "react-native";
import Feather from 'react-native-vector-icons/Feather';
import profile from '../../../assets/images/person.png';
import { colors } from '../../../assets/styles';
import styles from './Header.styles';

Feather.loadFont();


const Header = () => {

    return (
        <SafeAreaView>
            <View style={styles.menuWrapper}>
                <Feather name="menu" size={32} color={colors.MAIN_COLORS.BLACK} style={styles.menuIcon} />
                <Image source={profile} style={styles.profileImage} />
            </View>
        </SafeAreaView>
    )
}

export default Header;