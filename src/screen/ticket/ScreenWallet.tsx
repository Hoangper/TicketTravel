import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Icon } from '@rneui/themed';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { RootMainParamList } from '../navigation/RootNavigation';
export interface ItemMonProps {
  _id: string;
  title: string;
  price: number;
  time: string;
}
const exampleData: ItemMonProps[] = [
  {
    _id: '1',
    title: 'Bảy Tèo',
    price: 450000,
    time: '18:00 PM - 06:00 AM',
  },
  {
    _id: '2',
    title: 'Hùng Phong',
    price: 410000,
    time: '17:00 PM - 05:00 AM',
  },
];

type Props = NativeStackScreenProps<RootMainParamList>;
const ScreenWallet = (props: Props) => {
  const { navigation } = props;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.txtTitle}>Wallet</Text>
        <View>
          <Text style={styles.txtTo}>500VND</Text>
          <Text style={styles.txtDatetime}>Wallet Balence</Text>
        </View>

        <TouchableOpacity style={{ width: 195, height: 51, backgroundColor: '#F5A522', borderRadius: 50, alignItems: 'center', justifyContent: 'center' }}>
          <Icon name='book' type='font-awesome'/>
          <Text style={{ textAlign: 'center' }}>Add monney</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default ScreenWallet

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DAD9DB',
  },
  header: {
    backgroundColor: '#FF6260',
    width: '100%',
    height: 300,
  },
  iconBack: {
    margin: 16,
  },
  txtTitle: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 24,
    marginTop: 16,

  },
  txtDatetime: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 18,
  },
  txtTo: {
    color: '#fff',
    alignSelf: 'center',
    alignItems: 'center',
    fontSize: 30,
    marginTop: 42,
  },
  changeLocation: {
    marginHorizontal: 170,
    height: 50,
    backgroundColor: '#F5A522',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  horizontalView: {
    flexDirection: 'row',
    marginTop: 10,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
})