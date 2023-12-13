import {Image, Pressable, ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import TextCustom from '../../components/TextCustom';
import Input from '../../components/InputCustom';
import OtpInputCustom from '../../components/OtpInputCustom';
import ButtonCustom from '../../components/ButtonCustom';
import TxtInputIcon from '../../components/TextInputIcon';
import {colors} from '../../utils/color';

const ScreenAuth = ({navigation}) => {

  const [stateOtp, setStateOtp] = useState(true);
  const handleotp = ()=>{
    setStateOtp(!stateOtp);
    console.log(stateOtp);
  }
  return (
    <ScrollView>
      <View style={styles.container}>
        {/* <Text>ScreenAuth</Text> */}

        <Image source={require('../../assets/media/img/logo-Auth.png')} />
        <TextCustom content="Welcome" textStyle={styles.txtWecome} />
        <TextCustom
          content="You are just one step away"
          textStyle={styles.txtYou}
        />
        {stateOtp ? (
          <>
            <TxtInputIcon
              styleTxtIP={styles.txtIpSDT}
              icon="phone-alt"
              iconSize={24}
              iconColor="#000"
              placeholder="nhập số điện thoại"
            />
            <ButtonCustom content="Continue" buttonstyle={styles.btn} onPress={handleotp} />
          </>
        ) : (
          <>
            <OtpInputCustom constainerStyles={styles.Otp} />
            <ButtonCustom content="Continue" buttonstyle={styles.btn} onPress={handleotp} />
          </>
        )}

        {/* <ButtonCustom content="Continue" buttonstyle={styles.btn} /> */}
        <TouchableOpacity style={{flexDirection:"row", margin:15}} >
        <Text>Don't have an accout?</Text>
        <Pressable onPress={() => navigation.navigate("Register")}>
          <Text style={{ color: "blue" }}>Sign Up</Text>
        </Pressable>
      </TouchableOpacity>
        <TextCustom
          content="By Clicking on Continue, you are agree to Privacy Policy and Terms & Conditions"
          textStyle={styles.txtBy}
        />
      </View>
    </ScrollView>
  );
};
``;
export default ScreenAuth;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtWecome: {
    textAlign: 'center',
    color: 'black',
    fontSize: 32,
    marginVertical: 10,
    // lineHeight:12,
  },
  txtYou: {
    textAlign: 'center',
    color: '#A0A0A0',
    fontSize: 18,
  },
  txtIpSDT: {
    borderRadius: 4,
    borderWidth: 0.5,
    flexDirection: 'row',
    padding: 5,
    height: 50,
    marginTop: 50,
    marginHorizontal: 10,
  },
  input: {
    margin: 25,
  },
  img_icon: {
    // marginVertical: 25,
    // marginLeft: 10,
    // paddingVertical:25,
    // paddingLeft:10,
  },
  Otp: {
    marginBottom: 100,
    marginHorizontal: 20,
  },
  btn: {
    width: 300,
    height: 50,
    backgroundColor: colors.yellow_dark,
  },
  txtBy: {
    fontSize: 14,
    color: '#FF6260',
    margin: 15,
    textAlign: 'center',
  },
});
