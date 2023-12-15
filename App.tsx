import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import ButtonCustom from './src/components/ButtonCustom';
import {colors} from './src/utils/color';
import {TextInput} from 'react-native';
import TextCustom from './src/components/TextCustom';    
import RootNavigation from './src/screen/navigation/RootNavigation';
const App = () => {
  return <RootNavigation />;
};

export default App;
const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.white,
  },
  text: {
    color: colors.white,
  },
});
