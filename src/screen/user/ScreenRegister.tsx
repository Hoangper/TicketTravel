import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import TextCustom from '../../components/TextCustom';
import TxtInputIcon from '../../components/TextInputIcon';
import ButtonCustom from '../../components/ButtonCustom';
import OtpInputCustom from '../../components/OtpInputCustom';
import {colors} from '../../utils/color';
import RadioCustom from '../../components/RadioCustom';
import {axiosInstance} from "../../axios/axiosInstance"

const ScreenRegister = ({navigation}) => {
    const [nubPhone, setNubPhone] = useState(""); 
    const [name, setName] = useState(""); 
    const [email, setEmail] = useState(""); 
    const [age, setAge] = useState(""); 
  const [selectedOption, setSelectedOption] = useState<string>('');

  const handleSelect = (option: string): void => {
    setSelectedOption(option);
  };
  const [stateOtp, setStateOtp] = useState(true);
  const goBack = () => {
    navigation.goBack();
  };
  const handleotp = () => {
    setStateOtp(!stateOtp);
    console.log(stateOtp);
    // goBack();
  };

  const RegisterUser=()=>{
    try {
        // const register = 
    } catch (error) {
        
    }
  }

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
            />
            <TxtInputIcon
              styleTxtIP={styles.txtIpSDT}
              icon="phone-alt"
              iconSize={24}
              iconColor="#000"
              placeholder="nhập email"
              keyboardType="email-address"
            />
            <TxtInputIcon
              styleTxtIP={styles.txtIpSDT}
              icon="phone-alt"
              iconSize={24}
              iconColor="#000"
              placeholder="nhập tuổi"
              keyboardType="number-pad"
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
              onPress={handleotp}
            />
          </>
        ) : (
          <>
            <OtpInputCustom constainerStyles={styles.Otp} />
            <ButtonCustom
              content="Continue"
              buttonstyle={styles.btn}
              onPress={handleotp}
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
