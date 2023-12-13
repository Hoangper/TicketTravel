import {
  Alert,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
} from 'react-native';
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
  const [stateLoading, setStateLoading] = useState(true);

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
    if (nubPhone.length < 9) {
      Alert.alert('Thông báo', 'Số điện thoại không hợp lệ .');
      return false;
    }
    return true;
    // sendOTP();
    // handleotp();
  };

  interface bodyRgister {
    user_name: string;
    user_email: string;
    user_phoneNumber: string;
    user_age: string;
    user_sex: string;
    otp: string;
  }

  const RegisterUser = async ({
    user_name,
    user_email,
    user_sex,
    user_phoneNumber,
    user_age,
    otp,
  }: bodyRgister) => {
    console.log(user_phoneNumber);

    if (!otpCode) {
      Alert.alert('Thông báo', 'Vui lòng điền OTP');
    } else if (otpCode.length < 6) {
      Alert.alert('Thông báo', 'OTP không hợp lệ .');
    } else {
      try {
        setStateLoading(false);

        const body: bodyRgister = {
          user_age: user_age,
          user_name: user_name,
          user_email: user_email,
          user_sex: user_sex,
          user_phoneNumber: user_phoneNumber,
          otp: otp,
        };
        console.log(body);
        await axios.post('http://192.168.5.145:3500/api/user/register', body);
        console.log('register success');
        setStateLoading(true);
        setStateOtp(true)

      } catch (error) {
        setStateLoading(true);

        console.log('error register ' + error);
      }
    }
  };

  const [verificationId, setVerificationId] = useState('');
  const [otpCode, setOTPCode] = useState('');

  interface bodyOTP {
    user_phoneNumber: String;
  }

  const sendOTP = async ({user_phoneNumber}: bodyOTP) => {
    if (!name || !email || !age || !nubPhone || !selectedOption) {
      Alert.alert('Thông báo', 'Vui lòng điền đầy đủ thông tin.');
    } else if (nubPhone.length < 9) {
      Alert.alert('Thông báo', 'Số điện thoại không hợp lệ .');
    } else {
      try {
        setStateLoading(true);
        const body: bodyOTP = {user_phoneNumber: user_phoneNumber};
        await axios.post(
          'http://192.168.5.145:3500/api/user/sendotpRegister',
          body,
        );
        console.log('send otp success');
        setStateLoading(true);
        setStateOtp(false);
      } catch (error) {
        setStateLoading(false);
        console.log('send otp error: ' + error);
      }
    }
  };

  //================================================================================================\\
  return (
    <ScrollView>
      {stateLoading ? (
        <>
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
                  content="Continue"
                  buttonstyle={styles.btn}
                  onPress={
                    () =>
                      sendOTP({
                        user_phoneNumber: nubPhone,
                      })
                    // validateRegistration()
                  }
                  // onPress={sendOTP}
                />
              </>
            ) : (
              <>
                <OtpInputCustom
                  onChangeText={setOTPCode}
                  constainerStyles={styles.Otp}
                />
                <ButtonCustom
                  content="Register"
                  buttonstyle={styles.btn}
                  onPress={() =>
                    //  verifyOTP()
                    RegisterUser({
                      user_age: age,
                      user_email: email,
                      user_name: name,
                      user_phoneNumber: nubPhone,
                      user_sex: selectedOption,
                      otp: otpCode,
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
        </>
      ) : (
        <>
          <ActivityIndicator />
        </>
      )}
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
