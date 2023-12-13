import { View, TextInput, StyleSheet, TextInputProps } from 'react-native'
import React from 'react'
import {colors} from '../utils/color';
import {size} from '../utils/size';
// import Icon from 'react-native-vector-icons/FontAwesome5';

export interface CustomTextInputIconProps extends TextInputProps {
    icon: string;
    iconSize?: number;
    iconColor?: string;
    styleIcon?:any;
    styleTxtIP?:any;
  }

  const TxtInputIcon: React.FC<CustomTextInputIconProps> = props => {
    return (
        <View style={[styles.inputContainer,props.styleTxtIP]}>
          {/* <Icon name={props.icon} size={props.iconSize} color={props.iconColor} style={[styles.icon,props.styleIcon]} /> */}
          <TextInput
            style={styles.textInput}
            {...props} // Truyền tất cả các props còn lại vào TextInput
          />
        </View>
      );
  };
  export default TxtInputIcon;

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'grey',
        borderRadius: 5,
        paddingHorizontal: 10,
        marginVertical: 10,
      },
      textInput: {
        flex: 1,
        paddingVertical: 8,
        paddingHorizontal: 5,
        fontSize: 16,
      },
      icon: {
        marginRight: 10,
      },
})