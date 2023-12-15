import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ScreenAuth from '../user/ScreenAuth';
import ScreenRegister from '../user/ScreenRegister';
import ScreenStack from '../user/ScreenStack';
import ScreenHome from '../ticket/ScreenHome';
import ScreenTicket from '../ticket/ScreenTicket';
import {Image, Text} from 'react-native';
import ScreenFinding from '../ticket/ScreenFinding';
import ScreenWallet from '../ticket/ScreenWallet';
import ScreenDetailTicket from '../ticket/ScreenDetailTicket';
import ScreenGuestDetails from '../ticket/ScreenGuestDetails';
import ScreenProfile from '../ticket/ScreenProfile';

export type RootAuthParamList = {
  ScreenAuth: undefined;
  ScreenRegister: undefined;
  ScreenStack: undefined;
};

export type RootMainParamList = {
  TabNavigation: undefined;
  ScreenFinding: undefined;
};

const Auth = createNativeStackNavigator<RootAuthParamList>();
const Main = createNativeStackNavigator<RootMainParamList>();
const BottomTab = createBottomTabNavigator();

const AuthNavigation = () => {
  return (
    <Auth.Navigator screenOptions={{headerShown: false}}>
      <Auth.Screen name="ScreenRegister" component={ScreenRegister} />
    </Auth.Navigator>
  );
};

const TabNavigation = () => {
  return (
    <BottomTab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarIcon: ({focused}) => {
          let source;

          if (route.name === 'Home') {
            source = focused
              ? require('../../assets/media/img/ic_home_active.png')
              : require('../../assets/media/img/ic_home.png');
          } else if (route.name === 'Ticket') {
            source = focused
              ? require('../../assets/media/img/ic_ticket_active.png')
              : require('../../assets/media/img/ic_ticket.png');
          } else if ( route.name === 'Wallet'){
            source = focused
            ? require('../../assets/media/img/ic_wallet_active.png')
            : require('../../assets/media/img/ic_wallet.png');
          } else if ( route.name === 'Info'){
            source = focused
            ? require('../../assets/media/img/ic_profile_active.png')
            : require('../../assets/media/img/ic_profile.png');
          }
          // You can return any component that you like here!
          return <Image source={source} />;
        },
        tabBarLabel: ({focused}) => {
          const color = focused ? '#FF6260' : '#000000';
          return (
            <Text
              style={{
                color,
                fontSize: 14,
                fontWeight: '500',
                textAlign: 'center',
                marginBottom: 3,
              }}>
              {route.name}
            </Text>
          );
        },
      })}>
      <BottomTab.Screen name="Home" component={ScreenHome} />
      <BottomTab.Screen name="Ticket" component={ScreenTicket} />
      <BottomTab.Screen name="Wallet" component={ScreenWallet} />
      <BottomTab.Screen name="Info" component={ScreenProfile} />

      

    </BottomTab.Navigator>
  );
};

const MainNavigation = () => {
  return (
    <Main.Navigator screenOptions={{headerShown: false}}>
      <Main.Screen name="TabNavigation" component={TabNavigation} />
      <Main.Screen name="ScreenFinding" component={ScreenFinding} />
    </Main.Navigator>
  );
};

const RootNavigation = () => {
  const isLogin = true;
  return (
    <NavigationContainer>
      {isLogin ? <MainNavigation /> : <AuthNavigation />}
    </NavigationContainer>
  );
};

export default RootNavigation;
