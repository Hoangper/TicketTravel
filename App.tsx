import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import ButtonCustom from './src/components/ButtonCustom';
import {colors} from './src/utils/color';
import {TextInput} from 'react-native';
import TextCustom from './src/components/TextCustom';    
import Otp from './src/screen/otp';
import ScreenAuth from './src/screen/user/ScreenAuth';
import OtpInputCustom from './src/components/OtpInputCustom';
import ScreenHome from './src/screen/ticket/ScreenHome';
import ScreenRegister from './src/screen/user/ScreenRegister';
import ScreenTest from './src/screen/user/ScreenTest';
import ScreenStack from './src/screen/user/ScreenStack';
import SrceenNaviga from './src/screen/navigator/SrceenNaviga';
import ScreenTicket from './src/screen/ticket/ScreenTicket';

const App = () => {
  // return <SrceenNaviga/>
  // return <ScreenTest/>;
  return <ScreenTicket/>;

  // return <SrceenNaviga/>;
  return <ScreenStack/>;
  // return <ScreenHome />;

  // return <ScreenAuth />;
  return <ScreenRegister />;
  return <OtpInputCustom />;
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
