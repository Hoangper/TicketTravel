import {
  ActivityIndicator,
  Alert,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import TextCustom from '../../components/TextCustom';
import Input from '../../components/InputCustom';
import OtpInputCustom from '../../components/OtpInputCustom';
import ButtonCustom from '../../components/ButtonCustom';
import TxtInputIcon from '../../components/TextInputIcon';
import {colors} from '../../utils/color';
import auth from '@react-native-firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const ScreenAuth = ({navigation}) => {
  const [nubPhone, setNubPhone] = useState('');
  const [verificationId, setVerificationId] = useState('');
  const [otpCode, setOTPCode] = useState('');
  const [userLogin, setUserLogin] = useState(null);

  const [stateOtp, setStateOtp] = useState(true);
  const [stateLoading, setStateLoading] = useState(true);

  const handleotp = () => {
    setStateOtp(!stateOtp);
    console.log(stateOtp);
  };
  interface bodyLogin {
    user_phoneNumber: string;
    otp: string;
  }

  const login = async ({user_phoneNumber, otp}: bodyLogin) => {
    // if (!otpCode) {
    //   Alert.alert('Thông báo', 'Vui lòng điền OTP');
    // } else if (otpCode.length < 6) {
    //   Alert.alert('Thông báo', 'OTP không hợp lệ .');
    // } else {
      try {
        setStateLoading(false);
        console.log(otp)
        const body: bodyLogin = {user_phoneNumber: user_phoneNumber, otp: otp};
        console.log(user_phoneNumber);
        const login = await axios.post(
          'http://192.168.5.145:3500/api/user/login',
          body,
        );

        console.log(login.data);
        setStateLoading(true);
        // setStateOtp(true);

        console.log('login successful');
      } catch (error) {
        console.log(error);
      }
    // }
  };

  interface bodyOTP {
    user_phoneNumber: String;
  }

  const sendOTP = async ({user_phoneNumber}: bodyOTP) => {
    if (!nubPhone) {
      Alert.alert('Thông báo', 'Vui lòng điền đầy đủ thông tin.');
    } else if (nubPhone.length < 9) {
      Alert.alert('Thông báo', 'Số điện thoại không hợp lệ .');
    } else {
      try {
        setStateLoading(false);
        const body: bodyOTP = {user_phoneNumber: user_phoneNumber};
        await axios.post('http://192.168.5.145:3500/api/user/sendotp', body);
        console.log('send otp success');
        setStateLoading(true);
        setStateOtp(false);
      } catch (error) {
        setStateLoading(false);
        console.log('send otp error: ' + error);
      }
    }
  };
  //===================================================================================================
  return (
    <ScrollView>
      {stateLoading ? (
        <>
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
                  keyboardType="phone-pad"
                  placeholder="nhập số điện thoại"
                  value={nubPhone}
                  onChangeText={setNubPhone}
                />
                <ButtonCustom
                  content="Continue"
                  buttonstyle={styles.btn}
                  onPress={() => sendOTP({user_phoneNumber: nubPhone})}
                />
              </>
            ) : (
              <>
                <OtpInputCustom constainerStyles={styles.Otp} onChangeText={setOTPCode} />
                <ButtonCustom
                  content="login"
                  buttonstyle={styles.btn}
                  onPress={() =>
                    login({user_phoneNumber: nubPhone, otp: otpCode})
                  }
                />
              </>
            )}

            {/* <ButtonCustom content="Continue" buttonstyle={styles.btn} /> */}
            <TouchableOpacity style={{flexDirection: 'row', margin: 15}}>
              <Text>Don't have an accout?</Text>
              <Pressable onPress={() => navigation.navigate('Register')}>
                <Text style={{color: 'blue'}}>Sign Up</Text>
              </Pressable>
            </TouchableOpacity>
            <TextCustom
              content="By Clicking on Continue, you are agree to Privacy Policy and Terms & Conditions"
              textStyle={styles.txtBy}
            />
          </View>
        </>
      ) : (
        <>
          <ActivityIndicator />
        </>
      )}
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
  },
});
