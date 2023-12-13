import {Alert, Button, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import Input from '../components/InputCustom';
import ButtonCustom from '../components/ButtonCustom';
import auth from '@react-native-firebase/auth';
import OTPTextView from 'react-native-otp-textinput';

const otp = () => {
  const [sdt, setSdt] = React.useState<string>('');
  const [email, setEmail] = React.useState<string>('');
  const [password, setPassword] = React.useState<string>('');
  const [verificationCode, setVerificationCode] = useState('');
  const [confirmation, setConfirmation] = useState<any>(null);

  const sendOtp = async () => {
    try {
      const confirmation = await auth().signInWithPhoneNumber('+84' + sdt);
      setConfirmation(confirmation);
    } catch (error) {
      console.error(error);
    }
  };
  const verifyOtp = async () => {
    try {
      await confirmation.confirm(verificationCode);
      Alert.alert('Xác nhận thành công!');
    } catch (error) {
      console.error(error);
    }
  };
  const register = async () => {
    try {
      const userCredential = await auth().createUserWithEmailAndPassword(
        email,
        password,
      );
      console.log('Đăng ký thành công', userCredential.user);
    } catch (error) {
      console.error(error);
    }
  };
  const hh = () => {
    // register();
    verifyOtp();
  };
  return(
    <View>
        <OTPTextView
          handleTextChange={setSdt}
          inputCount={6}
          keyboardType="numeric"
        />
    </View>
  )
  return (
    <View>
      {/* <Button title="Gửi OTP" onPress={sendOtp} /> */}

      {confirmation ? (
        <>
          <TextInput
            placeholder="Nhập OTP"
            value={verificationCode}
            onChangeText={setVerificationCode}
          />
          <Button title="Xác nhận OTP" onPress={verifyOtp} />
        </>
      ) : (
        <>
          <TextInput
            placeholder="Nhập số điện thoại"
            value={sdt}
            onChangeText={setSdt}
          />
          <TextInput
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
          />
          <TextInput
            placeholder="Mật khẩu"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
          <Button title="Đăng ký" onPress={sendOtp} />
        </>
      )}
    </View>
  );
};

export default otp;

const styles = StyleSheet.create({});
