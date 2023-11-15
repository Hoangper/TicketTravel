import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  StyleProp,
  ViewStyle,
  TextStyle,
} from 'react-native';
import React from 'react';
import {colors} from '../utils/color';
import {fonts} from '../assets/fonts';
interface ButtonProps {
  content: string;
  buttonstyle?: StyleProp<ViewStyle>;
  textstyle?: StyleProp<TextStyle>;
  onPress?: () => void;
}

const ButtonCustom: React.FC<ButtonProps> = props => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={StyleSheet.flatten([styles.button, props.buttonstyle])}>
      <Text style={StyleSheet.flatten([styles.buttontext, props.textstyle])}>
        {props.content}
      </Text>
    </TouchableOpacity>
  );
};

export default ButtonCustom;

const styles = StyleSheet.create({
  button: {
    // backgroundColor: colors.yellow_dark,
    // width: 300,
    // height: 50,
    borderRadius: 20,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttontext: {
    fontFamily: fonts.medium,
    fontSize: 20,
    color: colors.white,
  },
});
