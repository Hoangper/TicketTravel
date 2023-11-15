import {StyleSheet, TextInput} from 'react-native';
import React from 'react';
import {colors} from '../utils/color';
import {size} from '../utils/size';

export interface InputProps {
  placeHolder: string;
  keyboardType?: any;
  onChangetext?: (text: string) => void;
  value?: any;
  style?: any;
}

const Input: React.FC<InputProps> = props => {
  return (
    <TextInput
      keyboardType={props.keyboardType}
      placeholder={props.placeHolder}
      onChangeText={props.onChangetext}
      style={[styles.textInput, props.style]}
      value={props.value} 
      // {...props} 
      
    />
  );
};


export default Input

const styles = StyleSheet.create({
  textInput: {
    width: size.width * 0.9,
    height: 48,
    // backgroundColor: colors.white,
    borderRadius: 8,
    // paddingHorizontal: 8,
    // marginTop: 20,
  },
});