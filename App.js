import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { colors } from './src/assets/styles';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

//components
import Home from './src/views/home/home/Home';
import Details from './src/views/home/details/Details';
import Liked from './src/views/home/Liked';
import Profile from './src/views/home/Profile';

Entypo.loadFont();
MaterialCommunityIcons.loadFont();

const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: colors.MAIN_COLORS.WHITE,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
})

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
        name='Home'
        component={Home}
        options={{
          tabBarIcon: ({ color }) => <Entypo name='home' size={32} color={color} />,
        }}
      />
      <Tab.Screen
        name='Liked'
        component={Liked}
        options={{
          tabBarIcon: ({ color }) => <Entypo name='heart' size={32} color={color} />,
        }}
      />
      <Tab.Screen
        name='Profile'
        component={Profile}
        options={{
          tabBarIcon: ({ color }) => <MaterialCommunityIcons name='account' size={32} color={color} />,
        }}
      />
    </Tab.Navigator>
  )
}

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name='TabNavigator' component={TabNavigator} />
        <Stack.Screen name='Details' component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
