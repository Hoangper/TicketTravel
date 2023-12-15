import {
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import TextCustom from '../../components/TextCustom';
import FindBusItem from '../../components/FindBusItem';

export interface IFindBusItem {
  _id: string;
  busName: string;
  price: number;
  time: string;
  busType: string;
  seatLeft: number;
}

const exampleData: IFindBusItem[] = [
  {
    _id: '1',
    busName: 'Bảy Tèo',
    price: 450000,
    time: '18:00 PM - 06:00 AM',
    busType: 'Limousine',
    seatLeft: 13,
  },
  {
    _id: '2',
    busName: 'Hùng Phong',
    price: 410000,
    time: '17:00 PM - 05:00 AM',
    busType: 'Limousine',
    seatLeft: 2,
  },
  {
    _id: '3',
    busName: 'Hải Luân',
    price: 440000,
    time: '17:30 PM - 05:30 AM',
    busType: 'Limousine',
    seatLeft: 17,
  },
  {
    _id: '4',
    busName: 'Cuộc Huê',
    price: 420000,
    time: '18:00 PM - 06:00 AM',
    busType: 'Limousine',
    seatLeft: 1,
  },
  {
    _id: '5',
    busName: 'Xuân Tươi',
    price: 460000,
    time: '17:00 PM - 05:00 AM',
    busType: 'Limousine',
    seatLeft: 11,
  },
  {
    _id: '6',
    busName: 'Bảy Tèo',
    price: 500000,
    time: '18:00 PM - 06:00 AM',
    busType: 'Limousine',
    seatLeft: 13,
  },
  {
    _id: '7',
    busName: 'Phương Trang',
    price: 400000,
    time: '18:00 PM - 06:00 AM',
    busType: 'Limousine',
    seatLeft: 4,
  },
  {
    _id: '8',
    busName: 'Thành Bưởi',
    price: 420000,
    time: '17:00 PM - 05:00 AM',
    busType: 'Limousine',
    seatLeft: 8,
  },
];
const ScreenFinding = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.iconBack}>
          <Image source={require('../../assets/img/arrowback.png')} />
        </TouchableOpacity>
        <TextCustom textStyle={styles.txtTitle} content="Select your bus!" />
        <View style={styles.horizontalView}>
          <TextCustom textStyle={styles.txtFrom} content="From" />
          <TouchableOpacity>
            <Image
              style={[{alignSelf: 'center'}]}
              source={require('../../assets/img/arrowswaphorizontal.png')}
            />
          </TouchableOpacity>
          <TextCustom textStyle={styles.txtTo} content="To" />
        </View>
        <TextCustom
          textStyle={styles.txtDatetime}
          content="12th - Jan - 2023 | Monday"
        />
        <Image
          style={[{alignSelf: 'center', marginTop: 12}]}
          source={require('../../assets/img/bus-1.png')}
        />
      </View>
      <View style={styles.findBusView}>
        <FlatList
          data={exampleData}
          keyExtractor={item => item._id}
          renderItem={({item}) => <FindBusItem data={item} />}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

export default ScreenFinding;

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
    fontSize: 18,
  },
  txtDatetime: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 18,
    marginTop: 10,
  },
  txtFrom: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 18,
    width: 70,
  },
  txtTo: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 18,
    width: 70,
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
  findBusView: {
    width: '90%',
    height: '75%',
    top: '25%',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 10,
    position: 'absolute',
    borderRadius: 6,
    overflow: 'hidden',
    paddingBottom: 10,
  },
});
