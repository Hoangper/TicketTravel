import { StyleSheet, Text, View ,StyleProp,ViewStyle,TextStyle} from 'react-native'
import React from 'react'
import { colors } from '../utils/color'
import { fonts } from '../assets/fonts'
interface TextProps {
  content: string;
  textStyle?: StyleProp<TextStyle>
}

const TextCustom:React.FC<TextProps> = (props) => {
  return (
    <Text style={StyleSheet.flatten([styles.textfield, props.textStyle])}>
    {props.content}
  </Text>
  )
}

export default TextCustom

const styles = StyleSheet.create({
  textfield: {
    fontSize:20,
    // color:colors.lavender,
    fontFamily:fonts.medium,
  },
  viewfield: {
    width:310,
    height:50,
    justifyContent: 'center',
    alignItems:'center',
    backgroundColor:colors.black,
  },
})