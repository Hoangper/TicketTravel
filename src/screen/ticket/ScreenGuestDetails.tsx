import {StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import RadioCustom from '../../components/RadioCustom';
import ButtonCustom from '../../components/ButtonCustom';

const ScreenGuestDetails = () => {
  const [selectedOption, setSelectedOption] = useState<string>('');
  const handleSelect = (option: string): void => {
    setSelectedOption(option);
  };
  return (
    <View style={styles.container}>
      <Text style={[styles.txt,{fontWeight:'500'}]}>Traveller Information</Text>
      <View style={[{borderWidth: 2, backgroundColor:"#FFF"}, styles.borderTxt]}>
        <Text style={[{}, styles.txt]}>Passenger 1</Text>
        <TextInput
          style={[{borderWidth: 2}, styles.borderTxt]}
          placeholder="Full Name"
        />
        <View style={[{flexDirection: 'row'}]}>
          <TextInput
            style={[{width:100}, styles.borderTxt]}
            keyboardType="number-pad"
            placeholder="Age"
          />
          <View style={[{flexDirection: 'row', justifyContent:'center', alignItems:'center', margin:10}]}>
            <RadioCustom
              label="Female"
              selected={selectedOption === 'Female'}
              onSelect={() => handleSelect('Female')}
            />
            <RadioCustom
              label="Male"
              selected={selectedOption === 'Male'}
              onSelect={() => handleSelect('Male')}
            />
            <RadioCustom
              label="Other"
              selected={selectedOption === 'Other'}
              onSelect={() => handleSelect('Other')}
            />
          </View>
        </View>
      </View>
      <View style={[{borderWidth: 2, backgroundColor:"#FFF"}, styles.borderTxt]}>
        <Text style={[styles.txt,{fontWeight:'500'}]}>Contact Information</Text>
        <TextInput 
          style={[{borderWidth: 2}, styles.borderTxt]}
          placeholder="Mobile" />
        <TextInput 
          style={[{borderWidth: 2}, styles.borderTxt]}
          placeholder="Email" />
      </View>
      <ButtonCustom
        content='Proceed to Book'
        buttonstyle={[{backgroundColor:"#FF6260", height:40}]}
      />
    </View>
  );
};

export default ScreenGuestDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DAD9DB',
    padding:10,
  },
  borderTxt:{
    borderWidth:2,
    margin:6,
    borderRadius:8,
    padding:8
  },
  txt:{
    fontSize:20,
    fontWeight:'300',
    color:"black"
  }
});
