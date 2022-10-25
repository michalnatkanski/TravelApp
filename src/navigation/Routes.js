
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
//components
import HomeStack from './home-stack/HomeStack';

export default function Navigator() {

  return (
      <NavigationContainer>
        <HomeStack/>
      </NavigationContainer>
  );
};