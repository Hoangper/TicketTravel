import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image, FlatList } from 'react-native';
import { RootMainParamList } from '../navigation/RootNavigation';
export interface ItemMonProps {
  _id: string;
  title: string;
  price: number;
  time: string;
}
interface ListItem {
  id: string;
  title: string;
  subtitle: string;
  amount: string;
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

const data: ListItem[] = [
  {
    id: '1',
    title: 'Added money to wallet',
    subtitle: '01 Jan 2021 09:06 AM',
    amount: '+ ₹ 100',
  },
  {
    id: '2',
    title: 'Added money to wallet',
    subtitle: '01 Jan 2021 09:06 AM',
    amount: '+ ₹ 100',
  },
];

const renderItem1: React.FC<{ item: ListItem }> = ({ item }) => (
  <View style={{ width: '100%', height: 60, backgroundColor: 'white', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 20, marginVertical: 10 }}>
    <View>
      <Text style={{ color: 'black', fontSize: 16, fontWeight: '400' }}>{item.title}</Text>
      <Text style={{ color: 'black', fontSize: 14, fontWeight: '300' }}>{item.subtitle}</Text>
    </View>
    <View>
      <Text style={{ fontSize: 18, color: '#43a047', fontWeight: '500' }}>{item.amount}</Text>
    </View>
  </View>
);
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
        <View style={{ alignItems: 'center', paddingVertical: 28 }}>
          <TouchableOpacity style={{ width: 195, height: 51, backgroundColor: '#F5A522', borderRadius: 50, alignItems: 'center', justifyContent: 'center', flexDirection: 'row', gap: 20 }}>
            <Image source={require('../../assets/media/img/ic_add_money_white.png')} />
            <Text style={{ fontSize: 18, fontWeight: '400', color: 'white' }}>Add monney</Text>

          </TouchableOpacity>
        </View>

      </View>
      <View style={styles.content}>
        <Text style={{ fontSize: 16, fontWeight: '500', color: 'black' }}>Passbook</Text>
        <View>
          <FlatList
            data={data}
            //@ts-ignore
            renderItem={renderItem1}
            keyExtractor={(item) => item.id}
          />
        </View>
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
  content: {
    padding: 24,
    flex: 1,
    backgroundColor: '#eeeeee'
  }
})