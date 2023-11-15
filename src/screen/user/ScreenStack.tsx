import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ScreenAuth from './ScreenAuth';
import ScreenRegister from './ScreenRegister';
const Stack = createNativeStackNavigator();
const ScreenStack = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen name="Login" component={ScreenAuth} />
      <Stack.Screen name="Register" component={ScreenRegister} />
    </Stack.Navigator>
  </NavigationContainer>
  )
}

export default ScreenStack

const styles = StyleSheet.create({})