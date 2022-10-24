import React from "react";
import { View, Image, StyleSheet, ScrollView, Text, FlatList, TouchableOpacity, ImageBackground } from "react-native";
import { colors } from "../../../assets/styles";
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
//components
import  Header from "../../../components/general/header";
import Title from "../../../components/general/title/Title";
import Discover from "../../../components/home/discover";
import Categories from "../../../components/home/categories";
import Activities from "../../../components/home/activities";
//data
import activitiesData from '../../../assets/data/activitiesData';
import discoverData from '../../../assets/data/discoverData';
import learnMoreData from '../../../assets/data/learnMoreData';
import discoverCategoriesData from '../../../assets/data/discoverCategoriesData';
import LearnMore from "../../../components/home/learn-more/LearnMore";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.MAIN_COLORS.WHITE
    },
})

const Home = ({ navigation }) => {

    return (
        <View style={styles.container}>
            <ScrollView>
                <Header />     
                <Title title={'Discover'}/>
                <Categories />
                <Discover data={discoverData} navigation={navigation}/>   
                <Title 
                    title={'Activities'} 
                    size={24} 
                    marginTop={10}
                />
                <Activities data={activitiesData}/>     
                <Title 
                    title={'Learn More'} 
                    size={24} 
                    marginTop={10}
                />
                <LearnMore data={learnMoreData} />
            </ScrollView>
        </View>
    )
}

export default Home;