import React, { FC, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

// Định nghĩa kiểu cho props
interface RadioProps {
  label: string;
  selected: boolean;
  onSelect: () => void;
}

const RadioCustom: FC<RadioProps> = ({ label, selected, onSelect }) => {
  return (
    <TouchableOpacity onPress={onSelect}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <View
          style={{
            height: 24,
            width: 24,
            borderRadius: 12,
            borderWidth: 2,
            borderColor: 'black',
            alignItems: 'center',
            justifyContent: 'center',
            marginHorizontal: 20,
            backgroundColor: selected ? 'blue' : 'transparent',
          }}
        >
          {selected && (
            <View
              style={{
                height: 12,
                width: 12,
                borderRadius: 6,
                backgroundColor: 'white',
              }}
            />
          )}
        </View>
        <Text>{label}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default RadioCustom;