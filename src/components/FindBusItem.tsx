import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {IFindBusItem} from '../screen/ticket/ScreenFinding';

interface Props {
  data: IFindBusItem;
}

const FindBusItem = (props: Props) => {
  const {data} = props;
  return (
    <View style={styles.container}>
      <View style={styles.horizontalView}>
        <Text style={styles.txtBusName}>{data.busName}</Text>
        <Text style={styles.txtPrice}>{data.price}₫</Text>
      </View>
      <View style={styles.horizontalView}>
        <Text style={styles.txtTime}>{data.time}</Text>
        <Text style={styles.txtBusType}>{data.busType}</Text>
      </View>
      <View style={[styles.horizontalView, {marginTop: 8}]}>
        <Text
          style={data.seatLeft >= 10 ? styles.moreSeatLeft : styles.fewSeatLeft}>
          {data.seatLeft} seat left
        </Text>
        <View style={styles.iconView}>
          <Image source={require('../assets/media/img/gps.png')} />
          <Image source={require('../assets/media/img/batterycharging.png')} />
          <Image source={require('../assets/media/img/ticket.png')} />
        </View>
      </View>
    </View>
  );
};

export default FindBusItem;

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width * 0.9,
    height: 100,
    backgroundColor: '#fff',
    borderRadius: 8,
    elevation: 4,
    marginVertical: 6,
    alignSelf: 'center',
    paddingVertical: 6,
    paddingHorizontal: 12,
    gap: 5,
  },
  txtBusName: {
    fontSize: 18,
    fontWeight: '500',
    color: '#585656',
  },
  txtBusType: {
    fontSize: 16,
    fontWeight: '400',
    color: '#000000',
  },
  txtTime: {
    fontSize: 16,
    fontWeight: '400',
    color: '#000000',
  },
  txtPrice: {
    fontSize: 18,
    fontWeight: '600',
    color: '#F5A522',
  },
  horizontalView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  moreSeatLeft: {
    fontSize: 15,
    fontWeight: '400',
    color: '#43A047',
  },
  fewSeatLeft: {
    fontSize: 15,
    fontWeight: '400',
    color: '#FF6260',
  },
  iconView: {
    flexDirection: 'row',
    gap: 6,
  },
});
