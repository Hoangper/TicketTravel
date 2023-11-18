import {StyleSheet, Text, View, StyleProp, TextStyle, ViewStyle} from 'react-native';
import React from 'react';
import OTPTextView from 'react-native-otp-textinput';

interface OTPtxtIP {
  // content: string;
  constainerStyles?: StyleProp<ViewStyle>;
  onChangeText?: any;
  
}

const OtpInputCustom: React.FC<OTPtxtIP> = props => {
  return (
    <View>
      <OTPTextView
        handleTextChange={props.onChangeText}
        inputCount={6}
        keyboardType="numeric"
        containerStyle={StyleSheet.flatten([styles.textInputContainer, props.constainerStyles])}
        textInputStyle={styles.roundedTextInput}
        
      />
    </View>
  );
};

export default OtpInputCustom;

const styles = StyleSheet.create({
  textInputContainer: {
    marginBottom: 20,
  },
  roundedTextInput: {
    borderRadius: 10,
    borderWidth: 1,
  },
});
