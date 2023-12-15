import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import TextCustom from '../../components/TextCustom';

const Seat = (seatProps: any) => {
  const {seatNumber, status, onPress} = seatProps;
  let seatStyle;
  switch (status) {
    case 'booked':
      seatStyle = styles.seatBooked;
      break;
    case 'available':
      seatStyle = styles.seatAvailable;
      break;
    case 'selected':
      seatStyle = styles.seatSelected;
      break;
    default:
      seatStyle = styles.seatAvailable;
  }

  return (
    <TouchableOpacity onPress={onPress} disabled={status == 'booked'}>
      <View
        style={[
          styles.seatAvailable,
          seatStyle,
          (seatNumber + 1) % 4 == 0 ? {marginStart: 50} : {},
        ]}>
        <Text style={styles.seatNumber}>{seatNumber}</Text>
      </View>
    </TouchableOpacity>
  );
};

const ScreenSelectSeat = () => {
  const typeVehicle = 'Limousine';

  const totalSeats = typeVehicle === 'Limousine' ? 16 : 24;
  const seatsPerRow = 4;
  const totalRows = totalSeats / seatsPerRow;
  const [bookedSeats, setBookedSeats] = React.useState<number[]>([7, 3, 2, 9]);
  const [selectedSeats, setSelectedSeats] = React.useState<number[]>([]);

  const handleSeatPress = (seatNumber: number) => {
    // Xử lý khi ghế được chọn hoặc bỏ chọn
    const isSelected = selectedSeats.includes(seatNumber);

    if (isSelected) {
      setSelectedSeats(selectedSeats.filter(seat => seat !== seatNumber));
    } else {
      setSelectedSeats([...selectedSeats, seatNumber]);
    }
  };

  const renderSeats = () => {
    const seats = [];

    for (let row = 1; row <= totalRows; row++) {
      for (let seat = 1; seat <= seatsPerRow; seat++) {
        const seatNumber = (row - 1) * seatsPerRow + seat;
        let status = selectedSeats.includes(seatNumber)
          ? 'selected'
          : 'available';

        if (bookedSeats.includes(seatNumber)) {
          status = 'booked';
        }

        seats.push(
          <Seat
            key={seatNumber}
            seatNumber={seatNumber}
            status={status}
            onPress={() => handleSeatPress(seatNumber)}
          />,
        );
      }
    }

    return seats;
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.topBar}>
          <TouchableOpacity>
            <Image source={require('../../assets/media/img/arrowback.png')} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.txtTitle}>Next</Text>
          </TouchableOpacity>
        </View>

        <TextCustom textStyle={styles.txtTitle} content="Choose your seat!" />
        <View style={styles.horizontalView}>
          <TextCustom textStyle={styles.txtFrom} content="From" />
          <TouchableOpacity>
            <Image
              style={[{alignSelf: 'center'}]}
              source={require('../../assets/media/img/arrowswaphorizontal.png')}
            />
          </TouchableOpacity>
          <TextCustom textStyle={styles.txtTo} content="To" />
        </View>
        <TextCustom
          textStyle={styles.txtDatetime}
          content="12th - Jan - 2023 | Monday"
        />
        <View style={styles.busInfoView}>
          <Text style={styles.txtBusName}>Phương Trang</Text>
          <Text style={styles.txtBusType}>Limousine</Text>
      
          <View style={styles.horizontalBusInfo}>
            <Text style={styles.txtTime}>18:00 PM - 06:00 AM</Text>
            <Text style={styles.txtPrice}>450000₫</Text>
          </View>
        </View>
      </View>

      <View style={styles.findSeatView}>
        <View style={styles.guildView}>
          <View style={styles.horizontal}>
            <View style={[styles.exampleSeat, {backgroundColor: '#EF9A9A'}]} />
            <Text style={styles.seatTag}>Booked</Text>
          </View>
          <View style={styles.horizontal}>
            <View style={[styles.exampleSeat, {backgroundColor: '#DAD9DB'}]} />
            <Text style={styles.seatTag}>Available</Text>
          </View>
          <View style={styles.horizontal}>
            <View style={[styles.exampleSeat, {backgroundColor: '#F5A522'}]} />
            <Text style={styles.seatTag}>Your Seat</Text>
          </View>
        </View>
        <Image
          style={styles.steering}
          source={require('../../assets/media/img/steering-wheel.png')}
        />

        <View style={styles.seatView}>{renderSeats()}</View>
      </View>
    </View>
  );
};

export default ScreenSelectSeat;

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
  topBar: {
    margin: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
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
  busInfoView: {
    width: '90%',
    height: 100,
    backgroundColor: '#fff',
    alignSelf: 'center',
    marginTop: 16,
    borderRadius: 6,
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  findSeatView: {
    width: '90%',
    height: '62%',
    top: '35%',
    alignSelf: 'center',
    marginTop: 10,
    position: 'absolute',
    borderRadius: 6,
    overflow: 'hidden',
    paddingBottom: 10,
    backgroundColor: '#fff',
  },
  guildView: {
    width: '88%',
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginTop: 10,
  },
  horizontal: {
    flexDirection: 'row',
    gap: 5,
  },
  exampleSeat: {
    width: 20,
    height: 20,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  seatTag: {
    color: '#A0A0A0',
    fontSize: 14,
    fontWeight: '500',
  },
  seatView: {
    width: '100%',
    height: '100%',
    marginTop: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  seatAvailable: {
    width: 50,
    height: 50,
    borderRadius: 8,
    margin: 6,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DAD9DB',
  },
  seatBooked: {
    backgroundColor: '#EF9A9A',
  },
  seatSelected: {
    backgroundColor: '#F5A522',
  },
  seatNumber: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  steering: {
    marginTop: 16,
    marginStart: 45,
  },
  txtBusName: {
    fontSize: 26,
    fontWeight: '500',
    color: 'red',
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
  horizontalBusInfo: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
});
