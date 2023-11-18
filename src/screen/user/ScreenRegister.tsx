import {Alert, Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import TextCustom from '../../components/TextCustom';
import TxtInputIcon from '../../components/TextInputIcon';
import ButtonCustom from '../../components/ButtonCustom';
import OtpInputCustom from '../../components/OtpInputCustom';
import {colors} from '../../utils/color';
import RadioCustom from '../../components/RadioCustom';
import axios from 'axios';
//import {axiosInstance} from '../../axios/axiosInstance';
import auth from '@react-native-firebase/auth';
import otp from '../otp';

const ScreenRegister = ({navigation}) => {
  const [nubPhone, setNubPhone] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const [selectedOption, setSelectedOption] = useState<string>('');
  const [checkOTP, setCheckOTP] = useState<Boolean>();

  const [verificationCode, setVerificationCode] = useState('');
  const [stateOtp, setStateOtp] = useState(true);

  const handleSelect = (option: string): void => {
    setSelectedOption(option);
  };
  const goBack = () => {
    navigation.goBack();
  };
  const handleotp = () => {
    setStateOtp(false);
    console.log(stateOtp);
  };
  const validateRegistration = () => {
    if (!name || !email || !age || !nubPhone || !selectedOption) {
      Alert.alert('Thông báo', 'Vui lòng điền đầy đủ thông tin.');
      return false;
    }
    if (nubPhone.length < 10) {
      Alert.alert('Thông báo', 'Số điện thoại không hợp lệ .');
      return false;
    }
    sendOTP();
    handleotp();
  };

  interface bodyRgister {
    user_name: string;
    user_email: string;
    user_numberPhone: string;
    user_age: string;
    user_sex: string;
  }

  const RegisterUser = async ({
    user_name,
    user_email,
    user_sex,
    user_numberPhone,
    user_age,
  }: bodyRgister) => {
    if (checkOTP) {
      try {
        const body: bodyRgister = {
          user_age: user_age,
          user_name: user_name,
          user_email: user_email,
          user_sex: user_sex,
          user_numberPhone: user_numberPhone,
        };
        console.log(body);
        await axios.post('http://172.16.126.121:3500/user/api/register', body);
        //await axiosInstance.post('user/register', body);
        console.log('register success');
      } catch (error) {
        console.log('error register ' + error);
      }
    }
  };

  const [verificationId, setVerificationId] = useState('');
  const [otpCode, setOTPCode] = useState('');

  const sendOTP = async () => {
    try {
      const confirmation = await auth().signInWithPhoneNumber('+84' + nubPhone);
      setVerificationId(confirmation.verificationId);
      Alert.alert('OTP Sent!', 'Please check your messages for the OTP.');
      handleotp();
    } catch (error) {
      Alert.alert('Error', 'Failed to send OTP. Please try again.');
      console.log(error);
    }
  };

  const verifyOTP = async () => {
    try {
      const credential = auth.PhoneAuthProvider.credential(
        verificationId,
        otpCode,
      );
      await auth().signInWithCredential(credential);
      Alert.alert('OTP Verified!', 'You have been successfully verified.');
      console.log('verification successful');
      setCheckOTP(true);
    } catch (error) {
      console.log(error);

      Alert.alert('Error', 'Failed to verify OTP. Please try again.');
      setCheckOTP(false);
      // console.log(error);
    }
  };

  //================================================================================================\\
  return (
    <ScrollView>
      <View style={styles.container}>
        <Image source={require('../../assets/media/img/logo-Auth.png')} />
        <TextCustom content="Welcome" textStyle={styles.txtWecome} />
        <TextCustom content="Register" textStyle={styles.txtYou} />
        {stateOtp ? (
          <>
            <TxtInputIcon
              styleTxtIP={styles.txtIpSDT}
              icon="phone-alt"
              iconSize={24}
              iconColor="#000"
              placeholder="nhập số điện thoại"
              keyboardType="phone-pad"
              onChangeText={setNubPhone}
              value={nubPhone}
            />
            <TxtInputIcon
              styleTxtIP={styles.txtIpSDT}
              icon="phone-alt"
              iconSize={24}
              iconColor="#000"
              placeholder="nhập tên"
              value={name}
              onChangeText={setName}
            />
            <TxtInputIcon
              styleTxtIP={styles.txtIpSDT}
              icon="phone-alt"
              iconSize={24}
              iconColor="#000"
              placeholder="nhập email"
              keyboardType="email-address"
              onChangeText={setEmail}
              value={email}
            />
            <TxtInputIcon
              styleTxtIP={styles.txtIpSDT}
              icon="phone-alt"
              iconSize={24}
              iconColor="#000"
              placeholder="nhập tuổi"
              keyboardType="number-pad"
              onChangeText={setAge}
              value={age}
            />

            <View style={styles.radio}>
              <RadioCustom
                label="Other"
                selected={selectedOption === 'Other'}
                onSelect={() => handleSelect('Other')}
              />
              <RadioCustom
                label="male"
                selected={selectedOption === 'male'}
                onSelect={() => handleSelect('male')}
              />
              <RadioCustom
                label="Female"
                selected={selectedOption === 'Female'}
                onSelect={() => handleSelect('Female')}
              />
            </View>
            <ButtonCustom
              content="Register"
              buttonstyle={styles.btn}
              onPress={validateRegistration}
            />
          </>
        ) : (
          <>
            <OtpInputCustom
              onChangeText={setOTPCode}
              constainerStyles={styles.Otp}
            />
            <ButtonCustom
              content="Continue"
              buttonstyle={styles.btn}
              onPress={() =>
                RegisterUser({
                  user_age: age,
                  user_email: email,
                  user_name: name,
                  user_numberPhone: nubPhone,
                  user_sex: selectedOption,
                })
              }
            />
          </>
        )}

        {/* <ButtonCustom content="Continue" buttonstyle={styles.btn} /> */}
        <TextCustom
          content="By Clicking on Continue, you are agree to Privacy Policy and Terms & Conditions"
          textStyle={styles.txtBy}
        />
      </View>
    </ScrollView>
  );
};

export default ScreenRegister;

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
    // padding: 5,
    height: 50,
    marginHorizontal: 10,
  },
  input: {
    margin: 25,
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
  radio: {
    flexDirection: 'row',
    margin: 15,
  },
});
