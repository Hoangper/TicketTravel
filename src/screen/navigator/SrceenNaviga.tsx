import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import ScreenStack from '../user/ScreenStack';
import SrceenBottomTab from '../ticket/SrceenBottomTab';

const SrceenNaviga = () => {
  const checkLogin = false;
  return (
    <NavigationContainer>
      {checkLogin ? <ScreenStack /> : <SrceenBottomTab />}
    </NavigationContainer>
  );
};

export default SrceenNaviga;

const styles = StyleSheet.create({});
