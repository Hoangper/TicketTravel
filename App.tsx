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

const App = () => {
  return <ScreenStack/>;
  // return <ScreenHome />;

  // return <ScreenAuth />;
  // return <ScreenTest/>;
  return <ScreenRegister />;
  return <OtpInputCustom />;
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.primary,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10,
      }}>
      {/* <ButtonCustom content='Hoàng Ngu'/>
     <ButtonCustom content='Như Bò' buttonstyle={styles.button}/> */}
      <TextCustom content="A B C" />
      <TextCustom content="A B C" textStyle={styles.text} />
    </View>
  );
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
