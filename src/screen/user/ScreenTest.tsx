import React, { useState } from 'react';
import { View, Text } from 'react-native';
import RadioCustom from '../../components/RadioCustom';

const ScreenTest = () => {
  const [selectedOption, setSelectedOption] = useState<string>('Option 1');

  const handleSelect = (option: string): void => {
    setSelectedOption(option);
  };

  return (
    <View style={{ padding: 16 }}>
      <RadioCustom label="Option 1" selected={selectedOption === 'Option 1'} onSelect={() => handleSelect('Option 1')} />
      <RadioCustom label="Option 2" selected={selectedOption === 'Option 2'} onSelect={() => handleSelect('Option 2')} />
      <RadioCustom label="Option 3" selected={selectedOption === 'Option 3'} onSelect={() => handleSelect('Option 3')} />
      <Text>Selected option: {selectedOption}</Text>
    </View>
  );
};

export default ScreenTest;

