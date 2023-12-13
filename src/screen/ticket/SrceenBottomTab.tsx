import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import ScreenHome from './ScreenHome';
import SrceenWallet from './SrceenWallet';

const Tab = createMaterialBottomTabNavigator();

const SrceenBottomTab = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={ScreenHome} />
      <Tab.Screen name="Wallet" component={SrceenWallet} />
    </Tab.Navigator>
  );
};

export default SrceenBottomTab;

const styles = StyleSheet.create({});
