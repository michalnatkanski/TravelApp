
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import styles from './HomeStack.styles';
import { colors } from '../../assets/styles';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { SCREENS } from '../constants';
//components
import Home from '../../views/home/home';
import Liked from '../../views/home/liked';
import Profile from '../../views/home/Profile';
import Details from '../../views/home/details';

Entypo.loadFont();
MaterialCommunityIcons.loadFont();

const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: styles.tabBar,
        tabBarActiveTintColor: colors.MAIN_COLORS.ORANGE,
        tabBarInactiveTintColor: colors.MAIN_COLORS.GRAY,
        headerShown: false,
        tabBarShowLabel: false,
      }}
    >
      <Tab.Screen
        name={SCREENS.HOME.TAB_NAVIGATOR.HOME.ID}
        component={Home}
        options={{
          tabBarIcon: ({ color }) => <Entypo name='home' size={32} color={color} />,
        }}
      />
      <Tab.Screen
        name={SCREENS.HOME.TAB_NAVIGATOR.LIKED.ID}
        component={Liked}
        options={{
          tabBarIcon: ({ color }) => <Entypo name='heart' size={32} color={color} />,
        }}
      />
      <Tab.Screen
        name={SCREENS.HOME.TAB_NAVIGATOR.PROFILE.ID}
        component={Profile}
        options={{
          tabBarIcon: ({ color }) => <MaterialCommunityIcons name='account' size={32} color={color} />,
        }}
      />
    </Tab.Navigator>
  )
}

export default function HomeStack() {

  return (
    <Stack.Navigator>
      <Stack.Screen name={SCREENS.HOME.TAB_NAVIGATOR.ID} component={TabNavigator} options={{
        headerShown: false,
      }} />
      <Stack.Screen name={SCREENS.HOME.DETAILS.ID} component={Details} options={{
        headerShown: false,
      }} />
    </Stack.Navigator>
  );
};